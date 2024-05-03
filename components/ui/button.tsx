import { cn } from '@/helpers/utills';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
};

const buttonVariants = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-500 text-white',
  ghost: 'bg-transparent ',
  danger: 'bg-red-500 text-white',
};

export default function Button({ children, className, onClick, variant = 'primary' }: Props) {
  return (
    <button onClick={onClick} className={cn('bg-blue-500 text-black px-4 py-2 rounded-md', buttonVariants[variant], className)}>
      {children}
    </button>
  );
}
