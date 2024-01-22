import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import product from '../../assets/img/card image gift.png'
import { IoIosStar } from 'react-icons/io'
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";

const Favourite = () => {
    const [isTrue, setIsTrue] = useState(false)
    const handleTrue = () => 
    {
      setIsTrue(!isTrue)
    }
    const cards = 
  [
    {
      id: 0,
      
    },
    {
      id: 1,
      
    },
    {
      id: 2,
      
    },
    {
      id: 3,
      
    },
    {
      id: 4,
      
    },
    {
      id: 5,
      
    },
   
  ]
  return (
    <>
     <Header/>
     <div className='flex flex-col items-center justify-center w-full px-3 py-3 gap-y-5'>
      <div className='flex items-center justify-between w-full'>
        <h2 className='text-lg font-semibold'>GIFT 찜 리스트</h2>
        <div className='flex items-center gap-x-2'>
          <button className='px-3 py-1 text-sm font-bold rounded-xl text-black bg-[#FED52A]'>선택삭제</button>
          <button className='px-3 py-1 text-sm font-bold rounded-xl text-black bg-[#e5e5e5]'>전체삭제</button>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full gap-y-1'>
    

      <div onClick={handleTrue} className='cursor-pointer w-[95%] rounded-xl shadow-md flex gap-x-3 p-3 '>
         <img src={product} alt="" />
         <div className='w-[95%] '>
             <h6 className='text-lg font-bold text-black'>BHC 20,000원</h6>
             <p className='text-sm text-gray-400'>치킨</p>
             <div className='flex flex-col items-end justify-center w-full '>
             {isTrue ? (
               <FaRegSquare
                 size={25}
                 
                 className='text-[#FED52A] cursor-pointer relative bottom-12 '
               />
             ) : (
               <FaRegSquareCheck
                 size={25}
                 className='text-[#FED52A] cursor-pointer relative bottom-12'
               />
             )}
            
             <h6 className='text-[#FED52A] font-semibold text-xl'>49,000원</h6>
             </div>
         </div>    
      </div>

      <div onClick={handleTrue} className='cursor-pointer w-[95%] rounded-xl shadow-md flex gap-x-3 p-3'>
         <img src={product} alt="" />
         <div className='w-[95%] '>
             <h6 className='text-lg font-bold text-black'>BHC 20,000원</h6>
             <p className='text-sm text-gray-400'>치킨</p>
             <div className='flex flex-col items-end justify-center w-full '>
             {isTrue ? (
               <FaRegSquare
                 size={25}
                 
                 className='text-[#FED52A] cursor-pointer relative bottom-12 '
               />
             ) : (
               <FaRegSquareCheck
                 size={25}
                 className='text-[#FED52A] cursor-pointer relative bottom-12'
               />
             )}
             <h6 className='text-[#FED52A] font-semibold text-xl'>49,000원</h6>
             </div>
         </div>    
      </div>

    
        
      </div>
     <div className='flex flex-col items-center justify-center w-full mt-4 gap-y-12'>
      <h6 className='w-full px-3 text-xl font-semibold'>최근 본 GIFT</h6>
     <div className='flex flex-wrap items-center justify-around gap-y-7 gap-x-2'>
      {cards.map((item)=>(<div key={item.id} className={`${item.id%2 === 0 ? ' ' : '' } flex flex-col px-4 justify-end py-3 shadow-inner gap-y-2 bg-gray-500/70 rounded-3xl h-[210px] w-[160px]`}> 
          <h1 className='text-lg font-bold text-white'>기프티콘 테스트</h1>
          <p className='text-gray-100 '>치킨</p>
          <h1 className='text-lg font-semibold text-white '>50,000원</h1>
        </div>))}
      </div>
     </div>
     </div>
    <Footer address={'favourite'}/>
    </>
  )
}

export default Favourite