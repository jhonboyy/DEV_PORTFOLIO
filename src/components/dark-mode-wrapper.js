"use client";

import { useEffect } from "react";

export default function DarkModeWrapper({ children }) {
  useEffect(() => {
    document.body.classList.add("dark-mode");
    
    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, []);

  return <>{children}</>;
}
