import { wedding } from "@/lib/wedding";

export type CoupleMail = {
  subject: string;
  fields: Record<string, string>;
};

export type Delivery =
  | { status: "sent" }
  | { status: "mailto"; href: string };

export function mailtoHref(mail: CoupleMail) {
  const body = Object.entries(mail.fields)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  return `mailto:${wedding.emails.join(",")}?subject=${encodeURIComponent(mail.subject)}&body=${encodeURIComponent(body)}`;
}

async function postToInbox(email: string, mail: CoupleMail): Promise<boolean> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...mail.fields,
          _subject: mail.subject,
          _template: "table",
          _captcha: "false",
        }),
        signal: controller.signal,
      },
    );
    const text = await res.text();
    try {
      const json = JSON.parse(text) as { success?: boolean | string };
      return json.success === true || json.success === "true";
    } catch {
      return false;
    }
  } catch {
    return false;
  } finally {
    window.clearTimeout(timer);
  }
}

export async function deliverToCouple(mail: CoupleMail): Promise<Delivery> {
  const results = await Promise.allSettled(
    wedding.emails.map((email) => postToInbox(email, mail)),
  );
  const delivered = results.some(
    (result) => result.status === "fulfilled" && result.value,
  );
  if (delivered) return { status: "sent" };
  return { status: "mailto", href: mailtoHref(mail) };
}
