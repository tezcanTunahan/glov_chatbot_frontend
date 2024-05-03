'use client';
import ChatScreen from './atoms/chatScreen';
import TextArea from '../ui/textArea';
import { cn } from '@/helpers/utills';
import Button from '../ui/button';
import { IoSend } from 'react-icons/io5';
import useChat from '@/hooks/useChat';

type Props = {
  className?: string;
};

export default function Chat({ className }: Props) {
  const { messages, message, setMessage, sendMessage } = useChat();

  return (
    <div className={cn('flex flex-col w-full h-full bg-gray-100 border-2 border-costum-gray rounded-lg shadow-2xl overflow-hidden', className)}>
      <ChatScreen messages={messages} />
      <div className='flex items-center'>
        <TextArea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          className='w-full'
        />

        <Button onClick={sendMessage} variant='ghost'>
          <IoSend className='text-2xl' />
        </Button>
      </div>
    </div>
  );
}
