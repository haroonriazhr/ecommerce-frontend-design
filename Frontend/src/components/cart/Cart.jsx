import React from 'react';
import logo from '../../assets/logo-colored.svg';
import profile from '../../assets/Profile.svg';
import message from '../../assets/Message.svg';
import order from '../../assets/Orders.svg';
import cart from '../../assets/Cart.svg';
import item1 from '../../assets/item-cart1.png';
import item2 from '../../assets/item-cart2.png';
import item3 from '../../assets/item-cart3.png';
import btn1 from '../../assets/btn1.png';
import btn2 from '../../assets/btn2.png';
import coupon from '../../assets/coupon.png';
import summary from '../../assets/summary.png';
import pay from '../../assets/pay.png';
import cust from '../../assets/customer.png';
import free from '../../assets/free.png';
import cards from '../../assets/cards.png';
import banner from '../../assets/banner.png';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <header className="w-[90%] m-auto p-4 flex justify-between items-center">
                <div className="w-[12%]">
                    <Link to="/">
                        <img src={logo} alt="brand" />
                    </Link>
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
            <h1 className='text-[25px] font-medium ml-[76px] my-6'>My cart (3)</h1>
            <div className="w-[90%] m-auto flex justify-between items-center overflow-hidden">
                <div className="w-[68%] p-4 gap-2 h-full border-[1px] border-[#a2a2a25e] rounded-lg m-auto flex flex-col justify-between items-center overflow-hidden">
                    <div className='w-full overflow-hidden h-[28%]'>
                        <img src={item1} alt="" />
                    </div>
                    <div className='w-full overflow-hidden h-[28%]'>
                        <img src={item2} alt="" />
                    </div>
                    <div className='w-full overflow-hidden h-[28%]'>
                        <img src={item3} alt="" />
                    </div>
                    <div className='w-full h-[15%] py-2 flex justify-between items-center'>
                        <img className='w-[17%]' src={btn1} alt="" />
                        <img className='w-[14%]' src={btn2} alt="" />
                    </div>
                </div>
                <div className="w-[30%] h-[520px] p-[13px] rounded-lg m-auto flex justify-between items-center overflow-hidden">
                    <div className="w-[100%] pt-[.5px] h-full m-auto flex flex-col gap-3 items-center overflow-hidden">
                        <div className='w-[80%]'>
                            <img src={coupon} alt="" />
                        </div>
                        <div className='w-[75%]'>
                            <img src={summary} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[88%] flex m-auto my-4 gap-6'>
                <div className='w-[20%]'>
                    <img src={pay} alt="" />
                </div>
                <div className='w-[20%]'>
                    <img src={cust} alt="" />
                </div>
                <div className='w-[20%]'>
                    <img src={free} alt="" />
                </div>
            </div>
            <div className="w-[91%] m-auto p-4 flex justify-between items-center">
                <div className="w-[100%]">
                    <img src={cards} alt="" />
                </div>
            </div>
            <div className="w-[91%] m-auto p-4 flex justify-between items-center">
                <div className="w-[100%] m-auto">
                    <img className='w-full' src={banner} alt="" />
                </div>
            </div>
        </>
    )
}

export default Cart
