import { useState } from 'react';
import { sendMessageService } from '@/services/chat';

type Messages = {
  role: 'assistant' | 'user';
  content: string;
};

const useChat = () => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!message) return;
    setLoading(true);
    setMessages((prevMessages) => [...prevMessages, { role: 'user', content: message }]);
    const res = await sendMessageService(messages, message);
    setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: res.data.message }]);
    setMessage('');
    setLoading(false);
  };

  const resetChat = () => {
    console.log('reset chat');
    setMessages([]);
    setMessage('');
  };
  return { messages, message, setMessage, sendMessage, loading, resetChat };
};

export default useChat;
