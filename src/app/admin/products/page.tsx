import { CatalogAdmin, type CatalogRowView } from "@/app/admin/products/CatalogAdmin";
import { getHomepageCatalogRowsOrdered } from "@/lib/homepageCatalog";

export const dynamic = "force-dynamic";

export default async function AdminProductsListPage() {
  const raw = await getHomepageCatalogRowsOrdered();

  const rows: CatalogRowView[] = raw.map((r) => ({
    id: r.id,
    slug: r.slug,
    titleUk: r.titleUk,
    titleEn: r.titleEn,
    subtitleUk: r.subtitleUk,
    subtitleEn: r.subtitleEn,
    imagePath: r.imagePath,
    sortOrder: r.sortOrder,
  }));

  return (
    <>
      <h1 className="admin-editor-title">Редагування продуктів</h1>
      <p className="admin-products-intro">
        Блок із картками на головній сторінці тепер береться з бази PostgreSQL та показує той самий
        порядок і тексти, що й на сайті. Тут ви змінюєте <strong>картку каталогу</strong> або
        відкриваєте повний текст сторінки лінії. Нові адреси (наприклад{" "}
        <code>/nova-linka</code>) з’являються лише після кнопки «Нова лінійка» — старі ШІД
        ресурсу <code>/mist-mij-lankamy</code> тощо лишаються як було.
      </p>
      <CatalogAdmin rows={rows} />
      <p className="admin-vis-footer-hint" style={{ marginTop: 28 }}>
        Після «Прибрати з головної» сторінка за URL може залишитися в інтернеті, поки її явно не
        приберете з меню або не видалите — відвідувач отримає 404 лише коли запису немає в каталозі
        й немає збереженого контенту.
      </p>
    </>
  );
}
