import Link from 'next/link';

const Header = () => {
  return (
    <div className='w-full h-[100px] flex justify-center items-center bg-red-600'>
      <Link className='w-2/5 text-amber-300 text-4xl' href='/'>
        COMICS
      </Link>
    </div>
  );
};

export default Header;