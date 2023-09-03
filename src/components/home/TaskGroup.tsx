import { appContext } from '@/helpers/AppContext';
import Image from 'next/image';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'

export interface CustomHTMLInputElement extends HTMLInputElement {
    target: {
        checked: boolean,
    }
}

const TaskGroup = () => {

    const { taskData, currentPage, selectedDate, updateTaskCompleted, setSelectedItem, setEditTaskStatus, setViewTaskStatus, setAddTaskStatus, setSelectedDate, nextMonth, previousMonth, goToToday } = useContext(appContext);

    const [displayData, setDisplayData] = useState(taskData.slice(0, 10))

    const getFromNow = (date: string, time: string) => {
        const targetDate = new Date(`${date} ${time}`).valueOf()
        const todayDate = new Date().valueOf()
        const hoursOfTodayRemaining = 24 - (new Date().getHours())
        const remainingTime = (targetDate - todayDate) / 1000;
        if (remainingTime <= 0) {
            return "Time Elapsed"
        }
        else {
            if (remainingTime < 86400) {
                return "Today"
            } else if (remainingTime > 86400 && remainingTime < (86400 * 2)) {
                return "Tomorrow"
            } else {
                return `${Math.floor(remainingTime / 86400)} Days`
            }
        }
        return remainingTime
    }

    const ViewTaskActivate = () => {
        setEditTaskStatus(() => false)
        setViewTaskStatus(() => true)
        setAddTaskStatus(() => false)
    }

    const handleCompletedUpdtae = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        console.log(e.target.checked, "waahahah")
        setEditTaskStatus(() => false)
        setViewTaskStatus(() => false)
        setAddTaskStatus(() => false)
        updateTaskCompleted(e.target.checked, id)
    }

    const setAndViewTask = (id: number, date: string, alarmMin: number, time: string, title: string, completed: boolean) => {
        setSelectedItem({
            id,
            // userId,
            date,
            alarmMin,
            time,
            title,
            completed,
        })
        ViewTaskActivate()
        // id: 999999999,
        // userId: 1,
        // date: "",
        // alarmMin: 0,
        // time: "",
        // title: "",
        // completed: false,
    }

    useEffect(() => {
    //   first
    const start = (currentPage - 1) * 10
    const end = currentPage  * 10
    console.log(start, "starting point")
    setDisplayData(() => taskData.slice(start, end))
    
      return () => {
        // second
      }
    }, [currentPage, taskData])
    

  return (
    <div>
        <div className='font-semibold'>Your Tasks</div>
        <div className='no-scroll-bar overflow-y-auto sm:h-[50vh]'>
            {
                displayData.map((item) => (
                    <div key={item.id} onClick={() => {setAndViewTask(item.id, item.date, item.alarmMin, item.time, item.title, item.completed)}} className='flex flex-row justify-between items-center border bg-gray-200 border-gray-400 rounded-sm mt-3 px-4 cursor-pointer hover:bg-gray-300'>
                        <div className='flex gap-4 items-center'>
                            <div className='flex relative'>
                                <input checked={item.completed} onChange={(e) => {handleCompletedUpdtae(e, item.id)}} className='peer appearance-none relative w-4 h-4 border-[1.5px] border-gray-400 rounded-[0.25rem] bg-white checked:border-blue-700 cursor-pointer' type="checkbox" name="" id="" />
                                <div className='absolute h-4 w-4 justify-center items-center hidden peer-checked:flex pointer-events-none'>
                                <Image src={"/checkBlue.svg"} height={15} width={15} alt='Logo' />
                                </div>
                            </div>
                            <div>
                                <div>{(item.title).slice(0, 20)}{item.title.length > 20 && "..."}</div>
                                <div>{item.time}</div>
                            </div>
                        </div>
                        <span>{getFromNow(item.date, item.time)}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TaskGroup