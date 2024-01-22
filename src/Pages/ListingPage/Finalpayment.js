import React, { useState } from "react";
import DetailsHeader from "./Details-header";
import { Container } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import medium from "../../assets/img/medium.png";
import { IoIosStar } from "react-icons/io";
import { LiaGreaterThanSolid } from "react-icons/lia";
const Finalpayment = () => {
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [value, setValue] = useState(new Date());
    const products = [
        {
            id: 1,
            title: "세인트존스 호텔",
            description: "강원도 강릉시",
            rating: "4.8",
            reviews: "1283",
        },
    ];

    return (
        <div className="w-full bg-[#f9f9f9] min-h-[100vh] pb-[18px] ">
            <DetailsHeader clear={"clear"} />
            <Container className="">
                <div className="font-extrabold text-2xl  fs--40">
                    <p>최종 결제</p>
                </div>

                <div className="flex flex-col items-center w-full py-4 bg-[#f9f9f9]">
                    <div className="flex flex-col items-center justify-center w-full ">
                        {products.map((item) => (
                            <Link
                                to="/listing/listingProduct-details"
                                className="w-full hover:no-underline"
                            >
                                <div
                                    className="w-[95%] rounded-[20px] mx-auto bg-white flex gap-x-3 p-3 my-2"
                                    style={{
                                        boxShadow:
                                            "0px 2px 150px 0px #CACACA21",
                                    }}
                                >
                                    <img src={medium} alt="" />
                                    <div className="w-full mt-2">
                                        <h6 className="text-lg font-bold text-black">
                                            {item.title}
                                        </h6>
                                        <p className="text-sm text-gray-400">
                                            {item.description}
                                        </p>
                                        <div className="flex gap-3  w-full mt-2 ">
                                            <p className="flex items-center gap-x-1 ">
                                                <span className="text-[#3E3E3E] font-semibold flex items-center gap-x-1">
                                                    <IoIosStar
                                                        size={17}
                                                        className="text-[#FD9942]"
                                                    />{" "}
                                                    {item.rating}
                                                </span>
                                            </p>
                                            <p className="text-[#CACACA] font-normal text-[11px] mt-1">
                                                ({item.reviews} Reviews)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex justify-between w-full px-2 pt-3 text-blue-400 rounded-t-3xl">
                        <p>체크인</p>
                        <p>체크아웃</p>
                    </div>
                    <div className="flex justify-between font-bold fs--40 w-full px-2 pt-3 text-black">
                        <h1>{dateRange[0].toLocaleDateString()}</h1>
                        <LiaGreaterThanSolid />
                        <h1>{dateRange[1].toLocaleDateString()}</h1>
                    </div>
                </div>

                <div>
                    <div className="my-3 mx-2">
                        <hr />
                    </div>
                    <div className="flex justify-between mx-2">
                        <p className="font-light">2박 3일</p>
                        <h1 className="font-bold">219,000 원</h1>
                    </div>
                </div>

                <div>
                    <div className="my-3 mx-2">
                        <hr />
                    </div>
                    <div className="flex justify-between mx-2">
                        <p className="font-bold">총 합계 결제금</p>
                        <h1 className="font-bold">219,000 원</h1>
                    </div>
                </div>
            </Container>
            <div className="mt-10 text-center">
                <Link
                    to="/listing/reviews"
                    className="hover:no-underline hover:text-[#fed52a]"
                >
                    <button className="py-[10px] px-[40px] min-w-80 rounded-2xl  bg-[#FED52A] text-white">
                        결제
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Finalpayment;
