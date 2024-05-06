import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-black body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
            <img className='w-10' src="https://static.vecteezy.com/system/resources/previews/019/842/161/non_2x/ark-abstract-technology-logo-design-on-white-background-ark-creative-initials-letter-logo-concept-vector.jpg" alt="" />
            <span className="ml-3  font-bold  uppercase text-2xl">ARKTech World</span>
          </a>
          <p className="mt-2 text-lg text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-black tracking-widest text-lg uppercase font-bold mb-3">Services</h2>
            <nav className="list-none mb-10">
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 text-lg font-normal leading-relaxed tracking-wider  ">Home</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 text-lg font-normal leading-relaxed tracking-wider ">About</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 text-lg font-normal leading-relaxed tracking-wider ">Services</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800  text-lg font-normal leading-relaxed tracking-wider ">Blog</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-black tracking-widest text-lg font-bold  uppercase mb-3">Technology</h2>
            <nav className="list-none mb-10">
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 ">Home</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 ">About</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 ">Services</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 ">Blog</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font   font-bold  text-black tracking-widest text-lg  uppercase mb-3">Our product</h2>
            <nav className="list-none mb-10">
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 ">Home</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 ">About</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 ">Services</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 ">Blog</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3 uppercase">COMPANY</h2>
            <nav className="list-none mb-10">
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 "> Home</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800 ">About</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800" >Services</a>
              </li>
              <li className='my-2'>
                <a className="text-black hover:text-gray-800  ">Blog</a>
              </li>
            </nav>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
