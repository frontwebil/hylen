import { ADMIN_SESSION_COOKIE, verifyAdminCookie } from "@/lib/adminAuth";
import { LogoutAdminButton } from "@/app/admin/products/LogoutAdminButton";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminFooterProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifyAdminCookie(token)) {
    redirect("/admin/login");
  }

  return (
    <>
      <div className="admin-toolbar">
        <Link href="/">На сайт</Link>
        <Link href="/admin/products">Каталог продуктів</Link>
        <span className="muted">HYLEN • налаштування футера</span>
        <span className="admin-toolbar-split">
          <LogoutAdminButton />
        </span>
      </div>
      {children}
    </>
  );
}
