"use client";

import { useEffect } from "react";

export function HashCleaner() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const timer = setTimeout(() => {
        try {
          window.history.replaceState(
            null,
            document.title,
            window.location.pathname + window.location.search
          );
        } catch (e) {
          console.error(e);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}
