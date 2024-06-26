import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Transactions() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Transactions</CardTitle>
          <CardDescription>Recent transactions.</CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="#">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead className="text-center">Type</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="text-center">Sale</TableCell>
              <TableCell className="text-center">
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </TableCell>
              <TableCell className="text-center">2023-06-23</TableCell>
              <TableCell className="text-right">₱250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="text-center">Sale</TableCell>
              <TableCell className="text-center">
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </TableCell>
              <TableCell className="text-center">2023-06-23</TableCell>
              <TableCell className="text-right">₱250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="text-center">Sale</TableCell>
              <TableCell className="text-center">
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </TableCell>
              <TableCell className="text-center">2023-06-23</TableCell>
              <TableCell className="text-right">₱250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="text-center">Sale</TableCell>
              <TableCell className="text-center">
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </TableCell>
              <TableCell className="text-center">2023-06-23</TableCell>
              <TableCell className="text-right">₱250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="text-center">Sale</TableCell>
              <TableCell className="text-center">
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </TableCell>
              <TableCell className="text-center">2023-06-23</TableCell>
              <TableCell className="text-right">₱250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="text-center">Sale</TableCell>
              <TableCell className="text-center">
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </TableCell>
              <TableCell className="text-center">2023-06-23</TableCell>
              <TableCell className="text-right">₱250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
