import { cn } from '@/helpers/utills';
import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
  align?: 'left' | 'right';
};

export default function MessageBox({ className, children, align = 'left' }: Props) {
  return (
    <div className={cn('w-full flex', align === 'right' ? 'justify-end' : 'justify-start')}>
      <div className={cn('flex flex-col p-2  rounded-lg shadow-2xl w-[fit-content] max-w-[80%]', className)}>{children}</div>
    </div>
  );
}
