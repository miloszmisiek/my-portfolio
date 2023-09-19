import { Inter, Libre_Caslon_Display, Questrial, Roboto } from "next/font/google";

const libreCaslonDisplay = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const questrial = Questrial({ weight: "400", subsets: ["latin"] });

export { libreCaslonDisplay, inter, roboto, questrial };
