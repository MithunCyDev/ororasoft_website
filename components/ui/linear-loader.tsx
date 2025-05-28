"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function LinearLoader() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const startLoading = () => {
      setLoading(true);
      setProgress(0);

      // Quickly progress to 80% then slow down
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 80) {
            clearInterval(interval);
            return prev;
          }
          return prev + (80 - prev) * 0.1;
        });
      }, 100);
    };

    const completeLoading = () => {
      setProgress(100);

      // Hide the loader after the animation completes
      timeout = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 500);
    };

    // Start loading
    startLoading();

    // Complete loading after a short delay
    timeout = setTimeout(completeLoading, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [pathname, searchParams]);

  return (
    <div
      className={cn(
        "fixed top-18 left-0 right-0 h-1 z-50 transition-opacity duration-300",
        loading ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className="h-full bg-primary transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
