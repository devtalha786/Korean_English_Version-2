import React, { useState } from "react";
import DetailsHeader from "./Details-header";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { IoIosStar } from "react-icons/io";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Footer from "./Footer";

const PaymentMethod = () => {
    return (
        <div>
            <div className="w-full bg-[#f9f9f9] min-h-[100vh] pb-[20px]">
                <DetailsHeader />
                <Container className="">
                    <div className="font-bold text-xl  fs--40">
                        <p>결제 방법</p>
                    </div>

                    <div className="flex flex-row justify-around w-full py-4 ">
                        <div className="flex flex-col  ">
                            <div className="border-2 rounded-2xl p-4">
                                <div className="bg-[#FED52A] w-10 rounded-full">
                                    <span className="py-2 px-2"></span>
                                </div>
                                <div>
                                    {" "}
                                    <p className="font-bold text-sm  fs--10">
                                        오비페이
                                    </p>{" "}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col  ">
                            <div className="border-2 rounded-2xl p-4">
                                <div className="bg-[#FED52A] w-10 rounded-full">
                                    <span className="py-2 px-2"></span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm  fs--10">
                                        신용카드
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white ">
                            <div className="border-2 rounded-2xl p-4">
                                <div className="bg-[#FED52A] w-10 rounded-full">
                                    <span className="py-2 px-2"></span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm  fs--8">
                                        무통장 입금
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form>
                            <div className="mb-4">
                                <input
                                    type="radio"
                                    // id="noReceipt"
                                    // name="receiptOption"
                                    // value="noReceipt"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="noReceipt"
                                    className="flex items-center cursor-pointer"
                                >
                                    <div
                                        className={`w-4 h-4 mr-2 border-2 rounded-full 
                                    
                                    `}
                                    ></div>
                                    <h1 className="font-bold text-lg fs--10">
                                        현금영수증 발행 안함
                                    </h1>
                                </label>
                            </div>
                            <div className="mb-4">
                                <input
                                    type="radio"
                                    id="noReceipt"
                                    name="receiptOption"
                                    value="noReceipt"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="noReceipt"
                                    className="flex items-center cursor-pointer"
                                >
                                    <div
                                        className={`w-4 h-4 mr-2 border-2 rounded-full `}
                                    ></div>
                                    <h1 className="font-bold text-lg fs--10">
                                        개인소득공제용{" "}
                                    </h1>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="py-2">
                            <p className="font-bold text-lg  fs--8 py-2">
                                휴대폰 번호를 입력해주세요.
                            </p>
                            <form>
                                <input
                                    className="p-2 w-100 shadow-sm rounded-lg border-blue-500"
                                    placeholder="010-0000-0000"
                                />
                            </form>
                        </div>
                    </div>
                    <div>
                        <form>
                            <div className="mb-4 my-4">
                                <input
                                    type="radio"
                                    id="noReceipt"
                                    name="receiptOption"
                                    value="noReceipt"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="noReceipt"
                                    className="flex items-center cursor-pointer"
                                >
                                    <div
                                        className={`w-4 h-4 mr-2 border-2 rounded-full `}
                                    ></div>
                                    <h1 className="font-bold text-lg fs--10">
                                        사업자증빙용 / 세금계산서{" "}
                                    </h1>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="py-2">
                            <p className="font-medium  text-lg  fs--8 py-2">
                                사업자 상호를 기재해주세요.
                            </p>
                            <form>
                                <input
                                    className="p-2 w-30 shadow-sm rounded-lg border-blue-500"
                                    placeholder="사업자 상호"
                                />
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className="py-2">
                            <p className="font-medium text-lg  fs--8 py-2">
                                사업자등록번호를 입력해주세요.
                            </p>
                            <form>
                                <input
                                    className="p-2 w-100 shadow-sm rounded-lg border-blue-500"
                                    placeholder="사업자등록번호"
                                />
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className="py-2">
                            <p className="font-medium  text-lg  fs--8 py-2">
                                이메일 주소를 기재해주세요..
                            </p>
                            <form>
                                <input
                                    className="p-2 w-100 shadow-sm rounded-lg border-blue-500"
                                    placeholder="000000@naver.com"
                                />
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="mt-10 text-center  bg-white">
                    <div className="flex justify-between">
                        <div>
                            <p>총 상품금액</p>
                        </div>
                        <div>
                            <p>219,000원</p>
                        </div>
                    </div>
                    <div className="flex justify-between pt-4">
                        <div>
                            <p className="font-medium  text-lg  fs--8 py-2">
                                Total
                            </p>
                        </div>
                        <div>
                            <p className="font-medium  text-lg  fs--8 py-2">
                                219,000원
                            </p>
                        </div>
                    </div>
                    <div className="mt-3">
                    <Link
                        to=""
                        className="hover:no-underline hover:text-[#fed52a]"
                    >
                        <button className="py-[10px] px-[40px] w-100  rounded-2xl  bg-[#FED52A] text-white">
                        결제하기
                        </button>
                    </Link>
                    </div>
                    
                </div>
            </Container>
            <Footer address={"home"} />
        </div>
    );
};

export default PaymentMethod;
