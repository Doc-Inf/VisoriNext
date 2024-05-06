import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function TextXL({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-8xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
