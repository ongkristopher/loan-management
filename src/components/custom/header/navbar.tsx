"use client";
import { Package2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/admin"
        className={`flex items-center gap-2 text-lg font-semibold md:text-base ${
          pathname === "/admin" ? "text-foreground" : ""
        }`}
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Loan Management</span>
      </Link>
      <Link
        href="/admin"
        className={`${
          pathname === "/admin" ? "text-foreground" : "text-muted-foreground"
        } transition-colors hover:text-foreground`}
      >
        Dashboard
      </Link>
      <Link
        href="/admin/records"
        className={`${
          pathname === "/admin/records"
            ? "text-foreground"
            : "text-muted-foreground"
        } transition-colors hover:text-foreground`}
      >
        Records
      </Link>
      <Link
        href="/admin/loan-entries"
        className={`${
          pathname === "/admin/loan-entries"
            ? "text-foreground"
            : "text-muted-foreground"
        } transition-colors hover:text-foreground`}
      >
        Loan Entries
      </Link>
    </nav>
  );
}
