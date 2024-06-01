"use client";

import * as React from "react";
import {
  ColumnDef,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
  Table as TableType,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Logger } from "@/constants/types";
import { FilterAndDelete } from "./FilterAndDelete";
import { PaginationAndLogger } from "./PaginationAndLogger";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function VideoTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      rowSelection,
      columnFilters,
      columnVisibility,
    },
  });

  const [logger, setLogger] = React.useState<Logger | null>(null);

  return (
    <>
      <div className="px-4 md:px-10">
        <FilterAndDelete
          table={table}
          rowSelection={rowSelection}
          logger={logger}
          setLogger={setLogger}
        />
        <FullTable table={table} columns={columns} />
        <PaginationAndLogger table={table} logger={logger} />
      </div>
    </>
  );
}

function FullTable<TData, TValue>({
  table,
  columns,
}: {
  table: TableType<TData>;
  columns: ColumnDef<TData, TValue>[];
}) {
  return (
    <Table className="md:w-full lg:w-[1200px]  md:overflow-x-hidden m-auto w-[562px] overflow-x-auto">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="hover:bg-transparent">
            {headerGroup.headers.map((header) => {
              return (
                header.column.columnDef.header !== "hide" && (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              className="border-0 border-b bg-background hover:bg-neutral-200/50 dark:hover:bg-neutral-900"
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  cell.column.columnDef.header !== "hide" && (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  )
                );
              })}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}


