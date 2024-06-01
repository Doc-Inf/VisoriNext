"use client";

import DeleteUserForm from "@/components/form/form-delete-user";
import RouteProvider from "@/lib/providers/route-provider";

export default function Page() {
  return (
    <RouteProvider>
      <DeleteUserForm />
    </RouteProvider>
  );
}
