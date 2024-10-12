"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { interpolate } from "flubber";
import clsx from "clsx";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [svgPathD, setSvgPathD] = useState<string>("");
  const [isSvgLoaded, setSvgIsLoaded] = useState<boolean>(false);

  const sunRayNum: number = 12;
  const sunRayArray: number[] = [...Array(sunRayNum)].map((_, i) => i);

  type PathsType = {
    sun: {
      d: string;
      color: string;
    };
    moon: {
      d: string;
      color: string;
    };
  };

  const paths: PathsType = {
    // *** Note: for light theme
    sun: {
      d: "M23.417.048c-.161.019-.705.075-1.209.125C15.548.839 9.18 4.477 5.009 10 .602 15.836-.994 23.315.626 30.54c1.281 5.709 4.598 10.827 9.359 14.439 3.319 2.518 7.145 4.1 11.597 4.794 1.634.254 5.202.254 6.836 0 6.075-.947 11.239-3.686 15.115-8.017 3.435-3.839 5.42-8.083 6.24-13.338.146-.943.175-1.5.175-3.418 0-1.918-.029-2.475-.175-3.418-.694-4.452-2.276-8.278-4.794-11.597C40.845 4.537 34.941 1.111 28.125.207c-.946-.126-4.079-.231-4.708-.159",
      color: "#f9991c",
    },
    // *** Note: for dark theme
    moon: {
      d: "M23.542.121a3.494 3.494 0 0 1-.315.082c-.275.061-.856.566-1.024.891-.166.321-.146.967.041 1.364.087.184.391.596.676.917 4.048 4.555 5.791 10.647 4.779 16.708-.572 3.43-2.14 6.772-4.478 9.548-3.228 3.832-8.06 6.353-13.173 6.873-1.425.145-4.06.063-5.34-.167-.594-.107-1.135-.159-1.333-.13-.516.078-.91.387-1.169.916-.334.681-.271 1.036.342 1.939 3.075 4.526 7.872 8.044 13.144 9.639 4.05 1.225 8.148 1.423 12.27.591 9.726-1.963 17.457-9.672 19.421-19.364.888-4.387.638-8.606-.76-12.815-1.282-3.858-3.274-7.033-6.217-9.908-2.723-2.66-5.697-4.508-9.237-5.74C29.296.814 27.038.332 25.292.212c-.413-.028-.957-.067-1.209-.086-.252-.02-.496-.022-.541-.005",
      color: "#f9d71c",
    },
  };

  useEffect(() => {
    // *** Note: initialize theme from local storage or system preferences
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      // *** Note: use the moon path
      setSvgPathD(paths.moon.d);
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      // *** Note: use the sun path
      setSvgPathD(paths.sun.d);
    }

    // *** Note: set isSvgLoaded to true
    setSvgIsLoaded(true);
  }, [paths.moon.d, paths.sun.d]);

  const toggleTheme = () => {
    // *** Note: toggle theme
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }

    // *** Note: set isSvgLoaded to true
    setSvgIsLoaded(true);

    // *** Note: define start and end paths based on the current theme
    const fromPath = svgPathD;
    const toPath = theme === "light" ? paths.moon.d : paths.sun.d;

    // *** Note: use Flubber to interpolate between the current and target paths
    const pathInterpolator = interpolate(fromPath, toPath, {
      maxSegmentLength: 0.1,
    });

    // *** Note: set up animation duration and frames for the path morphing
    // +++ 0.4 second animation
    const duration = 0.4;
    // +++ assuming 60 FPS
    const frames = 60 * duration;
    let frame = 0;

    const animatePath = () => {
      if (frame <= frames) {
        const progress = frame / frames;
        // *** Note: set the interpolated path
        setSvgPathD(pathInterpolator(progress));
        frame += 1;
        // *** Note: request the next frame
        requestAnimationFrame(animatePath);
      }
    };

    animatePath();
  };

  return (
    <button onClick={toggleTheme} className="p-2" aria-describedby="theme-mode">
      <div className="relative">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="currentColor"
          className="h-6 w-6"
        >
          <motion.path
            d={svgPathD}
            fill={theme === "light" ? paths.sun.color : paths.moon.color}
          />
        </motion.svg>

        {/* Note: sun rays */}
        <div
          className={clsx(
            // +++ Note: only show sun rays when in "light" mode and the "sun" svg is loaded
            theme === "light" && isSvgLoaded ? "opacity-100" : "opacity-0",
            "absolute left-0 top-0 h-full w-full duration-200",
          )}
        >
          {sunRayArray.map((_, i) => {
            const rotation = (i + 1) * (360 / sunRayArray.length);

            return (
              <div
                key={i}
                className={clsx(
                  "absolute h-6 w-6",
                  // +++ Note: individual ray
                  "before:absolute before:-top-2 before:left-1/2 before:h-1.5 before:w-[0.15rem] before:-translate-x-1/2 before:rounded-xl before:bg-yellow-400 before:duration-200 before:content-['']",
                  // +++ Note: rays' rotation
                  `rotate-[${rotation}deg]`,
                  // +++ Note: rays grow and fade from the centre of the sun.
                  theme === "light"
                    ? "before:translate-y-0"
                    : "before:translate-y-2",
                )}
              ></div>
            );
          })}
        </div>
      </div>

      <p className="visually-hidden" id="theme-mode">
        light / dark theme mode switch button
      </p>
    </button>
  );
};
