import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Chatbox = ({ diseaseData, isChatboxOpen, handleCloseChatbox }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://192.168.0.75:5000";

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

  const handleSendMessage = async () => {
    if (currentMessage.trim()) {
      try {
        setIsLoading(true); // Set loading state to true
        // Send the user's question to the backend
        const response = await axios.post(
          `${backendUrl}/ask`,
          { query: currentMessage }
        );
        console.log("Response from Chat API:", response);

        // Add the question and backend's response to the chat messages
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { question: currentMessage, answer: response.data.response || "No answer available" },
        ]);
        setCurrentMessage("");
      } catch (error) {
        console.error("Error during chat:", error.response || error.message);
        toast.error(error.response?.data?.response || error.message);
      } finally {
        setIsLoading(false); // Reset loading state
      }
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
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? (
                  <i className="fa-solid fa-spinner animate-spin"></i> // Loading spinner
                ) : (
                  <i className="fa-regular fa-paper-plane fa-lg"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
