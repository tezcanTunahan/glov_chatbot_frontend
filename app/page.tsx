import Chat from '@/components/chat/chat';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center '>
      <Navbar />
      <Chat className='lg:w-1/2 w-10/12' />
    </main>
  );
}
