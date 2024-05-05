"use client";

import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getClients } from "@/firebase/requests/clients/get-clients";
import { Client } from "@/interface/clients";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ClientsCombobox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Client["firstname"]>("");
  const [clients, setClients] = useState<Client[]>([]); // Ensure clients state is initialized with an empty array

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await getClients();
      // set state with the result
      setClients(data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <>
      {clients.length === 0 ? (
        <div>Loading...</div> // Render a loading indicator while fetching data
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? clients.find((client) => client.firstname === value)
                    ?.firstname
                : "Select client..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search client..." />
              <CommandEmpty>No client found.</CommandEmpty>
              {clients.length ? (
                <CommandGroup>
                  {clients.map((client) => (
                    <CommandItem
                      key={client.id}
                      value={client.firstname}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === client.firstname
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {client.firstname}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : (
                <div>Loading...</div>
              )}
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}
