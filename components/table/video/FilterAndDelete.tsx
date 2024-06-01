"use client";
import * as React from "react";
import { Table as TableType, RowSelectionState } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import DeleteVideoForm from "./delete-video-form";
import { Logger } from "@/constants/types";

export interface FilterAndDeleteProps<TData> {
  table: TableType<TData>;
  rowSelection: RowSelectionState;
  logger: Logger | null;
  setLogger: React.Dispatch<React.SetStateAction<Logger | null>>;
}
export function FilterAndDelete<TData>({
  table,
  rowSelection,
  logger,
  setLogger,
}: FilterAndDeleteProps<TData>) {
  return (
    <div className="flex items-center m-auto justify-between 2xl:w-[1200px] py-4 lg:w-full">
      <Input
        placeholder="Cerca titolo..."
        value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("title")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
      <DeleteVideoForm
        table={table}
        rowSelection={rowSelection}
        setLogger={setLogger}
      />
    </div>
  );
}
