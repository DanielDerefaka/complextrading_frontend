import React from 'react'
import { sidebarLinks } from '../constants'
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  
  const location = useLocation();
  return (
   <section className='bottombar'>
    <div className='bottombar_container'>

    {sidebarLinks.map((link) => {
          const isActive = location.pathname === link.route;

          return (
            <Link
              to={link.route}
              key={link.label}
              className={`bottombar_link ${isActive ? "bg-white text-black" : "text-black"}`}
            >
              <img src={isActive ?  link.imgURL  :  link.active } alt={link.label} width={24} height={24} />
              <p className={`${isActive ? 'text-black': 'text-white'} max-sm:hidden text-subtle-medium1`}>{link.label.split(/\s+/)[0]}</p>
         
            </Link>
          );
        })}
    </div>

   </section>
  )
}

export default BottomBar