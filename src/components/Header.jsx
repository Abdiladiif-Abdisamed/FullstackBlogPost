import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Left and Right */}
            <div className='flex justify-between h-16'>
                {/* Left */}
                <div className='flex'>
                    {/* Logo */}
                    <div className='flex-shrink-0 flex items-center '>
                        <Link to='/' className='flex text-2xl font-bold text-orange-600 '> Blogify</Link>
                    </div>
                    {/* Nav */}
                    <nav>
                        
                    </nav>
                </div>
                {/* Right */}
            </div>
        </div>
    </header>
  )
}

export default Header