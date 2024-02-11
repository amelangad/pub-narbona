import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Shots() {
  return (
    <div className ="h-screen flex flex-col justify-start items-center gap-10 pt-20 bg-orange-400">
      <h1 className="text-6xl py-20">U nas w lokalu znajdziesz:</h1>
      <div className ="flex flex-col lg:flex-row flex-wrap">
  <Image
      src="/browars/tyskie.png"
      width={300}
      height={300}
     
    />
    <Image
      src="/browars/kozel.png"
      width={300}
      height={300}
     
    />
    <Image
      src="/browars/tyskie.png"
      width={300}
      height={300}
    />
       <Image
      src="/browars/tyskie.png"
      width={300}
      height={300}
    />
    </div>
    <Link href="/offert">
                    <button className ="bg-[#0f0f0fcc]  text-white font-roboto  text-2xl py-[5px] px-3  mt-20 uppercase rouned-xl">Wróć do oferty</button></Link>
    </div>
  )
}
