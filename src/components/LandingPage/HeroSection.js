import { React, useState } from "react";
import img1 from "../../assets/img/hero_swiper_image1.png";
import meat from "../../assets/img/meat.png";
import product from "../../assets/img/product-item.png";
import { GiRotaryPhone } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdShoppingBag } from "react-icons/md";
import { BiSolidGift } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { TbCash } from "react-icons/tb";
import { RiCoupon3Line } from "react-icons/ri";

import { AiOutlineShop } from "react-icons/ai";
import { HiGiftTop } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "reactstrap";
import { IoIosStar } from "react-icons/io";

const HeroSection = () => {
    return (
        <>
            <Container>
                <div className="flex flex-col items-center justify-center w-full px-2 pt-3 text-black rounded-t-3xl ">
                    <div className="flex items-center justify-center w-full">
                        <div className="relative px-[15%] py-3 bg-white border rounded-lg shadow-inner top-4">
                            <div className="px-4 py-2 bg_barcode">
                                <button className="bg-[#fed52a] py-3 px-4 font-extrabold rounded-lg ">
                                    바코드 보기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#fed52a] shadow pt-10 pb-3 w-[98%]">
                        <div className="flex items-center justify-end w-full px-2 gap-x-2">
                            <Link
                                to="/charge/bar-input"
                                className="hover:no-underline hover:text-[#fed52a]"
                            >
                                {" "}
                                <div className="flex items-center px-3 py-1 bg-white rounded-xl gap-x-1">
                                    <AiFillPlusSquare
                                        size={16}
                                        className="text-[#fed52a]"
                                    />
                                    <p className="text-[12px] font-extrabold">
                                        충 전
                                    </p>
                                </div>
                            </Link>
                            <Link
                                to="/charge/input-form"
                                className="hover:no-underline hover:text-[#fed52a]"
                            >
                                {" "}
                                <div className="flex items-center px-3 py-1 bg-white rounded-xl gap-x-1">
                                    <GiRotaryPhone
                                        size={16}
                                        className="text-[#fed52a]"
                                    />
                                    <p className="text-[12px] font-extrabold">
                                        출 금
                                    </p>
                                </div>
                            </Link>
                            <Link
                                to="/charge/confirm-form"
                                className="hover:no-underline hover:text-[#fed52a]"
                            >
                                <div className="flex items-center px-3 py-1 bg-white rounded-xl gap-x-1">
                                    <FaGift
                                        size={15}
                                        className="text-[#fed52a]"
                                    />
                                    <p className="text-[12px] font-bold">
                                        포인트 선물
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className="flex items-center justify-between w-full px-4 mt-3 text-black/75">
                            <div className="flex items-center gap-x-2">
                                <p className="font-bold">잔 액</p>
                                <FaRegEyeSlash size={17} className="" />
                            </div>
                            <h5 className="text-[25px] font-bold">
                                100,682 원
                            </h5>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full mt-12 ">
                        <Link
                            to="/shopping-home"
                            className="hover:no-underline "
                        >
                            <div>
                                <MdShoppingBag
                                    size={70}
                                    className="p-3 rounded-full bg-[#fed52a] text-white "
                                />
                                <p className="mt-1 text-[15px] font-semibold text-center text-black">
                                    쇼 핑
                                </p>
                            </div>
                        </Link>
                        <Link
                            to="/booking/home"
                            className="hover:no-underline "
                        >
                            <TbCash
                                size={70}
                                className="p-3 rounded-full bg-[#fed52a] text-white "
                            />
                            <p className="mt-1 text-[15px] font-semibold text-center">
                                숙박 예약
                            </p>
                        </Link>
                        <Link to="/gift-home" className="hover:no-underline ">
                            {" "}
                            <div>
                                <HiGiftTop
                                    size={70}
                                    className="p-3 rounded-full bg-[#fed52a] text-white "
                                />
                                <p className="mt-1 text-[15px] font-semibold text-center text-black">
                                    GIFT
                                </p>
                            </div>
                        </Link>
                        <div>
                            <AiOutlineShop
                                size={70}
                                className="p-3 rounded-full bg-[#fed52a] text-white "
                            />
                            <p className="mt-1 text-[15px] font-semibold text-center">
                                OVI가맹점
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-around w-full mt-12 ">
                        <Link to="" className="hover:no-underline ">
                            <div>
                                <CiWallet
                                    size={70}
                                    className="p-3 rounded-full bg-[#fed52a] text-white "
                                />
                                <p className="mt-1 text-[15px] font-semibold text-center text-black">
                                    MyOvipay
                                </p>
                            </div>
                        </Link>
                        <div>
                            <RiCoupon3Line
                                size={70}
                                className="p-3 rounded-full bg-[#fed52a] text-white "
                            />
                            <p className="mt-1 text-[15px] font-semibold text-center">
                                MyCoupon
                            </p>
                        </div>
                        <Link to="" className="hover:no-underline ">
                            {" "}
                            <div>
                                <HiGiftTop
                                    size={70}
                                    className="p-3 rounded-full bg-[#fed52a] text-white "
                                />
                                <p className="mt-1 text-[15px] font-semibold text-center text-black">
                                    MyGift
                                </p>
                            </div>
                        </Link>
                        <div>
                            <RiShoppingBagLine
                                size={70}
                                className="p-3 rounded-full bg-[#fed52a] text-white "
                            />
                            <p className="mt-1 text-[15px] font-semibold text-center">
                                MyShopping
                            </p>
                        </div>
                    </div>
                    <div className=" items-center justify-center w-full mt-12 ">
                        <Swiper
                            slidesPerView={1}
                            pagination={true}
                            modules={[
                                Navigation,
                                Pagination,
                                Mousewheel,
                                Keyboard,
                            ]}
                            className="flex items-center justify-center w-full mb-[30px] "
                        >
                            <SwiperSlide className="flex items-center justify-center">
                                <img src={img1} alt="Slide 1" />
                            </SwiperSlide>
                            <SwiperSlide className="flex items-center justify-center">
                                <img src={img1} alt="Slide 1" />
                            </SwiperSlide>
                            <SwiperSlide className="flex items-center justify-center">
                                <img src={img1} alt="Slide 1" />
                            </SwiperSlide>
                        </Swiper>

                        {/* Second SLider */}
                        <div>
                            <div className="p-3">
                                <h1 className="font-bold ">오비의 추천상품</h1>
                            </div>

                            <Swiper
                                slidesPerView={1.4}
                                spaceBetween={10}
                                pagination={true}
                                modules={[
                                    Navigation,
                                    Pagination,
                                    Mousewheel,
                                    Keyboard,
                                ]}
                                className="flex w-full mb-[60px] "
                            >
                                <SwiperSlide className="flex">
                                    <div className="card-container pl-3  ">
                                        <div className="card py-5 p-4 rounded-2xl">
                                            <div className="card-content pb-3 ">
                                                <h1 className="font-bold">
                                                    테스트 상품
                                                </h1>
                                                <p className="text-[#fed52a]">
                                                    49,000원
                                                </p>
                                            </div>
                                            <div className="card-image">
                                                <img src={meat} alt="Slide 1" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="flex">
                                    <div className="card-container pl-3 ">
                                        <div className="card py-5 p-4 rounded-2xl">
                                            <div className="card-content pb-3 ">
                                                <h1 className="font-bold">
                                                    테스트 상품
                                                </h1>
                                                <p className="text-[#fed52a]">
                                                    49,000원
                                                </p>
                                            </div>
                                            <div className="card-image">
                                                <img src={meat} alt="Slide 1" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="flex">
                                    <div className="card-container pl-3 ">
                                        <div className="card py-5 p-4 rounded-2xl">
                                            <div className="card-content pb-3 ">
                                                <h1 className="font-bold">
                                                    테스트 상품
                                                </h1>
                                                <p className="text-[#fed52a]">
                                                    49,000원
                                                </p>
                                            </div>
                                            <div className="card-image">
                                                <img src={meat} alt="Slide 1" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="flex">
                                    <div className="card-container pr-3">
                                        <div className="card py-5 p-4 rounded-2xl">
                                            <div className="card-content pb-3 ">
                                                <h1 className="font-bold">
                                                    테스트 상품
                                                </h1>
                                                <p className="text-[#fed52a]">
                                                    49,000원
                                                </p>
                                            </div>
                                            <div className="card-image">
                                                <img src={meat} alt="Slide 1" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    {/* /Last slider/ */}

                    <div className="w-full">
                        <div className="p-3">
                            <h1 className="font-bond">
                                오비의 추천상품
                            </h1>
                        </div>
                        <Swiper
                            slidesPerView={1}
                            pagination={true}
                            modules={[
                                Navigation,
                                Pagination,
                                Mousewheel,
                                Keyboard,
                            ]}
                            className="flex items-center justify-center w-full mb-[30px] "
                        >
                            <SwiperSlide className="flex items-center justify-center">
                                <div className="w-full hover:no-underline">
                                    <div className="w-full rounded-xl shadow-md flex gap-x-3 p-3">
                                        <img src={product} alt="" />
                                        <div className="w-full mt-2">
                                            <h6 className="text-lg font-bold text-black">
                                                테스트 상품
                                            </h6>
                                            <p className="text-sm text-gray-400">
                                                가전제품
                                            </p>
                                            <div className="flex flex-col items-end justify-center w-full ">
                                                <p className="flex items-center gap-x-1">
                                                    <span className="text-gray-400">
                                                        4.9
                                                    </span>
                                                    <IoIosStar
                                                        size={17}
                                                        className="text-[#FED52A]"
                                                    />
                                                </p>
                                                <h6 className="text-[#FED52A] font-semibold text-xl">
                                                    49,000원
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full rounded-xl shadow-md flex gap-x-3 p-3">
                                        <img src={product} alt="" />
                                        <div className="w-full mt-2">
                                            <h6 className="text-lg font-bold text-black">
                                                테스트 상품
                                            </h6>
                                            <p className="text-sm text-gray-400">
                                                가전제품
                                            </p>
                                            <div className="flex flex-col items-end justify-center w-full ">
                                                <p className="flex items-center gap-x-1">
                                                    <span className="text-gray-400">
                                                        4.9
                                                    </span>
                                                    <IoIosStar
                                                        size={17}
                                                        className="text-[#FED52A]"
                                                    />
                                                </p>
                                                <h6 className="text-[#FED52A] font-semibold text-xl">
                                                    49,000원
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex items-center justify-center">
                                <div className="w-full hover:no-underline">
                                    <div className="w-full rounded-xl shadow-md flex gap-x-3 p-3">
                                        <img src={product} alt="" />
                                        <div className="w-full mt-2">
                                            <h6 className="text-lg font-bold text-black">
                                                테스트 상품
                                            </h6>
                                            <p className="text-sm text-gray-400">
                                                가전제품
                                            </p>
                                            <div className="flex flex-col items-end justify-center w-full ">
                                                <p className="flex items-center gap-x-1">
                                                    <span className="text-gray-400">
                                                        4.9
                                                    </span>
                                                    <IoIosStar
                                                        size={17}
                                                        className="text-[#FED52A]"
                                                    />
                                                </p>
                                                <h6 className="text-[#FED52A] font-semibold text-xl">
                                                    49,000원
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full rounded-xl shadow-md flex gap-x-3 p-3">
                                        <img src={product} alt="" />
                                        <div className="w-full mt-2">
                                            <h6 className="text-lg font-bold text-black">
                                                테스트 상품
                                            </h6>
                                            <p className="text-sm text-gray-400">
                                                가전제품
                                            </p>
                                            <div className="flex flex-col items-end justify-center w-full ">
                                                <p className="flex items-center gap-x-1">
                                                    <span className="text-gray-400">
                                                        4.9
                                                    </span>
                                                    <IoIosStar
                                                        size={17}
                                                        className="text-[#FED52A]"
                                                    />
                                                </p>
                                                <h6 className="text-[#FED52A] font-semibold text-xl">
                                                    49,000원
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex items-center justify-center">
                                <div className="w-full hover:no-underline">
                                    <div className="w-full rounded-xl shadow-md flex gap-x-3 p-3">
                                        <img src={product} alt="" />
                                        <div className="w-full mt-2">
                                            <h6 className="text-lg font-bold text-black">
                                                테스트 상품
                                            </h6>
                                            <p className="text-sm text-gray-400">
                                                가전제품
                                            </p>
                                            <div className="flex flex-col items-end justify-center w-full ">
                                                <p className="flex items-center gap-x-1">
                                                    <span className="text-gray-400">
                                                        4.9
                                                    </span>
                                                    <IoIosStar
                                                        size={17}
                                                        className="text-[#FED52A]"
                                                    />
                                                </p>
                                                <h6 className="text-[#FED52A] font-semibold text-xl">
                                                    49,000원
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full rounded-xl shadow-md flex gap-x-3 p-3">
                                        <img src={product} alt="" />
                                        <div className="w-full mt-2">
                                            <h6 className="text-lg font-bold text-black">
                                                테스트 상품
                                            </h6>
                                            <p className="text-sm text-gray-400">
                                                가전제품
                                            </p>
                                            <div className="flex flex-col items-end justify-center w-full ">
                                                <p className="flex items-center gap-x-1">
                                                    <span className="text-gray-400">
                                                        4.9
                                                    </span>
                                                    <IoIosStar
                                                        size={17}
                                                        className="text-[#FED52A]"
                                                    />
                                                </p>
                                                <h6 className="text-[#FED52A] font-semibold text-xl">
                                                    49,000원
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default HeroSection;
