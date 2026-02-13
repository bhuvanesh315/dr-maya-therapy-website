"use client";

import { useState } from "react";

type Item = {
  title: string;
  content: string;
};

export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: Item[];
  defaultOpen?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpen === null ? null : defaultOpen
  );

  return (
    <div className="w-full">
      {items.map((it, idx) => {
        const open = openIndex === idx;

        return (
          <div key={it.title} className="border-t border-[#244126]/70 ">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : idx)}
              className="flex w-full items-center justify-between gap-6 py-4 text-left cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className="text-[28px] leading-none text-[#244126]">
                  {open ? "−" : "+"}
                </span>
                <span className="text-[20px] font-semibold text-[#244126]">
                  {it.title}
                </span>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                open ? "max-h-[260px] pb-10" : "max-h-0"
              }`}
            >
              <p className="pl-[72px] pr-6 text-[18px] leading-relaxed text-[#244126]">
                {it.content}
              </p>
            </div>
          </div>
        );
      })}
      <div className="border-t border-[#244126]/70" />
    </div>
  );
}
