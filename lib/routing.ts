import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { isAuthenticated } from "./auth";

export const config = {
  // all routes
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  // specific routes to check
  protectedPHP: ["/php/createVideo.php", "/php/createUser.php"],
  publicPHP: ["/php/auth.php", "/php/datiHome.php"],
  protectedRoutes: [
    "/nuovo-video",
    "/nuovo-utente",
    "/rimuovi-video",
    "/rimuovi-utente",
  ],
  authRoutes: ["/accedi"],
};

export function middleware({
  pathname,
  router,
}: {
  pathname: string;
  router: AppRouterInstance;
}) {
  const isLoggedIn = isAuthenticated();
  const isProtectedPHP = config.protectedPHP.some((item) =>
    pathname.match(item)
  );
  const isPublicPHP = config.publicPHP.some((item) =>
    pathname.startsWith(item)
  );
  const isProtectedRoute = config.protectedRoutes.some((item) =>
    pathname.match(item)
  );
  const isAuthRoute = config.authRoutes.some((item) => pathname.match(item));

  if (!isLoggedIn && (isProtectedPHP || isProtectedRoute)) {
    router.push("/accedi");
    return false;
  }
  if (isAuthRoute && isLoggedIn) {
    router.push("/");
    return false;
  }
  return config.matcher.some((item) => pathname.match(item)) || isPublicPHP;
}
