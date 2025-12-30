"use client";

import { useState } from "react";

export default function ChatbotUI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      {/* Floating Orb Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full 
          bg-gradient-to-br from-blue-500 to-cyan-400 
          shadow-[0_0_30px_rgba(59,130,246,0.6)]
          transition hover:scale-110"
        />
      )}

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[380px] overflow-hidden 
          rounded-2xl border border-white/10 
          bg-black/60 backdrop-blur-xl 
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              <span className="text-sm font-semibold text-white">
                AI Assistant
              </span>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[300px] space-y-4 overflow-y-auto px-4 py-4">
            {/* Assistant bubble */}
            <div className="max-w-[80%] rounded-xl bg-white/10 px-4 py-2 text-sm text-white">
              Hey 👋  
              <br />
              Ask me anything about this portfolio.
            </div>

            {/* User bubble */}
            <div className="ml-auto max-w-[80%] rounded-xl 
              bg-gradient-to-br from-blue-500 to-cyan-400 
              px-4 py-2 text-sm text-black">
              This UI looks sick.
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-white/10 p-3">
            <div className="flex items-center gap-2 rounded-xl bg-black/50 px-3 py-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-transparent text-sm text-white 
                placeholder:text-white/40 outline-none"
              />

              <button
                className="rounded-lg bg-blue-500 px-3 py-1 text-sm 
                text-black transition hover:bg-blue-400"
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
