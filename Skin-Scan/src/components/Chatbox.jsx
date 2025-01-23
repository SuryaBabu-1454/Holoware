import React, { useState, useEffect } from "react";

const Chatbox = ({ diseaseData, isChatboxOpen, handleCloseChatbox }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  // Update chatMessages whenever diseaseData changes
  useEffect(() => {
    if (diseaseData) {
      setChatMessages([
        {
          question: `Explain about ${diseaseData.name}?`,
          answer: diseaseData.description,
        },
      ]);
    }
  }, [diseaseData]);

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      // Mock response (You can integrate with an API here)
      const mockResponse = `This is a placeholder response for "${currentMessage}".`;

      setChatMessages((prevMessages) => [
        ...prevMessages,
        { question: currentMessage, answer: mockResponse },
      ]);

      setCurrentMessage("");
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Chatbox with Animation */}
      {isChatboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 max-w-2xl rounded-lg shadow-lg p-6 relative transform transition-all duration-300 scale-100 opacity-100">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={handleCloseChatbox}
            >
              <i className="fa-solid fa-times"></i>
            </button>

            <h2 className="text-xl font-bold text-cyan-800 mb-4">
              Chat about {diseaseData?.name || "Unknown Disease"}
            </h2>

            {/* Chat Messages */}
            <div className="bg-gray-100 p-4 rounded-lg h-80 overflow-y-auto">
              {chatMessages.map((message, index) => (
                <div key={index} className="mb-5">
                  <p className="text-black bg-gray-200 rounded-md text-sm p-2 mb-4 ms-10 text-end">
                    <strong>Question:</strong> {message.question}
                  </p>
                  <p className="text-gray-700 mt-2 text-sm text-gray-400 bg-gray-300 p-2 mb-5 me-10 rounded-md">
                    <strong>Answer:</strong> {message.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Input Box */}
            <div className="flex items-center mx-10 my-5">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Clear your doubts..."
                className="flex-1 border-b focus:outline-none focus-within:border-cyan-500 px-2 py-2 placeholder-gray-500"
              />
              <button
                onClick={handleSendMessage}
                className="text-black px-5 py-2 border-b hover:text-cyan-700 hover:scale-110 rounded-md transition"
              >
                <i className="fa-regular fa-paper-plane fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
