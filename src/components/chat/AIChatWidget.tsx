
import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Message type definition for our chat
type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi there! How can I help you with software license resale today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    // Add user message
    setMessages((prev) => [...prev, newUserMessage]);
    
    // Add mock response (this would be replaced by actual AI integration)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thanks for your message! This is a placeholder response. The real AI integration will be added later.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
    
    setInputValue('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className={cn(
          "h-14 w-14 rounded-full shadow-soft transition-all duration-300 p-0",
          "bg-gradient hover:scale-105 text-white hover:shadow-soft-glow",
          isOpen ? "rotate-90 opacity-0 pointer-events-none" : "rotate-0 opacity-100"
        )}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Panel */}
      <Card
        className={cn(
          "absolute bottom-0 right-0 w-80 md:w-96 shadow-soft-lg overflow-hidden transition-all duration-300 flex flex-col",
          "border border-gray-100 dark:border-gray-800 transform origin-bottom-right",
          isOpen
            ? "h-[500px] opacity-100 scale-100"
            : "h-0 opacity-0 scale-95 pointer-events-none"
        )}
      >
        {/* Chat Header */}
        <div className="p-4 border-b dark:border-gray-800 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-indigo-700 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <h3 className="font-bold">Ask SoftSell AI</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleChat}
            className="h-7 w-7 text-white hover:bg-white/20 rounded-full"
            aria-label="Close chat"
          >
            &times;
          </Button>
        </div>

        {/* Messages Container */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4" style={{ maxHeight: "calc(500px - 130px)" }}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[80%] p-3 rounded-lg animate-fade-in",
                message.sender === "user"
                  ? "bg-blue-500 text-white ml-auto rounded-br-none"
                  : "bg-gray-100 dark:bg-gray-800 dark:text-gray-100 mr-auto rounded-bl-none"
              )}
            >
              <p>{message.content}</p>
              <span className={cn(
                "text-xs block mt-1",
                message.sender === "user" ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
              )}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="border-t dark:border-gray-800 p-4 bg-white dark:bg-gray-900 flex gap-2">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow border-gray-200 dark:border-gray-700 focus-visible:ring-blue-500"
          />
          <Button
            type="submit"
            size="icon"
            className="bg-blue-500 text-white hover:bg-blue-600"
            disabled={!inputValue.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AIChatWidget;
