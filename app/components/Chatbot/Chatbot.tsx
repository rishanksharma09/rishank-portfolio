"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Bot } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";


export default function ChatbotUI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const botRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);






  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Floating orb entrance
      gsap.from(botRef.current, {
        opacity: 0,
        scale: 0.6,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top+=50 top",
        },
      });
    });

    return () => ctx.revert();
  }, []);


  useLayoutEffect(() => {
    if (!open || !chatRef.current) return;

    gsap.fromTo(
      chatRef.current,
      { opacity: 0, scale: 0.85, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      }
    );
  }, [open]);
  const handleClose = () => {
    if (!chatRef.current) return;

    gsap.to(chatRef.current, {
      opacity: 0,
      scale: 0.85,
      y: 20,
      duration: 0.35,
      ease: "power3.in",
      onComplete: () => {
        setOpen(false);
      },
    });
  };



  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });



  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);



  const handleSend = () => {
    if (!input.trim()) return;
    if (status !== "ready") return;


    sendMessage({ text: input.trim() });
    setInput("");
  };

  return (
    <>
      {/* Floating Orb */}
      {!open && (
        <div
          ref={botRef}
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full
          flex items-center justify-center cursor-pointer
          bg-blue-600 hover:scale-110
          transition-all duration-300
          hover:shadow-[0_0_60px_rgba(59,130,246,0.9)]"
        >
          <Bot className="h-7 w-7 text-white" />
        </div>
      )}

      {/* Chat Window */}
      {open && (
        <div
          ref={chatRef}
          className="fixed bottom-6 right-6 z-50 w-[380px]
          rounded-3xl overflow-hidden
          border border-white/10
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
              <span className="text-sm font-semibold text-white">
                AI Assistant
              </span>
            </div>

            <button 
              onClick={handleClose}
              className="text-white/60 hover:text-white transition cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            className="h-[300px] overflow-y-auto px-4 py-4 space-y-4"
            ref={messagesRef}
            onWheel={(e) => e.stopPropagation()}
          >
            {!messages.length && (
              <p className="text-center text-white/40 ">
                Ask me anything about Rishank!
              </p>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm
        backdrop-blur-md shadow-lg
        ${message.role === "user"
                      ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-black rounded-br-sm"
                      : "bg-white/10 text-white rounded-bl-sm"
                    }`}
                >
                  {message.parts.map((part, i) =>
                    part.type === "text" ? (
                      <ReactMarkdown
                        key={i}
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight]}
                      >
                        {part.text}
                      </ReactMarkdown>
                    ) : null
                  )}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {status === "submitted" && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl px-4 py-2 text-white/70 text-sm flex gap-1">
                  <span className="animate-bounce">•</span>
                  <span className="animate-bounce delay-150">•</span>
                  <span className="animate-bounce delay-300">•</span>
                </div>
              </div>
            )}
            {/* Error message */}
            {error && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl px-4 py-3 text-sm
      bg-red-500/10 text-red-400 border border-red-500/20">
                  ⚠️ Something went wrong.
                  <br />
                  <span className="text-xs opacity-80">
                    Please try again in a moment.
                  </span>
                </div>
              </div>
            )}


            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-3">
            <div className="flex items-center gap-2 rounded-2xl
              bg-white/5 backdrop-blur-xl px-4 py-2">
              <input
                value={input}

                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                className="flex-1 bg-transparent text-sm text-white
                placeholder:text-white/40 outline-none"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}

                disabled={status !== "ready"}
                className="rounded-xl bg-gradient-to-br cursor-pointer
                from-blue-500 to-cyan-400
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
