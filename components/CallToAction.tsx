

// export default function CallToAction() {
//   return (
//     <section id="contact" className="bg-[#2F5D50] py-28 text-center">
//       <div className="mx-auto max-w-[900px] px-10 text-[#F4EFEA]">
//         <h2 className="text-[42px] font-semibold sm:text-[52px]">
//           Begin Therapy in Santa Monica
//         </h2>

//         <p className="mx-auto mt-10 text-[22px] leading-relaxed sm:text-[20px]">
//           If you’re feeling overwhelmed, stuck in overthinking, or emotionally
//           exhausted, therapy can help you feel more grounded and supported.
//           <br />
//           I offer in-person sessions in Santa Monica and secure telehealth across
//           California.
//         </p>

//         <div className="mt-14 flex flex-col items-center gap-4">
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-3 border border-[#F4EFEA] px-14 py-6 text-[18px] font-semibold tracking-wide transition-opacity hover:opacity-80"
//           >
//             SCHEDULE A CONSULTATION <span aria-hidden>→</span>
//           </a>

//           <p className="text-[16px] text-[#F4EFEA]/80">
//             Address: 123th Street 45 W, Santa Monica, CA 90401
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function CallToAction() {
  return (
    <section id="contact" className="w-full bg-[#2F5D50] py-20">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 text-center text-[#F4EFEA]">

        <div className="mx-auto max-w-[760px]">
          {/* Title */}
          <h2 className="text-[36px] font-semibold tracking-tight sm:text-[48px]">
            Begin Therapy in Santa Monica
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[620px] text-[17px] leading-relaxed text-[#F4EFEA]/90">
            If you’re feeling overwhelmed, stuck in overthinking, or emotionally
            exhausted, therapy can help you feel more grounded and supported.
            <br />
            I offer in-person sessions in Santa Monica and secure telehealth
            across California.
          </p>

          {/* Button */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-[#F4EFEA] px-12 py-5 text-[16px] font-semibold tracking-wide transition-opacity hover:opacity-80"
            >
              SCHEDULE A CONSULTATION <span aria-hidden>→</span>
            </a>

            <p className="text-[14px] text-[#F4EFEA]/70">
              Address: 123th Street 45 W, Santa Monica, CA 90401
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
