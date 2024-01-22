import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import logo from '../../assets/img/sidebar_logo.png'
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SidebarContain from "../../components/Global/SidebarContain";

export default function Header() {
  const history = useHistory();

  const handleBackClick = () => {
      // Go back to the previous page
      history.goBack();
  };
    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenu = () => {
      setMenuToggle(!menuToggle);
    };
  
    const handleMouseDown = (event) => {
      // Check if the clicked element is inside the sidebar or the menu icon
      if (
        !event.target.closest(".sidebar-container") &&
        !event.target.closest(".menu-icon")
      ) {
        setMenuToggle(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleMouseDown);
  
      return () => {
        document.removeEventListener("mousedown", handleMouseDown);
      };
    }, []);
      
  
  
  return (
    <>
    <div className="fixed top-0 z-40 w-full ">

    <nav className='w-full px-2 py-3 bg-white md:py-9 md:px-6 '>
    <div  className="container flex items-center justify-between p-0">
    <IoIosArrowBack onClick={handleBackClick} size={35} className='rounded-full p-1 bg-[#f6f6f6] cursor-pointer text-black/75'/>
   

    <h6 className="text-xl font-bold text-black">GIFT</h6>

    

    {/* menu icon */}
    <IoMenu onClick={handleMenu} size={35} className='rounded-full p-1 bg-[#f6f6f6] cursor-pointer text-black/75'/>
    </div>

    
    </nav>

    </div>
    


     {/* Menu Sidebar */}
    <SidebarContain menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
    <div className="mb-[66px]"></div>
    </>
  );
}