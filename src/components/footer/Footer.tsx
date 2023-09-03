'use client'
import { appContext } from '@/helpers/AppContext'
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'

const Footer = () => {

  const { taskData, currentPage, setCurrentPage } = useContext(appContext);
  // const paginDet: Array<number> = []
  const [paginDet, setPaginDet] = useState<number[]>([])
  const totalPages = taskData.length % 10 == 0 ? Math.floor(taskData.length / 10) : Math.floor(taskData.length / 10) + 1
  // const currentPage = 1

  const handleNumberClick = (number: number) => {
    setCurrentPage(() => number)
  }
  const handleNextPage = () => {
    currentPage < totalPages && setCurrentPage((prev) => prev + 1)
  }
  const handlePreviousPage = () => {
    currentPage > 1 && setCurrentPage((prev) => prev - 1)
  }

  useEffect(() => {
    // paginDet.length = 0;
    // paginDet[1] = 1;
    let paginDetNewArr: number[] = []
    for (let index = 1; index <= totalPages; index++) {
      paginDetNewArr[index] = index
    }
    setPaginDet(() => paginDetNewArr)
  
    return () => {
      // second
    }
  }, [totalPages, currentPage])
  

  return (
    totalPages > 1 && (<div className='flex border-t border-solid border-b-gray-300 items-center justify-between flex-1 pt-4 h-[7vh]'>
      <div onClick={handlePreviousPage} className='flex gap-2 cursor-pointer items-center rounded-lg px-3 py-2'>
        <div>
          <Image src={"/arrow-left-short.svg"} height={25} width={25} alt='Logo' />
        </div>
        <div>Previous</div>
      </div>
      <div className='flex gap-2'>
        {
          paginDet.map((item) => {
            if(item > 3 && item < totalPages - 2) {
              if(currentPage <=3 || currentPage >= totalPages - 2)
              return "."
             if(item == currentPage + 1 || item == currentPage - 1)
              return (<div key={item} className=''>{". . ."}</div>)
              return item == currentPage && (<div key={item} onClick={()=>{handleNumberClick(item)}} className='bg-gray-200 px-2 rounded-full cursor-pointer hover:bg-gray-300'>{item}</div>)
            } else {
              return (<div key={item} onClick={()=>{handleNumberClick(item)}} className={`px-2 rounded-full cursor-pointer hover:bg-gray-300 ${currentPage == item && "bg-gray-200"}`}>{item}</div>)
            }
          }) 
        }
      </div>
      <div onClick={handleNextPage} className='flex gap-2 cursor-pointer items-center rounded-lg px-3 py-2'>
        <div>Next</div>
        <div>
          <Image src={"/arrow-right-short.svg"} height={25} width={25} alt='Logo' />
        </div>
      </div>
    </div>)
  )
}

export default Footer