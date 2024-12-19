import React, { useState } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { 
      type: 'user', 
      content: input 
    }]);
    setInput('');
    
    // 这里可以添加实际的 AI 响应逻辑
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: '这是一个模拟的 AI 响应...'
      }]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto border border-white/10 rounded-lg shadow-lg bg-black/40">
      <div className="h-[500px] overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.type === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-white'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-white/10 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="输入消息..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            发送
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface; 