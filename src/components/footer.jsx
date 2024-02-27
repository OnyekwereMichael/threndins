import React from 'react'
import goggle from "../assets/goggle.png"
import meta from "../assets/meta.png"

function footer() {
  return (
    <footer className='flex justify-around items-center mt-10'>
          <img src={goggle} alt="" className='w-52 smm:w-24'/>
          <img src={meta} alt="" className='w-52 smm:w-24'/>
          <img src={meta} alt="" className='w-52 smm:w-24'/>
    </footer>
  )
}

export default footer
