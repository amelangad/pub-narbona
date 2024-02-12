import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"

export default function Offert() {
  return (
    <div className ="w-full h-auto flex justify-start items-center flex-col  drink3 " >
    <motion.h1 className =" text-3xl lg:text-8xl pt-60 lg:pt-40"
    initial={{y: -200, opacity:0}}
  whileInView={{y:0, opacity:1 }}
  transition={{
    duration: .5,
    type: "tween",
  }}
    >Czego szukasz?</motion.h1>
    <div className ="w-full  text-2xl lg:text-6xl lg:py-20 flex  flex-col lg:flex-row  gap-5 lg:gap-20  justify-center items-center  pt-5 lg:pt-20 ">
        <motion.div
        className ="bg-[#0f0f0fcc] p-5 text-orange-400 rounded-xl"
        initial={{ opacity:0}}
        whileInView={{opacity:1 }}
        transition={{
          duration: .3,
          delay:0.5,
          type: "tween",
        }}
        >
          <Link href="/drinks">Drinki</Link>
          </motion.div>
         <motion.div
        className ="bg-[#0f0f0fcc] p-5 text-orange-400 rounded-xl"
        initial={{ opacity:0}}
        whileInView={{opacity:1 }}
        transition={{
          duration: .3,
          delay:0.75,
          type: "tween",
        }}>
        <Link href="/browars">Piwo</Link></motion.div>
        <motion.div
        className ="bg-[#0f0f0fcc] p-5 text-orange-400 rounded-xl"
        initial={{ opacity:0}}
        whileInView={{opacity:1 }}
        transition={{
          duration: .3,
          delay:1,
          type: "tween",
        }}>
          <Link href="/others">Inne</Link>
          </motion.div>
    </div>
    <motion.div className ="flex justify-center  my-40 "
    initial={{scale:1}}
    whileInView={{scale: 1.2}}
    transition={{
      type:"spring",
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror"
    }}>
    <Link href="/contact">
                    <button className ="bg-[#0f0f0fcc]  text-white font-roboto  text-2xl py-[5px] px-3  mt-20 uppercase rouned-xl">Skontaktuj się z nami</button></Link>
    </motion.div></div>
  )
}
