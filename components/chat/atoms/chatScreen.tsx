import React from 'react';
import MessageBox from './messageBox';

type Props = {
  messages: { role: 'assistant' | 'user'; content: string }[];
};

export default function ChatScreen({ messages }: Props) {
  const displayElement =
    messages.length > 0 ? (
      <div>
        {messages.map((message, index) => (
          <MessageBox key={index} align={message.role === 'assistant' ? 'left' : 'right'}>
            {message.content}
          </MessageBox>
        ))}
      </div>
    ) : (
      <div className='w-full h-full flex items-center justify-center'>
        <h1 className='text-xl font-semibold'>How can I help you today?</h1>
      </div>
    );

  return (
    <div className=' bg-costum-gray text-white w-full h-[65vh] py-10 px-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-300'>
      {displayElement}
    </div>
  );
}
