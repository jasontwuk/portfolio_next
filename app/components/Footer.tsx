import React from "react";
import clsx from "clsx";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="flex justify-center items-center flex-wrap gap-2 text-center pb-12">
      <span>
        © 2020 - present&nbsp;
        <Link href="/" className="no-underline group">
          <div className="inline-block">
            <em
              className={clsx(
                "inline relative overflow-hidden text-blue-600 not-italic",
                // +++ Note: the hidden underline
                "after:content-[''] after:absolute after:z-[-1] after:left-0 after:-bottom-0.5 after:w-0 after:bg-blue-600 after:h-px after:duration-200",
                // +++ Note: show the hidden underline when hover
                "group-hover:after:w-full"
              )}
            >
              Jason Liao
            </em>
          </div>
        </Link>
        .
      </span>

      <span>All Rights Reserved.</span>
    </section>
  );
};
