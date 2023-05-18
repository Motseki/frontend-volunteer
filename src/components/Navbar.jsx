import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import '../css/nav.css';


function Navbar() {

  return (
    <div class="mx-5 py-5 px-3">
{/* 
<nav class="nav flex flex-wrap items-center justify-between px-4"> */}

<nav class="nav flex flex-wrap items-center justify-between px-5 py-0 bg-white text-black border-2 border-gray-200 rounded-md">
  <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
     {/* <img
        className="h-8 w-auto sm:h-10"
         src={logo} alt='logo'
        /> */}
  </div>

  <input class="menu-btn hidden" type="checkbox" id="menu-btn"/>
  <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span class="navicon bg-grey-darkest flex items-center relative"></span>
  </label>


  <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li class="border-t md:border-none">

    {/* <Link to={"/"} 
          class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-normal">
            Home
        </Link> */}

        <Link to={"/"}
            class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
        Contact us
        </Link>
    
    <button 
        class="block md:inline-block px-6 py-1 no-underline text-grey-darkest hover:text-grey-darker font-normal bg-[#FF6842] rounded-md">
            <Link to={"/login"}>
                Signup
            </Link>
        </button>
    </li>
    
  </ul>


</nav>
      
     </div> 
  )
}

export default Navbar
