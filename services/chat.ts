import axios from 'axios';

type Messages = {
  role: 'assistant' | 'user';
  content: string;
};

const sendMessageService = async (messages: Messages[], message: string) => {
  try {
    const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/chatbot/chat', { messages: [...messages, { role: 'user', content: message }] });
    return Promise.resolve(res);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export { sendMessageService };
