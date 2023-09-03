'use client'
import Link from 'next/link'
import React from 'react'
import HomeAccount from '@/components/home/Mainer'
import './navbar.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-[100vw] h-12 p-2 border-b border-solid border-b-gray-300'>
      <nav className='sm:flex hidden flex-row w-10/12 justify-between items-center mx-auto h-8'>
        <div className='flex gap-4 items-center'>
        <Link href={'/'}><Image src={"/next.svg"} height={50} width={50} alt='Logo' /></Link>
          <h2 className='text-[1.5rem]'>Biscuit</h2>
        </div>
        <div className='flex justify-evenly gap-3'>
          <Image src={"/gear.svg"} height={20} width={20} alt='Logo' />
          <Image src={"/bell.svg"} height={20} width={20} alt='Logo' />
          <Image src={"/next.svg"} height={50} width={50} alt='Profile' />
        </div>
      </nav>
      <nav className='sm:hidden flex flex-row w-10/12 justify-between items-center mx-auto h-8'>
        <div className='flex gap-4 items-center'>
        <Link href={'/'}><Image src={"/next.svg"} height={50} width={50} alt='Logo' /></Link>
          <h2 className='text-[1.5rem]'>Biscuit</h2>
        </div>
        <div className='flex justify-evenly gap-3'>
          <Image src={"/next.svg"} height={50} width={50} alt='Profile' />
        </div>
      </nav>
    </div>
  )
}

export default Navbar