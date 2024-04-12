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
import { getClients } from "@/firebase/requests/clients/get-clients";
import { Client } from "@/interface/clients";
import { useEffect, useState } from "react";
import { AddNewClientComponent } from "./add-new-client-component/add-new-client-component";

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);

  const fetchData = async () => {
    const itemsData = await getClients();
    setClients(itemsData);
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
          <CardTitle>Clients</CardTitle>
          <CardDescription>List of clients.</CardDescription>
        </div>
        <AddNewClientComponent onNewClientAdded={handleNewClientAdded} />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead className="text-center">Contact Number</TableHead>
              <TableHead className="text-center">Address</TableHead>
              <TableHead className="text-center">Date Added</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="font-medium">
                    {client.firstname + " " + client.lastname}
                  </div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {client.email}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {client.contactNumber}
                </TableCell>
                <TableCell className="text-center">{client.address}</TableCell>
                <TableCell className="text-center">
                  {client.dateAdded as string}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
