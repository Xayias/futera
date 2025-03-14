import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Logo from '../assets/futeralogo-white-long.webp';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white relative z-50">
            <img className="h-24 mr-4 ml-[-1rem] p-5" src={Logo} alt="futera white logo long" />
            <ul className="hidden md:flex">
                <li className="p-4"><Link to="/">Home</Link></li>
                <li className="p-4"><Link to="/">Company</Link></li>
                <li className="p-4"><Link to="/">Resources</Link></li>
                <li className="p-4"><Link to="/">About</Link></li>
                <li className="p-4"><Link to="/">Contact</Link></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#041320] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <img className="h-24 mr-4 ml-[0rem] p-5" src={Logo} alt="futera white logo long"/>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600"><Link to="/">Home</Link></li>
                    <li className="p-4 border-b border-gray-600"><Link to="/">Company</Link></li>
                    <li className="p-4 border-b border-gray-600"><Link to="/">Resources</Link></li>
                    <li className="p-4 border-b border-gray-600"><Link to="/">About</Link></li>
                    <li className="p-4"><Link to="/">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar