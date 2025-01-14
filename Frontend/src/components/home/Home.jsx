import React from 'react';
import Snav from './navbar/Snav';
import Navbar from './navbar/Navbar';
import winfo from '../../assets/info.svg';
import Cinfo from '../../assets/Cinfo.svg';
import Linfo from '../../assets/Linfo.svg';
import pinfo from '../../assets/pinfo.svg';
import Hinfo from '../../assets/Hinfo.svg';

import avater from '../../assets/Avatar.svg';
import cd from '../../assets/countdown.svg';
import cam from '../../assets/camera.png';
import head from '../../assets/headphone.png';
import lap from '../../assets/laptop.png';
import pho from '../../assets/phone.png';
import wat from '../../assets/Watch.png';

import bann from '../../assets/left-aside.png';
import bann2 from '../../assets/left-side.png';

import inquiry from '../../assets/Section-inquiry.png';

import i1 from '../../assets/1.png';
import i2 from '../../assets/2.png';
import i3 from '../../assets/3.png';
import i4 from '../../assets/4.png';
import i5 from '../../assets/5.png';
import i6 from '../../assets/6.png';
import i7 from '../../assets/7.png';
import i8 from '../../assets/8.png';

import i11 from '../../assets/11.png';
import i12 from '../../assets/12.png';
import i13 from '../../assets/13.png';
import i14 from '../../assets/14.png';
import i15 from '../../assets/15.png';
import i16 from '../../assets/16.png';
import i17 from '../../assets/17.png';
import i18 from '../../assets/18.png';

import service from '../../assets/Section-service.png';
import sc from '../../assets/Section-country.png';
import nl from '../../assets/newsletter-alibaba.png';

import { products } from '../../product';
import { products2 } from '../../product';


