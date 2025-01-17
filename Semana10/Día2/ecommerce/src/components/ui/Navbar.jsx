import { useState } from 'react';
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  return (
    <nav className='text-black bg-white'>
      {/* container */}
      <div className='px-4 mx-auto lg:px-8 xl:max-w-7xl'>
        <div className='flex justify-between py-8'>
          {/* logo */}
          <div className='flex items-center'>
            Logo
          </div>
          {/* links */}
          <ul className='flex items-center justify-center gap-10'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>

          <div className='flex items-center justify-end gap-4'>
            <Link to="#" className='btn btn-black'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar