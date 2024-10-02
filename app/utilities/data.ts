import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type IconsDataType = {
  name: string;
  link: string;
  sign: IconDefinition;
  id: number;
}[];

export const icons: IconsDataType = [
  {
    name: "github",
    link: "https://github.com/jasontwuk",
    sign: faGithub,
    id: 1,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jasonliaocode/",
    sign: faLinkedin,
    id: 2,
  },
  {
    name: "jasoncodeuk@gmail.com",
    link: "mailto:jasoncodeuk@gmail.com",
    sign: faEnvelope,
    id: 3,
  },
];
