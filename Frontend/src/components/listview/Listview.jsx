import React from 'react';
import Snav from '../../components/home/navbar/Snav';
import Navbar from '../../components/home/navbar/Navbar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import contenttop from '../../assets/Content-top.png';
import hrtbtn from '../../assets/btn-basic.png';
import first from '../../assets/1 list.svg';
import scnd from '../../assets/2 list.svg';
import thrd from '../../assets/3 list.svg';
import fourth from '../../assets/7 list.svg';
import five from '../../assets/8 list.svg';
import six from '../../assets/9 list.svg';
import txt from '../../assets/text list.png';
import { Checkbox } from "@/components/ui/checkbox";
import dd from '../../assets/dropdown.svg';
import range from '../../assets/Range.png';
import input from '../../assets/input.png';
import rate from '../../assets/rating.png';
import sbox from '../../assets/selectbox.png';
import pbox from '../../assets/pages.png';
import nl from '../../assets/newsletter-alibaba.png';



const Listview = () => {
    return (
        <>
            <Navbar />
            <Snav />
            <div className="w-[90%] p-2 mb-4 rounded-lg m-auto px-2 flex justify-between items-center">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to="/">
                                <BreadcrumbLink>Home</BreadcrumbLink>
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Clothings</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Men's wear</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Summer clothing</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="w-[90%] p-2 mb-4 m-auto px-2 flex justify-between items-center">
                <div className='w-full h-full flex justify-between'>
                    <div className='w-[29%] flex flex-col gap-2'>
                        <div className='w-[100%] flex flex-col gap-3 p-2 border-t-[1px] border-[#a2a2a25e]'>
                            <div className='w-[100%] flex justify-between'>
                                <h1 className='text-[16px] font-semibold'>Category</h1>
                                <img src={dd} alt="" />
                            </div>
                            <div className='w-[100%] gap-2 flex flex-col'>
                                <h1 className='text-[16px] text-[#505050]'>Mobile accessory</h1>
                                <h1 className='text-[16px] text-[#505050]'>Electronics</h1>
                                <h1 className='text-[16px] text-[#505050]'>Smartphones</h1>
                                <h1 className='text-[16px] text-[#505050]'>Modern tech</h1>
                                <h1 className='text-[15px] font-semibold cursor-pointer text-[#0D6EFD]'>See details</h1>
                            </div>
                        </div>
                        <div className='w-[100%] gap-3 flex flex-col p-2 justify-center items-center border-t-[1px] border-[#a2a2a25e]'>
                            <div className='w-[100%] flex justify-between'>
                                <h1 className='text-[16px] font-semibold'>Brands</h1>
                                <img src={dd} alt="" />
                            </div>
                            <div className='w-[100%] gap-2 flex flex-col'>
                                <div className='w-[100%] flex gap-2 items-center'>
                                    <Checkbox />
                                    <h1 className='text-[16px] text-[#000]'>Samsung</h1>
                                </div>

                                <div className='w-[100%] flex gap-2 items-center'>
                                    <Checkbox />
                                    <h1 className='text-[16px] text-[#000]'>Apple</h1>
                                </div>

                                <div className='w-[100%] flex gap-2 items-center'>
                                    <Checkbox />
                                    <h1 className='text-[16px] text-[#000]'>Huawei</h1>
                                </div>

                                <div className='w-[100%] flex gap-2 items-center'>
                                    <Checkbox />
                                    <h1 className='text-[16px] text-[#000]'>Pocco</h1>
                                </div>

                                <div className='w-[100%] flex gap-2 items-center'>
                                    <Checkbox />
                                    <h1 className='text-[16px] text-[#000]'>Lenovo</h1>
                                </div>

                                <h1 className='text-[15px] font-semibold cursor-pointer text-[#0D6EFD]'>See details</h1>
                            </div>
                        </div>
                        <div className='w-[100%] gap-3 flex flex-col p-2 justify-center items-center border-t-[1px] border-[#a2a2a25e]'>
                            <div className='w-[100%] flex justify-between'>
                                <h1 className='text-[16px] font-semibold'>Features</h1>
                                <img src={dd} alt="" />
                            </div>
                            <div className='w-[100%] gap-2 flex flex-col'>
                                <div className='w-[100%] flex gap-2 items-center'>
                                    <Checkbox />
                                    <h1 className='text-[16px] text-[#000]'>Metallic</h1>
                                </div>

                                <div className='w-[100%] flex gap-2 items-center'>
                                    <Checkbox />
                                    <h1 className='text-[16px] text-[#000]'>Plastic cover</h1>
                                </div>

                                <div className='w-[100%] flex gap-2 items-center'>
                                    <Checkbox />
                                    <h1 className='text-[16px] text-[#000]'>8GB Ram</h1>
                                </div>

                                <div className='w-[100%] flex gap-2 items-center'>
                                    <Checkbox />
                                    <h1 className='text-[16px] text-[#000]'>Super power</h1>
                                </div>

                                <div className='w-[100%] flex gap-2 items-center'>
                                    <Checkbox />
                                    <h1 className='text-[16px] text-[#000]'>Large Memory</h1>
                                </div>
                                <h1 className='text-[15px] font-semibold cursor-pointer text-[#0D6EFD]'>See details</h1>
                            </div>
                        </div>
                        <div className='w-[100%] gap-3 flex flex-col p-2 justify-center items-center border-t-[1px] border-[#a2a2a25e]'>
                            <div className='w-[100%] flex justify-between'>
                                <h1 className='text-[16px] font-semibold'>Price range</h1>
                                <img src={dd} alt="" />
                            </div>
                            <img className='w-[65%]' src={range} />
                            <img className='w-[65%]' src={input} alt="" />


                        </div>
                        <div className='w-[100%] gap-3 flex-col p-2 flex justify-center items-center border-t-[1px] border-[#a2a2a25e]'>
                            <div className='w-[100%] flex justify-between'>
                                <h1 className='text-[16px] font-semibold'>Condition</h1>
                                <img src={dd} alt="" />
                            </div>
                            <div className='w-[100%] flex gap-2 items-center'>
                                <input type="radio" name='codition' />
                                <h1 className='text-[16px] text-[#000]'>Any</h1>
                            </div>
                            <div className='w-[100%] flex gap-2 items-center'>
                                <input type="radio" name='codition' />
                                <h1 className='text-[16px] text-[#000]'>Refurbished</h1>
                            </div>
                            <div className='w-[100%] flex gap-2 items-center'>
                                <input type="radio" name='codition' />
                                <h1 className='text-[16px] text-[#000]'>Brand new</h1>
                            </div>
                            <div className='w-[100%] flex gap-2 items-center'>
                                <input type="radio" name='codition' />
                                <h1 className='text-[16px] text-[#000]'>Old items</h1>
                            </div>
                        </div>
                        <div className='w-[100%] gap-3 p-2 flex-col flex justify-center items-center border-t-[1px] border-[#a2a2a25e]'>
                            <div className='w-[100%] flex justify-between'>
                                <h1 className='text-[16px] font-semibold'>Ratings</h1>
                                <img src={dd} alt="" />
                            </div>
                            <div className='w-[100%] flex '>
                                <img className='w-[45%]' src={rate} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className='w-[70%] h-[300px]'>
                        <div className="w-[100%] mb-4 m-auto px-2 flex justify-between items-center">
                            <Link to="/grid-list">
                                <img className='w-full' src={contenttop} alt="" />
                            </Link>
                        </div>
                        <div className="w-[98%] border-[1px] p-1 py-2 h-[200px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto px-2 flex justify-between items-center">
                            <div className='w-[20%] h-full'>
                                <img className='w-full h-full' src={first} alt="" />
                            </div>
                            <div className='w-[75%] h-full flex flex-col justify-between'>
                                <div>
                                    <img src={txt} alt="" />
                                </div>
                                <div>
                                    <p className='text-[#505050] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua</p>
                                    <Link className='text-[#0D6EFD] font-medium' to='/detail'>View details</Link>
                                </div>
                            </div>
                            <div className='w-[5%] h-full flex justify-end items-start'>
                                <img src={hrtbtn} alt="" />
                            </div>
                        </div>

                        <div className="w-[98%] border-[1px] p-1 py-2 h-[200px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto px-2 flex justify-between items-center">
                            <div className='w-[20%] h-full'>
                                <img className='w-full h-full' src={scnd} alt="" />
                            </div>
                            <div className='w-[75%] h-full flex flex-col justify-between'>
                                <div>
                                    <img src={txt} alt="" />
                                </div>
                                <div>
                                    <p className='text-[#505050] text-[15px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                                    <Link className='text-[#0D6EFD] font-medium' to='/detail'>View details</Link>
                                </div>
                            </div>
                            <div className='w-[5%] h-full flex justify-end items-start'>
                                <img src={hrtbtn} alt="" />
                            </div>
                        </div>

                        <div className="w-[98%] border-[1px] p-1 py-2 h-[200px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto px-2 flex justify-between items-center">
                            <div className='w-[20%] h-full'>
                                <img className='w-full h-full' src={thrd} alt="" />
                            </div>
                            <div className='w-[75%] h-full flex flex-col justify-between'>
                                <div>
                                    <img src={txt} alt="" />
                                </div>
                                <div>
                                    <p className='text-[#505050] text-[15px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                                    <Link className='text-[#0D6EFD] font-medium' to='/detail'>View details</Link>                                </div>
                            </div>
                            <div className='w-[5%] h-full flex justify-end items-start'>
                                <img src={hrtbtn} alt="" />
                            </div>
                        </div>

                        <div className="w-[98%] border-[1px] p-1 py-2 h-[200px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto px-2 flex justify-between items-center">
                            <div className='w-[20%] h-full'>
                                <img className='w-full h-full' src={fourth} alt="" />
                            </div>
                            <div className='w-[75%] h-full flex flex-col justify-between'>
                                <div>
                                    <img src={txt} alt="" />
                                </div>
                                <div>
                                    <p className='text-[#505050] text-[15px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                                    <Link className='text-[#0D6EFD] font-medium' to='/detail'>View details</Link>                                </div>
                            </div>
                            <div className='w-[5%] h-full flex justify-end items-start'>
                                <img src={hrtbtn} alt="" />
                            </div>
                        </div>

                        <div className="w-[98%] border-[1px] p-1 py-2 h-[200px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto px-2 flex justify-between items-center">
                            <div className='w-[20%] h-full'>
                                <img className='w-full h-full' src={five} alt="" />
                            </div>
                            <div className='w-[75%] h-full flex flex-col justify-between'>
                                <div>
                                    <img src={txt} alt="" />
                                </div>
                                <div>
                                    <p className='text-[#505050] text-[15px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                                    <Link className='text-[#0D6EFD] font-medium' to='/detail'>View details</Link>                                </div>
                            </div>
                            <div className='w-[5%] h-full flex justify-end items-start'>
                                <img src={hrtbtn} alt="" />
                            </div>
                        </div>

                        <div className="w-[98%] border-[1px] p-1 py-2 h-[200px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto px-2 flex justify-between items-center">
                            <div className='w-[20%] h-full'>
                                <img className='w-full h-full' src={six} alt="" />
                            </div>
                            <div className='w-[75%] h-full flex flex-col justify-between'>
                                <div>
                                    <img src={txt} alt="" />
                                </div>
                                <div>
                                    <p className='text-[#505050] text-[15px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                                    <Link className='text-[#0D6EFD] font-medium' to='/detail'>View details</Link>                                </div>
                            </div>
                            <div className='w-[5%] h-full flex justify-end items-start'>
                                <img src={hrtbtn} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[88%] p-12 mb-4 m-auto px-2 flex'>
                <div className='w-full flex gap-2 justify-end items-center'>
                    <img className='w-[10%]' src={sbox} alt="" />
                    <img className='w-[18%]' src={pbox} alt="" />
                </div>
            </div>
            <div className='w-[100%] bg-[#EFF2F4] p-2 mb-4 m-auto px-2 flex justify-between items-center'>
                <img className='w-[100%]' src={nl} alt="" />
            </div>
        </>
    )
}

export default Listview
