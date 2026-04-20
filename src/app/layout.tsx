import type { Metadata } from "next";
import { Commissioner, Inter } from "next/font/google";
import "./globals.css";
import "./reset.css";

const commissionerFont = Commissioner({ subsets: ["latin"] });
const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HYLEN",
  description:
    "HYLEN – це більше, ніж інженерний бренд. Це надійний партнер для тих, хто рухає країну вперед. З 1979 року ми створюємо техніку, яка не підводить. У кожному міліметрі нашої продукції – досвід і характер. Наша техніка розроблена, щоб бути продовженням сили. Щоб не підвести, коли все тримається на міліметрі.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${commissionerFont.className} ${interFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
