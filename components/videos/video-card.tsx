import { Heart, ThumbsDown, ThumbsUp } from "lucide-react";
import Par from "../typhography/par";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Dialog, DialogTrigger } from "../ui/dialog";
import WatchVideo from "./video-watch";

export default function VideoCard({
  title,
  description,
  link,
  thumbnail,
  categories,
}: Record<"title" | "description" | "link" | "thumbnail", string> & {
  categories: string[];
}) {
  return (
    <Dialog>
      <Card className="relative border group bg-card w-[360px] m-auto">
        {/* HOVER BG / FALLBACK */}
        <div className="w-full rounded-lg bg-gradient-to-r from-red-900 via-red-500 to-orange-500 p-[0px]">
          {/* IMG */}
          <CardHeader className="relative p-0">
            <img
              src={thumbnail}
              alt="Movie image"
              className="w-[360px] 
            h-[203px] object-cover bg-center rounded-t-lg group-hover:opacity-50"
            />
          </CardHeader>
          {/* HIDDEN STUFF, DESCRIPTION, WATCH AND LIKE STATE */}
          <div className="absolute bottom-0 w-full  h-[203px] rounded-lg opacity-0 transition-all duration-300 group-hover:opacity-100 bg-muted/80">
            <CardContent className="p-4 rounded-t-lg flex flex-col justify-between h-full bg-muted/80">
              {/* QUICK DESCR */}
              <CardDescription className="mb-4 text-justify text-muted-foreground">
                {description.split(" ").slice(0, 30).join(" ")}{" "}
              </CardDescription>
              {/* WATCH AND LIKE */}
              <div className="flex items-center mb-0 justify-between">
                <DialogTrigger asChild>
                  <Button>Guarda</Button>
                </DialogTrigger>
                <div className="flex space-x-4">
                  {" "}
                  {categories.map((category, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="border border-destructive"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>

            {/* ALWAYS SHOWN */}
          </div>
          <CardFooter className="flex flex-wrap items-center justify-between p-4 rounded-b-lg bg-muted border-t-slate-200">
            <CardTitle className="text-xl font-semibold whitespace-nowrap overflow-hidden">
              {title}
            </CardTitle>
          </CardFooter>
        </div>
      </Card>
      <WatchVideo {...{ title, link, description }} />
    </Dialog>
  );
}
