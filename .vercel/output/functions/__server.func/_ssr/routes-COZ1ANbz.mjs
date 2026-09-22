import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime, n as Slot, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { a as Share2, c as MapPin, d as ChevronLeft, f as ChevronDown, i as Shirt, l as Copy, m as CalendarPlus, o as Navigation, p as Check, r as Sparkles, s as Menu, t as X, u as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-COZ1ANbz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var wedding = {
	groomsName: "K. Hemanth",
	bridesName: "M. Mahima",
	groomsGiven: "Hemanth",
	bridesGiven: "Mahima",
	monogram: "H & M",
	dateIso: "2026-11-22",
	dateStartIso: "2026-11-22T00:00:00+05:30",
	weekday: "Sunday",
	dateShort: "22.11.2026",
	dateDisplay: "Sunday, 22 November 2026",
	dateFormal: "Sunday, the Twenty-Second of November, Two Thousand and Twenty-Six",
	tamilBlessing: "உங்கள் வருகையே எங்களது பாக்கியம்",
	venue: {
		name: "Sree Chenbagavalli Auditorium",
		locality: "Payanam, Kuzhithurai",
		region: "Kanyakumari District, Tamil Nadu",
		lat: 8.309862,
		lng: 77.2432308,
		mapsUrl: "https://www.google.com/maps/place/Sree+Chenbagavalli+Auditorium/@8.309862,77.2432308,17z",
		directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=8.309862,77.2432308",
		embedUrl: "https://maps.google.com/maps?q=8.309862,77.2432308&z=17&hl=en&output=embed"
	}
};
var gallery = [
	{
		src: "/images/mandap.jpg",
		title: "The Mandap",
		caption: "Where two lives become one"
	},
	{
		src: "/images/garland.jpg",
		title: "Jasmine & Marigold",
		caption: "A garland for the beginning"
	},
	{
		src: "/images/diyas.jpg",
		title: "A Thousand Lights",
		caption: "The night the families gather"
	},
	{
		src: "/images/kalash.jpg",
		title: "Sacred Beginnings",
		caption: "Kalash, deepam, and blessings"
	},
	{
		src: "/images/kolam.jpg",
		title: "Kolam at Dawn",
		caption: "Drawn for an auspicious day"
	},
	{
		src: "/images/arch.jpg",
		title: "The Floral Arch",
		caption: "Ivory, jasmine, and gold"
	},
	{
		src: "/images/envelope.jpg",
		title: "The Letter",
		caption: "You are invited"
	},
	{
		src: "/images/silk.jpg",
		title: "Gold on Silk",
		caption: "Woven for the occasion"
	}
];
function googleCalendarUrl() {
	return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Wedding of ${wedding.groomsName} & ${wedding.bridesName}`)}&dates=20261122/20261123&details=${encodeURIComponent(`You are invited to the wedding of ${wedding.groomsName} and ${wedding.bridesName} at ${wedding.venue.name}, ${wedding.venue.locality}.`)}&location=${encodeURIComponent(`${wedding.venue.name}, ${wedding.venue.locality}, ${wedding.venue.region}`)}`;
}
function icsContent() {
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
		"END:VCALENDAR"
	].join("\r\n");
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-serif tracking-wide transition-[color,background-color,box-shadow,opacity,scale] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-burgundy text-ivory hover:bg-burgundy-deep",
			gold: "bg-gold text-burgundy-deep hover:bg-gold-soft",
			outline: "border border-gold/70 bg-transparent text-burgundy hover:bg-parchment",
			ghost: "text-ivory hover:bg-ivory/10",
			ivory: "bg-ivory text-burgundy hover:bg-parchment"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3.5 text-xs",
			lg: "h-12 px-7 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function EnvelopeGate({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-burgundy-deep px-5 py-16 pb-28 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/silk.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-burgundy-deep/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex max-w-md flex-col items-center pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter-rise text-gold-soft text-xs tracking-[0.42em] uppercase",
						children: "A letter for you"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "enter-rise mt-4 font-display text-5xl text-ivory sm:text-6xl",
						style: { animationDelay: "80ms" },
						children: "You are invited"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "enter-rise mt-3 text-lg text-ivory/80 italic",
						style: { animationDelay: "140ms" },
						children: [
							wedding.groomsGiven,
							" & ",
							wedding.bridesGiven
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onOpen,
						className: "enter-rise group relative mt-10 focus-visible:outline-none",
						style: { animationDelay: "220ms" },
						"aria-label": "Open the invitation",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/envelope.jpg",
							alt: "Cream wedding envelope with a wax seal",
							className: "h-56 w-72 rounded-xl object-cover shadow-soft outline outline-1 -outline-offset-1 outline-ivory/15 sm:h-64 sm:w-80"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/seal.jpg",
							alt: "",
							className: "seal-pulse absolute left-1/2 top-[58%] size-24 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover shadow-soft ring-2 ring-gold/50 transition-[scale] duration-150 group-hover:scale-105 sm:size-28"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter-rise mt-8 text-sm tracking-[0.22em] uppercase text-ivory/70",
						style: { animationDelay: "300ms" },
						children: "Tap the seal to open"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "enter-rise mt-4 text-gold-soft",
						style: { animationDelay: "360ms" },
						onClick: onOpen,
						children: "Open invitation"
					})
				]
			})
		]
	});
}
var links = [
	{
		href: "#invite",
		label: "Invitation"
	},
	{
		href: "#when",
		label: "When & Where"
	},
	{
		href: "#gallery",
		label: "Gallery"
	},
	{
		href: "#rsvp",
		label: "RSVP"
	}
];
function SiteNav() {
	const [solid, setSolid] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > 72);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-300", solid ? "bg-ivory/95 text-burgundy shadow-[0_1px_0_0_var(--color-border)]" : "bg-transparent text-ivory"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "font-display text-2xl tracking-wide",
					onClick: () => setOpen(false),
					children: wedding.monogram
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm tracking-[0.16em] uppercase opacity-90 hover:opacity-100",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: solid ? "default" : "ivory",
					size: "sm",
					className: "hidden md:inline-flex",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#rsvp",
						children: "Reply"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "relative flex size-11 items-center justify-center md:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-ivory px-4 py-3 text-burgundy md:hidden",
			children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: link.href,
				className: "flex h-12 items-center text-base tracking-[0.12em] uppercase",
				onClick: () => setOpen(false),
				children: link.label
			}, link.href))
		}) : null]
	});
}
function FloralDivider({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center justify-center gap-4", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ornament-line w-16 sm:w-24" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotusMark, { className: "size-5 text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ornament-line w-16 sm:w-24" })
		]
	});
}
function LotusMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("fill-current", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 28c-1.8-3.4-7-6.4-7-12.2C9 11 12.2 8.6 16 8.6s7 2.4 7 7.2C23 21.6 17.8 24.6 16 28Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 26.4c-3.2-2.2-8.8-1.6-10.8-6.4-1.4-3.4.4-6.8 3.6-8 2.2 3.2 5 5.6 7.2 14.4Z",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 26.4c3.2-2.2 8.8-1.6 10.8-6.4 1.4-3.4-.4-6.8-3.6-8-2.2 3.2-5 5.6-7.2 14.4Z",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "8",
				r: "1.4"
			})
		]
	});
}
function SectionKicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-gold text-xs tracking-[0.38em] uppercase font-medium",
		children
	});
}
function FallingPetals() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden",
		"aria-hidden": "true",
		children: [
			{
				left: "8%",
				delay: "0s",
				duration: "14s"
			},
			{
				left: "22%",
				delay: "2s",
				duration: "16s"
			},
			{
				left: "38%",
				delay: "5s",
				duration: "13s"
			},
			{
				left: "55%",
				delay: "1s",
				duration: "18s"
			},
			{
				left: "71%",
				delay: "4s",
				duration: "15s"
			},
			{
				left: "86%",
				delay: "7s",
				duration: "17s"
			}
		].map((petal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "petal",
			style: {
				left: petal.left,
				animationDelay: petal.delay,
				animationDuration: petal.duration
			}
		}, petal.left))
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex min-h-dvh items-end overflow-hidden bg-burgundy-deep text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 size-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "/images/mandap.jpg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/videos/mandap.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-burgundy-deep/35 via-burgundy-deep/25 to-burgundy-deep/90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FallingPetals, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pb-36 pt-32 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter-rise text-gold-soft text-xs tracking-[0.48em] uppercase",
						children: "Save the date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "enter-rise mt-6 font-display leading-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[4.25rem] sm:text-8xl",
								children: wedding.groomsGiven
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 block text-4xl text-gold-soft",
								children: "&"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-[4.25rem] sm:text-8xl",
								children: wedding.bridesGiven
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralDivider, { className: "mt-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter-rise mt-6 text-xl tracking-[0.22em] uppercase sm:text-2xl",
						children: wedding.dateShort
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "enter-rise mt-2 text-base text-ivory/80",
						children: [
							wedding.weekday,
							" · ",
							wedding.venue.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#invite",
						className: "enter-rise mt-10 flex flex-col items-center gap-1 text-ivory/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-[0.28em] uppercase",
							children: "Open the letter"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5" })]
					})
				]
			})
		]
	});
}
function remaining(target) {
	const diff = target - Date.now();
	if (diff <= 0) return null;
	return {
		days: Math.floor(diff / 864e5),
		hours: Math.floor(diff % 864e5 / 36e5),
		minutes: Math.floor(diff % 36e5 / 6e4),
		seconds: Math.floor(diff % 6e4 / 1e3)
	};
}
function Countdown() {
	const target = new Date(wedding.dateStartIso).getTime();
	const [parts, setParts] = (0, import_react.useState)(() => remaining(target));
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setParts(remaining(target)), 1e3);
		return () => window.clearInterval(id);
	}, [target]);
	if (!parts) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-burgundy px-6 py-16 text-center text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-5xl",
			children: "The day has arrived"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-ivory/80",
			children: "We are celebrating today."
		})]
	});
	const cells = [
		{
			label: "Days",
			value: parts.days
		},
		{
			label: "Hours",
			value: parts.hours
		},
		{
			label: "Minutes",
			value: parts.minutes
		},
		{
			label: "Seconds",
			value: parts.seconds
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-burgundy px-6 py-14 text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-2xl grid-cols-4 gap-3 sm:gap-6",
			children: cells.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-3xl tabular-nums sm:text-5xl",
					children: String(cell.value).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[0.65rem] tracking-[0.28em] uppercase text-gold-soft sm:text-xs",
					children: cell.label
				})]
			}, cell.label))
		})
	});
}
function InvitationLetter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "invite",
		className: "relative bg-ivory px-4 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "letter-frame relative mx-auto max-w-2xl overflow-hidden rounded-xl px-6 py-14 text-center sm:px-14 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-surface/78" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "The Invitation" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralDivider, { className: "mt-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-lg italic text-muted",
						children: [
							"With the blessings of the divine",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"and the love of our families"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 font-display text-5xl text-burgundy sm:text-6xl",
						children: wedding.groomsName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-3xl text-gold",
						children: "&"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-5xl text-burgundy sm:text-6xl",
						children: wedding.bridesName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-10 max-w-md text-lg leading-relaxed text-ink",
						children: "joyfully invite you to honour them with your presence as they exchange vows and begin a lifetime of love."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralDivider, { className: "mt-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-xl tracking-wide text-burgundy",
						children: wedding.dateFormal
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base text-muted",
						children: [
							wedding.venue.name,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							wedding.venue.locality,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							wedding.venue.region
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-sm tracking-[0.18em] text-gold",
						children: wedding.tamilBlessing
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-base italic text-muted",
						children: [
							"Your presence is our greatest blessing.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Save the date — come celebrate with us."
						]
					})
				]
			})]
		})
	});
}
function CinematicBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-64 overflow-hidden bg-burgundy-deep sm:h-80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 size-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "/images/diyas.jpg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/videos/diyas.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-burgundy-deep/35" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative z-10 flex h-full items-center justify-center px-6 text-center font-display text-4xl text-ivory sm:text-5xl",
				children: "Two families, one home"
			})
		]
	});
}
function downloadIcs() {
	const blob = new Blob([icsContent()], { type: "text/calendar;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "hemanth-mahima-wedding.ics";
	a.click();
	URL.revokeObjectURL(url);
}
function WhenWhere() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "when",
		className: "bg-parchment px-4 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "When & Where" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-5xl text-burgundy sm:text-6xl",
							children: "Join us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralDivider, { className: "mt-6" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-7 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-11 items-center justify-center rounded-md bg-burgundy text-ivory",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-2xl text-burgundy",
								children: "The Wedding"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-lg",
								children: wedding.dateDisplay
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted",
								children: "Ceremony and celebrations through the day. We cannot wait to welcome you into this new chapter — your blessings, your laughter, and your company mean everything."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: downloadIcs,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "size-4" }), "Apple / Outlook"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: googleCalendarUrl(),
										target: "_blank",
										rel: "noreferrer",
										children: "Google Calendar"
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-7 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-11 items-center justify-center rounded-md bg-burgundy text-ivory",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-2xl text-burgundy",
								children: wedding.venue.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-lg",
								children: [
									wedding.venue.locality,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									wedding.venue.region
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted",
								children: "Along the Marthandam–Pechipparai road in Payanam, near Kuzhithurai. Park on the grounds and follow the jasmine and marigold to the hall."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: wedding.venue.mapsUrl,
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" }), "Open in Maps"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: wedding.venue.directionsUrl,
										target: "_blank",
										rel: "noreferrer",
										children: "Get directions"
									})
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-hidden rounded-xl shadow-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map of Sree Chenbagavalli Auditorium",
						src: wedding.venue.embedUrl,
						className: "h-72 w-full border-0 grayscale-[0.15] sm:h-96",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-7 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-11 items-center justify-center rounded-md bg-burgundy text-ivory",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shirt, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-2xl text-burgundy",
								children: "Dress for the day"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted",
								children: "Traditional South Indian wedding attire, in whatever makes you feel festive. Silk sarees, veshti, kurta, or sherwani. Ivory, maroon, gold, and jewel tones will feel at home among the flowers."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "relative overflow-hidden rounded-xl shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/kalash.jpg",
							alt: "Wedding kalash, oil lamps, and rose petals",
							className: "h-full min-h-56 w-full object-cover"
						})
					})]
				})
			]
		})
	});
}
function Gallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (active === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") setActive(null);
			if (e.key === "ArrowRight") setActive((i) => i === null ? i : (i + 1) % gallery.length);
			if (e.key === "ArrowLeft") setActive((i) => i === null ? i : (i - 1 + gallery.length) % gallery.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [active]);
	const current = active === null ? null : gallery[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "bg-ivory px-4 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "A glimpse of the day" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-5xl text-burgundy sm:text-6xl",
						children: "Mood of the mandap"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralDivider, { className: "mt-6" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4",
				children: gallery.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(index),
					className: "group relative overflow-hidden rounded-lg text-left shadow-soft",
					"aria-label": item.title,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: "",
						className: "aspect-3/4 h-full w-full object-cover transition-[scale] duration-500 ease-out group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "absolute inset-x-0 bottom-0 bg-linear-to-t from-burgundy-deep/80 to-transparent px-3 py-3 text-sm text-ivory",
						children: item.title
					})]
				}, item.src))
			})]
		}), current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center bg-burgundy-deep/92 p-4 pb-24",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": current.title,
			onClick: () => setActive(null),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute right-4 top-4 flex size-11 items-center justify-center text-ivory",
					"aria-label": "Close gallery",
					onClick: () => setActive(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute left-2 flex size-11 items-center justify-center text-ivory sm:left-6",
					"aria-label": "Previous image",
					onClick: (e) => {
						e.stopPropagation();
						setActive((i) => i === null ? i : (i - 1 + gallery.length) % gallery.length);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "max-h-[86dvh] max-w-4xl",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.src,
						alt: current.title,
						className: "max-h-[72dvh] w-full rounded-md object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-4 text-center text-ivory",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl",
							children: current.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-ivory/70 italic",
							children: current.caption
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute right-2 flex size-11 items-center justify-center text-ivory sm:right-6",
					"aria-label": "Next image",
					onClick: (e) => {
						e.stopPropagation();
						setActive((i) => i === null ? i : (i + 1) % gallery.length);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-8" })
				})
			]
		}) : null]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-ink shadow-[0_0_0_1px_transparent] outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/40", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium tracking-[0.14em] uppercase text-muted", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-lg border border-border bg-surface px-3 py-2 text-base text-ink outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/40", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var RSVP_KEY = "hemanth-mahima-rsvp";
