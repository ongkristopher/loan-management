"use client";
import Clients from "@/components/custom/clients";
import Header from "@/components/custom/header/header";
export default function Records() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Clients />
      </main>
    </div>
  );
}
