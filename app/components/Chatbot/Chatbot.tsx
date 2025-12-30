"use client";

import { useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Bot } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLayoutEffect } from "react";

export default function ChatbotUI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const botRef=useRef<HTMLDivElement>(null);

 useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    gsap.from(botRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
         trigger: document.body,
        start: "top+=50 top"
      },
    });
  });

  return () => ctx.revert();
}, []);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  return (
    <>
      {/* Floating Orb */}
      {!open && (
        <div ref={botRef}
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex justify-center items-center cursor-pointer bg-blue-600
  
  hover:shadow-[0_0_60px_rgba(59,130,246,0.9)]
  hover:scale-110
  transition-all duration-300
  group"
        >


          <Bot className="m-auto h-7 w-7 text-white/90 group-hover:text-white transition" />
        </div>

      )}

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 w-[380px] overflow-hidden
          rounded-3xl border border-white/10
          bg-white/5 backdrop-blur-2xl
          shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3
            border-b border-white/10
            bg-gradient-to-r from-white/10 to-transparent"
          >
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
              <span className="text-sm font-semibold text-white tracking-wide">
                AI Assistant
              </span>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
            <div
              className="chat-scroll h-[300px] overflow-y-auto px-4 py-4 space-y-4
              "
              onWheel={(e) => e.stopPropagation()}
  
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                    backdrop-blur-md shadow-lg
                    ${message.role === "user"
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-black rounded-br-sm"
                        : "bg-white/10 text-white rounded-bl-sm"
                      }`}
                  >
                    {message.parts.map((part, index) =>
                      part.type === "text" ? (
                        <span key={index}>{part.text}</span>
                      ) : null
                    )}
  
                    {status === "streaming" &&
                      message.role === "assistant" && (
                        <span className="ml-1 animate-pulse">▍</span>
                      )}
                  </div>
                </div>
              ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-3">
            <div
              className="flex items-center gap-2 rounded-2xl
              bg-white/5 backdrop-blur-xl
              px-4 py-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                className="flex-1 bg-transparent text-sm text-white
                placeholder:text-white/40 outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && input.trim()) {
                    sendMessage({ text: input.trim() });
                    setInput("");
                  }
                }}
              />

              <button
                onClick={() => {
                  if (input.trim()) {
                    sendMessage({ text: input.trim() });
                    setInput("");
                  }
                }}
                className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400
                px-4 py-1.5 text-sm font-medium text-black
                hover:brightness-110 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
