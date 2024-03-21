import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import goggle from "../assets/goggle.png";
import meta from "../assets/meta.png";
import amazon from "../assets/amazon.png";
import lang from "../assets/language.png";
import threndin from "../assets/threndin.png";

import { Link } from "react-router-dom";
function header() {
  const [menu, setMenu] = useState("");
  return (
    <header className=" bg-[#080A35] smm:mt-4">
      <section className="flex justify-around smm:justify-between smm:p-5">
        <img src={amazon} alt="" className=" mt-6 w-24 smm:w-24"/>
        <section className="flex ">
        <nav className="text-blue-700 mt-6 smm:hidden">
          <a href="#" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
            Home
          </a>
          <a href="#" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
            About us
          </a>
          <a href="#" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
            Product
          </a>
          <a href="#" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
            Jobs
          </a>
          <a href="#" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
            Community
          </a>
          <a href="#" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
            Contact
          </a>
        </nav>
        <div>
           <img src={lang} alt="" className="mt-6"/>
        </div>
       </section>
        <BiMenuAltRight
          size={50}
          onClick={() => {
            setMenu(!menu);
          }}
          className="text-white bi"
        />
      </section>

      <section className="bg-trasparent">
        <article className={`${menu ? "show-nav" : ""} bg-blue-800`}>
          <a className="text-white text-xl ml-5 LINKS">Home</a>
          <a className="ml-5 text-white text-xl LINKS">Apartment</a>
          <a className="ml-5 text-white text-xl LINKS">About us</a>
        </article>
      </section>

      <section>
        <h1 className="text-center text-white pt-24 text-4xl tracking-tight smm:pt-10">
          Lorem ipsum dolor
        </h1>
        <p className="text-center text-white mt-4 smm:text-sm smm:px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> nemo culpa dicta sed temporibus magni aut ipsa eius
        </p>
        <section className="flex  justify-center items-center">
          <button className="text-white bg-[#036EFF] py-1 px-5 mr-5 mt-8 rounded">
            Get Started
          </button>
          <button className="bg-white text-[#036EFF] py-1 px-8 mr-5 mt-8 rounded">
            Explore
          </button>
        </section>
      </section>

      <section className="flex justify-around items-center py-20">
         <img src={meta} alt="" className="w-28 smm:w-24" />
        <img src={goggle} alt="" className="w-28 smm:w-24" />
        <img src={amazon} alt="" className="w-28 smm:w-24" />
      </section>
    </header>
  );
}

export default header;
