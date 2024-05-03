'use client';
import ChatScreen from './atoms/chatScreen';
import TextArea from '../ui/textArea';
import { cn } from '@/helpers/utills';
import Button from '../ui/button';
import { IoSend } from 'react-icons/io5';
import useChat from '@/hooks/useChat';
import { IoTrash } from 'react-icons/io5';

type Props = {
  className?: string;
};

export default function Chat({ className }: Props) {
  const { messages, message, setMessage, sendMessage, loading, resetChat } = useChat();

  return (
    <div className={cn('flex flex-col w-full h-full bg-gray-100 border-2 border-costum-gray rounded-lg shadow-2xl overflow-hidden', className)}>
      <ChatScreen messages={messages} />
      <div className='flex items-center'>
        <TextArea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={loading ? 'Glov chat thinking...' : message}
          className='w-full'
        />
        <Button onClick={sendMessage} variant='primary'>
          <IoSend className='text-2xl' />
        </Button>
        <Button className='' onClick={resetChat} variant='danger'>
          <IoTrash className='text-2xl' />
        </Button>
      </div>
    </div>
  );
}
