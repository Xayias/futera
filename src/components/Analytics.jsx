import React from 'react'
import DigitalWallet from '../assets/DigitalWalletLaptop.webp';

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={DigitalWallet} alt="Digital wallet displaying out of a laptop" />
                <div className="flex flex-col jusitfy-center">
                    <p className="text-[#1bb8d7] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black">Manage Data Analytics Centrally</h2>
                    <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, sapiente vel tenetur, ab impedit, ex saepe quo officia excepturi illum fugiat esse vero? Molestiae dolorem, vel vitae quisquam veniam accusantium.</p>
                    <button className="bg-[#000] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#1bb8d7]">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics