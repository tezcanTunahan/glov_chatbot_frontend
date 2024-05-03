import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='flex p-10 justify-between w-full items-center'>
      <div>
        <h1 className='text-orange-500 text-3xl font-semibold '>Glov Chat</h1>
      </div>
      <div>
        <p className='text-xl'>
          Created by{' '}
          <Link href='https://www.tunahantezcan.com' className='text-orange-500 hover:text-orange-700 font-semibold'>
            tunahan tezcan
          </Link>
        </p>
      </div>
    </nav>
  );
}
