"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <video autoPlay muted playsInline className='w-[250px] h-[250px]'>
            <source src="https://res.cloudinary.com/craftwebs/video/upload/v1704389783/nu07r10y3/a20109405ec6492ba4561591d60395cf.webm" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ken Sanchez.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
    </section>
  )
}
