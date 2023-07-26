import { APP_ROUTES } from "@/services/app-routes";

export function checkRoute(path: string): boolean {
  const publicRoutes = Object.values(APP_ROUTES.public);

  return publicRoutes.includes(path);
}