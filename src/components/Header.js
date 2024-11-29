import React from 'react';
import Logo from '../assets/logo2.png'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='home'>
          <img src={Logo} className='h-10' alt='' />
        </a>

        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
