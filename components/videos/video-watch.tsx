import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Par from "../typhography/par";
import { Separator } from "../ui/separator";
import { Triangle, Youtube } from "lucide-react";
import { Label } from "../ui/label";
import QRCode from "./qr-code";
import CopyInput from "./copy-input";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

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
    <DialogContent className="md:w-[860px]">
      <DialogHeader className="max-w-[360px] md:max-w-[860px]">
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <DialogDescription className="text-foreground max-h-[60vh] overflow-y-scroll">
        {/* VIDEO DESC */}
        <ScrollArea className="max-w-[360px] md:max-w-[860px]max-h-[30vh] overflow-auto">
          <Par>{description}</Par>
        </ScrollArea>
        <Separator className="my-4" />
        {/* WATCH THE VIDEO BTN */}
        <Link
          href={link}
          className={cn(
            buttonVariants(),
            "flex items-center justify-between p-2 m-auto mb-0 rounded-sm gap-2 bg-primary w-fit text-slate-100"
          )}
        >
          {" "}
          <Par>Guarda il video</Par>
          <Youtube />
        </Link>
        <Triangle
          className="m-auto mb-1 -mt-2 rotate-180 fill-primary hover:fill-primary/90 "
          strokeWidth={0}
        />
        {/* QR CODE */}
        <div className="m-auto w-[316px] border-8 rounded-sm border-primary mb-8 ">
          <QRCode link={link} />
        </div>
        {/* COPY TO CLIPBOARD*/}
        <Label htmlFor="link">
          <Par className="mb-2 text-center">
            Scansiona il QR code oppure copia il link:
          </Par>
        </Label>
        <CopyInput link={link} />
      </DialogDescription>
    </DialogContent>
  );
}
