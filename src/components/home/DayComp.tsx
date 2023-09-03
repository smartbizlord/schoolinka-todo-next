import React from 'react'

export interface DayCompProps {
    numero?: number,
    date?: string,
    today: boolean,
    height?: string | number
}

const DayComp = ({ numero, date, today}: DayCompProps) => {
  return (
    <div>DayComp</div>
  )
}

export default DayComp