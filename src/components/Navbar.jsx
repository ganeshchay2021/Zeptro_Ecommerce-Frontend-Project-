import { MapPin } from 'lucide-react'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { IoCart, IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from '@clerk/clerk-react'

const Navbar = () => {
  const location = false;
  return (
    <section className='bg-white shadow-2xl py-3'>
      <div className='max-w-6xl mx-auto flex justify-between items-center '>
        {/* logo section  */}
        <div className='flex gap-7 justify-center items-center'>
          <Link to="/" >
            <h1 className='text-3xl font-bold'>
              <span className='text-red-500 font-serif'>Z</span>aptro
            </h1>
          </Link>

          {/* location  */}
          <div className='flex items-center gap-1 text-gray-700 cursor-pointer'>
            <MapPin className='text-red-500' />
            <span className='font-semibold'>{location ? <div><span>Kathmandu, Nepal</span></div> : "Add Address"}</span>
            <FaCaretDown />
          </div>
        </div>


        {/* menu section  */}
        <nav className='flex gap-7 items-center'>
          <ul className='flex gap-7 text-xl font-semibold items-center cursor-pointer'>
            <NavLink to="/" className={({ isActive }) => `${isActive ? "border-b-3 border-red-500 duration-200" : "text-black"} hover:border-b-3 border-red-300`}><li>Home</li></NavLink>
            <NavLink to="/products" className={({ isActive }) => `${isActive ? "border-b-3 border-red-500 duration-200" : "text-black"} hover:border-b-3 border-red-300`}><li>Product</li></NavLink>
            <NavLink to="/about" className={({ isActive }) => `${isActive ? "border-b-3 border-red-500 duration-200" : "text-black"} hover:border-b-3 border-red-300`}><li>About Us</li></NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${isActive ? "border-b-3 border-red-500 duration-200" : "text-black"} hover:border-b-3 border-red-300`}><li>Contact</li></NavLink>
          </ul>

          <Link to={"/cart"} className='relative'>
            <IoCartOutline className='h-7 w-7' />
            <span className='bg-red-500 text-white px-2 rounded-full absolute -top-3 -right-3'>0</span>
          </Link>

          <div>
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar