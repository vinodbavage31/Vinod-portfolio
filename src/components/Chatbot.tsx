import React, { useState } from "react";

type Message = {
  role: string;
  text: string;
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (msg: string) => {
    const res = await fetch("http://localhost:8010/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: msg }),
    });

    const data = await res.json();
    return data.answer;
  };

  const handleSend = async () => {
    if (!input) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);

    const reply = await sendMessage(input);

    setMessages((prev) => [...prev, { role: "bot", text: reply }]);

    setInput("");
  };

  return (
    <>
      {/* 🔵 Floating Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#4f46e5",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        💬
      </div>

      {/* 💬 Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "320px",
            height: "420px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#4f46e5",
              color: "white",
              padding: "10px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            AI Assistant
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              fontSize: "14px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "10px",
                  textAlign: msg.role === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 10px",
                    borderRadius: "10px",
                    backgroundColor:
                      msg.role === "user" ? "#4f46e5" : "#f1f1f1",
                    color: msg.role === "user" ? "white" : "black",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #ddd",
            }}
          >
            <input
              style={{
                flex: 1,
                border: "none",
                padding: "10px",
                outline: "none",
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button
              onClick={handleSend}
              style={{
                padding: "10px",
                backgroundColor: "#4f46e5",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;