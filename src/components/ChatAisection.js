// import React, { useState, useRef, useEffect } from 'react';

// export default function ChatAisection() {
//   const [messages, setMessages] = useState([
//     { id: 1, type: 'bot', content: 'Hello! How can I assist you today?' },
//     { id: 2, type: 'user', content: 'Can you tell me about GPT?' },
//   ]);
//   const [newMessage, setNewMessage] = useState('');
//   const [botTyping, setBotTyping] = useState(false);
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);

//   const handleSend = () => {
//     if (newMessage.trim() !== '') {
//       setMessages([...messages, { id: Date.now(), type: 'user', content: newMessage }]);
//       setNewMessage('');

//       // Simulate bot typing animation
//       setBotTyping(true);
//       setTimeout(() => {
//         simulateBotResponse("Sure! GPT stands for Generative Pre-trained Transformer...");
//       }, 1000);
//     }
//   };

//   const simulateBotResponse = (fullText) => {
//     setBotTyping(false);

//     // Add a placeholder for the bot's response
//     const botMessageId = Date.now();
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { id: botMessageId, type: 'bot', content: '' },
//     ]);

//     let currentText = '';
//     const typingInterval = setInterval(() => {
//       currentText += fullText[currentText.length];
//       setMessages((prevMessages) =>
//         prevMessages.map((message) =>
//           message.id === botMessageId
//             ? { ...message, content: currentText }
//             : message
//         )
//       );

//       if (currentText === fullText) {
//         clearInterval(typingInterval);
//       }
//     }, 50);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault(); // Prevent line break
//       handleSend();
//     }
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   // Auto-resize textarea
//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.style.height = 'auto';
//       inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
//     }
//   }, [newMessage]);

//   return (
//     <div className="h-full w-full flex flex-col bg-white text-black p-10 md:p-28">

//       <style>
//         {`
//           .blinking-cursor {
//             display: inline-block;
//             width: 1ch;
//             animation: blink 1s step-end infinite;
//           }

//           @keyframes blink {
//             50% {
//               opacity: 0;
//             }
//           }
//         `}
//       </style>

//       {/* Chat Messages Area */}
//       <div className="flex-grow overflow-y-auto mb-4">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
//           >
//             <div
//               className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
//                 message.type === 'user' ? 'bg-black text-white' : 'bg-gray-200 text-black'
//               }`}
//               style={{
//                 whiteSpace: 'pre-line', // Preserve line breaks
//               }}
//             >
//               {message.content}
//             </div>
//           </div>
//         ))}
//         {botTyping && (
//           <div className="mb-4 flex justify-start">
//             <div className="max-w-xs md:max-w-md px-4 py-2 rounded-lg bg-gray-200 text-black">
//               <span className="blinking-cursor">Typing...</span>
//             </div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input Area */}
//       <div className="bg-white p-4 border-t border-gray-300 flex items-center space-x-2 mb-[10px] md:mb-[10px]">
//         <textarea
//           ref={inputRef}
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Type your message..."
//           rows="1"
//           className="flex-grow border border-gray-300 rounded-lg p-2 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-300 resize-none"
//         />
//         <button
//           onClick={handleSend}
//           className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'; // Import axios for API requests

export default function ChatAisection() {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', content: 'Hello! How can I assist you today?' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [botTyping, setBotTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const handleSend = async () => {
    if (newMessage.trim() !== '') {
      // Add the user's message to the chat
      const userMessage = { id: Date.now(), type: 'user', content: newMessage };
      setMessages([...messages, userMessage]);
      setNewMessage('');

      // Simulate bot typing animation
      setBotTyping(true);

      try {
        // Make a POST request to the FastAPI backend
        const response = await axios.post('https://refactored-succotash-q5vpr7qg45wcxjxr-8000.app.github.dev/chat', {
          user_content: newMessage,
        });

        // Extract the bot's response from the API
        const botResponse = response.data.response;

        // Add the bot's response to the chat
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now(), type: 'bot', content: botResponse },
        ]);
      } catch (error) {
        // Handle any API errors
        console.error('Error fetching bot response:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: Date.now(),
            type: 'bot',
            content: 'Oops! Something went wrong. Please try again later.',
          },
        ]);
      } finally {
        setBotTyping(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent line break
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [newMessage]);

  return (
    <div className="h-full w-full flex flex-col bg-white text-black p-10 md:p-28">
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            width: 1ch;
            animation: blink 1s step-end infinite;
          }

          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>

      {/* Chat Messages Area */}
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-black'
              }`}
              style={{
                whiteSpace: 'pre-line', // Preserve line breaks
              }}
            >
              {message.content}
            </div>
          </div>
        ))}
        {botTyping && (
          <div className="mb-4 flex justify-start">
            <div className="max-w-xs md:max-w-md px-4 py-2 rounded-lg bg-gray-200 text-black">
              <span className="blinking-cursor">Typing...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-gray-300 flex items-center space-x-2 mb-[10px] md:mb-[10px]">
        <textarea
          ref={inputRef}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          rows="1"
          className="flex-grow border border-gray-300 rounded-lg p-2 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-300 resize-none"
        />
        <button
          onClick={handleSend}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Send
        </button>
      </div>
    </div>
  );
}
