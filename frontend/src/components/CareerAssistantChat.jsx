import { useState } from "react";

const CareerAssistantChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    
    // Set loading state
    setIsLoading(true);
    
    // Simulate bot response (with a slight delay to feel more natural)
    setTimeout(() => {
      // Generate a simple bot response
      const botResponse = generateBotResponse(input);
      
      // Add bot message to chat
      setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: "bot" }]);
      setIsLoading(false);
    }, 600);
  };
  
  // Function to generate a bot response based on user input
  const generateBotResponse = (userInput) => {
    const userInputLower = userInput.toLowerCase();
    
    // Simple response logic based on keywords
    if (userInputLower.includes("resume") || userInputLower.includes("cv")) {
      return "Having a strong resume is important! Make sure to highlight your achievements and tailor it to each job you apply for.";
    } else if (userInputLower.includes("interview")) {
      return "Prepare for interviews by researching the company, practicing common questions, and preparing thoughtful questions to ask the interviewer.";
    } else if (userInputLower.includes("skill") || userInputLower.includes("learn")) {
      return "Continuous learning is key in today's job market. Consider online courses, certifications, or workshops to expand your skill set.";
    } else if (userInputLower.includes("salary") || userInputLower.includes("negotiation")) {
      return "When negotiating salary, research industry standards, highlight your value, and consider the entire compensation package, not just the base salary.";
    } else if (userInputLower.includes("hello") || userInputLower.includes("hi") || userInputLower.includes("hey")) {
      return "Hello! I'm your Career Assistant. How can I help with your career questions today?";
    } else {
      return "Thanks for your question about career development. Could you provide more details so I can give you more specific advice?";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 w-full max-w-md mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-xl px-6 py-4">
        <h2 className="text-xl font-semibold">Career Assistant AI</h2>
        <p className="text-blue-100 text-sm">Ask questions about your career path</p>
      </div>

      <div className="h-80 overflow-y-auto p-4 bg-gray-50">
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>Ask me anything about your career!</p>
            </div>
          )}
          
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : ""}`}>
            {msg.sender === "bot" && (
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <div className={`py-2 px-3 rounded-lg shadow-sm ${msg.sender === "user" ? "ml-auto bg-blue-600 text-white" : "ml-3 bg-white text-gray-800"}`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
          
          ))}
          
          {isLoading && (
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3 py-2 px-4 rounded-lg shadow-sm bg-white text-gray-800">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Ask a question about your career path..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            disabled={isLoading}
          />
          <button
  className={`text-white px-4 py-2 rounded-r-lg transition duration-200 flex-shrink-0 ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
  onClick={handleSendMessage}
  disabled={isLoading}
>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerAssistantChat;