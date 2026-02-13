

// "use client";

// import Image from "next/image";

// export default function AboutLilac() {
//   return (
//     <section id="about" className="bg-[#F4EFEA] py-28">
//       <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-10 lg:grid-cols-2">
//         {/* Left text */}
//         <div>
//           <h2 className="text-[42px] font-semibold text-[#1F2A24] sm:text-[62px]">
//             Meet Dr. Maya Reynolds, PsyD
//           </h2>

//           <p className="mt-10 max-w-[620px] text-[22px] leading-relaxed text-[#1F2A24] sm:text-[20px]">
//             I’m a licensed clinical psychologist based in Santa Monica,
//             California, offering therapy for adults navigating anxiety, trauma,
//             and burnout—especially those who feel “functional” on the outside but
//             exhausted or overwhelmed internally.
//           </p>

//           <p className="mt-6 max-w-[620px] text-[22px] leading-relaxed text-[#1F2A24] sm:text-[20px]">
//             My approach is warm, collaborative, and grounded. Sessions are
//             structured enough to feel supportive, while still leaving space for
//             reflection and depth. I integrate CBT, EMDR, mindfulness, and
//             body-based techniques to help you feel more regulated in daily
//             life—not just during sessions.
//           </p>

//           <div className="mt-14">
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-4 border border-[#2F5D50] px-12 py-6 text-[18px] font-semibold tracking-wide text-[#2F5D50] transition-all duration-200 hover:bg-[#2F5D50] hover:text-[#F4EFEA]"
//             >
//               SCHEDULE A CONSULTATION <span aria-hidden>→</span>
//             </a>
//           </div>

//           <p className="mt-6 text-[16px] text-[#1F2A24]/80">
//             In-person in Santa Monica • Telehealth across California
//           </p>
//         </div>

//         {/* Right circles */}
//         <div className="relative flex justify-center lg:justify-end">
//           <div className="relative h-[600px] w-[600px] overflow-hidden rounded-full">
//             <Image
//               src="/about-main.webp" // ✅ add in /public
//               alt="Dr. Maya Reynolds"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="absolute -bottom-12 right-0 h-[320px] w-[320px] overflow-hidden rounded-full border-[10px] border-[#F4EFEA]">
//             <Image
//               src="/about-small.webp" // ✅ add in /public
//               alt="Santa Monica therapy office"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

export default function AboutLilac() {
  return (
    <section id="about" className="bg-[#F4EFEA] py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-10 lg:grid-cols-2">
        {/* Left text */}
        <div>
          {/* Match Hero typography scale */}
          <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-[#1F2A24] sm:text-[42px]">
            Meet Dr. Maya
            <br />
            Reynolds, PsyD
          </h2>

          <p className="mt-6 max-w-[620px] text-[18px] leading-relaxed text-[#1F2A24]">
            I’m a licensed clinical psychologist based in Santa Monica,
            California, offering therapy for adults navigating anxiety, trauma,
            and burnout—especially those who feel “functional” on the outside but
            exhausted or overwhelmed internally.
          </p>

          <p className="mt-5 max-w-[620px] text-[18px] leading-relaxed text-[#1F2A24]">
            My approach is warm, collaborative, and grounded. Sessions are
            structured enough to feel supportive, while still leaving space for
            reflection and depth. I integrate CBT, EMDR, mindfulness, and
            body-based techniques to help you feel more regulated in daily
            life—not just during sessions.
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-[#2F5D50] px-10 py-4 text-[16px] font-semibold tracking-wide text-[#2F5D50] transition-all duration-200 hover:bg-[#2F5D50] hover:text-[#F4EFEA]"
            >
              SCHEDULE A CONSULTATION <span aria-hidden>→</span>
            </a>
          </div>

          <p className="mt-5 text-[14px] text-[#1F2A24]/80">
            In-person in Santa Monica • Telehealth across California
          </p>
        </div>

        {/* Right circles */}
        <div className="relative flex justify-center lg:justify-end">
          {/* main circle smaller */}
          <div className="relative h-[440px] w-[440px] overflow-hidden rounded-full sm:h-[520px] sm:w-[520px]">
            <Image
              src="/about-main.webp"
              alt="Dr. Maya Reynolds"
              fill
              className="object-cover"
            />
          </div>

          {/* small circle smaller + nicer position */}
          <div className="absolute -bottom-10 right-2 h-[230px] w-[230px] overflow-hidden rounded-full border-[10px] border-[#F4EFEA] sm:-bottom-12 sm:right-0 sm:h-[280px] sm:w-[280px]">
            <Image
              src="/about-small.webp"
              alt="Santa Monica therapy office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
