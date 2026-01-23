"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export interface Datasource {
  value: string;
  label: string;
  logo: string;
}

interface ComboboxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  datasources: Datasource[];
  disabledValues?: string[];
  disabled?: boolean;
}

export function Combobox({
  value,
  onChange,
  placeholder,
  datasources,
  disabledValues = [],
  disabled = false,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const selectedDatasource = datasources.find((ds) => ds.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className="w-full justify-between font-normal"
        >
          {selectedDatasource ? (
            <span className="flex items-center gap-2">
              <img
                src={selectedDatasource.logo}
                alt=""
                className="h-4 w-4 rounded-sm object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {selectedDatasource.label}
            </span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput placeholder="Search datasources..." />
          <CommandList>
            <CommandEmpty>No datasource found.</CommandEmpty>
            <CommandGroup>
              {datasources.map((datasource) => {
                const isDisabled = disabledValues.includes(datasource.value);
                const isSelected = value === datasource.value;

                return (
                  <CommandItem
                    key={datasource.value}
                    value={datasource.label}
                    disabled={isDisabled}
                    onSelect={() => {
                      if (!isDisabled) {
                        onChange(
                          datasource.value === value ? "" : datasource.value,
                        );
                        setOpen(false);
                      }
                    }}
                    className={cn(
                      isDisabled && "opacity-50 cursor-not-allowed",
                    )}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        isSelected ? "opacity-100" : "opacity-0",
                      )}
                    />
                    <img
                      src={datasource.logo}
                      alt=""
                      className="mr-2 h-4 w-4 rounded-sm object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {datasource.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
