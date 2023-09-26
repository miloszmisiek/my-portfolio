import "../globals.scss";
import "tw-elements/dist/css/tw-elements.min.css";
import type { Metadata } from "next";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { roboto, pressStart2P } from "@/fonts";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "Milosz Misiek",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={pressStart2P.className}>{children}</body>
    </html>
  );
}
