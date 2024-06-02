import LoginForm from "@/components/form/form-login";
import RouteProvider from "@/lib/providers/route-provider";

export default function Page() {
  return (
    <RouteProvider>
      <LoginForm />
    </RouteProvider>
  );
}
