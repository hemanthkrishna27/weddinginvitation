import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-ink shadow-[0_0_0_1px_transparent] outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/40",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
