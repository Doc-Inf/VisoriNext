import { ClientVideo } from "@/constants/types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Dialog, DialogTrigger } from "../ui/dialog";
import WatchVideo from "./video-watch";
import Image from "next/image";
import Par from "../typhography/par";

export default function VideoCard({
  title,
  description,
  duration,
  author,
  link,
  thumbnail,
  language,
}: ClientVideo) {
  return (
    <Dialog modal={true}>
      <Card className="relative border group bg-card w-[360px] m-auto">
        {/* HOVER BG / FALLBACK */}
        <div className="w-full rounded-lg bg-gradient-to-r from-red-900 via-red-500 to-orange-500 p-[0px]">
          {/* IMG */}
          <CardHeader className="relative p-0">
            <Image
              src={thumbnail}
              height={0}
              width={360}
              alt="Movie image"
              className="w-[360px] 
            h-[203px] object-cover bg-center rounded-t-lg group-hover:opacity-50"
            />
          </CardHeader>
          {/* HIDDEN STUFF, DESCRIPTION, WATCH AND LIKE STATE */}
          <div className="absolute bottom-0 w-full  h-[203px] rounded-lg opacity-0 transition-all duration-300 group-hover:opacity-100 bg-muted/80">
            <CardContent className="flex flex-col justify-between h-full p-4 rounded-t-lg bg-muted/80">
              {/* QUICK DESCR */}
              <CardDescription className="mb-4 text-justify text-muted-foreground">
                {description.split(" ").slice(0, 30).join(" ")}{" "}
              </CardDescription>
              {/* WATCH BUTTON */}
              <div className="flex items-center justify-between mb-0 bg-muted/95">
                <DialogTrigger asChild>
                  <Button>Guarda</Button>
                </DialogTrigger>
                <Par className="!mt-0">
                  <span className="font-bold">Durata</span> {duration}
                </Par>
              </div>
            </CardContent>

            {/* ALWAYS SHOWN */}
          </div>
          <CardFooter className="flex flex-wrap items-center justify-between p-4 rounded-b-lg bg-muted border-t-slate-200">
            <CardTitle className="overflow-hidden text-xl font-semibold whitespace-nowrap">
              {title}
            </CardTitle>
          </CardFooter>
        </div>
      </Card>
      <WatchVideo
        {...{ title, link, description, author, language, thumbnail, duration }}
      />
    </Dialog>
  );
}
