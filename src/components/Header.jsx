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
                        <nav className='hidden sm:flex sm:ml-6 lg:ml-8'>
                            <Link to='/' className='inline-flex items-center px-1 pt-1 border-b-2 border-orange-500 text-sm font-medium text-gray-900'>Home</Link>

                            <Link to='/articles' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>Articles</Link>

                            <Link to='/write' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>Write</Link>


                            <Link to='/myArticle' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>My Article</Link>
                        </nav>
                    </div>
                    {/* Right */}
                    <div className='flex items-center  space-x-4'>
                        {/* profile */}
                        <div>
                            <span>Hello, Cabdiladiif</span>
                        </div>

                        {/* SignUp and SIgnin */}

                        <div className='flex items-center  space-x-4'>
                            <Link to='/signin' className='inline-flex items-center px-4 py-2  bg-orange-700 text-sm font-medium text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>SignIn</Link>

                            <Link to='/signup' className='inline-flex items-center px-4 py-2  border border-orange-700 text-sm font-medium text-orange-600 rounded-md hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>SignUp</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header