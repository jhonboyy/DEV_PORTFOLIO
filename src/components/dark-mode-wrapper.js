"use client";

import { useEffect } from "react";

export default function DarkModeWrapper({ children }) {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return <>{children}</>;
}
