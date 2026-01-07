import { Footer } from "./footer";
import { ScrollToTop } from "./scroll-to-top";
import { FloatingThemeToggle } from "./floating-theme-toggle";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingThemeToggle />
      <ScrollToTop />
    </div>
  );
}

