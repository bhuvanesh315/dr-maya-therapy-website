

import Image from "next/image";

export default function OurOffice() {
  const addressText = "123th Street 45 W, Santa Monica, CA 90401";
  const mapQuery = encodeURIComponent(addressText);

  return (
    <section id="office" className="bg-[#F4EEE7] py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* Title */}
        <div className="max-w-[760px]">
          <h2 className="text-[34px] mt-5 font-semibold text-[#1F2A24] sm:text-[48px]">
            A calm space for healing
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-[#1F2A24]/80 sm:text-[16px]">
            My Santa Monica therapy office is designed to feel warm, quiet, and
            grounding. The space is filled with natural light and created to
            help you feel comfortable, safe, and supported from the moment you
            arrive.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-[#1F2A24]/80 sm:text-[16px]">
            I offer both in-person sessions in Santa Monica and secure telehealth
            sessions for clients across California.
          </p>
        </div>

        {/* Images */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="relative h-[320px] overflow-hidden rounded-[26px] sm:h-[380px]">
            <Image src="/office-1.jpeg" alt="Therapy office" fill className="object-cover" />
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-[26px] sm:h-[380px]">
            <Image
              src="/office-2.jpeg"
              alt="Therapy office interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Address + Map */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: address card */}
          <div className="rounded-[22px] border border-[#1F2A24]/15 bg-white/60 p-8 sm:p-10">
            <h3 className="text-[20px] font-semibold text-[#1F2A24] sm:text-[22px]">
              Office location
            </h3>

            <p className="mt-4 text-[14px] leading-relaxed text-[#1F2A24]/70 sm:text-[15px]">
               {addressText}
              <br />
              In-person sessions • Telehealth across California
            </p>

            <div className="mt-7">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-[#2F5D50] px-7 py-3 text-[13px] font-semibold text-[#2F5D50] transition hover:bg-[#2F5D50] hover:text-[#F4EEE7] sm:text-[14px]"
              >
                Get Directions <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Right: map embed */}
          <div className="overflow-hidden rounded-[22px] border border-[#1F2A24]/15 bg-white">
            <div className="h-[260px] w-full sm:h-[300px]">
              <iframe
                title="Office map"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
