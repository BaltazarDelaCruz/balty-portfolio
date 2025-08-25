<<<<<<< HEAD
function Home() {
  const [messages, setMessages] = React.useState([
    { sender: "ai", text: "Hello 👋, how can I help?" }
  ]);
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const chatContainerRef = React.useRef(null);

  // Auto-scroll inside chat only
  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Handle send
 const sendMessage = async () => {
  if (!input.trim()) return;

  setMessages((prev) => [...prev, { sender: "user", text: input }]);
  const userInput = input;
  setInput("");

  setIsTyping(true);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userInput })
    });

    const data = await res.json();

    const reply = data.reply || "❌ No response";

    // 1️⃣ Add an empty AI bubble *before* typing effect
    setMessages((prev) => [...prev, { sender: "ai", text: "" }]);

    // 2️⃣ Typing effect updates last AI bubble
    let currentText = "";
    const words = reply.split(" ");

    words.forEach((word, i) => {
      setTimeout(() => {
        currentText += (i === 0 ? "" : " ") + word;
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { sender: "ai", text: currentText }
        ]);
      }, i * 60);
    });

  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: "❌ Error: backend issue" }
    ]);
  } finally {
    setTimeout(() => setIsTyping(false), 1000);
  }
};

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent newline
      sendMessage();
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-20 bg-transparent text-white font-poppins"
    >
      {/* Left: Text */}
      <div className="flex-1 space-y-4 lg:space-y-6">
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight glow-text">
          Hi, I'm <span className="text-[#536983]">Balty</span>
        </h1>

        <p className="text-base lg:text-lg text-gray-300 max-w-lg typing-effect">
          UI/UX Designer | Front-End Developer | IT Support
        </p>

        {/* Tech Tags */}
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {["Java", "Python", "Kotlin", "Firebase", "MongoDB"].map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-[#536983]/60 border border-white/20 rounded-full text-white hover:bg-[#536983]/80 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-sm lg:text-base text-gray-400 max-w-lg leading-relaxed">
          I specialize in crafting clean, user-friendly interfaces and building
          responsive websites using modern web technologies. Experienced in
          troubleshooting IT issues and ensuring smooth system operations.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 pt-2">
          <a
            href="https://www.linkedin.com/in/baltazar-dela-cruz-0a4b392a1/"
            target="_blank"
            className="flex items-center px-5 py-2.5 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition group hover:shadow-[0_0_15px_#536983]"
          >
            LinkedIn
            <img
              src="/image/share.png"
              alt="Share icon"
              className="w-4 h-4 ml-2 inline-block transition duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </a>
        </div>
      </div>

      {/* Right: AI Chat */}
      <div className="flex-1 flex flex-col mt-10 lg:mt-0 w-full max-w-md h-96 bg-[#1e293b] rounded-2xl shadow-lg border border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="bg-[#394b5f] px-4 py-2">
          <h3 className="font-semibold text-sm">Balty AI Assistant</h3>
        </div>

        {/* Messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 p-3 overflow-y-auto text-sm space-y-3 custom-scrollbar"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-xl shadow-md max-w-[75%] border ${
                  msg.sender === "user"
                    ? "bg-[#536983] border-[#415168] text-white rounded-br-none"
                    : "bg-gray-700 border-gray-600 text-white rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-gray-300 text-xs italic animate-pulse">
                Balty AI is typing...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-2 border-t border-gray-700 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm focus:outline-none"
          />
          <button
  onClick={sendMessage}
  disabled={isTyping}
  className={`px-4 py-2 rounded-lg text-sm ${
    isTyping
      ? "bg-gray-600 cursor-not-allowed"
      : "bg-[#536983] hover:bg-[#415168]"
  }`}
>
  {isTyping ? "...." : "Send"}
</button>

        </div>
      </div>
    </section>
  );
}
=======
function Home() {
  const [messages, setMessages] = React.useState([
    { sender: "ai", text: "Hello 👋, how can I help?" }
  ]);
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const chatContainerRef = React.useRef(null);

  // Auto-scroll inside chat only
  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Handle send
 const sendMessage = async () => {
  if (!input.trim()) return;

  setMessages((prev) => [...prev, { sender: "user", text: input }]);
  const userInput = input;
  setInput("");

  setIsTyping(true);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userInput })
    });

    const data = await res.json();

    const reply = data.reply || "❌ No response";

    // 1️⃣ Add an empty AI bubble *before* typing effect
    setMessages((prev) => [...prev, { sender: "ai", text: "" }]);

    // 2️⃣ Typing effect updates last AI bubble
    let currentText = "";
    const words = reply.split(" ");

    words.forEach((word, i) => {
      setTimeout(() => {
        currentText += (i === 0 ? "" : " ") + word;
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { sender: "ai", text: currentText }
        ]);
      }, i * 60);
    });

  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: "❌ Error: backend issue" }
    ]);
  } finally {
    setTimeout(() => setIsTyping(false), 1000);
  }
};

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent newline
      sendMessage();
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-20 bg-transparent text-white font-poppins"
    >
      {/* Left: Text */}
      <div className="flex-1 space-y-4 lg:space-y-6">
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight glow-text">
          Hi, I'm <span className="text-[#536983]">Balty</span>
        </h1>

        <p className="text-base lg:text-lg text-gray-300 max-w-lg typing-effect">
          UI/UX Designer | Front-End Developer | IT Support
        </p>

        {/* Tech Tags */}
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {["Java", "Python", "Kotlin", "Firebase", "MongoDB"].map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-[#536983]/60 border border-white/20 rounded-full text-white hover:bg-[#536983]/80 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-sm lg:text-base text-gray-400 max-w-lg leading-relaxed">
          I specialize in crafting clean, user-friendly interfaces and building
          responsive websites using modern web technologies. Experienced in
          troubleshooting IT issues and ensuring smooth system operations.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 pt-2">
          <a
            href="https://www.linkedin.com/in/baltazar-dela-cruz-0a4b392a1/"
            target="_blank"
            className="flex items-center px-5 py-2.5 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition group hover:shadow-[0_0_15px_#536983]"
          >
            LinkedIn
            <img
              src="/image/share.png"
              alt="Share icon"
              className="w-4 h-4 ml-2 inline-block transition duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </a>
        </div>
      </div>

      {/* Right: AI Chat */}
      <div className="flex-1 flex flex-col mt-10 lg:mt-0 w-full max-w-md h-96 bg-[#1e293b] rounded-2xl shadow-lg border border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="bg-[#394b5f] px-4 py-2">
          <h3 className="font-semibold text-sm">Balty AI Assistant</h3>
        </div>

        {/* Messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 p-3 overflow-y-auto text-sm space-y-3 custom-scrollbar"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-xl shadow-md max-w-[75%] border ${
                  msg.sender === "user"
                    ? "bg-[#536983] border-[#415168] text-white rounded-br-none"
                    : "bg-gray-700 border-gray-600 text-white rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-gray-300 text-xs italic animate-pulse">
                Balty AI is typing...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-2 border-t border-gray-700 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm focus:outline-none"
          />
          <button
  onClick={sendMessage}
  disabled={isTyping}
  className={`px-4 py-2 rounded-lg text-sm ${
    isTyping
      ? "bg-gray-600 cursor-not-allowed"
      : "bg-[#536983] hover:bg-[#415168]"
  }`}
>
  {isTyping ? "...." : "Send"}
</button>

        </div>
      </div>
    </section>
  );
}
>>>>>>> f31bf75 (Initial commit)
