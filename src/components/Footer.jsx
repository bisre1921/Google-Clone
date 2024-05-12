import React from 'react'
import Country from './Country'

const Footer = () => {
  return (
    <footer className='w-full absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2]'>
        <div className='border-b px-8 py-3'>
            <Country />
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 gap-7'>
            <ul className='flex items-center gap-6'>
                <li className='link'>About</li>
                <li className='link'>Advertising</li>
                <li className='link'>Business</li>
                <li className='link'>How Search Works</li>
            </ul>
            <ul className='flex items-center gap-6'>
                <li className='link'>Privacy</li>
                <li className='link'>Terms</li>
                <li className='link'>Settings</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer