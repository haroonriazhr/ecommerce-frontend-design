import React from 'react';
import contenttop from '../../assets/gContent-top.png';
import filter from '../../assets/filters.png';
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
import { Checkbox } from "@/components/ui/checkbox";
import dd from '../../assets/dropdown.svg';
import fst from '../../assets/grid-1.png';
import sec from '../../assets/p2.png';
import thd from '../../assets/p3.png';
import fou from '../../assets/p4.png';
import fif from '../../assets/p5.png';
import six from '../../assets/p2.png';
import sev from '../../assets/p7.png';
import eig from '../../assets/p6.png';
import price from '../../assets/gridp.png';
import txt from '../../assets/txt.png';
import sbox from '../../assets/selectbox.png';
import pbox from '../../assets/pages.png';
import nl from '../../assets/newsletter-alibaba.png';



const Gridview = () => {
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
            <div className="w-[90%] p-2 mb-4 m-auto px-2 flex flex-col justify-between items-center">
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
                        </div>
                        <div className='w-[100%] gap-3 flex-col p-2 flex justify-center items-center border-t-[1px] border-[#a2a2a25e]'>
                            <div className='w-[100%] flex justify-between'>
                                <h1 className='text-[16px] font-semibold'>Condition</h1>
                                <img src={dd} alt="" />
                            </div>
                        </div>
                        <div className='w-[100%] gap-3 p-2 flex-col flex justify-center items-center border-t-[1px] border-[#a2a2a25e]'>
                            <div className='w-[100%] flex justify-between'>
                                <h1 className='text-[16px] font-semibold'>Ratings</h1>
                                <img src={dd} alt="" />
                            </div>
                        </div>
                        <div className='w-[100%] gap-3 p-2 flex-col flex justify-center items-center border-t-[1px] border-[#a2a2a25e]'>
                            <div className='w-[100%] flex justify-between'>
                                <h1 className='text-[16px] font-semibold'>Manufacturer</h1>
                                <img src={dd} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-[70%]'>
                        <div className="w-[100%] mb-4 m-auto px-2 flex justify-between items-center">
                            <Link to="/list">
                                <img className='w-full' src={contenttop} alt="" />
                            </Link>
                        </div>
                        <div className="w-[100%] mb-4 m-auto px-2 flex justify-between items-center">
                            <img className='w-[75%]' src={filter} alt="" />
                        </div>

                        <div className='w-full flex justify-between items-center'>
                            <div className="w-[31%] border-[1px] h-[300px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto flex flex-col justify-between items-center">
                                <div className='w-[100%] h-[70%] p-2 flex justify-center overflow-hidden items-center border-b-[1px] border-[#a2a2a22a]'>
                                    <img className='w-[73%]' src={fst} alt="" />
                                </div>
                                <div className='w-[100%] h-[30%] flex overflow-hidden flex-col objects-center items-center'>
                                    <img className='w-[93%] h-[50px] my-2' src={price} alt="" />
                                </div>
                                <div className='w-[100%] h-[25%] flex overflow-hidden px-2 object-cover'>
                                    <img className='w-[63%] h-[60px] object-contain' src={txt} alt="" />
                                </div>
                            </div>

                            <div className="w-[31%] border-[1px] h-[300px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto flex flex-col justify-between items-center">
                                <div className='w-[100%] h-[70%] p-2 flex justify-center overflow-hidden items-center border-b-[1px] border-[#a2a2a22a]'>
                                    <img className='w-[73%]' src={sec} alt="" />
                                </div>
                                <div className='w-[100%] h-[30%] flex overflow-hidden flex-col objects-center items-center'>
                                    <img className='w-[93%] h-[50px] my-2' src={price} alt="" />
                                </div>
                                <div className='w-[100%] h-[25%] flex overflow-hidden px-2 object-cover'>
                                    <img className='w-[63%] h-[60px] object-contain' src={txt} alt="" />
                                </div>
                            </div>

                            <div className="w-[31%] border-[1px] h-[300px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto flex flex-col justify-between items-center">
                                <div className='w-[100%] h-[70%] p-2 flex justify-center overflow-hidden items-center border-b-[1px] border-[#a2a2a22a]'>
                                    <img className='w-[73%]' src={thd} alt="" />
                                </div>
                                <div className='w-[100%] h-[30%] flex overflow-hidden flex-col objects-center items-center'>
                                    <img className='w-[93%] h-[50px] my-2' src={price} alt="" />
                                </div>
                                <div className='w-[100%] h-[25%] flex overflow-hidden px-2 object-cover'>
                                    <img className='w-[63%] h-[60px] object-contain' src={txt} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex justify-between items-center'>
                            <div className="w-[31%] border-[1px] h-[300px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto flex flex-col justify-between items-center">
                                <div className='w-[100%] h-[70%] p-2 flex justify-center overflow-hidden items-center border-b-[1px] border-[#a2a2a22a]'>
                                    <img className='w-[73%]' src={fou} alt="" />
                                </div>
                                <div className='w-[100%] h-[30%] flex overflow-hidden flex-col objects-center items-center'>
                                    <img className='w-[93%] h-[50px] my-2' src={price} alt="" />
                                </div>
                                <div className='w-[100%] h-[25%] flex overflow-hidden px-2 object-cover'>
                                    <img className='w-[63%] h-[60px] object-contain' src={txt} alt="" />
                                </div>
                            </div>

                            <div className="w-[31%] border-[1px] h-[300px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto flex flex-col justify-between items-center">
                                <div className='w-[100%] h-[70%] p-2 flex justify-center overflow-hidden items-center border-b-[1px] border-[#a2a2a22a]'>
                                    <img className='w-[73%]' src={fif} alt="" />
                                </div>
                                <div className='w-[100%] h-[30%] flex overflow-hidden flex-col objects-center items-center'>
                                    <img className='w-[93%] h-[50px] my-2' src={price} alt="" />
                                </div>
                                <div className='w-[100%] h-[25%] flex overflow-hidden px-2 object-cover'>
                                    <img className='w-[63%] h-[60px] object-contain' src={txt} alt="" />
                                </div>
                            </div>

                            <div className="w-[31%] border-[1px] h-[300px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto flex flex-col justify-between items-center">
                                <div className='w-[100%] h-[70%] p-2 flex justify-center overflow-hidden items-center border-b-[1px] border-[#a2a2a22a]'>
                                    <img className='w-[73%]' src={six} alt="" />
                                </div>
                                <div className='w-[100%] h-[30%] flex overflow-hidden flex-col objects-center items-center'>
                                    <img className='w-[93%] h-[50px] my-2' src={price} alt="" />
                                </div>
                                <div className='w-[100%] h-[25%] flex overflow-hidden px-2 object-cover'>
                                    <img className='w-[63%] h-[60px] object-contain' src={txt} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex justify-between items-center'>
                            <div className="w-[31%] border-[1px] h-[300px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto flex flex-col justify-between items-center">
                                <div className='w-[100%] h-[70%] p-2 flex justify-center overflow-hidden items-center border-b-[1px] border-[#a2a2a22a]'>
                                    <img className='w-[73%]' src={sev} alt="" />
                                </div>
                                <div className='w-[100%] h-[30%] flex overflow-hidden flex-col objects-center items-center'>
                                    <img className='w-[93%] h-[50px] my-2' src={price} alt="" />
                                </div>
                                <div className='w-[100%] h-[25%] flex overflow-hidden px-2 object-cover'>
                                    <img className='w-[63%] h-[60px] object-contain' src={txt} alt="" />
                                </div>
                            </div>

                            <div className="w-[31%] border-[1px] h-[300px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto flex flex-col justify-between items-center">
                                <div className='w-[100%] h-[70%] p-2 flex justify-center overflow-hidden items-center border-b-[1px] border-[#a2a2a22a]'>
                                    <img className='w-[73%]' src={eig} alt="" />
                                </div>
                                <div className='w-[100%] h-[30%] flex overflow-hidden flex-col objects-center items-center'>
                                    <img className='w-[93%] h-[50px] my-2' src={price} alt="" />
                                </div>
                                <div className='w-[100%] h-[25%] flex overflow-hidden px-2 object-cover'>
                                    <img className='w-[63%] h-[60px] object-contain' src={txt} alt="" />
                                </div>
                            </div>

                            <div className="w-[31%] border-[1px] h-[300px] overflow-hidden mb-4 border-[#a2a2a25e] rounded-lg m-auto flex flex-col justify-between items-center">
                                <div className='w-[100%] h-[70%] p-2 flex justify-center overflow-hidden items-center border-b-[1px] border-[#a2a2a22a]'>
                                    <img className='w-[73%]' src={fst} alt="" />
                                </div>
                                <div className='w-[100%] h-[30%] flex overflow-hidden flex-col objects-center items-center'>
                                    <img className='w-[93%] h-[50px] my-2' src={price} alt="" />
                                </div>
                                <div className='w-[100%] h-[25%] flex overflow-hidden px-2 object-cover'>
                                    <img className='w-[63%] h-[60px] object-contain' src={txt} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='w-[100%] p-2 mb-4 m-auto px-2 flex'>
                            <div className='w-full flex gap-2 justify-end items-center'>
                                <img className='w-[14%]' src={sbox} alt="" />
                                <img className='w-[25%]' src={pbox} alt="" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="w-[100%] my-6 m-auto flex flex-col justify-center items-center overflow-hidden">
                <img src={nl} alt="" />
            </div>
        </>
    )
}

export default Gridview
