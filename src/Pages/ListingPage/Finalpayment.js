import React, { useState } from "react";
import DetailsHeader from "./Details-header";
import { Container } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import medium from "../../assets/img/medium.png";
import { IoIosStar } from "react-icons/io";
import { LiaGreaterThanSolid } from "react-icons/lia";
import hotel2 from "../../assets/img/hotel2.jpg";
import star from "../../assets/img/star_icon.png";
import { MdStar } from "react-icons/md";
const Finalpayment = () => {
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [value, setValue] = useState(new Date());
    const array = [
        {
            url: hotel2,
            name: "가평 오버더마운틴",
            span: "경기도 가평군",
            rating: "5.0",
        },
    ];

    return (
        <div className="w-full bg-[#f9f9f9] min-h-[100vh] pb-[18px] ">
            <DetailsHeader />
            <Container>
                <div className="mx-2">
                    <div>
                        <h1 className="font-bold text-2xl mb-3">최종 결제</h1>
                    </div>

                    <div className="flex flex-col items-center w-full bg-[#f9f9f9]">
                        <div className="flex flex-col items-center justify-center w-full ">
                            {array.map((c) => {
                                return (
                                    <div className="flex flex-col items-center space-y-4 mb-2">
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
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between w-full px-2 pt-3 text-blue-400 rounded-t-3xl">
                            <p className="text-sm">체크인</p>
                            <p className="text-sm">체크아웃</p>
                        </div>
                        <div className="flex justify-between font-bold fs--40 w-full px-2 pt-3 text-black">
                            <h1 className="font-bold text-lg">2024.01.11</h1>
                            <LiaGreaterThanSolid />
                            <h1 className="font-bold text-lg">2024.01.13</h1>
                        </div>
                    </div>

                    <div>
                        <div className="my-3 mx-2">
                            <hr />
                        </div>
                        <div className="flex justify-between mx-2">
                            <p className="font-light">2박 3일</p>
                            <h1 className="font-bold text-xl">219,000 원</h1>
                        </div>
                    </div>

                    <div>
                        <div className="my-3 mx-2">
                            <hr />
                        </div>
                        <div className="flex justify-between mx-2">
                            <h2 className="font-bold text-xl mb-3">
                                총 합계 결제금
                            </h2>
                            <h1 className="font-bold text-xl">219,000 원</h1>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            to="/listing/payment-method"
                            className="hover:no-underline hover:text-[#fed52a]"
                        >
                            <button className="py-[10px] px-[40px] w-100 rounded-2xl  bg-[#FED52A] text-white">
                            <h1 className="font-bold text-xl"> 결제</h1>
                               
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Finalpayment;