const Home = () => {
    return (
        <>
            <Navbar />
            <Snav />
            <div className="w-[90%] border-[1px] p-2 mb-4 border-[#a2a2a25e] rounded-lg m-auto px-2 flex justify-between items-center">
                <div className="w-full flex items-center justify-evenly h-80">
                    <div className="w-[20%]">
                        <h1 className='bg-[#E5F1FF] text-black text-[16px] p-2 mb-[1px] rounded-lg'>Automobiles</h1>
                        <h1 className='text-[#505050] text-[16px] p-1 m-[1px]'>Clothes and wear</h1>
                        <h1 className='text-[#505050] text-[16px] p-1 m-[1px]'>Home interiors</h1>
                        <h1 className='text-[#505050] text-[16px] p-1 m-[1px]'>Computer and tech</h1>
                        <h1 className='text-[#505050] text-[16px] p-1 m-[1px]'>Tools, equipments</h1>
                        <h1 className='text-[#505050] text-[16px] p-1 m-[1px]'>Sports and outdoor</h1>
                        <h1 className='text-[#505050] text-[16px] p-1 m-[1px]'>Animal and pets</h1>
                        <h1 className='text-[#505050] text-[16px] p-1 m-[1px]'>Machinery tools</h1>
                        <h1 className='text-[#505050] text-[16px] p-1 m-[1px]'>More category</h1>
                    </div>
                    <div className="w-[50%] bg-banner-home bg-contain bg-center bg-no-repeat h-full"></div>
                    <div className="w-[20%] gap-2 h-full">
                        <div className="w-full h-[46%] bg-[#E5F1FF] flex flex-col items-center  rounded-lg">
                            <div className='w-[90%] p-1 flex items-center justify-between'>
                                <img src={avater} />
                                <h4 className='text-[20px]'>Hi, user <br />let’s get stated</h4>
                            </div>
                            <div className='w-full px-2 flex flex-col gap-2 justify-center'>
                                <button className="w-full bg-[#0070F3] text-white text-[14px] p-1 rounded-lg">Join now</button>
                                <button className="w-full border-[1px] bg-white border-[#a2a2a25e] text-[#0070F3] text-[14px] p-1 rounded-lg">Log in</button>
                            </div>
                        </div>
                        <div className="w-full h-[25%] bg-[#F38332] mt-2 flex items-center px-2 rounded-lg">
                            <h4 className='w-[40%] text-[#fff] text-[14px]'>Get US $10 off with a new supplier</h4>
                        </div>
                        <div className="w-full h-[25%] bg-[#55BDC3] mt-2 flex items-center px-2 rounded-lg">
                            <h4 className='w-[50%] text-[#fff] text-[14px]'>Send quotes with <br /> supplier preferences</h4>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[90%] border-[1px] mb-4 border-[#a2a2a25e] rounded-lg m-auto px-2 flex justify-between items-center">
                <div className="w-full flex items-center justify-evenly h-[250px]">
                    <div className="w-[20%] px-4 py-2  h-full border-r-[1px] border-[#a2a2a25e]">
                        <img className='w-[198px] h-[113px]' src={cd} />
                    </div>
                    <div className="w-[14%] flex flex-col items-center justify-center gap-2 h-full border-r-[1px] border-[#a2a2a25e]">
                        <img className='size-[140px] ' src={wat} />
                        <img src={winfo} />
                    </div>
                    <div className="w-[14%] flex flex-col items-center justify-center gap-2 h-full border-r-[1px] border-[#a2a2a25e]">
                        <img className='size-[140px]' src={lap} />
                        <img src={Linfo} />
                    </div>
                    <div className="w-[14%] flex flex-col items-center justify-center gap-2 h-full border-r-[1px] border-[#a2a2a25e]">
                        <img className='size-[140px]' src={cam} />
                        <img src={Cinfo} />
                    </div>
                    <div className="w-[14%] flex flex-col items-center justify-center gap-2 h-full border-r-[1px] border-[#a2a2a25e]">
                        <img className='size-[140px]' src={head} />
                        <img src={Hinfo} />
                    </div>
                    <div className="w-[14%] flex flex-col items-center justify-center gap-2 h-full">
                        <img className='size-[140px]' src={pho} />
                        <img src={pinfo} />
                    </div>
                </div>
            </div>
            <div className="w-[90%] mb-4 border-[1px] border-[#a2a2a25e] rounded-lg m-auto flex justify-between items-center overflow-hidden">
                <div className="w-full flex items-center justify-evenly h-[250px]">
                    <div className="w-[28%] h-full border-r-[1px] border-[#a2a2a25e]">
                        <img className='size-full' src={bann} />
                    </div>
                    <div className='w-full h-full '>
                        <div className='w-full h-1/2 flex items-center justify-center'>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i1} alt="" />
                            </div>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i2} alt="" />
                            </div>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i3} alt="" />
                            </div>
                            <div className='w-[25%] h-full'>
                                <img className='size-full' src={i4} alt="" />
                            </div>
                        </div>
                        <div className='w-full h-1/2 border-t-[1px] border-[#a2a2a25e] flex items-center justify-center'>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i5} alt="" />
                            </div>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i6} alt="" />
                            </div>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i7} alt="" />
                            </div>
                            <div className='w-[25%] h-full'>
                                <img className='size-full' src={i8} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] border-[1px] border-[#a2a2a25e] rounded-lg m-auto flex justify-between items-center overflow-hidden">
                <div className="w-full flex items-center justify-evenly h-[250px]">
                    <div className="w-[28%] h-full border-r-[1px] border-[#a2a2a25e]">
                        <img className='size-full' src={bann2} />
                    </div>
                    <div className='w-full h-full '>
                        <div className='w-full h-1/2 flex items-center justify-center'>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i11} alt="" />
                            </div>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i12} alt="" />
                            </div>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i13} alt="" />
                            </div>
                            <div className='w-[25%] h-full'>
                                <img className='size-full' src={i14} alt="" />
                            </div>
                        </div>
                        <div className='w-full h-1/2 border-t-[1px] border-[#a2a2a25e] flex items-center justify-center'>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i15} alt="" />
                            </div>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i16} alt="" />
                            </div>
                            <div className='w-[25%] h-full border-r-[1px] border-[#a2a2a25e]'>
                                <img className='size-full' src={i17} alt="" />
                            </div>
                            <div className='w-[25%] h-full'>
                                <img className='size-full' src={i18} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] border-[1px] my-4 border-[#a2a2a25e] rounded-lg m-auto flex justify-center items-center overflow-hidden">
                <img className='size-full' src={inquiry} alt="" />
            </div>
            <div className="w-[90%]  my-4 m-auto flex flex-col justify-center items-center overflow-hidden">
                <div className='size-full mb-4'>
                    <h1 className='font-semibold text-[20px] text-left'>Recommended items</h1>
                </div>
                <div className='w-full flex justify-between gap-6 items-center'>
                    {products.map((elem) => (
                        <div className="w-[220px] h-[310px] p-2 border-[1px] border-[#a2a2a25e] rounded-lg overflow-hidden">
                            <div className="flex justify-center gap-4 flex-col" >
                                <img className='w-[220px] h-[220px] object-contain' src={elem.image} alt="..." />
                                <div className="w-full px-3">
                                    <p className="font-semibold">${elem.price}</p>
                                    <h5 className="font-normal text-[#8B96A5]">T-shirt</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-[90%]  my-4 m-auto flex flex-col justify-center items-center overflow-hidden">
                <div className='w-full flex justify-between gap-6 items-center'>
                    {products2.map((elem) => (
                        <div key={elem} className="w-[220px] h-[310px] p-2 border-[1px] border-[#a2a2a25e] rounded-lg overflow-hidden">
                            <div className="flex justify-center gap-4 flex-col" >
                                <img className='w-[220px] h-[220px] object-contain' src={elem.image} alt="..." />
                                <div className="w-full px-3">
                                    <p className="font-semibold">${elem.price}</p>
                                    <h5 className="font-normal text-[#8B96A5]">T-shirt</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-[90%] my-4 m-auto flex flex-col justify-center items-center overflow-hidden">
                <img className='w-full' src={service} alt="" />
            </div>
            <div className="w-[90%]  my-4 m-auto flex flex-col justify-center items-center overflow-hidden">
                <img className='w-full' src={sc} alt="" />
            </div>
            <div className="w-[100%] my-6 m-auto flex flex-col justify-center items-center overflow-hidden">
                <img src={nl} alt="" />
            </div>
        </>
    )
}

export default Home
