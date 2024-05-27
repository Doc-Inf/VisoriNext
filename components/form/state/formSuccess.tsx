import Par from "@/components/typhography/par";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function FormSuccess({ message }: { message?: string }) {
  return (
    message && (
      <div className="flex items-center px-4 py-2 rounded-lg bg-emerald-400/15 text-emerald-700 gap-4">
        <CheckCircledIcon className="w-5 h-5" />
        <Par className="[&:not(:first-child)]:mt-0 !py-0 !my-0">{message}</Par>
      </div>
    )
  );
}
