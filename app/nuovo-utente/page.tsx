"use client";

import RegisterForm from "@/components/form/form-user";
import RouteProvider from "@/lib/providers/route-provider";

export default function Page() {
  return (
    <RouteProvider>
      <RegisterForm />
    </RouteProvider>
  );
}
