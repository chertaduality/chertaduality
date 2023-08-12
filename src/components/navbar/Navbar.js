import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import Collasp from '../navbar/assest/img.png'  //importing image
// import LogoImage from '../navbar/assest/logo.png'  //importing image

const Navbar = () => {
    // const [showMenu, setShowMenu] = useState(false);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className="w-full h-24 fixed z-[150] bg-navbarColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-10 backdrop-blur ">
        
        <div>
          <ul className="hidden mdl:inline-flex items-center gap-4 lg:gap-10">
            <li
              className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            //   key={_id}
              onClick={scrollToTop}
            >
              <Link
                activeClassN="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Главная
              </Link>
            </li>
            <li
              className="font-bodyFont font-semibold text-lg whitespace-nowrap text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            //   key={_id}
            >
              <Link
                activeClass="active"
                to="/#about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                О нас
              </Link>
            </li>
            <li
              className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            //   key={_id}
            >
              <Link
                activeClass="active"
                to="/#skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Услуги
              </Link>
            </li>
            <li
              className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            //   key={_id}
            >
              <Link
                activeClass="active"
                to="/#projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Проекты
              </Link>
            </li>
            <li
              className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            //   key={_id}
            >
              <Link
                activeClass="active"
                to="/#partners"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Партнеры
              </Link>
            </li>
            <li
              className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            //   key={_id}
            >
              <Link
                activeClass="active"
                to="/#contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Контакты
              </Link>
            </li>
          </ul>
     
        </div>
      </div>
    );
  };

  export default Navbar