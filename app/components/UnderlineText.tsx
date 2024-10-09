import React from "react";
import clsx from "clsx";

type UnderlineTextProps = {
  className?: string;
  children: React.ReactNode;
};

export const UnderlineText = (props: UnderlineTextProps) => {
  const { className, children } = props;

  return (
    <div className={clsx("inline-block tracking-wide", className)}>
      <span
        className={clsx(
          "relative inline overflow-hidden text-blue-600",
          // +++ Note: the hidden underline
          "after:absolute after:-bottom-0.5 after:left-0 after:z-[-1] after:h-px after:w-0 after:bg-blue-600 after:duration-200 after:content-['']",
          // +++ Note: show the hidden underline when hover
          "group-hover:after:w-full",
        )}
      >
        {children}
      </span>
    </div>
  );
};