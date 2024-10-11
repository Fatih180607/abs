import { defineMiddleware } from "astro:middleware";
import { supabase } from "../lib/supabase";

const protectedRoutes = ["/menu"];

export const onRequest = defineMiddleware(async (context, next) => {
  const accessToken = context.cookies.get("sb-access-token");
  const refreshToken = context.cookies.get("sb-refresh-token");

  const isOnProtectedRoute = protectedRoutes.includes(context.url.pathname);

  if (isOnProtectedRoute) {
    if (!accessToken?.value || !refreshToken?.value) {
      return context.redirect("/sign");
    }

    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken.value,
      refresh_token: refreshToken.value,
    });

    if (error) {
      context.cookies.delete("sb-access-token");
      context.cookies.delete("sb-refresh-token");

      return context.redirect("/sign");
    }

    context.locals.user = data.user;
  }
  return next();
});
