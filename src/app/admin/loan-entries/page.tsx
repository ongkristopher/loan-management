"use client";
import Header from "@/components/custom/header/header";
import LoanEntryManagement from "@/components/custom/lists/loan-entries";
export default function LoanEntries() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <LoanEntryManagement />
      </main>
    </div>
  );
}
