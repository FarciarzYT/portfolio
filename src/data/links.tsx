import { LinksType } from "@/types/LinksType";
import { SlDocs } from "react-icons/sl";
import { GrContact } from "react-icons/gr";

export const links: LinksType[] = [
  {
    href: "/cv",
    title: "CV",
    icon: <SlDocs className="text-xs" />,
  },
  {
    href: "mailto:kontakt@tlusty.dev",
    title: "Kontakt",
    icon: <GrContact className="text-xs" />,
  },
];

export const linksEn: LinksType[] = [
  {
    href: "/cv",
    title: "CV",
    icon: <SlDocs className="text-xs" />,
  },
  {
    href: "mailto:kontakt@tlusty.dev",
    title: "Contact",
    icon: <GrContact className="text-xs" />,
  },
];
