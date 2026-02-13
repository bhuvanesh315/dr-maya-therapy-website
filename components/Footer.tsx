
// export default function Footer() {
//   return (
//     <footer className="bg-[#E7DED5] py-20">
//       <div className="mx-auto max-w-[1400px] px-10">
//         <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
//           {/* Left */}
//           <div>
//             <div className="text-[34px] font-semibold text-[#1F2A24]">
//               Dr. Maya Reynolds, PsyD
//             </div>

//             <div className="mt-10 space-y-3 text-[18px] text-[#1F2A24]">
//               <p>123th Street 45 W</p>
//               <p>Santa Monica, CA 90401</p>

//               <a
//                 href="mailto:hello@drmayareynolds.com"
//                 className="block underline underline-offset-4"
//               >
//                 hello@drmayareynolds.com
//               </a>

//               <p className="text-[#1F2A24]/80">
//                 In-person in Santa Monica • Telehealth across California
//               </p>
//             </div>
//           </div>

//           {/* Center */}
//           <div className="lg:text-center">
//             <div className="text-[30px] font-semibold text-[#1F2A24]">
//               Hours
//             </div>
//             <div className="mt-10 space-y-3 text-[18px] text-[#1F2A24]">
//               <p>By appointment</p>
//               <p>Weekday availability varies</p>
//             </div>
//           </div>

//           {/* Right Navigation */}
//           <div className="lg:text-right">
//             <div className="text-[30px] font-semibold text-[#1F2A24]">
//               Find
//             </div>
//             <div className="mt-10 space-y-3 text-[18px] text-[#1F2A24]">
//               <a href="/" className="block underline underline-offset-4">
//                 Home
//               </a>
//               <a href="/ouroffice" className="block underline underline-offset-4">
//                 Our Office
//               </a>
//               {/* <a href="#services" className="block underline underline-offset-4">
//                 Services
//               </a>
//               <a href="#contact" className="block underline underline-offset-4">
//                 Contact
//               </a> */}
//             </div>
//           </div>
//         </div>

//         {/* Policies */}
//         <div className="mt-20 flex flex-wrap justify-center gap-8 text-[18px] text-[#1F2A24]">
//           <a href="#" className="underline underline-offset-4">
//             Privacy Policy
//           </a>
//           <a href="#" className="underline underline-offset-4">
//             Good Faith Estimate
//           </a>
//           <a href="#" className="underline underline-offset-4">
//             Terms & Conditions
//           </a>
//           <a href="#" className="underline underline-offset-4">
//             Disclaimer
//           </a>
//         </div>

//         {/* <div className="mt-10 text-center text-[18px] text-[#1F2A24]/80">
//           This website is a first-draft concept created for an internship
//           assignment.
//         </div> */}

//         <div className="mt-16 text-center text-[18px] text-[#1F2A24]">
//           © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights
//           reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }


export default function Footer() {
  return (
    <footer className="bg-[#F4EFEA]">
      <div className="mx-auto max-w-[1200px] px-10 py-16">
        {/* Top 3 columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left */}
          <div>
            <h3 className="text-[28px] font-semibold text-[#1F2A24]">
              Dr. Maya Reynolds,
              <br />
              PsyD
            </h3>

            <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-[#1F2A24]/85">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>

              <a
                href="mailto:hello@drmayareynolds.com"
                className="inline-block underline underline-offset-4"
              >
                hello@drmayareynolds.com
              </a>

              <p className="text-[#1F2A24]/70">
                In-person in Santa Monica • Telehealth
                <br />
                across California
              </p>
            </div>
          </div>

          {/* Middle */}
          <div className="text-center">
            <h4 className="text-[28px] font-semibold text-[#1F2A24]">Hours</h4>

            <div className="mt-8 space-y-3 text-[16px] text-[#1F2A24]/85">
              <p>By appointment</p>
              <p>Weekday availability varies</p>
            </div>
          </div>

          {/* Right */}
          <div className="text-right">
            <h4 className="text-[28px] font-semibold text-[#1F2A24]">Find</h4>

            <div className="mt-8 space-y-3 text-[16px] text-[#1F2A24]/85">
              <a className="block underline underline-offset-4" href="/">
                Home
              </a>
              <a className="block underline underline-offset-4" href="/ouroffice">
                Our Office
              </a>
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[16px] text-[#1F2A24]/85">
          <a className="underline underline-offset-4" href="#">
            Privacy Policy
          </a>
          <a className="underline underline-offset-4" href="#">
            Good Faith Estimate
          </a>
          <a className="underline underline-offset-4" href="#">
            Terms & Conditions
          </a>
          <a className="underline underline-offset-4" href="#">
            Disclaimer
          </a>
        </div>

        <p className="mt-10 text-center text-[14px] text-[#1F2A24]/70">
          © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

