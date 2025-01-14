import React from 'react';
import logo from '../../../assets/logo-colored.svg';
import profile from '../../../assets/Profile.svg';
import message from '../../../assets/Message.svg';
import cart from '../../../assets/Cart.svg';
import order from '../../../assets/Orders.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <header className="w-[90%] m-auto p-4 flex justify-between items-center">
        <div className="w-[12%]">
            <Link to="/">
            <img src={logo} alt="brand" />
            </Link>
        </div>
        <div className="w-[60%] border-2 border-[#0D6EFD] flex items-center justify-around rounded-lg">
            <input className='w-[70%] px-2 border-[#0D6EFD] placeholder-[#8B96A5] outline-none' type="text" placeholder="Search" />
            <select name="category" className='w-[19%] p-2 border-l-[1px] border-[#0D6EFD] outline-none' id="category">
                <option >All Category</option>
                <option >Electronics</option>
                <option >Fashion</option>
            </select> 
            <button className= 'w-[15%] text-white p-2 ml-1  bg-[#0D6EFD]' type="submit">Search</button>
        </div>
        <nav className='w-[22%] flex items-center justify-between'>
            <ul className='w-[100%] flex items-center justify-between'>
                <li><a href="#"><img src={profile} alt="" /></a></li>
                <li><a href="#"><img src={message} alt="" /></a></li>
                <li><a href="#"><img src={order} alt="" /></a></li>
                <li><Link to="/cart"><img src={cart} /></Link></li>
            </ul>
        </nav>
    </header>
      
    </>
  )
}

export default Navbar
