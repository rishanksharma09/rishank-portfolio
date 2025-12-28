"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import  SocialIcon  from "../components/SocialIcon";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#05070c] overflow-hidden">

      {/* glow */}
      <div className="absolute " />

      {/* divider */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 flex flex-col items-center gap-6">

        {/* name */}
        <p className="text-sm text-white/50 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-white/80 font-medium">Rishank Sharma</span>
        </p>

        {/* icons */}
        <div className="flex items-center gap-6">
          <SocialIcon
            href="https://github.com/rishanksharma09"
            label="GitHub"
          >
            <Github size={18} />
          </SocialIcon>

          <SocialIcon
            href="https://www.linkedin.com/in/rishanksharma/"
            label="LinkedIn"
          >
            <Linkedin size={18} />
          </SocialIcon>

          <SocialIcon
            href="mailto:rishanksharma04524@gmail.com"
            label="Email"
          >
            <Mail size={18} />
          </SocialIcon>
        </div>

        {/* subtle tagline */}
        <p className="text-xs text-white/40">
          Built with precision, performance, and a lot of curiosity.
        </p>
      </div>
    </footer>
  );
}
