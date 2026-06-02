import { ContactLinks } from "@/components/layout/ContactLinks";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-section-sm">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <ContactLinks />
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
