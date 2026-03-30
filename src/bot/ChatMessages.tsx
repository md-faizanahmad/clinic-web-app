"use client";

import { useEffect, useRef } from "react";
import type { Message } from "./types";

type Props = {
  messages: Message[];
};

export default function ChatMessages({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-1.5 max-h-64 overflow-y-auto pr-1">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`text-[13px] px-3 py-2 rounded-lg max-w-[80%]
        ${
          msg.type === "bot"
            ? "bg-gray-100 self-start"
            : "bg-sky-600 text-white self-end"
        }
      `}
        >
          {msg.text}
        </div>
      ))}

      <div ref={bottomRef} />
    </div>
  );
}
