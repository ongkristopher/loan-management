import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DueDates() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Due Dates</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
              olivia.martin@email.com
            </p>
          </div>
          <div className="ml-auto grid gap-1 justify-items-end">
            <p className="text-sm font-medium leading-none">March 31</p>
            <p className="text-sm text-muted-foreground">₱1,999.00</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Jackson Lee</p>
            <p className="text-sm text-muted-foreground">
              jackson.lee@email.com
            </p>
          </div>
          <div className="ml-auto grid gap-1 justify-items-end">
            <p className="text-sm font-medium leading-none">September 31</p>
            <p className="text-sm text-muted-foreground">₱1,999.00</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
            <p className="text-sm text-muted-foreground">
              isabella.nguyen@email.com
            </p>
          </div>
          <div className="ml-auto grid gap-1 justify-items-end">
            <p className="text-sm font-medium leading-none">November 31</p>
            <p className="text-sm text-muted-foreground">₱31,999.00</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarFallback>WK</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">William Kim</p>
            <p className="text-sm text-muted-foreground">will@email.com</p>
          </div>
          <div className="ml-auto grid gap-1 justify-items-end">
            <p className="text-sm font-medium leading-none">June 31</p>
            <p className="text-sm text-muted-foreground">₱31,999.00</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            <p className="text-sm text-muted-foreground">
              sofia.davis@email.com
            </p>
          </div>
          <div className="ml-auto grid gap-1 justify-items-end">
            <p className="text-sm font-medium leading-none">June 31</p>
            <p className="text-sm text-muted-foreground">₱31,999.00</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
