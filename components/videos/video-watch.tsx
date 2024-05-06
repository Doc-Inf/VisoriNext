import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Par from "../typhography/par";
import { Separator } from "../ui/separator";
import { Copy, Triangle, Youtube } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function WatchVideo({
  title,
  link,
  description,
}: {
  title: string;
  link: string;
  description: string;
}) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="text-foreground">
          {/* VIDEO DESC */}
          <Par>{description}</Par>
          <Separator className="mb-4" />
          {/* WATCH THE VIDEO BTN */}
          <div className="flex items-center justify-between p-2 m-auto mb-0 rounded-sm gap-2 bg-primary w-fit text-slate-100 ">
            <Par>Guarda il video</Par>
            <Youtube />
          </div>
          <Triangle
            className="m-auto mb-1 -mt-2 rotate-180"
            fill="#dc2627"
            strokeWidth={0}
          />
          {/* QR CODE */}
          <img
            src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
            className="m-auto w-[50%] border-8 rounded-sm border-primary mb-8"
          />
          {/* COPY TO CLIPBOARD*/}
          <Label htmlFor="link">
            <Par className="mb-2 text-center">
              Scansiona il QR code oppure copia il link:
            </Par>
          </Label>
          <div className="w-[60%] m-auto relative">
            <Input
              readOnly
              placeholder="https://youtube.com/..."
              className="m-auto"
              id="link"
            />
            <Button
              className="absolute top-0 right-0 border border-l-0 rounded-s-none"
              variant="secondary"
            >
              <Copy />
            </Button>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
