"use client";
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
import { useEffect, useState } from "react";
import { AddNewLoanEntryComponent } from "./add-new-loan-entry-component/add-new-loan-entry-component";
import { getLoanEntries } from "@/firebase/requests/loan-entries/get-loan-entries";
import { LoanEntries } from "@/interface/loan-entries";

export default function LoanEntryManagement() {
  const [loanEntries, setLoanEntries] = useState<LoanEntries[]>([]);

    const fetchData = async () => {
      const itemsData = await getLoanEntries();
      setLoanEntries(itemsData);
    };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNewClientAdded = () => {
    fetchData();
  };

  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Loan Entries</CardTitle>
          <CardDescription>List of clients' loans.</CardDescription>
        </div>
        <AddNewLoanEntryComponent onNewClientAdded={handleNewClientAdded} />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Loan Term</TableHead>
              <TableHead>Interest Rate</TableHead>
              <TableHead>Loan Amount</TableHead>
              <TableHead>Loan Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loanEntries.map((loanEntry, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="font-medium">
                    {loanEntry.client.firstname + " " + loanEntry.client.lastname}
                  </div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {loanEntry.client.email}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {loanEntry.terms}
                </TableCell>
                <TableCell className="text-center">{loanEntry.rate}</TableCell>
                <TableCell className="text-center">
                  {loanEntry.totalLoanAmount.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  {loanEntry.date as string}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
