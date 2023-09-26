import { Fira_Code, Inter, Libre_Caslon_Display, Questrial, Roboto, Press_Start_2P } from "next/font/google";

const libreCaslonDisplay = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const questrial = Questrial({ weight: "400", subsets: ["latin"] });
const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] });
const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export { libreCaslonDisplay, inter, roboto, questrial, firaCode, pressStart2P };
