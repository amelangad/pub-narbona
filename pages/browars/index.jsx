import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Browars() {
  return (
    <div className ="h-auto lg:h-screen flex flex-col justify-start items-center gap-10 pt-40 lg:pt-[4rem] bg-orange-400">
      <h1 className=" text-2xl lg:text-6xl py-20">U nas w lokalu znajdziesz:</h1>
      <div className ="w-full flex flex-col lg:flex-row flex-wrap gap-5 lg:gap-12 justify-center items-center">
    <div className ="w-[300px] h-[300px] rounded-xl">
  <Image
      src="/browars/łomża.png"
      width={300}
      height={500}
      className ="pt-10"
    />
    </div>
    <div className ="w-[300px] h-[300px] rounded-xl">
  <Image
      src="/browars/kozel.png"
      width={300}
      height={500}
    />
    </div>
    <div className ="w-[300px] h-[300px] rounded-xl">
  <Image
      src="/browars/tyskie.png"
      width={300}
      height={500}
      className ="object-contain rounded-full h-full"
    />
    </div>

    </div>
    <Link href="/offert">
                    <button className ="bg-[#0f0f0fcc]  text-white font-roboto text-2xl py-[5px] px-3  uppercase rouned-xl mb-5">Wróć do oferty</button></Link>
    </div>
  )
}
