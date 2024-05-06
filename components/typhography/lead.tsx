import { ReactNode } from "react";
import { cn } from "@/lib/utils";
export default function Lead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn(className, "text-xl text-muted-foreground")}>{children}</p>
  );
}
