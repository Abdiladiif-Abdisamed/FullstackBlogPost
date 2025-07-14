import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaUserAlt } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from '../context/AuthContext';
import { signOut } from '../lib/auth'; // Import the signOut function


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const { isLoggedIn, logout, profile } = useAuth();
    const avatar_url = "https://lh3.googleusercontent.com/a/ACg8ocIyppVHY0V3sEVQEQTh1-FYcxmZtdycobsmEHoetXBsBxGLT2om=s288-c-no"

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

                            { isLoggedIn && (
                                    <>
                                        <Link to='/editor' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>Write</Link>


                                        <Link to='/manage-articles' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>My Article</Link>
                                    </>
                                )
                            }

                        </nav>
                    </div>
                    {/* Right */}
                    <div className='flex items-center  space-x-4'>
                        {/* /* profile */}
                        {
                            isLoggedIn ? (
                                <>
                                    <div>
                                        <span className='text-sm text-gray-700'>Hello, {profile?.username}</span>
                                    </div>
                                    <div className='relative '>
                                        <button className='flex justify-center items-center rounded-full h-8 w-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-gray-200 cursor-pointer'
                                            onMouseEnter={() => setIsDropDownOpen(true)}
                                            onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                                            {
                                                avatar_url ? (<img src={avatar_url} className='rounded-full h-8 w-8 ' />) :
                                                    (<FaUserAlt className='text-orange-500 ' />)
                                            }
                                        </button>

                                        {/* DropDown Menu */}

                                        {
                                            isDropDownOpen && (
                                                <div className='absolute right-0 w-48 bg-white mt-1 rounded-md shadow-lg z-50 '
                                                    onMouseLeave={() => setIsDropDownOpen(false)}>
                                                    <div className='absolute h-3 w-full top-[12px]'></div>
                                                    <Link to={"/profile"} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>Your Profile</Link>

                                                    <Link className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>Manage Articles</Link>

                                                    <button
                                                        onClick={() =>
                                                            logout()
                                                        }
                                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'>Sign Out </button>

                                                </div>
                                            )
                                        }

                                    </div>
                                </>

                            ) :
                                (

                                    <div className='flex items-center  space-x-4'>
                                        <Link to='/signin' className='inline-flex items-center px-4 py-2  bg-orange-700 text-sm font-medium text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>SignIn</Link>

                                        <Link to='/signup' className='inline-flex items-center px-4 py-2  border border-orange-700 text-sm font-medium text-orange-600 rounded-md hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>SignUp</Link>
                                    </div>

                                )
                        }


                        {/* SignUp and SIgnin */}


                    </div>
                    {/* Harburger  */}
                    <div className='-mr-2 flex items-center sm:hidden '>
                        <button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {
                                isMenuOpen ? <AiOutlineClose className='block h-6 w-6 cursor-pointer' /> : <CiMenuBurger className='block h-6 w-6 cursor-pointer' />


                            }
                        </button>
                    </div>
                </div>


            </div>

            {isMenuOpen && (<div className='sm:hidden py-4'>
                <div className='pt-2 pb-3 space-y-1'>
                    <Link to="/" className="block pl-3 pr-4 py-2 border-l-4 border-orange-500 text-base font-medium text-orange-700 bg-orange-50">
                        Home
                    </Link>
                    <Link to="/articles" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                        Articles
                    </Link>
                </div>


                {/* if is logged in */}

                {isLoggedIn && (
                    <>
                        <Link to="/editor" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                            Write
                        </Link>
                        <Link to="/manage-articles" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                            My Articles
                        </Link>
                        <Link to="/profile" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                            Profile
                        </Link>
                        <button
                            onClick={() =>
                                logout()
                            }

                            className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                        >
                            Sign Out
                        </button>
                    </>
                )}


                {/* if is not logged in */}

                {!isLoggedIn && (
                    <>
                        <Link to="/signin" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                            Sign In
                        </Link>
                        <Link to="/signup" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                            Sign Up
                        </Link>
                    </>
                )}

            </div>
            )}
        </header>
    )
}

export default Header