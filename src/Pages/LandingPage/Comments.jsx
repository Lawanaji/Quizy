import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/Ellipse.png'
import image2 from '../../assets/Ellipse2.png'
const Comments = () => {
    const comments = [
        {
            image:image1 ,
            comment: 'Using quizzy has changed my knowledge base. Its has helped me prepare for school test better.',
            name: 'Dave Steve',

        },
        {
          image: image2,
          comment: 'Used to play around tests and quizzes but using quizzy made my study fun while being fun and engaging. ',
            name: 'Emmanuel Rhema'
        },
        {
          image: image2,
          comment: 'Used to play around tests and quizzes but using quizzy made my study fun while being fun and engaging. ',
         name: 'Emmanuel Rhema'
        }
    ]
    const [settings] = useState({
      dots: false,
      infinite: true,
      slidesToShow: 2, 
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      pauseOnHover: false,
      pauseOnFocus: false,
      focusOnSelect: false,
      accessibility: false,
      mobileFirst: true,
    
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3, 
            slidesToScroll: 1, 
            infinite: true,
          }
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow: 1, 
            slidesToScroll: 1,
          }
        }
      ]
    });
    
  return (
    <div className='w-full mt-[8rem]'>
        <div className=' overflow-hidden'>
      <h1 className='text-center text-4xl font-bold text-[#442D7C]'>What our users have said</h1>
        <Slider {...settings} className='py-[10rem]'>

          
        {comments.map((item)=>(
          <div className='flex justify-center items-center '>
            <div className='flex gap-10 w-[500px]'>
            <img src={item.image} alt="" className='object-contain w-[100px] h-[100px]' />
            <div className='grid gap-10'>
               <p className=''>{item.comment}</p>
            <strong>{item.name}</strong>
            </div>

            </div>
          </div>
        ))}
        
        </Slider>
        </div>
    </div>
  )
}

export default Comments
