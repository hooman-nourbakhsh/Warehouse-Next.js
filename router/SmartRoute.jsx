import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookie } from "utils/cookie";

function SmartRoute({ children, requiresAuth }) {
  const router = useRouter();
  const token = getCookie("token");
  useEffect(() => {
    if (requiresAuth && !token) router.push("/login");
    if (!requiresAuth && token) router.push("/");
  }, [token, requiresAuth, router]);

  return <>{children}</>;
}

export default SmartRoute;
