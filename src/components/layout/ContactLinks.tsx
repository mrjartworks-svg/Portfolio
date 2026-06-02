import { footerLinks, getBookMeetingHref, getWhatsAppHref } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const whatsAppNote =
  "(WhatsApp calls preferred, no cell reception in my area)";

const linkClassName =
  "text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)] link-underline";

interface ContactLinksProps {
  className?: string;
  /** Hide the resume link (e.g. on the resume page). */
  hideResume?: boolean;
}

export function ContactLinks({ className, hideResume = false }: ContactLinksProps) {
  const whatsappHref = getWhatsAppHref();

  return (
    <nav
      className={cn("flex flex-wrap gap-x-6 gap-y-2", className)}
      aria-label="Contact"
    >
      <a
        href={footerLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        LinkedIn
      </a>
      <a href={footerLinks.email} className={linkClassName}>
        Email
      </a>
      {!hideResume && (
        <Link href={footerLinks.resume} className={linkClassName}>
          Resume
        </Link>
      )}
      <a
        href={getBookMeetingHref()}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        Book a call
      </a>
      {whatsappHref && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Phone <span className="text-[var(--accent)]">{whatsAppNote}</span>
        </a>
      )}
    </nav>
  );
}
