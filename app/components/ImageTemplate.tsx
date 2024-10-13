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
};

export const ImageTemplate = (props: ImageTemplateProps) => {
  const { src, alt, classname } = props;

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
            "flex h-52 w-full max-w-80 items-center justify-center rounded bg-gray-400 object-scale-down",
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
        onLoad={handleImageLoad}
        className={clsx(
          "drop-shadow-md",
          // +++ Note: (1) hide image when loading
          //           (2) make the image responsive
          loading ? "h-0 w-0" : "h-80 w-80 object-scale-down",
          classname,
        )}
      />
    </>
  );
};
