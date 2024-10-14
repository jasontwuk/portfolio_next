"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

type ImageTemplateProps = {
  src: StaticImageData;
  alt: string;
  classname?: string;
  isContact?: boolean;
};

export const ImageTemplate = (props: ImageTemplateProps) => {
  const { src, alt, classname, isContact } = props;

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        // *** Note: image placeholder
        <div
          className={clsx(
            "flex items-center justify-center bg-gray-400 object-scale-down",
            isContact
              ? "aspect-square w-56 rounded-full xs:w-72"
              : "h-52 w-full max-w-80 rounded",
            // +++ Note: animate effect
            "animate-pulse",
            // +++ Note: for dark mode
            "dark:bg-gray-800",
          )}
        >
          <FontAwesomeIcon
            icon={faImage}
            className="block h-10 w-10 text-gray-200 dark:text-gray-600"
          />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        // *** Note: comment out "onLoad" to test image placeholder
        onLoad={handleImageLoad}
        className={clsx(
          !isContact && "drop-shadow-md",
          // +++ Note: (1) hide image when loading (don't use "hidden" class, otherwiste the "onLoad" property won't be triggered.)
          //           (2) make the image responsive
          loading
            ? "h-0 w-0"
            : isContact
              ? "w-full max-w-72 rounded-full"
              : "h-80 w-80 object-scale-down",
          classname,
        )}
      />
    </>
  );
};
