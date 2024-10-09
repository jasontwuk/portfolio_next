import React from "react";
import Link from "next/link";

import { UnderlineText } from "./UnderlineText";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-2 text-center tracking-wide">
      <span>
        © 2020 - present&nbsp;
        <Link href="/" className="group no-underline">
          <UnderlineText>Jason Liao</UnderlineText>
        </Link>
        .
      </span>

      <span>All Rights Reserved.</span>
    </footer>
  );
};
