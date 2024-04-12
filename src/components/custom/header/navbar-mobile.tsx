"use client"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMobile() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/admin"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Loan Management</span>
          </Link>
          <Link
            href="/admin"
            className={` ${
              pathname === "/admin"
                ? "text-foreground hover:text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/admin/records"
            className={` ${
              pathname === "/admin/records"
                ? "text-foreground hover:text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Records
          </Link>
          <Link
            href="/admin/loan-entries"
            className={` ${
              pathname === "/admin/loan-entries"
                ? "text-foreground hover:text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Loan Entries
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
