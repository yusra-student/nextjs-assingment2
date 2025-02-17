"use client";
// Remove this if not used
import { BiUser } from 'react-icons/bi';


import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide';


const Hero =()=>{
    let settings ={
        dots:true,
        infinite:true,
        slidesTOshow:1,
        autoplay:true,
        pauseOnHover:false,
    };
    const slideData =[
        {
            id:0,
            img:"/public/pic2.jpg",
            title:"trending items",
            mainTitle:"WOMENS LATEST FASHION SALE",
            price:"2000",
        },
        {
            id:1,
            img:"/public/pic2.jpg",
            title:"Trending Accesories",
            mainTitle:"MODERN SUNGLASSES",
            price:"500",
        }
    ]
    return (
        <div className='container pt-6 lg:pt-0'>
            <Slider{...settings}>
                {slideData.map((item) =>(
                    <Slide 
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}
                    />
                    
                ))}
            </Slider>
            <BiUser />
            </div>
    )
}
export default Hero;