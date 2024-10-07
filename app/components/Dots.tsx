"use client";

import React, { useEffect } from "react";

export const Dots = () => {
  const addDot = () => {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const heroContainer = document.getElementById("hero_container");
    const dotsContainer = document.getElementById("dots_container");

    // *** return when heroContainer or dotsContainer not exist
    if (!heroContainer || !dotsContainer) return;

    // !!!!!!!! VARIABLES !!!!!!!!
    const dotAmount = 50;
    const dotSize = 10;

    // *** clear any existing dots before adding new ones
    dotsContainer.innerHTML = "";

    for (let i = 0; i < dotAmount; i++) {
      const newDot = document.createElement("div");
      const size = Math.ceil(dotSize * Math.random());

      newDot.classList.add("dot");

      newDot.style.width = `${size}px`;
      newDot.style.height = `${size}px`;
      newDot.style.top = `${heroContainer.offsetHeight * Math.random()}px`;
      newDot.style.left = `${heroContainer.clientWidth * Math.random()}px`;
      // console.log(newDot);
      dotsContainer.appendChild(newDot);
    }
  };

  const dotBlink = () => {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < dots.length; i++) {
      // *** make about 30% of the dots blink
      const boolean = Math.random() * 10 > 7;

      // *** remove previous blink status
      dots[i].classList.remove("blink");

      if (boolean) {
        dots[i].classList.add("blink");
      }
    }
  };

  useEffect(() => {
    addDot();

    // *** dots blinking effect
    const heroContainer = document.getElementById("hero_container");
    let blinkInterval: ReturnType<typeof setInterval> | null = null;

    const startBlinking = () => {
      // console.log("mouse moving");

      if (!blinkInterval) {
        // console.log("start");
        dotBlink();
        blinkInterval = setInterval(dotBlink, 3000);
      }
    };

    const stopBlinking = () => {
      if (blinkInterval) {
        // console.log("stop");
        clearInterval(blinkInterval);
        blinkInterval = null;
      }
    };

    if (heroContainer) {
      heroContainer.addEventListener("mouseover", startBlinking);
      heroContainer.addEventListener("mouseleave", stopBlinking);
    }

    // *** handle window resizing
    const handleResize = () => {
      // *** re-add dots on window resize
      addDot();
    };

    // *** add resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      if (heroContainer) {
        heroContainer.removeEventListener("mouseover", startBlinking);
        heroContainer.removeEventListener("mouseleave", stopBlinking);
      }

      // *** remove resize event listener
      window.removeEventListener("resize", handleResize);

      // *** Clear interval when the component unmounts
      stopBlinking();
    };
  }, []);

  return (
    <div
      className="dots_container absolute left-0 top-0 -z-50"
      id="dots_container"
    ></div>
  );
};
