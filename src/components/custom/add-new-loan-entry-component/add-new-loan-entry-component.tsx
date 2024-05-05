"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addNewClient } from "@/firebase/requests/clients/add-client";
import { Client } from "@/interface/clients";
import { zodResolver } from "@hookform/resolvers/zod";
import { Timestamp, serverTimestamp } from "firebase/firestore";
import { HandCoins } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ClientsCombobox } from "../dropdowns/clients";

interface AddNewClientProps {
  onNewClientAdded: () => void;
}

const formSchema = z.object({
  client: z.string().min(1, {
    message: "Client is required",
  }),
});

export function AddNewLoanEntryComponent({
  onNewClientAdded,
}: AddNewClientProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    form.reset();
  }, [open]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      client: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // const client: Client = values;
    // client.dateAdded = serverTimestamp() as Timestamp;

    // const { result, error } = await addNewClient("loanEntries", client);

    // if (error) {
    //   return console.log(error);
    // } else {
    //   onNewClientAdded();
    //   setOpen(false);
    // }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="ml-auto gap-1" asChild>
        <Button size="sm">
          Add new
          <HandCoins className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Add new loan entry</DialogTitle>
        </DialogHeader>
        <div className="space-y-8 py-4">
          <Form {...form}>
            <form className="grid gap-4 grid-cols-2">
              <FormField
                control={form.control}
                name="client"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client</FormLabel>
                    <FormControl>
                      <ClientsCombobox />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
