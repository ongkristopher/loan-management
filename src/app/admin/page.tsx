import Calendar from "@/components/custom/calendar";
import DueDates from "@/components/custom/due-dates";
import Header from "@/components/custom/header/header";
import Transactions from "@/components/custom/transactions";
import WidgetStatus from "@/components/custom/widget-status";
export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-1 flex-col gap-4 md:gap-8 md:col-span-3 sm:col-span-full">
            <WidgetStatus />
            <Calendar />
          </div>

          <div className="flex flex-col gap-4 md:gap-8 md:col-span-1 sm:col-span-full">
            <div className="basis-1/2">
              <DueDates />
            </div>
            <div className="basis-1/2">
              <Transactions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
