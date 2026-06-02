export const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/playground", label: "Playground" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Resume" },
] as const;

/** Set here, or via NEXT_PUBLIC_WHATSAPP_PHONE (digits only, e.g. 919876543210). */
const WHATSAPP_PHONE_LOCAL = "918839047806";

export const whatsappPhone = (
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? WHATSAPP_PHONE_LOCAL
).replace(/\D/g, "");

const BOOKING_EMAIL = "mraduljain1996@gmail.com";

/** Google Calendar appointment schedule URL (calendar.app.google/...). Overrides invite template when set. */
const BOOKING_URL_LOCAL = "";

export const footerLinks = {
  linkedin: "https://www.linkedin.com/in/mradul-jain-005181212/",
  email: `mailto:${BOOKING_EMAIL}`,
  resume: "/resume",
  whatsappMessage: "Hi Mradul, I'd like to get in touch.",
} as const;

/** Opens your booking page, or a pre-filled invite so visitors can propose a time on your calendar. */
export function getBookMeetingHref(): string {
  const appointmentUrl =
    process.env.NEXT_PUBLIC_GOOGLE_BOOKING_URL?.trim() || BOOKING_URL_LOCAL.trim();
  if (appointmentUrl) return appointmentUrl;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Meeting with Mradul Jain",
    add: BOOKING_EMAIL,
    details: "Scheduled via portfolio site. A Google Meet link can be added when you save the event.",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function getWhatsAppHref(): string | undefined {
  const phone = whatsappPhone.replace(/\D/g, "");
  if (!phone) return undefined;
  const text = encodeURIComponent(footerLinks.whatsappMessage);
  return `https://wa.me/${phone}?text=${text}`;
}
