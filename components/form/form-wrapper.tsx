import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TextMD from "../typhography/textMD";

interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
  desc: string;
  sub?: string;
}

export default function FormWrapper({
  children,
  title,
  desc,
  sub,
}: FormWrapperProps) {
  return (
    <div className="pb-24 mt-40">
      <Card className="w-[calc(100vw - 4rem)] max-w-screen-md mx-auto">
        <CardHeader>
          <CardTitle className="text-4xl text-center">{title}</CardTitle>
          <TextMD className="pt-2 mt-4 text-sm text-center md:text-md text-muted-foreground font-medium">
            {desc}
          </TextMD>
        </CardHeader>
        <CardContent className="mt-4">{children}</CardContent>
      </Card>
    </div>
  );
}
