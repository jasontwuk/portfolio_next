"use client";

import reportAccessibility from "../utilities/reportAccessibility";
import React, { useEffect } from "react";

export const AccessibilityReporter = () => {
  useEffect(() => {
    reportAccessibility(React);
  }, []);

  return null;
};
