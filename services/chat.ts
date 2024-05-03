import axios from 'axios';

type Messages = {
  role: 'assistant' | 'user';
  content: string;
};

const sendMessageService = async (messages: Messages[], message: string) => {
  const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/chatbot/chat', { messages: [...messages, { role: 'user', content: message }] });
  return Promise.resolve(res);
};

export { sendMessageService };
