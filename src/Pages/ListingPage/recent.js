import React, { useState } from "react";
import Header from "./Header";

import medium from "../../assets/img/medium.png";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { IoIosStar } from "react-icons/io";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import hotel1 from "../../assets/img/hotel1.jpg";
import hotel2 from "../../assets/img/hotel2.jpg";
import hotel3 from "../../assets/img/hotel3.jpg";
import { MdStar } from "react-icons/md";
import star from "../../assets/img/star_icon.png";
import { Container } from "reactstrap";

const recent = () => {
    const array = [
        {
            url: hotel2,
            name: "가평 오버더마운틴",
            span: "경기도 가평군",
            pic: star,
            rating: "5.0",
        },
        {
            url: hotel1,
            name: "가평 오버더마운틴",
            span: "가평 오버더마운틴",
            pic: star,
            rating: "4.8",
        },
        {
            url: hotel2,
            name: "가평 오버더마운틴",
            span: "가평 오버더마운틴",
            pic: star,
            rating: "4.6",
        },
        {
            url: hotel1,
            name: "가평 오버더마운틴",
            span: "가평 오버더마운틴",
            pic: star,
            rating: "4.8",
        },
        {
            url: hotel2,
            name: "가평 오버더마운틴",
            span: "가평 오버더마운틴",
            pic: star,
            rating: "4.6",
        },
    ];

    return (
        <>
            <Header />
            <div className="flex flex-col items-center w-full py-4 bg-[#f9f9f9]">
                <Container>
                    <div className="flex flex-col justify-center w-full ">
                        <h2 className="mx-2 font-bold text-xl ">
                            최근 본 숙소
                        </h2>
                        {array.map((c) => {
                            return (
                                <>
                                    <div className="flex flex-col items-center space-y-4 my-6">
                                        <div className="flex  bg-white p-2 w-[100%] rounded-2xl">
                                            <div>
                                                {" "}
                                                <img
                                                    src={c.url}
                                                    alt=""
                                                    className=" rounded-xl bg-gray-500 h-[80px]"
                                                />{" "}
                                            </div>
                                            <div className="flex flex-col mx-1 justify-center">
                                                <h2 className="mx-2 font-bold text-md ">
                                                    {c.name}
                                                </h2>
                                                <p className="text-xs mx-2 my-1">
                                                    {c.span}
                                                </p>
                                                <div className="flex justify-between w-full">
                                                    <div className="flex justify-between">
                                                        <MdStar className=" text-xl mx-2 text-[#FD9942]" />
                                                        <span className="font-bold">
                                                            {c.rating}
                                                        </span>{" "}
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500 text-xs mt-1">
                                                            (122) Reviews
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </Container>
            </div>
            <Footer address={"home"} />
        </>
    );
};

export default recent;
