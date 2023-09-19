import { useTranslation } from "../i18n";
import ProfilePic from "./components/profilePic";
import { inter, questrial, roboto } from "@/fonts";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "translation");

  return (
    <div className="relative">
      <ProfilePic />
      <div className="w-100 flex justify-center justify-items-center">
        <h1
          className={`${questrial.className} text-4xl md:text-6xl tracking-widest`}
        >
          MILOSZ MISIEK
        </h1>
      </div>
    </div>
  );
}
