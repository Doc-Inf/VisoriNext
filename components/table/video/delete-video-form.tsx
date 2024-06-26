import * as z from "zod";
import { SelectedTableForm } from "@/schemas";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { RowSelectionState, Table } from "@tanstack/react-table";
import { Logger } from "@/constants/types";
import { Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { isAuthenticated } from "@/lib/auth";

export default function DeleteVideoForm({
  table,
  rowSelection,
  setLogger,
}: {
  table: Table<any>;
  rowSelection: RowSelectionState;
  setLogger: React.Dispatch<React.SetStateAction<Logger | null>>;
}) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof SelectedTableForm>>({
    resolver: zodResolver(SelectedTableForm),
    defaultValues: {
      idx: [],
    },
  });

  // update form value on row selection change
  useEffect(() => {
    form.setValue(
      "idx",
      Object.keys(rowSelection).map((item) => Number(item))
    );
  }, [rowSelection, form]);

  const onSubmit = async () => {
    setOpen(false);

    if (!isAuthenticated()) {
      toast({
        title: "Errore",
        description: "Devi essere loggato per rimuovere un video",
      });
      return;
    }

    const selectedVideos = table
      .getSelectedRowModel()
      .rows.map((item) => item.original);

    const log: Logger = {
      success: [],
      error: [],
    };

    for (const video of selectedVideos) {
      const res = await fetch("/api/delete-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: video.title, author: video.author }),
      });

      if (res.status === 200) log.success.push(video);
      else log.error.push(video);
    }

    toast({
      title: "Rimozione completata",
      description: `${log.success.length} video rimossi con successo \n ${log.error.length} video non rimossi`,
    });
    setLogger(log);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="idx"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="hidden"
                  value={Object.entries(rowSelection)
                    .map((item) => Number(item[0]))
                    .join(", ")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col-reverse justify-between text-sm gap-2  lg:flex-row lg:items-center text-muted-foreground">
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
              <Button>
                Rimuovi i video selezionati <Trash2 className="w-4 h-4 ms-2" />
              </Button>
            </AlertDialogTrigger>
            {table.getFilteredSelectedRowModel().rows.length === 0 ? (
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Nessun video selezionato</AlertDialogTitle>
                  <AlertDialogDescription>
                    Per eliminare un video devi selezionarlo nella tabella.{" "}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annulla</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            ) : (
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Sei sicuro di voler rimuovere i video selezionati?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    I video saranno rimossi definitivamente dalla videoteca.
                    Questa azione non è reversibile.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annulla</AlertDialogCancel>
                  <AlertDialogAction className="px-0">
                    <Button
                      type="submit"
                      onClick={form.handleSubmit(onSubmit)}
                      variant="destructive"
                      className="w-full"
                    >
                      Continua
                    </Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            )}
          </AlertDialog>
        </div>
      </form>
    </Form>
  );
}
