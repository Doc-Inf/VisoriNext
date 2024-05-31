"use state";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import copy from "clipboard-copy";
import { useToast } from "../ui/use-toast";

export default function CopyInput({ link }: { link: string }) {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copy(link);
      setIsCopied(true);
      toast({
        title: "Link copiato negli appunti",
        description: "Il link del video è stato copiato con successo",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Impossibile copiare il link",
        description:
          "Impossibile copiare il link del video negli appunti, riprova più tardi",
      });
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="w-[60%] pb-4 m-auto relative">
      <Input
        readOnly
        placeholder="https://youtube.com/..."
        className="m-auto"
        id="link"
      />
      <Button
        onClick={handleCopy}
        className="absolute top-0 right-0 border border-l-0 rounded-s-none"
        variant="secondary"
      >
        <Copy />
      </Button>
    </div>
  );
}
