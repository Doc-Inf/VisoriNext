import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Par from "@/components/typhography/par";

export default function FormError({ message }: { message?: string }) {
  return (
    message && (
      <div className="flex items-center px-4 py-2 rounded-lg bg-destructive/15 text-destructive gap-4">
        <ExclamationTriangleIcon className="w-5 h-5" />
        <Par className="[&:not(:first-child)]:mt-0 !py-0 !my-0">{message}</Par>
      </div>
    )
  );
}
