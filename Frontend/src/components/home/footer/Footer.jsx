import React from 'react';
import footer from '../../../assets/footer-alibaba.png';

const Footer = () => {
  return (
    <>
      <div className="w-[100%] h-[300px] mt-4 bg-red-400 m-auto flex flex-col justify-center items-center overflow-hidden">
        <img src={footer} alt="footer" className="w-full h-full object-cover" />
      </div>

    </>
  )
}

export default Footer
