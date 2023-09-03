'use client'
import React, { useContext, useEffect, useState } from 'react'
import DayComp from '@/components/home/DayComp'
import { appContext } from '@/helpers/AppContext';
import Image from 'next/image';

export interface CalendarProps {
    year: number,
    month: number,
}

const Calender = ({year, month}: CalendarProps) => {

  const { taskData, selectedDate, setSelectedDate, nextMonth, previousMonth, goToToday } = useContext(appContext);
    let [monthData, setMonthData] = useState<any>([]);
    let [beginnings, setBeginnings] = useState<any>([]);

    const handleDaySelect = (year: number, month: number, day: number) => {
        setSelectedDate(() => `${year}-${month}-${day}`)
    }
    let shortMonth = Number(selectedDate.split("-")[1])
    let monthString; 
    let shortMonthString; 
    
    switch (month) {
        case 1:
            monthString = "January"
            break;
        case 2:
            monthString = "February"
            break;
        case 3:
            monthString = "March"
            break;
        case 4:
            monthString = "April"
            break;
        case 5:
            monthString = "May"
            break;
        case 6:
            monthString = "June"
            break;
        case 7:
            monthString = "July"
            break;
        case 8:
            monthString = "August"
            break;
        case 9:
            monthString = "September"
            break;
        case 10:
            monthString = "October"
            break;
        case 11:
            monthString = "November"
            break;
        case 12:
            monthString = "December"
            break;
    
        default:
            break;
    }

    switch (shortMonth) {
        case 1:
            shortMonthString = "Jan"
            break;
        case 2:
            shortMonthString = "Feb"
            break;
        case 3:
            shortMonthString = "Mar"
            break;
        case 4:
            shortMonthString = "Apr"
            break;
        case 5:
            shortMonthString = "May"
            break;
        case 6:
            shortMonthString = "Jun"
            break;
        case 7:
            shortMonthString = "Jul"
            break;
        case 8:
            shortMonthString = "Aug"
            break;
        case 9:
            shortMonthString = "Sep"
            break;
        case 10:
            shortMonthString = "Oct"
            break;
        case 11:
            shortMonthString = "Nov"
            break;
        case 12:
            shortMonthString = "Dec"
            break;
    
        default:
            break;
    }
    // : any[] = [
    //     {
    //         indexer: 0,
    //         today: false
    //     },
    //     {
    //         indexer: 1,
    //         today: false
    //     },
    // ];
    const currentDate = new Date()
    
        // let a;
        const totalDaysInMonth = new Date(year, month, 0).getDate()
        // position of days from 0-6 to determine the first day of the next month
        const firstDayOfTheWeek = new Date(year, month - 1, 0).getDay()
        // currentDate.getDate()

        
        useEffect(() => {
            setBeginnings([])
            setMonthData([])


            //   first
            for (let index = 0; index < firstDayOfTheWeek; index++) {
                let obj = {
                    indexer: index,
                    today: false
                }
                setBeginnings((beg: any) =>[obj, ...beg])
                
            }

            for (let index = 0; index < totalDaysInMonth; index++) {
                let today;
                if (currentDate.getMonth() + 1 == month && currentDate.getFullYear() == year && currentDate.getDate() == (index + 1)) {
                    today = true
                } else {
                    today = false
                }
                let objs = {
                    indexer: index + 1,
                    today: today
                }
                setMonthData((mData: any) => [...mData, objs])
                
            }
    
      return () => {
        // second
      }
    }, [month, year])
    
  return (
    <div className='flex flex-col w-11/12 rounded-lg py-4 shadow-xl'>
        <div className='flex flex-row justify-between mx-4'>
            <div onClick={previousMonth} className='cursor-pointer'>
                <Image src={"/chevron-left.svg"} height={15} width={15} alt='Logo' />
            </div>
            <h3>{monthString} {year}</h3>
            <div onClick={nextMonth} className='cursor-pointer'>
                <Image src={"/chevron-right.svg"} height={15} width={15} alt='Logo' />
            </div>
        </div>
        <div className='flex flex-row mx-4 gap-3 mt-4 h-[2.2rem]'>
            <div className='flex-1 border border-gray-400 rounded-lg'>
                <input contentEditable={false} readOnly className='w-full h-full rounded-lg px-3 outline-none' value={`${shortMonthString} ${(selectedDate.split("-")[2])}, ${(selectedDate.split("-")[0])}`} type="text" name="" id="" />
            </div>
            <div onClick={goToToday} className='border border-gray-400 hover:bg-gray-200 flex items-center px-4 rounded-lg cursor-pointer'>
                <span>Today</span>
            </div>
        </div>
        {<div>
            {/* {`${selectedDate}`} */}
        </div>}
        <div className='flex flex-col mx-4 mt-4'>
            <div className='w-full min-w-full flex flex-row'>
                <div className='w-2/12 text-center'>Mo</div>
                <div className='w-2/12 text-center'>Tu</div>
                <div className='w-2/12 text-center'>We</div>
                <div className='w-2/12 text-center'>Th</div>
                <div className='w-2/12 text-center'>Fr</div>
                <div className='w-2/12 text-center'>Sa</div>
                <div className='w-2/12 text-center'>Su</div>
            </div>
            <div className='w-full min-w-full grid grid-cols-7 text-center'>
            {
                beginnings.map((content: any, index: number) => {
                    return (<div key={`empty${index}`} className='h-[3rem]'></div>)
                })
            }
            {
                monthData.map((data: any) => {
                    return (<div key={data.indexer} className={`h-[3rem] flex items-center justify-center cursor-pointer hover:bg-blue-700 hover:text-white rounded-full relative ${data.today && "bg-blue-600 text-white"}`} onClick={() => { handleDaySelect(year, month, data.indexer)} }>
                        <div>{data.indexer}</div>
                        <div className={`absolute fill-blue-400 bottom-0 ${selectedDate != `${year}-${month}-${data.indexer}` && "hidden"}`}>
                            <Image src={"/circleBlue.svg"} height={10} width={10} alt='Logo' />
                        </div>
                    </div>)
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Calender