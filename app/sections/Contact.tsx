"use client";

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import dynamic from "next/dynamic";

export default function Contact() {

  const RobotModel = dynamic(() => import("../components/RobotModel/RobotScene"), {
    ssr: false,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef(null)
  const headingTextRef = useRef(null)
  const subheadingTextRef = useRef(null)
  const tableRef = useRef<HTMLDivElement>(null)
  const [disableSubmit, setDisableSubmit] = useState(false)


  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });
      tl.from(
        headingTextRef.current,
        { opacity: 0, y: -50, duration: 0.8, ease: "power2.out", delay: 0.3 }
      ).from(
        subheadingTextRef.current,
        { opacity: 0, y: -20, duration: 0.8, ease: "power2.out" }
      ).from(
        tableRef.current,
        { opacity: 0, y: 20, duration: 1, ease: "power2.out" }
      );
    });

    return () => gsapContext.revert();
  }, []);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisableSubmit(true);

    try {
      await Promise.all([
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          "template_7za11ab",
          formRef.current as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
        ),
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          "template_hn2sjta",
          formRef.current as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
        ),
      ]);

      toast.success('Message sent successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      formRef.current?.reset();
      setDisableSubmit(false)
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setDisableSubmit(false)
    }

  };

  return (
    <section className="relative w-full bg-[#05070c] text-white py-28 overflow-hidden " id="contact">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.15),transparent_40%)]" />

      
      <div className="relative z-10 text-center mb-20" ref={headingRef} >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight" ref={headingTextRef}>
          Let’s build something <span className="text-blue-500">impactful</span>
        </h2>
        <p className="mt-4 text-white/60 max-w-xl mx-auto" ref={subheadingTextRef}>
          Have an idea, opportunity, or just want to talk fullstack?
          My inbox is always open.
        </p>
      </div>

      
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 px-6" ref={tableRef}>

        
        <div className="relative rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.15)]">

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

            <Field label="Your name">
              <input name="name" placeholder="John Doe" />
            </Field>

            <Field label="Your email">
              <input name="email" type="email" placeholder="john@email.com" />
            </Field>

            <Field label="Your message">
              <textarea name="message" rows={4} placeholder="Let’s work together…" />
            </Field>

            <button
              type="submit"
              disabled={disableSubmit}
              className="group w-full relative overflow-hidden rounded-xl
    bg-blue-600 py-3 font-medium transition cursor-pointer
    hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-80"
            >
              {disableSubmit ? (
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full
        border-2 border-white/40 border-t-white" />
                  Sending…
                </span>
              ) : (
                <span className="relative z-10">Send message</span>
              )}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
    bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)]
    transition"
              />
            </button>
          </form>
        </div>

        
        <div className="relative rounded-2xl border border-white/10 bg-[#0b0f19] overflow-hidden">

          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

         
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_60%)]" />

          
          <div className="relative w-full h-full cursor-grab active:cursor-grabbing">
            <RobotModel />
          </div>

          <div className="absolute bottom-4 left-4 text-xs text-white/40">
            Interactive 3D experience
          </div>
        </div>

      </div>
    </section>
  );
}


function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm text-white/70">{label}</label>
      {children &&
        (children as any).type === "textarea" ? (
        <textarea
          {...(children as any).props}
          className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
      ) : (
        <input
          {...(children as any).props}
          className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
      )}
    </div>
  );
}
