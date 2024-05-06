import { ReactNode } from "react";

export default function TextSM({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-xl font-semibold tracking-tight scroll-m-20">
      {children}
    </h4>
  );
}
