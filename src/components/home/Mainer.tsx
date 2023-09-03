'use client'
import React, { useContext, useState } from 'react'
import DaysGroup from '@/components/home/DaysGroup'
import TaskGroup from '@/components/home/TaskGroup'
import { appContext } from '@/helpers/AppContext'

const Mainer = () => {

  const {taskData, month, year, selectedDate} = useContext(appContext)

  const [string, setString] = useState(new Date().getHours() < 12 ? "Morning" : new Date().getHours() < 18 ? "Afternoon" : "Evening")
  return (
    <div className='flex-1 sm:h-[80vh]'>
      <div className='mb-4'>
        <h2 className='text-[1.5rem] font-bold'>{`Good ${string}!`}</h2>
        <p className='text-[1rem] text-gray-400'>You've got some task to do.</p>
      </div>
      {
        // new Date(selectedDate).valueOf()
        // "-----------------------------------------------------------------------------------------------------------------------------------------------------"
        // taskData.map((item) => (
        //   <div key={item.id} className='bg-white my-4'>
        //   <h2>{item.title}: title</h2>
        //   <p>{item.alarmMin}: alarmMin</p>
        //   <p>{item.date}: date</p>
        //   <p>{item.time}: time</p>
        //   <p>{`${item.completed}`}: completed</p>
        //   <p>{item.id}: id</p>
        //   </div>
        // ))
      }
      <DaysGroup month={month} year={year} />
      <TaskGroup />
    </div>
  )
}

export default Mainer