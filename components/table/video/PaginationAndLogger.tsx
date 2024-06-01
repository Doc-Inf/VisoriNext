"use client";
import * as React from "react";
import { Table as TableType } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import Par from "@/components/typhography/par";
import { Logger } from "@/constants/types";
import TextMD from "@/components/typhography/textMD";
import { Separator } from "@/components/ui/separator";

export function PaginationAndLogger<TData>({
  table,
  logger,
}: {
  table: TableType<TData>;
  logger: Logger | null;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="flex items-center m-auto justify-between 2xl:w-[1200px] py-4 lg:w-full">
        <Par className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} di{" "}
          {table.getFilteredRowModel().rows.length}{" "}
          {table.getFilteredRowModel().rows.length === 1
            ? "opzione"
            : "opzioni"}
          {table.getFilteredSelectedRowModel().rows.length === 1
            ? " selezionata"
            : " selezionate"}
          .
        </Par>

        <div className="flex items-center justify-end py-4  space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Precedente
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Prossima
          </Button>
        </div>
      </div>
      {logger && (
        <>
          <Button onClick={() => setOpen(!open)}>Mostra il log</Button>
          {open && (
            <div className="pb-20 m-auto mt-4 w-fit">
              <TextMD className="mb-4 text-center">
                Video rimossi ({logger.success.length})
              </TextMD>
              <ul>
                {logger.success.map((video) => (
                  <li key={video.duration}>
                    <Par>{video.title}</Par>
                    <Separator />
                  </li>
                ))}
              </ul>
              <TextMD className="my-4 text-center">
                Errori ({logger.error.length})
              </TextMD>
              <ul>
                {logger.error.map((video) => (
                  <li key={video.duration}>
                    <Par>{video.title}</Par>
                    <Separator />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
}
