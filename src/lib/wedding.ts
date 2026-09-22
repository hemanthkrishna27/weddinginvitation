export const wedding = {
  groomsName: "K. Hemanth",
  bridesName: "M. Mahima",
  groomsGiven: "Hemanth",
  bridesGiven: "Mahima",
  monogram: "H & M",
  dateIso: "2026-11-22",
  dateStartIso: "2026-11-22T00:00:00+05:30",
  weekday: "Sunday",
  dateShort: "22.11.2026",
  dateDisplay: "Sunday, 22.11.2026",
  dateFormal: "22 / 11 / 2026",
  tamilBlessing: "உங்கள் வருகையே எங்களது பாக்கியம்",
  emails: ["hemanthk2798@gmail.com", "mahimamahesh678@gmail.com"] as const,
  venue: {
    name: "Sree Chenbagavalli Auditorium",
    locality: "Payanam, Kuzhithurai",
    region: "Kanyakumari District, Tamil Nadu",
    lat: 8.309862,
    lng: 77.2432308,
    mapsUrl:
      "https://www.google.com/maps/place/Sree+Chenbagavalli+Auditorium/@8.309862,77.2432308,17z",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=8.309862,77.2432308",
    embedUrl:
      "https://maps.google.com/maps?q=8.309862,77.2432308&z=17&hl=en&output=embed",
  },
} as const;

export function googleCalendarUrl() {
  const text = encodeURIComponent(
    `Wedding of ${wedding.groomsName} & ${wedding.bridesName}`,
  );
  const details = encodeURIComponent(
    `You are invited to the wedding of ${wedding.groomsName} and ${wedding.bridesName} at ${wedding.venue.name}, ${wedding.venue.locality}.`,
  );
  const location = encodeURIComponent(
    `${wedding.venue.name}, ${wedding.venue.locality}, ${wedding.venue.region}`,
  );
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=20261122/20261123&details=${details}&location=${location}`;
}

export function icsContent() {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Hemanth Mahima//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "DTSTART;VALUE=DATE:20261122",
    "DTEND;VALUE=DATE:20261123",
    `SUMMARY:Wedding of ${wedding.groomsName} & ${wedding.bridesName}`,
    `LOCATION:${wedding.venue.name}\\, ${wedding.venue.locality}\\, ${wedding.venue.region}`,
    `DESCRIPTION:You are invited to the wedding of ${wedding.groomsName} and ${wedding.bridesName}.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
