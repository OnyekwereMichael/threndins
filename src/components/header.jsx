import React, { useState } from 'react';
import { BiMenuAltRight}  from "react-icons/bi"
import { Link } from 'react-router-dom'
function header() {
  const [menu, setMenu] = useState("")
  return (
    <header className='mt-6 smm:mt-4'>
        <section className='flex justify-around smm:justify-between smm:p-5'>
           <h2 className='text-blue-700 text-2xl'>Threndins</h2>
                <nav className='text-blue-700 smm:hidden'>
                    <a href='#' className='hover:text-white mr-5'>Home</a>
                    <a href='#' className='hover:text-white mr-5'>About us</a>
                    <a href='#' className='hover:text-white mr-5'>Product</a>
                    <a href='#' className='hover:text-white mr-5'>Jobs</a>
                    <a href='#' className='hover:text-white mr-5'>Community</a>
                    <a href='#' className='hover:text-white mr-5'>Contact</a>
                </nav>
              <BiMenuAltRight size={50} onClick={() => {
                setMenu(!menu)
              }} className='text-white bi'/>
         </section>

  <section className="bg-trasparent">
      <article className={`${menu ? "show-nav" : ""} bg-blue-800`}>
          <a className="text-white text-xl ml-5 LINKS">Home</a>
          <a className="ml-5 text-white text-xl LINKS">Apartment</a>
          <a className="ml-5 text-white text-xl LINKS">About us</a>
        </article>
</section>
    </header>
  )
}

export default header
