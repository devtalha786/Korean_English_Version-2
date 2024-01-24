import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PriceFooter = () => {
    return (
        <>
            <div
                className="fixed bottom-0 z-10 w-full bg-white border-t shadow "
                style={{
                    boxShadow: "0px 10px 50px 0px #6868680D",
                    borderRadius: "15px 15px 0px 0px",
                }}
            >
                <div className="flex items-center justify-between py-[30px] px-4   w-100">
                    <h2 className="text-[#3E3E3E] font-bold text-[22px] leading-[21.82px]">
                        99,000원
                    </h2>
                    <Link  to="/listing/calender"
                    className="hover:no-underline hover:text-[#fed52a]">
                        <button
                            className="py-[10px] px-[36px] rounded-2xl  bg-[#FED52A] text-white"
                            style={{
                                boxShadow: "0px 6px 75px 0px #6457570D",
                            }}
                        >
                            예약하기
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PriceFooter;
