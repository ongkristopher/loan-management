import { ModeToggle } from "@/components/custom/dark-mode-toggle";
import AccountWidget from "./account-widget";
import Navbar from "./navbar";
import NavbarMobile from "./navbar-mobile";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Navbar />
      <NavbarMobile />
      <div className="flex items-center gap-4 ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial"></div>
        <ModeToggle />
        <AccountWidget />
      </div>
    </header>
  );
}
