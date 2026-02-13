

// import Image from "next/image";

// export default function SplitIntro() {
//   return (
//     <section className="bg-[#F4EFEA]">
//       <div className="mx-auto max-w-[1400px]">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
//           {/* Left content */}
//           <div className="bg-[#E7DED5] px-12 py-20 sm:px-16">
//             <h2 className="text-[38px] font-semibold tracking-tight text-[#1F2A24] sm:text-[62px]">
//               You don’t have to keep
//               <br />
//               pushing through alone.
//             </h2>

//             <div className="mt-10 space-y-10 text-[22px] leading-relaxed text-[#1F2A24] sm:text-[20px]">
//               <p>
//                 Many high-achieving adults look “fine” on the outside—but
//                 internally feel exhausted, stuck in overthinking, or emotionally
//                 on edge. Anxiety and chronic stress can start to affect sleep,
//                 relationships, confidence, and your sense of safety.
//               </p>

//               <p>
//                 In our work together, we’ll slow things down and make space for
//                 real relief and lasting change. I use evidence-based approaches
//                 like CBT, EMDR, mindfulness, and body-based techniques to support
//                 both the emotional and physical sides of what you’re carrying.
//               </p>
//             </div>
//           </div>

//           {/* Right image */}
//           <div className="relative min-h-[520px]">
//             <Image
//               src="/split.webp" // ✅ add a new image in /public
//               alt="Calm, grounded therapy space"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Bottom CTA bar */}
//         <div className="border-t border-[#2F5D50]/40 bg-[#E7DED5] py-8 text-center">
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-3 text-[18px] font-semibold tracking-wide text-[#2F5D50] transition-opacity hover:opacity-70"
//           >
//             GET IN TOUCH <span aria-hidden>→</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function SplitIntro() {
  return (
    <section className="bg-[#F4EFEA] w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left content */}
        <div className="bg-[#E7DED5]">
          <div className="mx-auto max-w-[600px] px-10 py-14">
            <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-[#1F2A24] sm:text-[42px]">
              You don’t have to keep
              <br />
              pushing through alone.
            </h2>

            <div className="mt-6 space-y-6 text-[18px] leading-relaxed text-[#1F2A24]">
              <p>
                Many high-achieving adults look “fine” on the outside—but
                internally feel exhausted, stuck in overthinking, or emotionally
                on edge. Anxiety and chronic stress can start to affect sleep,
                relationships, confidence, and your sense of safety.
              </p>

              <p>
                In our work together, we’ll slow things down and make space for
                real relief and lasting change. I use evidence-based approaches
                like CBT, EMDR, mindfulness, and body-based techniques to support
                both the emotional and physical sides of what you’re carrying.
              </p>
            </div>
          </div>
        </div>

        {/* Right image FULL WIDTH */}
        <div className="relative min-h-[520px]">
          <Image
            src="/split.webp"
            alt="Calm, grounded therapy space"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-[#2F5D50]/40 bg-[#E7DED5] py-7 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-[16px] font-semibold tracking-wide text-[#2F5D50] hover:opacity-70"
        >
          GET IN TOUCH <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
