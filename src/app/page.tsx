import Footer from '@/components/footer/Footer'
import Mainer from '@/components/home/Mainer'
import SideComp from '@/components/home/SideComp'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center">
        <Navbar />
        <div className='flex w-10/12 mt-8 overflow-x-hidden overflow-y-hidden'>
          <Mainer />
          <SideComp />
        </div>
        <div className='flex w-10/12 mt-2 overflow-x-hidden overflow-y-hidden'>
          <Footer />
          <div className='hidden sm:flex w-4/12'>
            {/*  */}
          </div>
        </div>
      </main>
  )
}
