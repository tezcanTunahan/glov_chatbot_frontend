import React from 'react';

type Props = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
};

export default function TextArea({ onChange, className, value }: Props) {
  return (
    <textarea
      onChange={onChange}
      value={value}
      className='w-full h-28 p-2 rounded-lg border-none bg-transparent shadow-none outline-none '
      placeholder='Type your message here...'
    />
  );
}
