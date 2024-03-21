import React from 'react'
import card from "../assets/card.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cards } from "../components/mapped"

function hero() {
  return (
    <section>
    <h1 className='text-[#021C8B] text-center font-bold text-3xl mt-10'>Try Our Products</h1>
             
 <section className="mt-10 smm:flex-wrap">
          <Swiper
            spaceBetween={1}
            slidesPerView={1}
            breakpoints={{
              540: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
            }}
          >
            {cards.map((item, ivx) => (
              <div key={ivx}>
                <SwiperSlide>
                  <div className="swipers">
                    <img src={item.img} alt="" />
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </section>
    </section>
  )
}

export default hero
