import { useTranslation } from "../i18n";
import Hero from "./components/hero";
import ProfilePic from "./components/profilePic";
import { firaCode, inter, questrial, roboto } from "@/fonts";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "translation");

  return (
    <div className="relative">
      {/* <ProfilePic /> */}
      {/* <div className="w-100 flex justify-center justify-items-center">
        <h1
          className={`${questrial.className} text-4xl md:text-6xl tracking-widest`}
        >
          MILOSZ MISIEK
        </h1>
      </div> */}
      <div
        className={`${firaCode.className} w-100 flex justify-items-center p-8 tracking-wider`}
      >
        <Hero />
      </div>
    </div>
  );
}
