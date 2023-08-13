import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className="w-full h-24 fixed z-[150] bg-navbarColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-10 backdrop-blur ">
        TEST
      <ul>
        <li>
          <Link/>
        </li>
      </ul>
      </div>
    );
  };

  export default Navbar