'use client'
import React, { useContext, useState } from 'react'
import Button from '@/components/home/Button'
import { appContext } from '@/helpers/AppContext';
import Image from 'next/image';

const AddTask = () => {
    const { setAddTaskStatus, setEditTaskStatus, setViewTaskStatus, goToToday, createTask, selectedDate } = useContext(appContext);
    
    const [alarm, setAlarm] = useState(true)
    const [title, setTitle] = useState("")
    const [time, setTime] = useState("11:00")

    const CloseAddTaskActivate = () => {
        setEditTaskStatus(() => false)
        setViewTaskStatus(() => false)
        setAddTaskStatus(() => false)
    }

    const removeAlarm = () => {
        setAlarm(() => false)
    }

    const makeTask = () => {
        createTask({
            title,
            date: selectedDate,
            time,
            alarmMin: alarm ? 10 : 0,
            completed: false,
        })
        setTimeout(() => {
            setAddTaskStatus(() => false)
        }, 1000);
    }

  return (
    <div className='flex flex-col w-11/12 rounded-lg py-4 shadow-xl'>
        <div className='flex flex-row justify-between mx-4'>
            <h3>Add Task</h3>
            <span onClick={CloseAddTaskActivate} className='text-[1.5rem] rotate-45 cursor-pointer'>+</span>
        </div>
        <div className='mt-2 mx-4 overflow-hidden'>
            <textarea onChange={(e) => setTitle(e.target.value)} name="" placeholder='Create a video ad' id="" className='w-full h-[8rem] rounded-lg bg-gray-200 border border-gray-400 resize-none outline-none p-2 no-scroll-bar' ></textarea>
        </div>
        <div className='mx-4 mt-4 flex flex-col gap-2'>
            <div className='flex flex-row justify-between'>
                <div onClick={goToToday} className='border border-gray-400 gap-2 rounded-lg py-1 px-2 flex cursor-pointer'>
                    <Image src={"/calendar4.svg"} height={15} width={15} alt='Logo' />
                    <span>Today</span>
                </div>
                <div className='flex gap-1 border border-gray-400 py-1 rounded-lg px-2 cursor-pointer bg-white'>
                    <Image src={"/clock.svg"} height={15} width={15} alt='Logo' />
                    <select onChange={(e) => setTime(e.target.value)} name="" id="" defaultValue={"11:00"} className='native-appearance-none outline-none no-scroll-bar cursor-pointer'>
                        <option value="00:00">00:00</option>
                        <option value="00:10">00:10</option>
                        <option value="00:20">00:20</option>
                        <option value="00:30">00:30</option>
                        <option value="00:40">00:40</option>
                        <option value="00:50">00:50</option>
                        <option value="01:00">01:00</option>
                        <option value="01:10">01:10</option>
                        <option value="01:20">01:20</option>
                        <option value="01:30">01:30</option>
                        <option value="01:40">01:40</option>
                        <option value="01:50">01:50</option>
                        <option value="02:00">02:00</option>
                        <option value="02:10">02:10</option>
                        <option value="02:20">02:20</option>
                        <option value="02:30">02:30</option>
                        <option value="02:40">02:40</option>
                        <option value="02:50">02:50</option>
                        <option value="03:00">03:00</option>
                        <option value="03:10">03:10</option>
                        <option value="03:20">03:20</option>
                        <option value="03:30">03:30</option>
                        <option value="03:40">03:40</option>
                        <option value="03:50">03:50</option>
                        <option value="04:00">04:00</option>
                        <option value="04:10">04:10</option>
                        <option value="04:20">04:20</option>
                        <option value="04:30">04:30</option>
                        <option value="04:40">04:40</option>
                        <option value="04:50">04:50</option>
                        <option value="05:00">05:00</option>
                        <option value="05:10">05:10</option>
                        <option value="05:20">05:20</option>
                        <option value="05:30">05:30</option>
                        <option value="05:40">05:40</option>
                        <option value="05:50">05:50</option>
                        <option value="06:00">06:00</option>
                        <option value="06:10">06:10</option>
                        <option value="06:20">06:20</option>
                        <option value="06:30">06:30</option>
                        <option value="06:40">06:40</option>
                        <option value="06:50">06:50</option>
                        <option value="07:00">07:00</option>
                        <option value="07:10">07:10</option>
                        <option value="07:20">07:20</option>
                        <option value="07:30">07:30</option>
                        <option value="07:40">07:40</option>
                        <option value="07:50">07:50</option>
                        <option value="08:00">08:00</option>
                        <option value="08:10">08:10</option>
                        <option value="08:20">08:20</option>
                        <option value="08:30">08:30</option>
                        <option value="08:40">08:40</option>
                        <option value="08:50">08:50</option>
                        <option value="09:00">09:00</option>
                        <option value="09:10">09:10</option>
                        <option value="09:20">09:20</option>
                        <option value="09:30">09:30</option>
                        <option value="09:40">09:40</option>
                        <option value="09:50">09:50</option>
                        <option value="10:00">10:00</option>
                        <option value="10:10">10:10</option>
                        <option value="10:20">10:20</option>
                        <option value="10:30">10:30</option>
                        <option value="10:40">10:40</option>
                        <option value="10:50">10:50</option>
                        <option value="11:00">11:00</option>
                        <option value="11:10">11:10</option>
                        <option value="11:20">11:20</option>
                        <option value="11:30">11:30</option>
                        <option value="11:40">11:40</option>
                        <option value="11:50">11:50</option>
                        <option value="12:00">12:00</option>
                        <option value="12:10">12:10</option>
                        <option value="12:20">12:20</option>
                        <option value="12:30">12:30</option>
                        <option value="12:40">12:40</option>
                        <option value="12:50">12:50</option>
                        <option value="13:00">13:00</option>
                        <option value="13:10">13:10</option>
                        <option value="13:20">13:20</option>
                        <option value="13:30">13:30</option>
                        <option value="13:40">13:40</option>
                        <option value="13:50">13:50</option>
                        <option value="14:00">14:00</option>
                        <option value="14:10">14:10</option>
                        <option value="14:20">14:20</option>
                        <option value="14:30">14:30</option>
                        <option value="14:40">14:40</option>
                        <option value="14:50">14:50</option>
                        <option value="15:00">15:00</option>
                        <option value="15:10">15:10</option>
                        <option value="15:20">15:20</option>
                        <option value="15:30">15:30</option>
                        <option value="15:40">15:40</option>
                        <option value="15:50">15:50</option>
                        <option value="16:00">16:00</option>
                        <option value="16:10">16:10</option>
                        <option value="16:20">16:20</option>
                        <option value="16:30">16:30</option>
                        <option value="16:40">16:40</option>
                        <option value="16:50">16:50</option>
                        <option value="17:00">17:00</option>
                        <option value="17:10">17:10</option>
                        <option value="17:20">17:20</option>
                        <option value="17:30">17:30</option>
                        <option value="17:40">17:40</option>
                        <option value="17:50">17:50</option>
                        <option value="18:00">18:00</option>
                        <option value="18:10">18:10</option>
                        <option value="18:20">18:20</option>
                        <option value="18:30">18:30</option>
                        <option value="18:40">18:40</option>
                        <option value="18:50">18:50</option>
                        <option value="19:00">19:00</option>
                        <option value="19:10">19:10</option>
                        <option value="19:20">19:20</option>
                        <option value="19:30">19:30</option>
                        <option value="19:40">19:40</option>
                        <option value="19:50">19:50</option>
                        <option value="20:00">20:00</option>
                        <option value="20:10">20:10</option>
                        <option value="20:20">20:20</option>
                        <option value="20:30">20:30</option>
                        <option value="20:40">20:40</option>
                        <option value="20:50">20:50</option>
                        <option value="21:00">21:00</option>
                        <option value="21:10">21:10</option>
                        <option value="21:20">21:20</option>
                        <option value="21:30">21:30</option>
                        <option value="21:40">21:40</option>
                        <option value="21:50">21:50</option>
                        <option value="22:00">22:00</option>
                        <option value="22:10">22:10</option>
                        <option value="22:20">22:20</option>
                        <option value="22:30">22:30</option>
                        <option value="22:40">22:40</option>
                        <option value="22:50">22:50</option>
                        <option value="23:00">23:00</option>
                        <option value="23:10">23:10</option>
                        <option value="23:20">23:20</option>
                        <option value="23:30">23:30</option>
                        <option value="23:40">23:40</option>
                        <option value="23:50">23:50</option>
                    </select>
                </div>
            </div>
            {alarm && (<div className='flex flex-row justify-between'>
                <span className='flex gap-2'>
                <Image src={"/bell-fill.svg"} height={12} width={12} alt='Logo' />
                    <span>10 minutes before</span>
                </span>
                <span onClick={removeAlarm} className='text-[1rem] rotate-45 cursor-pointer'>+</span>
            </div>)}
        </div>
        <div className='flex flex-row mx-4 justify-between mt-8 gap-4'>
            <Button 
            title='Cancel'
            color='bg-white'
            text='text-gray-800'
            border='border'
            borderColor='border-gray-600'
            action={CloseAddTaskActivate}
            />
            <Button 
            title='Save'
            action={makeTask}
            />
        </div>
    </div>
  )
}

export default AddTask