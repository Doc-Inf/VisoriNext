"use client";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { middleware } from "../routing";

const RouteProviderContext = createContext({});
export default function RouteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [waitingRouting, setWaitingRouting] = useState(true);
  useEffect(() => {
    setWaitingRouting(true);
    middleware({
      pathname,
      router,
    });
    setWaitingRouting(false);
  }, [router, pathname]);

  return (
    <RouteProviderContext.Provider value={{ waitingRouting }}>
      {!waitingRouting && children}
    </RouteProviderContext.Provider>
  );
}
