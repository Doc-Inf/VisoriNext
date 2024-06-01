"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Column, ColumnDef, createColumnHelper } from "@tanstack/react-table";
import TooltipHeader from "@/components/tooltip-header";
import { ClientVideo } from "@/constants/types";
import CopyInput from "@/components/videos/copy-input";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

const Sortable = ({
  header,
  column,
}: {
  header: string;
  column: Column<ClientVideo, unknown>;
}) => {
  return (
    <Button
      role="button"
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {header}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

export const columns: ColumnDef<ClientVideo>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "title",
    accessorKey: "title",
    header: ({ column }) => <Sortable header="Titolo" column={column} />,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "author",
    header: ({ column }) => <Sortable header="Autore" column={column} />,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "duration",
    header: ({ column }) => <Sortable header="Durata" column={column} />,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "language",
    header: "Lingua",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "link",
    header: "Link",
    cell: (info) => (
      <CopyInput link={info.getValue() as string} input={false} />
    ),
  },
];
