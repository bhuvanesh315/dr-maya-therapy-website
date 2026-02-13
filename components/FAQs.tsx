
// import Image from "next/image";
// import Accordion from "./Accordion";

// export default function FAQs() {
//   const items = [
//     {
//       title: "Do you offer in-person or virtual sessions?",
//       content:
//         "I offer in-person therapy in my Santa Monica office and secure telehealth sessions for clients located anywhere in California.",
//     },
//     {
//       title: "What do you specialize in?",
//       content:
//         "My work often focuses on anxiety, panic, trauma, burnout, perfectionism, and chronic stress—especially for high-achieving adults who feel overwhelmed internally.",
//     },
//     {
//       title: "What is your approach to therapy?",
//       content:
//         "My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive while still leaving space for reflection and depth. I integrate CBT, EMDR, mindfulness, and body-based techniques.",
//     },
//   ];

//   return (
//     <section id="faq" className="bg-[#F4EFEA] py-28">
//       <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-20 px-10 lg:grid-cols-2">
//         {/* Left image */}
//         <div className="flex justify-center lg:justify-start">
//           <div className="relative h-[640px] w-[520px] overflow-hidden rounded-t-[320px] rounded-b-none">
//             <Image
//               src="/faq.jpg" // ✅ add a new image in /public
//               alt="Frequently asked questions"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Right accordion */}
//         <div>
//           <h2 className="text-[42px] font-semibold text-[#1F2A24] sm:text-[52px]">
//             FAQs
//           </h2>

//           <p className="mt-6 max-w-[520px] text-[18px] leading-relaxed text-[#1F2A24]/80">
//             Here are a few common questions I get from new clients in Santa
//             Monica and across California.
//           </p>

//           <div className="mt-10">
//             <Accordion items={items} defaultOpen={null} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Accordion from "./Accordion";

export default function FAQs() {
  const items = [
    {
      title: "Do you offer in-person or virtual sessions?",
      content:
        "I offer in-person therapy in my Santa Monica office and secure telehealth sessions for clients located anywhere in California.",
    },
    {
      title: "What do you specialize in?",
      content:
        "My work often focuses on anxiety, panic, trauma, burnout, perfectionism, and chronic stress—especially for high-achieving adults who feel overwhelmed internally.",
    },
    {
      title: "What is your approach to therapy?",
      content:
        "My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive while still leaving space for reflection and depth. I integrate CBT, EMDR, mindfulness, and body-based techniques.",
    },
  ];

  return (
    <section id="faq" className="bg-[#F4EFEA] py-28">
      {/* ✅ wider container + smaller padding = less “empty sides” */}
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-18 lg:grid-cols-2 lg:gap-20">
          {/* Left image */}
          <div className="flex justify-center lg:justify-start">
            {/* ✅ responsive width (fills more space on big screens) */}
            <div className="relative h-[420px] w-full max-w-[450px] overflow-hidden rounded-t-[999px] lg:h-[550px]">
              <Image
                src="/faq.jpg"
                alt="Frequently asked questions"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* Right accordion */}
          <div>
            <h2 className="text-[30px] font-semibold text-[#1F2A24] sm:text-[42px]">
              FAQs
            </h2>

            <p className="mt-6 max-w-[560px] text-[18px] leading-relaxed text-[#1F2A24]/80">
              Here are a few common questions I get from new clients in Santa
              Monica and across California.
            </p>

            <div className="mt-10">
              <Accordion items={items} defaultOpen={null} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
