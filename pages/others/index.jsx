import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Others() {
  return (
    <div className ="lg:h-screen lg:overflow-hidden flex flex-col justify-start items-center gap-5 lg:ap-10 pt-[6rem] lg:pt-[3rem] bg-orange-400">
      <h1 className="text-2xl lg:text-6xl py-20">U nas w lokalu znajdziesz:</h1>
      <div className =" flex flex-col lg:flex-row flex-wrap gap-2 justify-center">
        <div>
          <h1 className ="flex justify-center w-full text-xl overflow-hidden">Biale wino</h1>
          <div className ="overflow-hidden h-full">
  <Image
      src="/drinks/wino1.jpg"
      width={300}
      height={300}
      className =" object-cover h-full hover:scale-125 transtition-transform duration-150"
     
    />
    </div>
    </div>
    <div>
    <h1 className ="flex justify-center w-full text-xl">Czerwone wino</h1>
    <div className ="overflow-hidden h-full">
  <Image
      src="/drinks/wino2.jpg"
      width={300}
      height={300}
      className =" object-cover h-full hover:scale-125 transtition-transform duration-150"
     
    />
    </div>
    </div>
    <div>
    <h1 className ="flex justify-center w-full text-xl">Szampan</h1>
    <div className ="overflow-hidden h-full">
  <Image
      src="/drinks/szampan.jpg"
      width={300}
      height={300}
      className =" object-cover h-full hover:scale-125 transtition-transform duration-150"
     
    />
    </div>
    </div>
    <div>
    <h1 className ="flex justify-center w-full text-xl">Shoty</h1>
    <div className ="overflow-hidden h-full">
  <Image
      src="/drinks/shoty.jpg"
      width={300}
      height={300}
      className =" object-cover h-full hover:scale-125 transtition-transform duration-150"
    />
    </div>
    </div>
    </div>
    <Link href="/offert">
                    <button className ="bg-[#0f0f0fcc]  text-white font-roboto  text-2xl py-[5px] px-3 mt-10 uppercase rouned-xl mb-10">Wróć do oferty</button></Link>
    </div>
  )
}
