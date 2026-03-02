import * as React from "react";
import { cn } from "@/lib/utils";

export type PanelProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
};

export function Panel({
  as: Component = "div",
  className,
  children,
  ...props
}: PanelProps) {
  return (
    <Component
      className={cn("rounded-lg border border-gray-100 bg-white", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
