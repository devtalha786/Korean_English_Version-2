import React, { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import logo from '../../assets/img/sidebar_logo.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SidebarContain from "../Global/SidebarContain";

export default function Header() {

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

    <nav className='w-full px-1 py-2 bg-white md:py-9 md:px-6 '>
    <div  className="container flex items-center justify-between p-0">
   

    <div className='flex items-center text-black/70 t'>
    <Link to='/'><img src={logo} alt="" /></Link>
    <div className="flex flex-col items-start justify-center gap-y-1">
    <h6  className='cursor-pointer  text-[14px]  hover:text-[#fed52a]  '>오비페이와 행복한 하루 되세요!</h6>
    <h6  className='cursor-pointer text-[16px] font-extrabold hover:text-[#fed52a]  '>최고가 찾기</h6>
    </div>
    </div>

    

    {/* menu icon */}
    
    <div className="flex items-center gap-x-1">

    <GoBell size={35} className='rounded-full p-1 bg-[#f6f6f6] cursor-pointer text-black/75'/>
    <IoMenu onClick={handleMenu} size={35} className='rounded-full p-1 bg-[#f6f6f6] cursor-pointer text-black/75'/>
    </div>
    </div>

    
    </nav>

    </div>
    


     {/* Menu Sidebar */}
    <SidebarContain menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
    <div className="mb-[84px]"></div>
    </>
  );
}