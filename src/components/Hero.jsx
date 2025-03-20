import React from 'react';
import { ReactTyped } from 'react-typed';
import VideoBG from '../assets/FuteraHeroVideo.mp4';
import GifBG from '../assets/FuteraHeroMobileGif.gif';

const Hero = () => {
    return (
        <div className="relative text-white">
            <video className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0 opacity-10" src={VideoBG} autoPlay loop muted />
            <img src={GifBG} alt="Background Animation" className="block md:hidden absolute top-0 left-0 w-full h-full object-cover opacity-10"/>
            <div className="relative mx-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4">
                <p className="text-[#1bb8d7] font-bold p-2">INNOVATING WITH ADVANCED TECHNOLOGIES</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-1">Future Proofing Tomorrow's Connectivity.</h1>
                <div className="flex justify-center flex-col md:flex-row items-center">
                    <p className="md:text-4xl sm:text-3xl text-xl font-bold pt-4 py-0 md:py-4 md:pt-4">Driving Innovation in</p>
                    <ReactTyped className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 pb-4 md:pb-0" strings={["Networking", "Machine Learning", "Data Security"]} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">Secure, scalable infrastructure for data centers and AI-driven insights.</p>
                <button className="bg-[#1bb8d7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black;">Explore Solutions</button>
            </div>
        </div>
    )
}

export default Hero