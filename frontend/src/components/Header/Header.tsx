import React from 'react';
interface Props { }

const Header: React.FC<Props> = () => {


  interface MenuItem {
    name: string;
    path: string;
  }

  const menuItems: MenuItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];






  return (



    <div className='container-fluid items-center bg-gray-900 text-white grid grid-cols-[40%_auto] py-2 px-16'>
      <div className=''>
        <img src="https://www.technogiq.com/images/WhiteLogo.png" alt="" />
      </div>
      <div className=''>
        <ul className='flex space-x-4 uppercase'>
          {
            menuItems.map((item) => {
              return (
                <>
                  <a className='px-3 hover:text-yellow-400 transition-all' href="">{item.name}</a>
                </>
              )
            })
          }
        </ul>



      </div>
    </div>
  );
};

export default Header;
