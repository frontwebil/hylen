import "@/app/admin/style.css";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-shell">
      <main className="admin-shell-main">{children}</main>
    </div>
  );
}
