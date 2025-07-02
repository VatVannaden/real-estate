import { useEffect, useState } from 'react'
import { assets } from '../assets/assets.ts'

const NavBar = () => {

  const [showMenuItem, setShowMenuItem] = useState(false);
  useEffect(() =>{
    if(showMenuItem) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return ()=> {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className='absolute top-0 left-0 w-full z-10' id='Header'>
      <div className='container mx-auto flex flex-nowrap justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt='' />
        
        <ul className='hidden md:flex gap-4 md:gap-7 text-white min-w-0'>
          <a href='#Header' className='cursor-pointer hover:text-grey-400'>Home</a>
          <a href='#About' className='cursor-pointer hover:text-grey-400'>About</a>
          <a href='#Projects' className='cursor-pointer hover:text-grey-400'>Project</a>
          <a href='#Testimonials' className='cursor-pointer hover:text-grey-400'>Testimonials</a>
        </ul>

        <button className='hidden md:block bg-white px-4 md:px-8 py-2 rounded-full whitespace-nowrap'>
          Sign Up
        </button>

        <img onClick={() => setShowMenuItem(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt='' />
      </div>
      {/* Menu items */}
      <div className={`md:hidden ${showMenuItem ? 'fixed w-full': 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => setShowMenuItem(false)} src={assets.cross_icon} className='w-6' alt='' />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={() => setShowMenuItem(false)} href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={() => setShowMenuItem(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={() => setShowMenuItem(false)} href='#Projects' className='px-4 py-2 rounded-full inline-block'>Project</a>
          <a onClick={() => setShowMenuItem(false)} href='#Testimonials' className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
