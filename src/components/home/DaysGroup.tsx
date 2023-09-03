'use client'
import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '@/helpers/AppContext';

export interface DaysGroupProps {
    title?: string,
    border?: string,
    borderColor?: string,
    color?: string,
    text?: string,
    width?: string | number,
    height?: string | number,
    action?(): void,
    month: number,
    year: number,
}

export interface FiveDaysGroupProps {
    year: number,
    month: number,
    day: number,
    dayOfWeek: string
}

const DaysGroup = ({ title, color, width, height, text, action, border, borderColor, month, year } : DaysGroupProps) => {

    const { taskData, selectedDate, setSelectedDate, nextMonth, previousMonth, goToToday } = useContext(appContext);

    const handleDaySelect = (year: number, month: number, day: number) => {
        setSelectedDate(() => `${year}-${month}-${day}`)
    }

    const getFullDayOfWeek = (dayOfWeek: string) => {
        console.log(dayOfWeek, "dayOfWeek")
        const demer = new Date(dayOfWeek).getDay();
        console.log(demer, "demer")
        switch (demer) {
            case 0:
                return "Sunday"
                break;
            case 1:
                return "Monday"
                break;
            case 2:
                return "Tuesday"
                break;
            case 3:
                return "Wednesday"
                break;
            case 4:
                return "Thursday"
                break;
            case 5:
                return "Friday"
                break;
            case 6:
                return "Saturday"
                break;
            default:
                return "Unknown"
                break;
        }
    }

    const getDayOfWeek = (dayOfWeek: string) => {
        console.log(dayOfWeek, "dayOfWeek")
        const demer = new Date(dayOfWeek).getDay();
        console.log(demer, "demer")
        switch (demer) {
            case 0:
                return "Sun"
                break;
            case 1:
                return "Mon"
                break;
            case 2:
                return "Tue"
                break;
            case 3:
                return "Wed"
                break;
            case 4:
                return "Thu"
                break;
            case 5:
                return "Fri"
                break;
            case 6:
                return "Sat"
                break;
            default:
                return "Unknown"
                break;
        }
    }

    const [fiveDaysBack, setFiveDaysBack] = useState<Array<FiveDaysGroupProps>>([])
    const [fiveDaysForward, setFiveDaysForward] = useState<Array<FiveDaysGroupProps>>([])
    let dMonth: string;

    switch (Number(selectedDate.split("-")[1])) {
        case 1:
            dMonth = "January"
            break;
        case 2:
            dMonth = "February"
            break;
        case 3:
            dMonth = "March"
            break;
        case 4:
            dMonth = "April"
            break;
        case 5:
            dMonth = "May"
            break;
        case 6:
            dMonth = "June"
            break;
        case 7:
            dMonth = "July"
            break;
        case 8:
            dMonth = "August"
            break;
        case 9:
            dMonth = "September"
            break;
        case 10:
            dMonth = "October"
            break;
        case 11:
            dMonth = "November"
            break;
        case 12:
            dMonth = "December"
            break;
    
        default:
            dMonth = ""
            break;
    }

    useEffect(() => {
        setFiveDaysBack([])
        setFiveDaysForward([])


        //   first
        for (let index = 5; index > 0; index--) {
            let year = Number(selectedDate.split("-")[0])
            let month = Number(selectedDate.split("-")[1])
            let day = Number(selectedDate.split("-")[2])
            let obj: FiveDaysGroupProps;
            if (day - index >= 1) {
                obj = {
                    year,
                    month,
                    day: day - index,
                    dayOfWeek: getDayOfWeek(`${year}-${month}-${day - index}`)
                }
                setFiveDaysBack((beg: any) =>[...beg, obj])
            } else {
                const newMonth = month == 1 ? 12 : month - 1;
                const newYear = month == 1 ? year - 1 : year;
                const newDay = (new Date(newYear, newMonth, 0).getDate()) + (day-index)
                obj = {
                    year: newYear,
                    month: newMonth,
                    day: newDay,
                    dayOfWeek: getDayOfWeek(`${newYear}-${newMonth}-${newDay}`)
                }
                setFiveDaysBack((beg: any) =>[...beg, obj])
            }
            
        }

        for (let index = 1; index <= 5; index++) {
            let year = Number(selectedDate.split("-")[0])
            let month = Number(selectedDate.split("-")[1])
            let day = Number(selectedDate.split("-")[2])
            let totalDaysInMonth: number = new Date(year, month, 0).getDate();
            console.log(totalDaysInMonth, "September Days")
            let obj: FiveDaysGroupProps;
            if (day + index <= totalDaysInMonth) {
                obj = {
                    year,
                    month,
                    day: day + index,
                    dayOfWeek: getDayOfWeek(`${year}-${month}-${day + index}`)
                }
                setFiveDaysForward((beg: any) =>[...beg, obj])
            } else {
                const newMonth = month == 12 ? 1 : month + 1;
                const newYear = month == 12 ? year + 1 : year;
                const newDay = (day+index) - totalDaysInMonth
                obj = {
                    year: newYear,
                    month: newMonth,
                    day: newDay,
                    dayOfWeek: getDayOfWeek(`${newYear}-${newMonth}-${newDay}`)
                }
                setFiveDaysForward((beg: any) =>[...beg, obj])
            }
            
        }

  return () => {
    // second
  }
}, [selectedDate])

  return (
    <div className='mb-4'>
        <div className='mb-4 font-semibold'>{dMonth} {year}</div>
        <div className='mt-3 flex gap-3'>
            {
                fiveDaysBack.map((item) => (
                    <div onClick={() => { handleDaySelect(item.year, item.month, item.day)}} key={item.day} className='flex flex-col items-center border border-gray-400 rounded-lg justify-between px-4 py-2 gap-2 cursor-pointer min-w-[4rem] hover:bg-blue-700 hover:text-white'>
                        <span>{item.dayOfWeek}</span>
                        <span>{item.day}</span>
                    </div> 
                ))
            }
            <div onClick={() => { handleDaySelect(year, month, Number(selectedDate.split("-")[2]))}} className='flex flex-col items-center border border-gray-400 rounded-lg justify-between px-4 py-2 gap-2 cursor-pointer min-w-[4rem] hover:bg-blue-700 hover:text-white bg-blue-600 text-white'>
                <span>{getDayOfWeek(selectedDate)}</span>
                <span>{selectedDate.split("-")[2]}</span>
            </div>
            {
                fiveDaysForward.map((item) => (
                    <div onClick={() => { handleDaySelect(item.year, item.month, item.day)}} key={item.day} className='flex flex-col items-center border border-gray-400 rounded-lg justify-between px-4 py-2 gap-2 cursor-pointer min-w-[4rem] hover:bg-blue-700 hover:text-white'>
                        <span>{item.dayOfWeek}</span>
                        <span>{item.day}</span>
                    </div> 
                ))
            }
        </div>
    </div>
  )
}

export default DaysGroup