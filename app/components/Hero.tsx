"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import portrait from "../img/portrait.svg";
import { nunito } from "../utilities/fonts";

export const Hero = () => {
  useEffect(() => {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const greeting1 = document.getElementById("greeting1");
    const greeting2 = document.getElementById("greeting2");
    const greeting3 = document.getElementById("greeting3");
    const screenCode1 = document.getElementById("screen_code_1");
    const screenCode2 = document.getElementById("screen_code_2");
    const screenCode3 = document.getElementById("screen_code_3");
    const introName = document.getElementById("intro_name");
    const introPortraitContainer = document.getElementById(
      "intro_portrait_container",
    );

    setTimeout(() => {
      if (introPortraitContainer) {
        introPortraitContainer.classList.remove("translate-y-8");
        introPortraitContainer.classList.remove("opacity-0");
        introPortraitContainer.classList.add("translate-y-0");
        introPortraitContainer.classList.add("opacity-100");
      }
    }, 200);
    setTimeout(() => {
      if (greeting1) {
        greeting1.classList.remove("opacity-0");
        greeting1.classList.add("opacity-100");
      }
      if (screenCode1) {
        screenCode1.classList.remove("opacity-0");
        screenCode1.classList.add("opacity-100");
      }
    }, 400);
    setTimeout(() => {
      if (greeting2) {
        greeting2.classList.remove("opacity-0");
        greeting2.classList.add("opacity-100");
      }
      if (screenCode2) {
        screenCode2.classList.remove("opacity-0");
        screenCode2.classList.add("opacity-100");
      }
    }, 800);
    setTimeout(() => {
      if (greeting3) {
        greeting3.classList.remove("opacity-0");
        greeting3.classList.add("opacity-100");
      }
      if (screenCode3) {
        screenCode3.classList.remove("opacity-0");
        screenCode3.classList.add("opacity-100");
      }
    }, 1200);
    setTimeout(() => {
      if (introName) {
        introName.classList.remove("translate-y-8");
        introName.classList.remove("opacity-0");
        introName.classList.add("translate-y-0");
        introName.classList.add("opacity-100");
      }
    }, 1600);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center md:flex-row"
      id="intro"
    >
      <div className="flex w-full flex-col gap-4 text-center md:w-1/2 md:px-5 md:text-left">
        <div
          className={`${nunito.className} flex items-end justify-center gap-1 font-black tracking-widest md:justify-start`}
        >
          <span
            className="text-xl text-amber-300 opacity-0 duration-200 md:text-2xl"
            id="greeting1"
          >
            Hello.
          </span>
          <span
            className="text-2xl text-amber-400 opacity-0 duration-200 md:text-3xl"
            id="greeting2"
          >
            Hello.
          </span>
          <span
            className="text-3xl text-amber-500 opacity-0 duration-200 md:text-4xl"
            id="greeting3"
          >
            Hello.
          </span>
        </div>

        <h1
          className={`${nunito.className} translate-y-8 text-4xl font-thin text-slate-600 opacity-0 duration-200 md:text-5xl`}
          id="intro_name"
        >
          I&apos;m Jason Liao,
          <br /> a front-end developer.
        </h1>
      </div>

      <div
        className="max-w-128 flex w-full items-center md:min-h-[452px] md:w-1/2 md:px-5"
        id="intro_portrait"
      >
        <div
          className="relative w-full translate-y-8 opacity-0 duration-200"
          id="intro_portrait_container"
        >
          <Image
            src={portrait}
            alt="portrait image"
            className="h-auto w-full px-2.5"
            priority={true}
          />

          <div className="text-xxs absolute left-[21.5%] top-[37%] flex h-[36%] w-[57%] flex-col items-center justify-center gap-1 rounded-md border-2 border-white bg-white bg-opacity-50 tracking-wider text-blue-500 [transform:rotateY(180deg)] xs:gap-2 xs:text-xs">
            <span className="opacity-0 duration-200" id="screen_code_1">
              console.log(&quot;Hello.&quot;);
            </span>
            <span className="opacity-0 duration-200" id="screen_code_2">
              console.log(&quot;Hello.&quot;);
            </span>
            <span className="opacity-0 duration-200" id="screen_code_3">
              console.log(&quot;Hello.&quot;);
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
