"use client";
import Image from "next/image";
import Container from "./Container";
export default function Contact() {
  return (
    <Container>
      <div id="contact-section" className="mt-24 mb-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl mb-10 c-text border-l-[7px] pl-2 border-red-500 uppercase">Let&apos;s Connect</h1>
            <p className="text-center md:text-start text-slate-800">
              Thank you for taking the time to learn more about me. If
              you&apos;re interested in collaborating on exciting projects or
              discussing how we can work together, I&apos;d love to hear from
              you! Feel free to reach out via email, phone or connect with me on
              the Social Media Platforms.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-16 lg:gap-24 rounded border bg-gradient-to-t from-[#000018] to-[#00003f] shadow-lg py-4">
            <div className="flex items-center md:justify-between justify-center gap-3">
                <div className="flex items-center gap-2 ring-white ring-2 py-1 px-3 rounded-sm">
              <Image src="/email.svg" alt="Logo" width={20} height={20} />
              <p className="font-medium text-white  uppercase text-sm">Email</p>
              </div>
              <span className="no-underline  cursor-pointer text-white text-sm transition hover:no-underline hover:text-red-500">Abdu.alyousef95@gamil.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
                <div className="flex items-center gap-2 ring-white ring-2 py-1 px-3 rounded-sm">
              <Image src="/call.svg" alt="Logo" width={20} height={20} />
              <p className="font-medium uppercase text-white  text-sm">PHONE</p>
              </div>
              <span className="no-underline hover:no-underline cursor-pointer text-white transition hover:text-red-500  text-sm">004915731073866</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
