import React from "react";
import Link from "next/link";

import logo from "../img/logo_blue.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utilities/data";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-12">
      <Link href="/" className="flex justify-center items-center group">
        <Image src={logo} alt="logo" />

        <h3 className="text-lg flex flex-col justify-center leading-5 font-bold text-blue-900 group-hover:text-blue-600 duration-200">
          <span>Jason</span>
          <span>Liao</span>
        </h3>
      </Link>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-1 flex-col p-1 border border-slate-300 rounded-full">
          {icons.map((icon) => (
            <a
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              key={icon.id}
              className="p-1.5 bg-slate-300 duration-200 hover:bg-blue-600 rounded-full text-white"
            >
              <FontAwesomeIcon icon={icon.sign} className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
