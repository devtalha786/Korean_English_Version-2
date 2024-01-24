import React from "react";
import Location from "../../assets/img/location.png";
import s from "../../assets/img/search.png";
import { Carousel } from "react-responsive-carousel";
import star from "../../assets/img/star_icon.png";
import DetailsHeader from "./Details-header";
import Header from "./Header";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import { Button, Container } from "reactstrap";
import { RiArrowRightSLine } from "react-icons/ri";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import hotel1 from "../../assets/img/hotel1.jpg";
import hotel2 from "../../assets/img/hotel2.jpg";
import hotel3 from "../../assets/img/hotel3.jpg";
import { FaRegStar } from "react-icons/fa";
import { MdStar } from "react-icons/md";

const heroSection = () => {
    const array = [
        {
            url: "",
            name: "가평 오버더마운틴",
            span: "경기도 가평군",
            pic: star,
            rating: "4.9",
        },
        // {
        //     url: "",
        //     name: "강남 더띠에브",
        //     span: "서울특별시 강남구",
        //     pic: star,
        //     rating: '4.8'
        // },
        // {
        //     url: "",
        //     name: "시호나연티지",
        //     span: "서울특별시 강남구",
        //     pic: star,
        //     rating: '4.4'
        // },
        {
            url: "",
            name: "가평 오버더마운틴",
            span: "가평 오버더마운틴",
            pic: star,
            rating: "4.8",
        },
        {
            url: "",
            name: "가평 오버더마운틴",
            span: "가평 오버더마운틴",
            pic: star,
            rating: "4.6",
        },
    ];

    const hotels = [
        {
            backgroundImage: hotel1,
            title: "삼척 산토리니 펜션",
            location: "강원도 삼척",
        },
        {
            backgroundImage: hotel2,
            title: "삼척 산토리니 펜션",
            location: "강원도 삼척",
        },
        {
            backgroundImage: hotel3,
            title: "삼척 산토리니 펜션",
            location: "강원도 삼척",
        },
        {
            backgroundImage: hotel1,
            title: "삼척 산토리니 펜션",
            location: "강원도 삼척",
        },
        // Add more hotel data as needed
    ];
    return (
        <>
            <div className="w-full bg-[#FAFAFA] min-h-[100vh] ">
                <Header />
                <Container>
                    <div className="mx-2">
                        <div className="flex justify-center my-4 ">
                            <div className="flex bg-white p-2 rounded-2xl">
                                <img
                                    src={Location}
                                    alt=""
                                    className="h-[20px]"
                                />
                                <span className="text-sm font-semibold mx-2">
                                    현재 위치 지정하기
                                </span>
                                <RiArrowRightSLine className="text-2xl" />
                            </div>
                        </div>

                        <h1 className="font-bold text-2xl mb-3">
                            숙박 예약도 역시,
                            <br />
                            오비페이!
                        </h1>

                        <div className="bg-white w-[100%] m-auto rounded-3xl my-6 p-2 flex items-center">
                            {" "}
                            <PiMagnifyingGlassDuotone className="mx-2 " />
                            <input
                                type="text"
                                placeholder="지역, 지하철역, 숙소"
                                className="p-1 pl-3 text-gray-500 outline-none border-none"
                            />
                        </div>

                        <div className=" mt-4 flex justify-between">
                            <h2 className="mx-2 font-bold text-xl ">
                                최근 본 숙소
                            </h2>
                            <Link
                                to="/listing/recently-viewed"
                                className="hover:no-underline"
                            >
                                <span className="mx-2 text-gray-400 cursor-pointer text-sm">
                                    See All
                                </span>
                            </Link>
                        </div>
                    </div>

                    <Container>
                        <div className="my-4 mx-4 w-full">
                            <Swiper
                                slidesPerView={1.3}
                                spaceBetween={10}
                                pagination={true}
                                modules={
                                    [
                                        // Navigation,
                                        // Pagination,
                                        // Mousewheel,
                                        // Keyboard,
                                    ]
                                }
                                className="flex w-full mb-[60px] "
                            >
                                <SwiperSlide className="flex">
                                    <div className="flex w-[90%] flex-col shadow-xs bg-white rounded-2xl">
                                        <img
                                            src={hotel1}
                                            alt=""
                                            className=" rounded-xl bg-gray-500 h-[100px]"
                                        />
                                        <div className="p-2 py-2">
                                            <h1 className="text-balance mx-2 font-bold text-md flex">
                                                세인트존스 호텔
                                            </h1>
                                            <p className="mx-2 font-light text-md text-gray-500">
                                                강원도 강릉시
                                            </p>
                                        </div>
                                        <div className="bg-[#3E3E3E] absolute top-4 left-24 rounded-full w-20 text-white">
                                            <div className="flex py-2 px-3 justify-between ">
                                                <MdStar className="mt-1 text-xl text-[#FD9942]" />
                                                <div>4.8</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="flex">
                                    <div className="flex w-[90%] flex-col shadow-xs bg-white rounded-2xl">
                                        <img
                                            src={hotel2}
                                            alt=""
                                            className=" rounded-xl bg-gray-500 h-[100px]"
                                        />
                                        <div className="p-2 py-2">
                                            <h1 className="text-balance mx-2 font-bold text-md flex">
                                                세인트존스 호텔
                                            </h1>
                                            <p className="mx-2 font-light text-md text-gray-500">
                                                강원도 강릉시
                                            </p>
                                        </div>
                                        <div className="bg-[#3E3E3E] absolute top-4 left-24 rounded-full w-20 text-white">
                                            <div className="flex py-2 px-3 justify-between ">
                                                <MdStar className="mt-1 text-xl text-[#FD9942]" />
                                                <div>4.8</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="flex">
                                    <div className="flex w-[90%] flex-col shadow-xs bg-white rounded-2xl">
                                        <img
                                            src={hotel3}
                                            alt=""
                                            className=" rounded-xl bg-gray-500 h-[100px]"
                                        />
                                        <div className="p-2 py-2">
                                            <h1 className="text-balance mx-2 font-bold text-md flex">
                                                세인트존스 호텔
                                            </h1>
                                            <p className="mx-2 font-light text-md text-gray-500">
                                                강원도 강릉시
                                            </p>
                                        </div>
                                        <div className="bg-[#3E3E3E] absolute top-4 left-24 rounded-full w-20 text-white">
                                            <div className="flex py-2 px-3 justify-between ">
                                                <MdStar className="mt-1 text-xl text-[#FD9942]" />
                                                <div>4.8</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="flex">
                                    <div className="flex w-[90%] flex-col shadow-xs bg-white rounded-2xl">
                                        <img
                                            src={hotel2}
                                            alt=""
                                            className=" rounded-xl bg-gray-500 h-[100px]"
                                        />
                                        <div className="p-2 py-2">
                                            <h1 className="text-balance mx-2 font-bold text-md flex">
                                                세인트존스 호텔
                                            </h1>
                                            <p className="mx-2 font-light text-md text-gray-500">
                                                강원도 강릉시
                                            </p>
                                        </div>
                                        <div className="bg-[#3E3E3E] absolute top-4 left-24 rounded-full w-20 text-white">
                                            <div className="flex py-2 px-3 justify-between ">
                                                <MdStar className="mt-1 text-xl text-[#FD9942]" />
                                                <div>4.8</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="">
                            <div className=" mt-4 flex justify-between">
                                <h2 className=" font-bold text-xl ">
                                    최근 본 숙소
                                </h2>
                                <Link
                                    to="/listing/popular"
                                    className="hover:no-underline"
                                >
                                    <span className="mx-2 text-gray-400 cursor-pointer text-sm">
                                        See All
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </Container>
                    <div className="m-2">
                        {array.map((c) => {
                            return (
                                <>
                                    <div className="flex flex-col items-center space-y-4 my-6">
                                        <div className="flex  bg-white p-2 w-[100%] rounded-2xl">
                                            <div>
                                                {" "}
                                                <img
                                                    src={hotel1}
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
                        <div>
                            <h2 className="mx-2 mt-2  font-bold text-xl ">
                                카테고리 인기 숙소!
                            </h2>
                        </div>
                        <div className="flex justify-between my-3 ">
                            <Button className="btn bg-white text-black rounded-xl px-4 hover:text-black shadow ">
                                호텔
                            </Button>
                            <Button className="btn bg-white text-black rounded-xl px-4  hover:text-black shadow ">
                                모텔
                            </Button>
                            <Button className="btn bg-white text-black rounded-xl px-4 hover:text-black shadow ">
                                펜션
                            </Button>
                        </div>

                        <div className="">
                            <div className="my-4 w-full">
                                <Swiper
                                    slidesPerView={1.3}
                                    spaceBetween={10}
                                    pagination={true}
                                    modules={[]}
                                    className="flex w-full mb-[60px]"
                                >
                                    {hotels.map((hotel, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className="flex"
                                        >
                                            <div
                                                className="relative pt-3 rounded-2xl overflow-hidden shadow-sm"
                                                style={{
                                                    backgroundImage: `url(${hotel.backgroundImage})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition:
                                                        "center",
                                                    width: "95%",
                                                    height: "55vh",
                                                }}
                                            >
                                                {/* Top-left div */}
                                                <div className="bg-[#3E3E3E] absolute top-4 left-24 rounded-full w-20 text-white">
                                                    <div className="flex py-2 px-3 justify-between">
                                                        <MdStar className="mt-1 text-xl text-[#FD9942]" />
                                                        <div>4.8</div>
                                                    </div>
                                                </div>

                                                {/* Content at the bottom */}
                                                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                                                    <h2 className="mt-2 font-bold text-lg">
                                                        {hotel.title}
                                                    </h2>
                                                    <p className="text-[#FFFFFF]">
                                                        {hotel.location}
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        </>
    );
};

export default heroSection;
