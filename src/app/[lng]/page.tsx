import { useTranslation } from "../i18n";
import LandingSection from "./components/landingSection";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "translation");

  return (
    // Wrapper
    <LandingSection />
  );
}
