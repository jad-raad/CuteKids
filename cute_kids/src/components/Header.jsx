import React from 'react';

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-green-500 p-4'>
      <div className='flex items-center'>
        <div className='text-white text-4xl jokerman-font mr-8 select-none'><a  href='/'>Cute Kids</a></div>
        <nav className='flex ml-40'>
          <a href='/' className='text-white text-xl mr-10 border-b-2 border-green-500 hover:border-b-2 hover:border-gray-500'>
            Home
          </a>
          <a href='/product-info' className='text-white text-xl mr-10 border-b-2 border-green-500 hover:border-b-2 hover:border-gray-500'>
            Product Info
          </a>
          <a href='/checkout' className='text-white text-xl mr-10 border-b-2 border-green-500 hover:border-b-2 hover:border-gray-500'>
            Check Out
          </a>
        </nav>
      </div>
      <div>
        <a href='/register' className='text-white text-xl border-2 border-white p-3 rounded-xl hover:border-2 hover:bg-gray-500'>
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
