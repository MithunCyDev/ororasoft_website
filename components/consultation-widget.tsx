"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import mithunImage from "@/public/mithun.jpg";

export function ConsultationWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle widget visibility on load
  useEffect(() => {
    const dismissed = localStorage.getItem("consultationWidgetDismissed");
    if (dismissed) {
      setIsDismissed(JSON.parse(dismissed));
    }

    const showTimer = setTimeout(() => {
      if (
        !JSON.parse(
          localStorage.getItem("consultationWidgetDismissed") || "false"
        )
      ) {
        setIsVisible(true);

        // Auto-hide after 20 seconds
        const hideTimer = setTimeout(() => {
          setIsVisible(false);
        }, 20000);

        return () => clearTimeout(hideTimer);
      }
    }, 5000);

    return () => clearTimeout(showTimer);
  }, []);

  // Handle re-showing on scroll
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (isDismissed && position > 300 && position > scrollPosition + 100) {
        setIsDismissed(false);
        setIsVisible(true);
        localStorage.setItem("consultationWidgetDismissed", "false");

        // Auto-hide again after 20s
        setTimeout(() => setIsVisible(false), 20000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, scrollPosition]);

  // Dismiss function
  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("consultationWidgetDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <>
      {isVisible && (
        <div className="fixed -right-7 bottom-10 z-40 flex items-center rounded-full bg-primary px-4 py-2">
          {/* Circular Image */}
          <div className="relative w-12 h-12 -ml-2 rounded-full overflow-hidden border-2 border-gray-100">
            <Image
              src={mithunImage}
              alt="Consultation Expert"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="ml-2 mr-6 text-white">
            <h3 className="md:text-md sm:text-sm font-semibold">
              Book Free Consultation
            </h3>
          </div>

          {/* Clickable Link (Wrapped Around) */}
          <Link
            href="/schedule"
            className="absolute inset-0"
            aria-label="Book a free consultation"
          ></Link>
        </div>
      )}
    </>
  );
}
