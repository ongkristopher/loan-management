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
import { UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface AddNewClientProps {
  onNewClientAdded: () => void;
}

const formSchema = z.object({
  address: z.string().min(3).trim(),
  contactNumber: z.string().min(11).trim(),
  email: z.string().email().trim().toLowerCase(),
  firstname: z.string().min(1, {
    message: "Firstname is required",
  }),
  lastname: z.string().min(1, {
    message: "Lastname is required",
  }),
});

export function AddNewClientComponent({ onNewClientAdded }: AddNewClientProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    form.reset();
  }, [open]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      contactNumber: "",
      email: "",
      firstname: "",
      lastname: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const client: Client = values;
    client.dateAdded = serverTimestamp() as Timestamp;

    const { result, error } = await addNewClient("clients", client);

    if (error) {
      return console.log(error);
    } else {
      onNewClientAdded();
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="ml-auto gap-1" asChild>
        <Button size="sm">
          Add new
          <UserPlus className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Add new client</DialogTitle>
        </DialogHeader>
        <div className="space-y-8 py-4">
          <Form {...form}>
            <form className="grid gap-4 grid-cols-2">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Firstname</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is legal first name of the client.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lastname</FormLabel>
                    <FormControl>
                      <Input placeholder="Dela Cruz" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is legal last name of the client.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+639..." {...field} />
                    </FormControl>
                    <FormDescription>
                      This is active contact number of the client.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@test.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is active email address of the client.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-subgrid gap-4 col-span-full">
                <div className="col-span-full">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Complete address" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is the address of the client.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
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
