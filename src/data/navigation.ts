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

export const footerLinks = {
  linkedin: "https://www.linkedin.com/in/mradul-jain-005181212/",
  email: "mailto:mraduljain1996@gmail.com",
  resume: "/resume",
  whatsappMessage: "Hi Mradul, I'd like to get in touch.",
} as const;

export function getWhatsAppHref(): string | undefined {
  const phone = whatsappPhone.replace(/\D/g, "");
  if (!phone) return undefined;
  const text = encodeURIComponent(footerLinks.whatsappMessage);
  return `https://wa.me/${phone}?text=${text}`;
}
