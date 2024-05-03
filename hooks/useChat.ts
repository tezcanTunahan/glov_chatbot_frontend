import { useState } from 'react';
import { sendMessageService } from '@/services/chat';

type Messages = {
  role: 'assistant' | 'user';
  content: string;
};

const useChat = () => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [message, setMessage] = useState<string>('');

  const sendMessage = async () => {
    if (!message) return;

    const res = await sendMessageService(messages, message);
    console.log(res.data.message);

    setMessages((prevMessages) => [...prevMessages, { role: 'user', content: message }, { role: 'assistant', content: res.data.message }]);
    setMessage('');
  };
  return { messages, message, setMessage, sendMessage };
};

export default useChat;
