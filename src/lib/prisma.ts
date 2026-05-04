import { PrismaClient } from "@/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

/** Після `prisma generate` у dev глобальний singleton може лишитися старим і без нових моделей. */
function homepageCatalogDelegateOk(client: PrismaClient): boolean {
  const d = client as unknown as {
    homepageCatalogItem?: { count?: (...args: unknown[]) => unknown };
  };
  return typeof d.homepageCatalogItem?.count === "function";
}

function createPrisma(): PrismaClient {
  return new PrismaClient({ adapter });
}

const cached = globalForPrisma.prisma;
const prisma =
  cached && homepageCatalogDelegateOk(cached) ? cached : createPrisma();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
