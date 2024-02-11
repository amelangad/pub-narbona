import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className="absolute top-0 left-0 w-full h-50 lg:h-20 py-3 bg-transparent border-b-[.25px] border-black flex flex-col md:flex-row justify-between items-start px-1 lg:px-20">
      
      <Link href="/"><div className="text-black uppercase flex items-center text-6xl py-5 md:py-0">NARBONA</div></Link>
      <ul className="w-full flex flex-row justify-center md:justify-end items-center gap-5 lg:gap-20  h-full">
        <Link href="/offert"><li className="text-white uppercase text-3xl">Oferta</li></Link>
        <Link href="/contact"><li className="text-white uppercase text-3xl">Kontakt</li></Link>
      </ul>
    </div>
  )
}
