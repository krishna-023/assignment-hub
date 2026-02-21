import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    keywords: ["price", "cost", "charges"],
    answer:
      "Our pricing depends on deadline and word count. Please share details on WhatsApp for an exact quote."
  },
  {
    keywords: ["delivery", "time", "deadline"],
    answer:
      "We deliver assignments within 6–48 hours depending on complexity and requirements."
  },
  {
    keywords: ["plagiarism", "original", "turnitin"],
    answer:
      "All assignments are 100% plagiarism-free and can include a Turnitin report on request."
  },
  {
    keywords: ["revision", "changes"],
    answer:
      "Yes, we provide free revisions within the agreed scope."
  }
];

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hi! Ask me about price, delivery time, plagiarism or revisions.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);

    const lowerInput = input.toLowerCase();

    const matchedFAQ = faqData.find(faq =>
      faq.keywords.some(keyword => lowerInput.includes(keyword))
    );

    const botReply = matchedFAQ
      ? matchedFAQ.answer
      : "Sorry, I couldn't find that information. For detailed queries, please contact us on WhatsApp below.";

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: botReply, sender: "bot" }
      ]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="chatbot-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="chatbot-header">
              Assignment HUB Assistant
              <span onClick={() => setOpen(false)}>✖</span>
            </div>

            <div className="chatbot-body">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={
                    msg.sender === "bot"
                      ? "bot-message"
                      : "user-message"
                  }
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend}>Send</button>
            </div>

            <a
              href="https://wa.me/919368192701"
              target="_blank"
              rel="noopener noreferrer"
              className="chatbot-whatsapp"
            >
              📲 Contact on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;