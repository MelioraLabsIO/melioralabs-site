import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-background py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Meliora Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@melioralabs.io"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              hello@melioralabs.io
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
