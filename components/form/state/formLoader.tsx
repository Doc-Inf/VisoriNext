import Par from "@/components/typhography/par";
import { Loader2 } from "lucide-react";

export default function FormLoader({ loading }: { loading: boolean }) {
  return (
    loading && (
      <div className="flex items-center px-4 py-2 rounded-lg bg-primary/90 text-primary-foreground gap-4">
        <Loader2 className="w-5 h-5 animate-spin" />
        <Par className="[&:not(:first-child)]:mt-0 !py-0 !my-0">
          Caricamento in corso...
        </Par>
      </div>
    )
  );
}
