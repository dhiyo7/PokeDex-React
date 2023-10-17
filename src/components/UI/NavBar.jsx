import Logo from '../../assets/Icons/Logo.svg';
import { BsGithub } from 'react-icons/bs';

import { Link } from "react-router-dom";


import {TbDeviceGamepad2} from 'react-icons/tb'
import SearchBar from './SearchBar';


const NavBar = () => {
  return (
    <nav className="md:px-10 w-full h-14 px-5 fixed bg-white shadow flex items-center justify-between ">
        <div>
        <span className=" cursor-pointer flex items-center">
        <img src={Logo} alt="logo" className="h-7 inline mr-4  md:mt-0 " />
            <h1 className='text-xl md:inline invisible inherit  md:visible  mt-0 font-bold'>PokeHub</h1>
        </span>
        </div>

    </nav>
  )
}

export default NavBar
