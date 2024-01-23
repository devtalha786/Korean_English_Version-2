import React, { useState } from "react";
import DetailsHeader from "./Details-header";
import { Container, Input } from "reactstrap";
import { LiaGreaterThanSolid } from "react-icons/lia";
// import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css"; // Import default styles
import Calendar from "moedim";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Search = () => {
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [value, setValue] = useState(new Date());

    return (
        <div className="w-full bg-[#f9f9f9] min-h-[100vh] pb-[120px] ">
            <div className="w-full py-4">
                <Input></Input>
            </div>
            <Container className=""></Container>
        </div>
    );
};

export default Search;
