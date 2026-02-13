// import Accordion from "./Accordion";

// export default function ProfessionalBackground() {
//   const items = [
//     {
//       title: "Education",
//       content:
//         "Doctor of Psychology (PsyD) in Clinical Psychology. My graduate training focused on evidence-based treatment for anxiety disorders, trauma, and stress-related conditions, with extensive clinical experience working with adults in private practice and community settings.",
//     },
//     {
//       title: "Licensure",
//       content:
//         "Licensed Clinical Psychologist in California. I provide therapy for adults in my Santa Monica office and via secure telehealth sessions across the state.",
//     },
//     {
//       title: "Specialized Training",
//       content:
//         "Advanced training in Cognitive Behavioral Therapy (CBT), EMDR for trauma, mindfulness-based approaches, and body-oriented techniques that support emotional regulation and nervous system health.",
//     },
//   ];

//   return (
//     <section className="bg-[#E7E2DB] py-20">
//       <div className="mx-auto max-w-[1100px] px-10 text-center">
        
//         {/* Title */}
//         <h2 className="text-[42px] font-semibold text-[#1F2A24] sm:text-[56px]">
//           Professional Background
//         </h2>

//         <p className="mx-auto mt-6 max-w-[640px] text-[18px] leading-relaxed text-[#1F2A24]/80">
//           My training combines evidence-based therapy with a warm, collaborative
//           approach focused on long-term growth and emotional well-being.
//         </p>

//         {/* Accordion */}
//         <div className="mx-auto mt-14 max-w-[820px] text-left">
//           <Accordion items={items} defaultOpen={null} />
//         </div>

//       </div>
//     </section>
//   );
// }

import Accordion from "./Accordion";

export default function ProfessionalBackground() {
  const items = [
    {
      title: "Education",
      content:
        "Doctor of Psychology (PsyD) in Clinical Psychology. My graduate training focused on evidence-based treatment for anxiety disorders, trauma, and stress-related conditions, with extensive clinical experience working with adults in private practice and community settings.",
    },
    {
      title: "Licensure",
      content:
        "Licensed Clinical Psychologist in California. I provide therapy for adults in my Santa Monica office and via secure telehealth sessions across the state.",
    },
    {
      title: "Specialized Training",
      content:
        "Advanced training in Cognitive Behavioral Therapy (CBT), EMDR for trauma, mindfulness-based approaches, and body-oriented techniques that support emotional regulation and nervous system health.",
    },
  ];

  return (
    <section className="w-full bg-[#E7E2DB] py-16">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        
        <div className="mx-auto max-w-[760px] text-center">
          {/* Title */}
          <h2 className="text-[30px] font-semibold tracking-tight text-[#1F2A24] sm:text-[42px]">
            Professional Background
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-relaxed text-[#1F2A24]/80">
            My training combines evidence-based therapy with a warm,
            collaborative approach focused on long-term growth and emotional
            well-being.
          </p>

          {/* Accordion */}
          <div className="mx-auto mt-8 max-w-[720px] text-left">
            <Accordion items={items} defaultOpen={null} />
          </div>
        </div>

      </div>
    </section>
  );
}
