import React from 'react';
import { Link } from 'react-router-dom';
import ham from '../../../assets/hamburger.svg';
import dd from '../../../assets/dropdown.svg';
import img from '../../../assets/DE@2x.png';

const Snav = () => {
    return (
        <>
            <div className="w-full mb-2 border-t-[1px] border-b-[1px] border-[#a2a2a25e] h-[50px] flex justify-between items-center">
                <div className="w-[90%] m-auto px-2 flex justify-between items-center">
                    <div className="w-[50%]">
                        <div className="w-full flex items-center justify-between font-semibold">
                            <div className='flex items-center gap-2'>
                                <img src={ham} alt="" />
                             <Link to="/list"><h4>All Category</h4></Link>
                            </div>
                            <h4>Hot offers</h4>
                            <h4>Gift boxes</h4>
                            <h4>Projects</h4>
                            <h4>Menu items</h4>
                            <div className='flex items-center gap-2'>
                                <h4>Help</h4>
                                <img src={dd} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[25%] flex items-center justify-around font-semibold">
                    <div className='flex items-center gap-2'>
                                <h4>English, USA</h4>
                                <img src={dd} alt="" />
                            </div>
                            <div className='flex items-center gap-2'>
                                <h4>Ship to </h4>
                                <img src={img} alt="" />
                                <img src={dd} alt="" />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Snav
