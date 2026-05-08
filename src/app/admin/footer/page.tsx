import { FooterSettingsEditor } from "@/app/admin/footer/FooterSettingsEditor";
import { getSiteSettings } from "@/lib/siteSettings";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminFooterSettingsPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <p style={{ margin: "0 0 16px" }}>
        <Link href="/admin/products">← Каталог продуктів</Link>
      </p>
      <h1 className="admin-editor-title">Налаштування футера та інфо-сторінок</h1>
      <p className="admin-panel-intro">
        Тут редагуються заголовки в футері, контакти, соцмережі та контент сторінок: Оплата,
        Доставка, Сервісне обслуговування, Повернення та обмін.
      </p>
      <FooterSettingsEditor initialSettings={settings} />
    </>
  );
}
