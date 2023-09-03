'use client'
import React, { useContext } from 'react'
import CTABtn from '@/components/home/CTABtn'
import Calender from '@/components/home/Calender'
import AddTask from '@/components/home/AddTask'
import EditTask from '@/components/home/EditTask'
import ViewTask from '@/components/home/ViewTask'
import { appContext } from '@/helpers/AppContext'

const SideComp = () => {

    const { taskData, year, month, addTaskStatus, viewTaskStatus, editTaskStatus } = useContext(appContext);

  return (
    <div className='hidden sm:flex w-4/12 flex-col items-end gap-10'>
        <CTABtn />
        {(!addTaskStatus && !viewTaskStatus && !editTaskStatus) && <Calender year={year} month={month} />}
        {addTaskStatus && <AddTask />}
        {editTaskStatus && <EditTask />}
        {viewTaskStatus && <ViewTask />}
    </div>
  )
}

export default SideComp