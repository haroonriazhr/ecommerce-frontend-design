import React from 'react';
import Snav from '../home/navbar/Snav';
import Navbar from '../home/navbar/Navbar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import main from '../../assets/detail.png';
import pre from '../../assets/Gallery.png';
import info from '../../assets/info.png';
import sell from '../../assets/Seller info.png';
import ord from '../../assets/Order.png';
import desc from '../../assets/block.png';
import side from '../../assets/aside.png';
import recomm from '../../assets/recommend.png';
import banner from '../../assets/Banner.png';



const Detail = () => {
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
            <div className="w-[90%] border-[1px] p-2 mb-4 border-[#a2a2a25e] rounded-lg m-auto px-2 flex flex-col justify-between items-center">
                <div className="w-[100%] h-[500px] p-2 flex justify-between items-center">
                    <div className="w-[35%] h-full flex flex-col gap-4">
                        <div className="w-full h-auto">
                            <img src={main} />
                        </div>
                        <div className="w-full h-auto">
                            <img src={pre} alt="" />
                        </div>
                    </div>
                    <div className="w-[34%] h-[100%]">
                        <img src={info} alt="" />
                    </div>
                    <div className="w-[31%] h-[100%] flex flex-col  items-center">
                        <img className='w-[70%] h-[60%] mb-4' src={sell} />
                        <img src={ord} />
                    </div>
                </div>
            </div>
            <div className="w-[90%] mb-4 m-auto flex justify-between">
                <div>
                    <img src={desc} alt="" />
                </div>
                <div className='py-[3px]'>
                    <img src={side} alt="" />
                </div>
            </div>
            <div className="w-[90%]  mb-4 m-auto flex items-center justify-center">
                <img className='w-full' src={recomm} alt="" />
            </div>
            <div className="w-[90%]  mb-4 m-auto flex items-center justify-center">
                <img className='w-full' src={banner} alt="" />
            </div>
        </>
    )
}

export default Detail
