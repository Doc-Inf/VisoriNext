"use client";
import DeleteVideoForm from "@/components/form/form-delete-video";
import RouteProvider from "@/lib/providers/route-provider";

export default function DeleteVideoTable() {
  return (
    <RouteProvider>
      <DeleteVideoForm />
    </RouteProvider>
  );
}
