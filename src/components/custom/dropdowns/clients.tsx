"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getClients } from "@/firebase/requests/clients/get-clients";
import { Client } from "@/interface/clients";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState, forwardRef } from "react";

interface ClientsComboboxProps {
  value: string;
  onChange: (value: string) => void;
}

export const ClientsCombobox = forwardRef<
  HTMLButtonElement,
  ClientsComboboxProps
>(({ value, onChange }, ref) => {
  const [open, setOpen] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);

  const fetchData = async () => {
    try {
      const data = await getClients();
      if (Array.isArray(data)) {
        setClients(data);
      } else {
        setClients([]);
      }
    } catch (error) {
      setClients([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {clients.length === 0 ? (
        <div>No clients found, add one in the Record</div>
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? clients.find((client) => client.id === value)?.fullname
                : "Select client..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search client..." />
              <CommandList>
                {clients.length === 0 ? (
                  <CommandEmpty>No client found.</CommandEmpty>
                ) : (
                  <CommandGroup>
                    {clients.map((client) => (
                      <CommandItem
                        key={client.id}
                        value={client.fullname} // Use fullname for display in CommandItem
                        onSelect={() => {
                          onChange(client.id as string); // Use client.id for selection
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === client.id ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {client.fullname}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
});

ClientsCombobox.displayName = "ClientsCombobox";
