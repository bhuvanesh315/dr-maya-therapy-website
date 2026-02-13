

// import Image from "next/image";

// const items = [
//   {
//     title: "Anxiety & Overthinking",
//     desc: "For constant worry, racing thoughts, tension in the body, and feeling like you’re always bracing for something to go wrong. We’ll build practical tools to feel calmer and more grounded day-to-day.",
//     img: "/selfesteem.webp",
//   },
//   {
//     title: "Trauma & EMDR Therapy",
//     desc: "For earlier experiences that still impact your confidence, relationships, or sense of safety. Using EMDR, mindfulness, and body-based techniques, we’ll process trauma at a pace that feels steady and supportive.",
//     img: "/relationships.webp",
//   },
//   {
//     title: "Burnout & Perfectionism",
//     desc: "For professionals and creatives who feel exhausted, stuck in pressure, or disconnected from themselves after years of pushing through. Therapy can help you slow down and create a more sustainable way of living and working.",
//     img: "/burnout.webp",
//   },
// ];

// export default function Specialties() {
//   return (
//     <section id="services" className="bg-[#F4EFEA] py-24">
//       <div className="mx-auto max-w-[1400px] px-10">
//         <h2 className="text-center text-[44px] font-semibold tracking-tight text-[#1F2A24] sm:text-[62px]">
//           Areas I Support in Santa Monica, CA
//         </h2>

//         <p className="mx-auto mt-6 max-w-[780px] text-center text-[18px] leading-relaxed text-[#1F2A24]/80">
//           My work often focuses on anxiety, trauma, and burnout—especially for
//           thoughtful, high-achieving adults who feel “functional” on the outside
//           while struggling internally.
//         </p>

//         <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
//           {items.map((it) => (
//             <article
//               key={it.title}
//               className="border border-[#2F5D50]/60 bg-[#E7DED5] p-5"
//             >
//               <h3 className="text-[20px] font-semibold text-[#1F2A24]">
//                 {it.title}
//               </h3>

//               <p className="mt-5 text-[16px] leading-relaxed text-[#1F2A24]/90">
//                 {it.desc}
//               </p>

//               <div className="mt-8 flex justify-center">
//                 <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full ring-1 ring-[#2F5D50]/30">
//                   <Image
//                     src={it.img}
//                     alt={it.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

const items = [
  {
    title: "Anxiety & Overthinking",
    desc: "For constant worry, racing thoughts, tension in the body, and feeling like you’re always bracing for something to go wrong. We’ll build practical tools to feel calmer and more grounded day-to-day.",
    img: "/selfesteem.webp",
  },
  {
    title: "Trauma & EMDR Therapy",
    desc: "For earlier experiences that still impact your confidence, relationships, or sense of safety. Using EMDR, mindfulness, and body-based techniques, we’ll process trauma at a pace that feels steady and supportive.",
    img: "/relationships.webp",
  },
  {
    title: "Burnout & Perfectionism",
    desc: "For professionals and creatives who feel exhausted, stuck in pressure, or disconnected from themselves after years of pushing through. Therapy can help you slow down and create a more sustainable way of living and working.",
    img: "/burnout.webp",
  },
];

export default function Specialties() {
  return (
    <section id="services" className="bg-[#F4EFEA] py-16">
      <div className="mx-auto max-w-[1200px] px-8">
        {/* Heading scale consistent with hero system */}
        <h2 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-[#1F2A24] sm:text-[50px]">
          Areas I Support in Santa Monica, CA
        </h2>

        <p className="mx-auto mt-5 max-w-[760px] text-center text-[18px] leading-relaxed text-[#1F2A24]/80">
          My work often focuses on anxiety, trauma, and burnout—especially for
          thoughtful, high-achieving adults who feel “functional” on the outside
          while struggling internally.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="border border-[#2F5D50]/60 bg-[#E7DED5] p-6"
            >
              <h3 className="text-[18px] font-semibold text-[#1F2A24]">
                {it.title}
              </h3>

              <p className="mt-4 text-[16px] leading-relaxed text-[#1F2A24]/90">
                {it.desc}
              </p>

              <div className="mt-7 flex justify-center">
                <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full ring-1 ring-[#2F5D50]/30">
                  <Image src={it.img} alt={it.title} fill className="object-cover" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
