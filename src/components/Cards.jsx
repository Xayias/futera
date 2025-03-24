import React from 'react'
import ComputerImage from '../assets/computer-grad-border.webp'
import AIImage from '../assets/artificial-intelligence-grad-border.webp'
import SecureDataImage from '../assets/secure-data-grad-border.webp'

const Cards =() => {
    return (
        <div className="w-full pb-[5rem] pt-[5rem] px-8 bg-white">
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full border-2 border-[#1bb8d7] bg-gray-300 shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={ComputerImage} alt="networking Icon"/>
                    <h2 className="text-2xl font-bold text-center py-8 text-black">Futera CORE</h2>
                    <p className="text-center text-lg font-bold px-1 text-black">Delivering seamless, high-speed connectivity to power your business operations.</p>
                    <div className="text-center font-medium">
                        <p className='py-2 border-b border-gray-500 mx-8 mt-8 text-black'>High-Speed Connectivity</p>
                        <p className='py-2 border-b border-gray-500 mx-8 text-black'>Reliable Network Infrastructure</p>
                        <p className='py-2 mx-8 text-black'>Optimized Bandwidth for Peak Performance</p>
                        <button className="bg-[#000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#1bb8d7]">Get Connected</button>
                    </div>
                </div>
                <div className="w-full border-2 border-[#1bb8d7] shadow-xl flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={AIImage} alt="Ai icon"/>
                    <h2 className="text-2xl font-bold text-center py-8 text-black">Futera AI</h2>
                    <p className="text-center text-lg font-bold px-1 text-black">Empowering businesses with AI-driven insights and predictive analytics</p>
                    <div className="text-center font-medium">
                        <p className='py-2 border-b border-gray-500 mx-8 mt-8 text-black'>AI-Driven Predictive Models</p>
                        <p className='py-2 border-b border-gray-500 mx-8 text-black'>Automated Data Processing</p>
                        <p className='py-2 mx-8 text-black'>Customized ML Solutions for Your Business</p>
                        <button className="bg-[#1bb8d7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Discover AI Solutions</button>
                    </div>
                </div>
                <div className="w-full border-2 border-[#1bb8d7] bg-gray-300 shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={SecureDataImage} alt="Secure Data icon"/>
                    <h2 className="text-2xl font-bold text-center py-8 text-black">Futera SHIELD</h2>
                    <p className="text-center text-lg font-bold px-1 text-black">Comprehensive data protection for peace of mind and compliance</p>
                    <div className="text-center font-medium">
                        <p className='py-2 border-b border-gray-500 mx-8 mt-8 text-black'>End-to-End Encryption</p>
                        <p className='py-2 border-b border-gray-500 mx-8 text-black'>Threat Detection & Prevention</p>
                        <p className='py-2 mx-8 text-black'>Compliance with Industry Standards</p>
                        <button className="bg-[#000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#1bb8d7]">Become Secure</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards