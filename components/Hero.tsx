// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section id="home" className="bg-[#F4EFEA] pt-[50px]">
//       <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-10 py-16 lg:grid-cols-2">
//         {/* Left image */}
//         <div className="flex justify-center lg:justify-start">
//           <div className="relative h-[640px] w-[520px] overflow-hidden rounded-t-[320px] rounded-b-none">
//             <Image
//               src="/maya-hero.png" // ✅ put Maya photo here in /public
//               alt="Dr. Maya Reynolds, PsyD"
//               fill
//               priority
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Right text */}
//         <div className="text-center lg:text-left">
//           <h1 className="text-[42px] font-semibold leading-[1.02] tracking-tight text-[#1F2A24] sm:text-[62px]">
//             Therapy for Anxiety, Trauma
//             <br />
//             & Burnout in Santa Monica, CA
//           </h1>

//           <p className="mt-8 text-[20px] leading-relaxed text-[#1F2A24] sm:text-[20px]">
//             If you look “fine” on the outside but feel overwhelmed, stuck in
//             overthinking, or emotionally exhausted, you don’t have to keep
//             pushing through alone. I offer warm, grounded therapy for adults
//             using CBT, EMDR, mindfulness, and body-based approaches.
//           </p>

//           <div className="mt-10">
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-4 border border-[#2F5D50] px-10 py-5 text-[18px] font-semibold tracking-wide text-[#2F5D50] transition-all duration-200 hover:bg-[#2F5D50] hover:text-[#F4EFEA]"
//             >
//               SCHEDULE A CONSULTATION <span aria-hidden>→</span>
//             </a>
//           </div>

//           <p className="mt-6 text-[16px] text-[#1F2A24]/80">
//             In-person sessions in Santa Monica • Secure telehealth across
//             California
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-[#F4EFEA] pt-[30px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-8 py-12 lg:grid-cols-2">
        {/* Left image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative h-[520px] w-[420px] overflow-hidden rounded-t-[260px] rounded-b-none mt-5">
            <Image
              src="/maya-hero.png"
              alt="Dr. Maya Reynolds, PsyD"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Right text */}
        <div className="text-center lg:text-left">
          <h1 className="text-[34px] font-semibold leading-tight tracking-tight text-[#1F2A24] sm:text-[50px]">
            Therapy for Anxiety, Trauma
            <br />
            & Burnout in Santa Monica, CA
          </h1>

          <p className="mt-6 text-[18px] leading-relaxed text-[#1F2A24] sm:text-[18px]">
            If you look “fine” on the outside but feel overwhelmed, stuck in
            overthinking, or emotionally exhausted, you don’t have to keep
            pushing through alone. I offer warm, grounded therapy for adults
            using CBT, EMDR, mindfulness, and body-based approaches.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-[#2F5D50] px-8 py-4 text-[16px] font-semibold tracking-wide text-[#2F5D50] transition-all duration-200 hover:bg-[#2F5D50] hover:text-[#F4EFEA]"
            >
              SCHEDULE A CONSULTATION <span aria-hidden>→</span>
            </a>
          </div>

          <p className="mt-5 text-[14px] text-[#1F2A24]/80">
            In-person sessions in Santa Monica • Secure telehealth across
            California
          </p>
        </div>
      </div>
    </section>
  );
}