var BLESS_KEY = "hemanth-mahima-blessings";
var attendanceLabels = {
	joyfully: "Joyfully attending",
	family: "Attending with family",
	unable: "Sending love, cannot attend"
};
function loadRsvp() {
	try {
		const raw = localStorage.getItem(RSVP_KEY);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function loadBlessings() {
	try {
		const raw = localStorage.getItem(BLESS_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function RsvpAndBlessings() {
	const [rsvp, setRsvp] = (0, import_react.useState)({
		name: "",
		attendance: "joyfully",
		guests: "1",
		note: ""
	});
	const [saved, setSaved] = (0, import_react.useState)(null);
	const [blessings, setBlessings] = (0, import_react.useState)([]);
	const [blessName, setBlessName] = (0, import_react.useState)("");
	const [blessMsg, setBlessMsg] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setSaved(loadRsvp());
		setBlessings(loadBlessings());
	}, []);
	function submitRsvp(e) {
		e.preventDefault();
		if (!rsvp.name.trim()) {
			toast("Please add your name");
			return;
		}
		localStorage.setItem(RSVP_KEY, JSON.stringify(rsvp));
		setSaved(rsvp);
		toast("Your reply is saved on this device");
	}
	function submitBlessing(e) {
		e.preventDefault();
		if (!blessName.trim() || !blessMsg.trim()) {
			toast("Add your name and a few words");
			return;
		}
		const next = [{
			name: blessName.trim(),
			message: blessMsg.trim(),
			at: Date.now()
		}, ...blessings].slice(0, 24);
		localStorage.setItem(BLESS_KEY, JSON.stringify(next));
		setBlessings(next);
		setBlessName("");
		setBlessMsg("");
		toast("Thank you for the blessing");
	}
	async function shareInvite() {
		const url = window.location.href;
		const title = `${wedding.groomsGiven} & ${wedding.bridesGiven} are getting married`;
		const text = `Save the date — ${wedding.dateDisplay} at ${wedding.venue.name}.`;
		if (navigator.share) try {
			await navigator.share({
				title,
				text,
				url
			});
			return;
		} catch {}
		await navigator.clipboard.writeText(`${title}\n${text}\n${url}`);
		setCopied(true);
		toast("Invitation link copied");
		window.setTimeout(() => setCopied(false), 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "rsvp",
		className: "bg-burgundy px-4 py-20 text-ivory sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Kindly reply" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-5xl sm:text-6xl",
							children: "RSVP"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-ivory/80",
							children: "Let us know you will be there — or send your love from afar. We would be honoured either way."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralDivider, { className: "mt-6" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submitRsvp,
						className: "rounded-xl bg-ivory p-6 text-ink shadow-soft sm:p-8",
						children: [
							saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 rounded-md bg-parchment px-4 py-3 text-burgundy",
								children: [
									"Thank you, ",
									saved.name,
									". ",
									attendanceLabels[saved.attendance],
									"."
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "guest-name",
									children: "Your name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "guest-name",
									value: rsvp.name,
									onChange: (e) => setRsvp({
										...rsvp,
										name: e.target.value
									}),
									placeholder: "Full name",
									autoComplete: "name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "text-sm font-medium tracking-[0.14em] uppercase text-muted",
									children: "Will you join us?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 grid gap-2",
									children: Object.keys(attendanceLabels).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setRsvp({
											...rsvp,
											attendance: key
										}),
										className: cn("h-11 rounded-md border px-4 text-left text-sm transition-[background-color,border-color,color] duration-150", rsvp.attendance === key ? "border-burgundy bg-burgundy text-ivory" : "border-border bg-surface text-ink hover:border-gold"),
										children: attendanceLabels[key]
									}, key))
								})]
							}),
							rsvp.attendance !== "unable" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "guest-count",
									children: "Number of guests"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "guest-count",
									type: "number",
									min: 1,
									max: 12,
									value: rsvp.guests,
									onChange: (e) => setRsvp({
										...rsvp,
										guests: e.target.value
									})
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "guest-note",
									children: "A note for us"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "guest-note",
									value: rsvp.note,
									onChange: (e) => setRsvp({
										...rsvp,
										note: e.target.value
									}),
									placeholder: "Travel plans, blessings, favourite song…"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "mt-6 w-full",
								size: "lg",
								children: "Send reply"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submitBlessing,
							className: "rounded-xl border border-ivory/15 bg-burgundy-deep/40 p-6 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl",
									children: "Leave a blessing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ivory/75",
									children: "A few words for Hemanth & Mahima. Kept on this device so you can read them again."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "bless-name",
										className: "text-gold-soft",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "bless-name",
										value: blessName,
										onChange: (e) => setBlessName(e.target.value),
										className: "bg-ivory",
										placeholder: "Your name"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "bless-msg",
										className: "text-gold-soft",
										children: "Blessing"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "bless-msg",
										value: blessMsg,
										onChange: (e) => setBlessMsg(e.target.value),
										className: "bg-ivory",
										placeholder: "May your home be filled with…"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									variant: "gold",
									className: "mt-5 w-full",
									children: "Offer blessing"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ivory",
								onClick: shareInvite,
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" }), "Share invitation"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								className: "border border-ivory/20",
								onClick: async () => {
									await navigator.clipboard.writeText(window.location.href);
									toast("Link copied");
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Copy link"]
							})]
						})]
					})]
				}),
				blessings.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-4 sm:grid-cols-2",
					children: blessings.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-ivory/12 bg-burgundy-deep/35 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "italic text-ivory/90",
							children: [
								"“",
								item.message,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm tracking-[0.16em] uppercase text-gold-soft",
							children: item.name
						})]
					}, item.at))
				}) : null
			]
		})
	});
}
function InvitationFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-burgundy-deep px-6 py-16 text-center text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotusMark, { className: "mx-auto size-7 text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 font-display text-4xl",
				children: [
					wedding.groomsGiven,
					" & ",
					wedding.bridesGiven
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm tracking-[0.28em] uppercase text-gold-soft",
				children: [wedding.dateShort, " · Payanam"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-ivory/70 italic",
				children: wedding.tamilBlessing
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-ivory/55",
				children: "We cannot wait to celebrate with you."
			})
		]
	});
}
function Home() {
	const [opened, setOpened] = (0, import_react.useState)(false);
	if (!opened) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvelopeGate, { onOpen: () => setOpened(true) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvitationLetter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CinematicBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhenWhere, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RsvpAndBlessings, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvitationFooter, {})
	] });
}
//#endregion
export { Home as component };
