import { useTranslation } from "../i18n";
import ProfilePic from "./components/profilePic";
import { firaCode, inter, questrial, roboto } from "@/fonts";
import TypeWriter from "./components/typewriter";
import Arrow from "../../../public/arrowFunc.svg";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "translation");

  return (
    <div className="relative">
      {/* <div className="w-100 flex justify-center justify-items-center">
        <h1
          className={`${questrial.className} text-4xl md:text-6xl tracking-widest`}
        >
          MILOSZ MISIEK
        </h1>
      </div> */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ProfilePic />
        </div>
        <div
          className={`${firaCode.className} w-100 flex justify-items-center p-8 tracking-wider`}
        >
          <TypeWriter />
        </div>
      </div>
    </div>
  );
}
