import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'

const Testimonials = () => {
  return (
    
      <motion.div className='flex flex-col items-center justify-center my-20 py-12 '
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once: true}}
      >
          
          <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonial  </h1>

          <p className='text-gray-500 mb-12 '> Turn your imagination into visuals</p>
          
          <div className='flex flex-wrap gap-6'>
              {testimonialsData.map((testimonial, index) => (
                  <div className='bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-105 transition-all ' key={index}>
                      <div className='flex flex-col items-center'>
                          <img className='rounded-full w-14' src={testimonial.image} alt="" />
                          <h2 className='text-xl font-semibold mt-3 '>{testimonial.name}</h2>
                          <p className='text-gray-500 mb-4'>{testimonial.role}</p>
                          <div className='flex mb-4 '>
                              {Array(testimonial.stars).fill().map((item, index) => (
                                  <img key={index} src={assets.rating_star} alt="" />
                              ))}
                          </div>
                          <p className='text-center text-sm text-gray-600'>{testimonial.text }</p>
                      </div> 
                  </div>
              ))}
          </div>

      </motion.div>

  )
}

export default Testimonials
