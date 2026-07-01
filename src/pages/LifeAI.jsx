import { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Send, Sparkles, Trash2, Bot, User } from "lucide-react";
import { generateContent } from "../services/gemini";

function LifeAI() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi Riddhita 🌸 I'm LifeAI, your personal AI productivity assistant. Ask me anything about studies, coding, placements, interviews, productivity or career guidance.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const reply = await generateContent(userMessage);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: reply,
        },
      ]);
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "⚠️ Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        text: "Hi Riddhita 🌸 Chat cleared. How can I help you today?",
      },
    ]);
  };

  return (
    <div className="flex bg-[#FFF7FB] min-h-screen">

      <Sidebar />

      <main className="flex-1 flex flex-col">

        {/* Header */}

        <div className="bg-white border-b border-pink-100 p-6 flex justify-between items-center shadow-sm">

          <div>

            <h1 className="text-3xl font-bold text-pink-600 flex items-center gap-2">

              <Sparkles />

              LifeAI Assistant

            </h1>

            <p className="text-gray-500 mt-2">
              Your Personal AI Productivity Companion
            </p>

          </div>

          <button
            onClick={clearChat}
            className="flex items-center gap-2 bg-pink-100 hover:bg-pink-200 text-pink-600 px-4 py-2 rounded-xl transition"
          >
            <Trash2 size={18} />
            Clear Chat
          </button>

        </div>

        {/* Chat */}

        <div className="flex-1 overflow-y-auto p-8">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex mb-6 ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-2xl rounded-3xl px-6 py-4 shadow ${
                  msg.role === "user"
                    ? "bg-pink-500 text-white"
                    : "bg-white border border-pink-100"
                }`}
              >

                <div className="flex items-center gap-2 mb-2">

                  {msg.role === "assistant" ? (
                    <Bot className="text-pink-500" size={20} />
                  ) : (
                    <User size={20} />
                  )}

                  <span className="font-semibold">
                    {msg.role === "assistant" ? "LifeAI" : "You"}
                  </span>

                </div>

                <p className="leading-7 whitespace-pre-wrap">
                  {msg.text}
                </p>

              </div>

            </div>

          ))}

          {loading && (

            <div className="flex justify-start mb-6">

              <div className="bg-white border border-pink-100 rounded-3xl px-6 py-4 shadow">

                <div className="flex items-center gap-2">

                  <Bot className="text-pink-500" />

                  <span className="font-semibold">
                    LifeAI
                  </span>

                </div>

                <p className="mt-3 text-pink-500 animate-pulse">
                  🤖 Thinking...
                </p>

              </div>

            </div>

          )}

          <div ref={bottomRef}></div>

        </div>

        {/* Quick Prompts */}

        <div className="px-8 mb-4 flex flex-wrap gap-3">

          {[
            "Explain CNN",
            "Difference between AI and ML",
            "Create interview questions",
            "Help me prepare for placements",
            "Summarize Artificial Intelligence",
          ].map((item) => (

            <button
              key={item}
              onClick={() => setInput(item)}
              className="bg-pink-100 hover:bg-pink-200 text-pink-600 px-4 py-2 rounded-full transition"
            >
              {item}
            </button>

          ))}

        </div>

        {/* Input */}

        <div className="bg-white border-t border-pink-100 p-6">

          <div className="flex gap-4">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask LifeAI anything..."
              className="flex-1 border border-pink-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 rounded-2xl transition disabled:opacity-50"
            >
              <Send />
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default LifeAI;