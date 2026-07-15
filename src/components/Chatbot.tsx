import { useState } from "react";

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async (msg) => {
    const res = await fetch("http://localhost:8000/chat", {
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

    // add user message
    setMessages((prev) => [...prev, { role: "user", text: input }]);

    // call backend
    const reply = await sendMessage(input);

    // add bot response
    setMessages((prev) => [...prev, { role: "bot", text: reply }]);

    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>My AI Chatbot</h2>

      <div style={{ height: 300, overflowY: "auto", border: "1px solid gray", padding: 10 }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <b>{msg.role}:</b> {msg.text}
          </div>
        ))}
      </div>

      <input
        style={{ width: "70%" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />

      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;