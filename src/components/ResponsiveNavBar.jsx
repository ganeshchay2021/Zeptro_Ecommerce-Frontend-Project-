import React from 'react'
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
    UserButton,
    useUser,
} from '@clerk/clerk-react'
import { FaUserAlt, FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa6';


const ResponsiveNavBar = ({ setOpenNavBar, openNavBar }) => {
    const { user } = useUser();

    return (
        <div className={`${openNavBar
            ? "left-0"
            : "-left-[100%]"
            } fixed bottom-0 top-0 z-20 h-screen w-[60%] flex flex-col bg-white p-8 pt-16 text-black lg:hidden transition-all shadow-md rounded-r-xl pb-6 items-start`}>
            <div className='w-full'>
                <div className='flex items-center gap-4 mb-10'>
                    {
                        user ? <UserButton size={50} /> : <FaUserCircle size={50} />
                    }
                    <div>
                        <h1 className='text-md text-gray-800 font-medium'>Hello, {user?.firstName}</h1>
                        <h1 className='text-sm text-gray-600'>Premium user</h1>
                    </div>
                </div>



                <ul className='space-y-3 flex flex-col mb-5'>
                    <NavLink onClick={() => setOpenNavBar(false)} to="/" className="text-xl font-semibold"><li>Home</li></NavLink>
                    <NavLink onClick={() => setOpenNavBar(false)} to="/products" className="text-xl font-semibold"><li>Product</li></NavLink>
                    <NavLink onClick={() => setOpenNavBar(false)} to="/about" className="text-xl font-semibold"><li>About</li></NavLink>
                    <NavLink onClick={() => setOpenNavBar(false)} to="/contact" className="text-xl font-semibold"><li>Contact</li></NavLink>
                </ul>

                {
                    user ? <></> : <div className='w-full mb-10'>
                        <SignedOut>
                            <SignInButton mode="modal" className="bg-red-500 w-full rounded-md text-white cursor-pointer px-4 py-1" />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                }


                <hr className='text-gray-400' />
                <p className='w-full flex items-center mt-2 justify-center'>Made with <FaHeart className='text-red-500 mx-2' /> Ganesh </p>

            </div>


        </div>
    )
}

export default ResponsiveNavBar