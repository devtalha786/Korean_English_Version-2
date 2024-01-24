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
import DetailsHeader from "./Details-header";
import man1 from "../../assets/img/man-1.avif";
import man2 from "../../assets/img/man-2.avif";
import { Container } from "reactstrap";
// import man3 from "../../assets/img/man-3.avif";
const Reviews = () => {
    const reviews = [
        {
            image: man2,
            name: "유으머어",
            description: "이곳에는 리뷰가 작성이 될 예정입니다. 감사합니다.",
            rating: 4.8,
        },
        {
            image: man1,
            name: "테스트으",
            description: "이곳에는 리뷰가 작성이 될 예정입니다. 감사합니다.",
            rating: 2.4,
        },
        {
            image: man2,
            name: "유으머어",
            description: "이곳에는 리뷰가 작성이 될 예정입니다. 감사합니다.",
            rating: 3.5,
        },
        {
            image: man1,
            name: "테스트으",
            description: "이곳에는 리뷰가 작성이 될 예정입니다. 감사합니다.",
            rating: 2.9,
        },
        {
            image: man2,
            name: "유으머어",
            description: "이곳에는 리뷰가 작성이 될 예정입니다. 감사합니다.",
            rating: 4.9,
        },
        {
            image: man1,
            name: "테스트으",
            description: "이곳에는 리뷰가 작성이 될 예정입니다. 감사합니다.",
            rating: 4.9,
        },
        // Add more reviews as needed
    ];

    return (
        <>
            <DetailsHeader title={"reviews"} />
            <div className="flex flex-col items-center w-full py-4 bg-[#f9f9f9]">
                <Container>
                    <div className="flex flex-col justify-center ">
                        <h2 className=" font-bold text-xl ">Reviews</h2>

                        <div className="mx-2">
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="my-4 flex justify-between "
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={review.image}
                                            alt=""
                                            style={{
                                                width: "45px",
                                                height: "45px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <div className="mt-2">
                                            <h1 className="text-md py-1 font-bold text-black">
                                                {review.name}
                                            </h1>
                                            <p className="text-sm text-gray-400">
                                                {review.description}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="flex items-center gap-x-1">
                                        <span className="text-[#3E3E3E] font-semibold flex mb-4 items-center gap-x-1">
                                            <IoIosStar
                                                size={17}
                                                className="text-[#FD9942]"
                                            />{" "}
                                            {review.rating}
                                        </span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Reviews;
