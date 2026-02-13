
// import Image from "next/image";

// export default function SupportSplit() {
//   return (
//     <section className="bg-[#F4EFEA]">
//       <div className="mx-auto max-w-[1400px]">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
//           {/* Left image */}
//           <div className="relative min-h-[650px]">
//             <Image
//               src="/support.webp" // ✅ add a new image in /public
//               alt="Grounded support for anxiety and burnout"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Right content */}
//           <div className="bg-[#E7DED5] px-12 py-20 sm:px-16">
//             <h2 className="text-[42px] font-semibold leading-[1.05] text-[#1F2A24] sm:text-[62px]">
//               You don’t have to
//               <br />
//               carry this <span className="italic">alone.</span>
//             </h2>

//             <p className="mt-10 text-[22px] text-[#1F2A24] sm:text-[20px]">
//               If any of these feel familiar, therapy can help:
//             </p>

//             <ul className="mt-10 space-y-4 pl-6 text-[22px] text-[#1F2A24] sm:text-[20px]">
//               <li className="list-disc">
//                 Constant worry, racing thoughts, or overthinking
//               </li>
//               <li className="list-disc">
//                 Tension in your body or feeling “on edge”
//               </li>
//               <li className="list-disc">
//                 Difficulty sleeping or shutting your mind off
//               </li>
//               <li className="list-disc">
//                 Burnout, perfectionism, or high internal pressure
//               </li>
//               <li className="list-disc">
//                 The lingering impact of past experiences on confidence,
//                 relationships, or safety
//               </li>
//             </ul>

//             <p className="mt-12 text-[22px] leading-relaxed text-[#1F2A24] sm:text-[20px]">
//               My approach is warm, collaborative, and grounded—structured enough
//               to feel supportive, while still leaving space for depth. Together,
//               we’ll work toward feeling more regulated in everyday life—not just
//               during sessions.
//             </p>
//           </div>
//         </div>

//         {/* Bottom CTA bar */}
//         <div className="border-t border-[#2F5D50]/40 bg-[#E7DED5] py-9 text-center">
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-3 text-[18px] font-semibold tracking-wide text-[#2F5D50] transition-opacity hover:opacity-70"
//           >
//             WORK WITH DR. MAYA <span aria-hidden>→</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function SupportSplit() {
  return (
    <section className="bg-[#F4EFEA] w-full">
      {/* Full width split */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left image (touch screen edge) */}
        <div className="relative min-h-[520px]">
          <Image
            src="/support.webp"
            alt="Grounded support for anxiety and burnout"
            fill
            className="object-cover"
          />
        </div>

        {/* Right content (centered within its column) */}
        <div className="bg-[#E7DED5]">
          <div className="mx-auto max-w-[600px] px-10 py-14 sm:px-14">
            {/* Match Hero typography system */}
            <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-[#1F2A24] sm:text-[42px]">
              You don’t have to
              <br />
              carry this <span className="italic">alone.</span>
            </h2>

            <p className="mt-6 text-[18px] leading-relaxed text-[#1F2A24]">
              If any of these feel familiar, therapy can help:
            </p>

            <ul className="mt-6 space-y-3 pl-6 text-[18px] leading-relaxed text-[#1F2A24]">
              <li className="list-disc">
                Constant worry, racing thoughts, or overthinking
              </li>
              <li className="list-disc">
                Tension in your body or feeling “on edge”
              </li>
              <li className="list-disc">
                Difficulty sleeping or shutting your mind off
              </li>
              <li className="list-disc">
                Burnout, perfectionism, or high internal pressure
              </li>
              <li className="list-disc">
                The lingering impact of past experiences on confidence,
                relationships, or safety
              </li>
            </ul>

            <p className="mt-8 text-[18px] leading-relaxed text-[#1F2A24]">
              My approach is warm, collaborative, and grounded—structured enough
              to feel supportive, while still leaving space for depth. Together,
              we’ll work toward feeling more regulated in everyday life—not just
              during sessions.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA bar (full width like template) */}
      <div className="border-t border-[#2F5D50]/40 bg-[#E7DED5] py-7 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-[16px] font-semibold tracking-wide text-[#2F5D50] transition-opacity hover:opacity-70"
        >
          WORK WITH DR. MAYA <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
