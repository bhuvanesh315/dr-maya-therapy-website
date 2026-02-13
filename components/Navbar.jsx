"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y > 50) setHidden(true);
      else setHidden(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed left-0 right-0 top-0 z-50",
        "transition-transform duration-300 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div className="bg-[#f6f0e9]/20 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5">
          <a className="text-[28px] font-semibold tracking-tight text-[#244126] transition-opacity hover:opacity-70" href="/">
            Lilac Template
          </a>

          <nav className="flex items-center gap-10 text-[18px] font-medium text-[#244126]">
            <a className="transition-opacity hover:opacity-70" href="/ouroffice">
              Our office
            </a>
            {/* <a className="transition-opacity hover:opacity-70" href="/contact">
              Contact
            </a> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
