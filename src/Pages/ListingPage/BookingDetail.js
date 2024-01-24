import React from "react";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import medium from "../../assets/img/hotel2.jpg";
import DetailsHeader from "./Details-header";
import { IoIosStar } from "react-icons/io";
import PriceFooter from "./PriceFooter";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "reactstrap";
import location from "../../assets/img/location.png";
import hotel1 from "../../assets/img/hotel1.jpg";
import hotel2 from "../../assets/img/hotel2.jpg";
import hotel4 from "../../assets/img/hotel4.jpg";
import hotel5 from "../../assets/img/hotel5.jpg";
import hotel6 from "../../assets/img/hotel6.jpg";
import man1 from "../../assets/img/man-1.avif";
import man2 from "../../assets/img/man-2.avif";
// import man3 from '../../assets/img/man-3.avif'

const array = [
    {
        url: hotel2,
        name: "가평 오버더마운틴",
        span: "경기도 가평군",
    },
    {
        url: hotel6,
        name: "가평 오버더마운틴",
        span: "가평 오버더마운틴",
    },
];

const BookingDetail = () => {
    return (
        <>
            <DetailsHeader title={"reviews"} />
            <div className="w-full bg-[#f9f9f9] min-h-[100vh] pb-[120px] ">
                <Container>
                    <div>
                        <div className="w-full py-3 flex justify-center">
                            <img
                                className="w-70 h-50 rounded-2xl "
                                src={medium}
                                alt=""
                                // style={{ width: "350px", height: "auto" }}
                            />
                        </div>
                        <div className="title flex justify-between">
                            <h2 className=" font-bold text-xl ">
                                세인트존스 호텔
                            </h2>
                            <p className="flex items-center gap-x-1 ">
                                <span className="text-[#3E3E3E] font-semibold flex items-center gap-x-1">
                                    <IoIosStar
                                        size={17}
                                        className="text-[#FD9942]"
                                    />{" "}
                                    4.8
                                </span>
                            </p>
                        </div>
                        <div className="">
                            <div className="flex pt-3 text-center">
                                <img
                                    className="w-6 h-6 text-center rounded-2xl "
                                    src={location}
                                    alt=""
                                />
                                <span className="mx-1 text-gray-400 text-sm">
                                    강원도 강릉시
                                </span>
                            </div>
                        </div>
                        <div className="">
                            {array.map((c) => {
                                return (
                                    <Link
                                        to="/listing/booking-detail"
                                        className="hover:no-underline"
                                    >
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
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                        <div className=" flex flex-col gap-2">
                            <p className="text-[#3E3E3E] font-bold text-[12px] leading-[25px]">
                                이 곳은 숙박 업소에 대한 설명이 들어갈
                                예정입니다.
                            </p>
                            <p className="text-[#FED52A] font-normal text-[14px] leading-[25px]">
                                Read more...
                            </p>
                        </div>

                        <div className="py-2">
                            <div className="title">
                                <h2 className="text-[#3E3E3E] font-bold text-[16px] leading-[21.82px]">
                                    Photos
                                </h2>
                            </div>
                            <div
                                className="py-3  flex gap-3"
                                style={{
                                    overflow: "hidden",
                                    overflowX: "auto",
                                }}
                            >
                                <img
                                    className="rounded-4xl"
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    className="rounded-4xl"
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    className="rounded-4xl"
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    className="rounded-4xl"
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    className="rounded-4xl"
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    className="rounded-4xl"
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    className="rounded-4xl"
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    className="rounded-4xl"
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    className="rounded-4xl"
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    className="rounded-4xl"
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                {/* <img
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                /> */}
                                {/* <img
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                />
                                <img
                                    src={medium}
                                    alt=""
                                    style={{ width: "95px", height: "auto" }}
                                /> */}
                            </div>
                        </div>

                        <div className="py-2">
                            <div className=" mt-4 flex justify-between">
                                <h2 className=" font-bold text-xl ">Reviews</h2>
                                <Link
                                    to="/listing/reviews"
                                    className="hover:no-underline"
                                >
                                    <span className="mx-2 text-gray-400 cursor-pointer text-sm">
                                        See All
                                    </span>
                                </Link>
                            </div>

                            <div className="py-2">
                                <div className="my-4 flex justify-between ">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={man2}
                                            alt=""
                                            style={{
                                                width: "45px",
                                                height: "45px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <div className="mt-2">
                                            <h1 className="text-md py-1 font-bold text-black">
                                                유으머어
                                            </h1>
                                            <p className="text-sm text-gray-400">
                                                이곳에는 리뷰가 작성이 될
                                                예정입니다. 감사합니다.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="flex items-center gap-x-1">
                                        <span className="text-[#3E3E3E] font-semibold mb-4 flex items-center gap-x-1">
                                            <IoIosStar
                                                size={17}
                                                className="text-[#FD9942]"
                                            />{" "}
                                            4.8
                                        </span>
                                    </p>
                                </div>

                                <div className="my-4 flex justify-between ">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={man1}
                                            alt=""
                                            style={{
                                                width: "45px",
                                                height: "45px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <div className="mt-2">
                                            <h6 className="text-lg font-bold text-black">
                                                테스트으
                                            </h6>
                                            <p className="text-sm text-gray-400">
                                                이곳에는 리뷰가 작성이 될
                                                예정입니다. 감사합니다.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="flex items-center gap-x-1">
                                        <span className="text-[#3E3E3E] font-semibold flex mb-4 items-center gap-x-1">
                                            <IoIosStar
                                                size={17}
                                                className="text-[#FD9942]"
                                            />{" "}
                                            4.8
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link
                            to="/listing/reviews"
                            className="hover:no-underline cursor-pointer"
                        >
                            <div className=" pb-3  flex flex-col gap-2">
                                <p className="text-[#FED52A] font-normal text-[14px] leading-[25px]">
                                    See more reviews
                                </p>
                            </div>
                        </Link>
                    </div>
                </Container>
            </div>
            <PriceFooter />
        </>
    );
};

export default BookingDetail;
