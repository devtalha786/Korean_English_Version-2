import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { GoArrowLeft, GoBell } from "react-icons/go";
import logo from "../../assets/img/sidebar_logo.png";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SidebarContain from "../../components/Global/SidebarContain";
import { FaRegHeart } from "react-icons/fa";

export default function DetailsHeader({ title, clear }) {
    const history = useHistory();

    const handleBackClick = () => {
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
                <nav className="w-full px-2 py-3 bg-white md:py-9 md:px-4 ">
                    <div className="container flex items-center justify-between p-0">
                        {/* <Link
                            to={`${
                                title == "reviews"
                                    ? "/listing/popular"
                                    : "/booking/home"
                            } `}
                            className="w-full hover:no-underline"
                        ></Link> */}
                        <GoArrowLeft
                            onClick={handleBackClick}
                            size={35}
                            className="rounded-full p-1 cursor-pointer text-black/75"
                        />

                        {/* menu icon */}
                        {title === "reviews" ? (
                            <div
                                className={`text-gray-400 hover:text-[#FED52A] bg-white flex flex-col items-center justify-center gap-y-1`}
                            >
                                <FaRegHeart
                                    size={45}
                                    className="p-2 cursor-pointer"
                                />
                            </div>
                        ) : clear === "clear" ? (
                            <div
                                className={`text-gray-400 hover:text-[#FED52A] bg-white flex flex-col items-center justify-center gap-y-1`}
                            >
                                Clear
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </nav>
            </div>

            {/* Menu Sidebar */}
            <SidebarContain
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
            />
            <div className="mb-[84px]"></div>
        </>
    );
}
