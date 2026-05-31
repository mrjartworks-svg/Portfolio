import { footerLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-section-sm">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
              <a
                href={footerLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)] link-underline"
              >
                LinkedIn
              </a>
              <a
                href={footerLinks.email}
                className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)] link-underline"
              >
                Email
              </a>
              <Link
                href={footerLinks.resume}
                className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)] link-underline"
              >
                Resume
              </Link>
            </nav>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            © {year} Mradul Jain
          </p>
        </div>
        <Divider />
        <p className="mt-8 text-center text-xs text-[var(--accent-muted)] sm:text-left">
          Designed with intention. Built for clarity.
        </p>
      </Container>
    </footer>
  );
}
