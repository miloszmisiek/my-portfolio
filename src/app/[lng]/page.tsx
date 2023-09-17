import Image from "next/image";
import { useTranslation } from "../i18n";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "translation");
  return <div>{t("homepage")}</div>;
  
}
