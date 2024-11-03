<<<<<<< HEAD
import React, { useState } from "react";
import "../App.css";
import { NavLink, Link, useLocation } from "react-router-dom";
=======
import { useState } from "react";
import "../App.css";
import { Link, useLocation } from "react-router-dom";
>>>>>>> e458d52 (lazy loading done)
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className=" lg:flex justify-around items-center  bg-sky-800 py-2   ">
        <div className="flex justify-between items-center px-4">
          <Link to="/">
<<<<<<< HEAD
          <div className="text-2xl font-bold text-white ">
            ETBCT 2025 <span className="text-orange-500">| SMVDU</span>
          </div>
          </Link>
          
=======
            <div className="text-2xl font-bold text-white ">
              ETBCT 2025 <span className="text-orange-500">| SMVDU</span>
            </div>
          </Link>

>>>>>>> e458d52 (lazy loading done)
          <div className="block lg:hidden cursor-pointer" onClick={handleMenu}>
            {isOpen ? (
              <IoClose size={30} color="white" />
            ) : (
              <IoMdMenu size={30} color="white" />
            )}
            {/* <span className='text-3xl cursor-pointer text-white'><IoMdMenu/></span> */}
          </div>
        </div>

        <div
          className={` nav ${
            isOpen ? "opacity-100" : "hidden"
          } lg:block lg:py-0 py-4 transition-all ease-in duration-300`}
        >
          <ul className="flex flex-col  lg:flex-row items-start justify-center lg:justify-center lg:items-center gap-y-5 gap-x-4 lg:gap-x-5 text-white text-sm ">
            <li className="hover:-translate-y-1 transition-all">
              <Link
                to={"/"}
                className={`nav-link relative mx-4 my-4 md:mx-0 md:my-0 ${
                  location.pathname === "/"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
<<<<<<< HEAD
                onClick={()=>setIsOpen(false)}
=======
                onClick={() => setIsOpen(false)}
>>>>>>> e458d52 (lazy loading done)
              >
                Home
              </Link>
            </li>
            <li className="hover:-translate-y-1 transition-all">
              <Link
                to={"/about"}
                className={`nav-link relative mx-4 my-4 md:mx-0 md:my-0 ${
                  location.pathname === "/about"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
<<<<<<< HEAD
                onClick={()=>setIsOpen(false)}
=======
                onClick={() => setIsOpen(false)}
>>>>>>> e458d52 (lazy loading done)
              >
                About
              </Link>
            </li>
            <li className="hover:-translate-y-1 transition-all">
              <Link
                to={"/call"}
                className={`nav-link relative mx-4 my-4 md:mx-0 md:my-0 ${
<<<<<<< HEAD
                  location.pathname === '/call' ? 'text-orange-500' : 'hover:text-orange-500'
                }`}
                onClick={()=>setIsOpen(false)}
=======
                  location.pathname === "/call"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
                onClick={() => setIsOpen(false)}
>>>>>>> e458d52 (lazy loading done)
              >
                Call for abstract
              </Link>
            </li>
            <li className="hover:-translate-y-1 transition-all">
              <Link
                to={"/register"}
                className={`nav-link relative mx-4 my-4 md:mx-0 md:my-0 ${
<<<<<<< HEAD
                  location.pathname === '/register' ? 'text-orange-500' : 'hover:text-orange-500'
                }`}
                onClick={()=>setIsOpen(false)}
=======
                  location.pathname === "/register"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
                onClick={() => setIsOpen(false)}
>>>>>>> e458d52 (lazy loading done)
              >
                Register
              </Link>
            </li>
            <li className="hover:-translate-y-1 transition-all">
              <Link
                to={"/committee"}
                className={`nav-link relative mx-4 my-4 md:mx-0 md:my-0 ${
<<<<<<< HEAD
                  location.pathname === '/committee' ? 'text-orange-500' : 'hover:text-orange-500'
                }`}
                onClick={()=>setIsOpen(false)}
=======
                  location.pathname === "/committee"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
                onClick={() => setIsOpen(false)}
>>>>>>> e458d52 (lazy loading done)
              >
                Organizing Committee
              </Link>
            </li>
            <li className="hover:-translate-y-1 transition-all">
              <Link
                to={"/speakers"}
                className={`nav-link relative mx-4 my-4 md:mx-0 md:my-0 ${
<<<<<<< HEAD
                  location.pathname === '/speakers' ? 'text-orange-500' : 'hover:text-orange-500'
                }`}
                onClick={()=>setIsOpen(false)}
              >
               Invited Speakers
=======
                  location.pathname === "/speakers"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Invited Speakers
>>>>>>> e458d52 (lazy loading done)
              </Link>
            </li>

            <li className="hover:-translate-y-1 transition-all">
              <Link
                to={"/previous-conferences"}
                className={`nav-link relative mx-4 my-4 md:mx-0 md:my-0 ${
<<<<<<< HEAD
                  location.pathname === '/previous-conferences' ? 'text-orange-500' : 'hover:text-orange-500'
                }`}
                onClick={()=>setIsOpen(false)}
=======
                  location.pathname === "/previous-conferences"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
                onClick={() => setIsOpen(false)}
>>>>>>> e458d52 (lazy loading done)
              >
                Previous Conferences
              </Link>
            </li>
            <li className="hover:-translate-y-1 transition-all">
              <Link
                to={"/sponsers"}
                className={`nav-link relative mx-4 my-4 md:mx-0 md:my-0 ${
<<<<<<< HEAD
                  location.pathname === '/sponsers' ? 'text-orange-500' : 'hover:text-orange-500'
                }`}
                onClick={()=>setIsOpen(false)}
=======
                  location.pathname === "/sponsers"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
                onClick={() => setIsOpen(false)}
>>>>>>> e458d52 (lazy loading done)
              >
                Sponsorship
              </Link>
            </li>
            <li className="hover:-translate-y-1 transition-all">
              <Link
                to={"/gallery"}
                className={`nav-link relative mx-4 my-4 md:mx-0 md:my-0 ${
<<<<<<< HEAD
                  location.pathname === '/gallery' ? 'text-orange-500' : 'hover:text-orange-500'
                }`}
                onClick={()=>setIsOpen(false)}
=======
                  location.pathname === "/gallery"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
                onClick={() => setIsOpen(false)}
>>>>>>> e458d52 (lazy loading done)
              >
                Gallery
              </Link>
            </li>
            <li className="hover:-translate-y-1 transition-all">
              <Link
                to={"/contact"}
                className={`nav-link relative mx-4 my-4 md:mx-0 md:my-0 ${
<<<<<<< HEAD
                  location.pathname === '/contact' ? 'text-orange-500' : 'hover:text-orange-500'
                }`}
                onClick={()=>setIsOpen(false)}
=======
                  location.pathname === "/contact"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
                onClick={() => setIsOpen(false)}
>>>>>>> e458d52 (lazy loading done)
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
