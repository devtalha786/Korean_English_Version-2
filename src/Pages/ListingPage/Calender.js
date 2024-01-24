import React, { useState } from "react";
import DetailsHeader from "./Details-header";
import { Container } from "reactstrap";
import { LiaGreaterThanSolid } from "react-icons/lia";
// import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css"; // Import default styles
import Calendar from "moedim";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Calender = () => {
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [value, setValue] = useState(new Date());

    return (
        <div className="w-full bg-[#f9f9f9] min-h-[100vh] pb-[20px] ">
            <DetailsHeader clear={"clear"} />
            <Container className="">
                <div>
                    <div>
                        <div className="flex justify-between w-full px-2 pt-3 text-blue-400 rounded-t-3xl">
                            <p className="font-bold">체크인</p>
                            <p className="font-bold">체크아웃</p>
                        </div>
                        <div className="flex justify-between w-full px-2 pt-3 text-black">
                            <h1 className="text-balance mx-2 font-bold text-md">
                                {dateRange[0].toLocaleDateString()}
                            </h1>
                            <LiaGreaterThanSolid />
                            <h1 className="text-balance mx-2 font-bold text-md">
                                {dateRange[1].toLocaleDateString()}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="calendar-container  border-none  flex justify-center">
                    <Calendar
                        className="calender-style shadow-sm "
                        value={value}
                        onChange={(d) => setValue(d)}
                    />
                </div>
            </Container>
            <div className="mt-10 text-center">
                <Link
                    to="/listing/payment"
                    className="hover:no-underline hover:text-[#fed52a]"
                >
                    <button className="py-[10px] px-[40px] font-bold text-xl rounded-2xl  bg-[#FED52A] text-white">
                        예약하기
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Calender;
