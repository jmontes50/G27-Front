import { useState } from 'react';
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  return (
    <nav className='text-black bg-white'>
      {/* container */}
      <div className='px-4 mx-auto lg:px-8 xl:max-w-7xl'>
        <div className='flex justify-between py-4'>
          {/* logo */}
          <div className='flex items-center'>
            Logo
          </div>
          {/* links */}
          <ul className='items-center justify-center hidden gap-10 lg:flex'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>

          <div className='items-center justify-end hidden gap-4 lg:flex'>
            <Link to="#" className='btn btn-black'>
              Login
            </Link>
          </div>
          {/* botón responsive */}
          <div className='lg:hidden'>
            <button className='btn btn-black'>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar