import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utilities/data";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-12">
      <Link
        href="/"
        className="group flex items-center justify-center"
        aria-label="Homepage Link"
      >
        <Logo />
      </Link>

      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-1 rounded-full border border-slate-300 p-1">
          {icons.map((icon) => (
            <a
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              key={icon.id}
              className="rounded-full bg-slate-300 p-1.5 text-white duration-200 hover:bg-blue-600"
            >
              <FontAwesomeIcon icon={icon.sign} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
