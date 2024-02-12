import Link from 'next/link'

export default function Home({ }) {
    return (
        <div className ="w-screen min-h-screen max-h-screen flex justify-center items-center flex-col bg bg-cover bg-center lg:bg-top" >
            <h1 className =" text-3xl lg:text-8xl py-20 text-white font-serif uppercase font-roboto tracking-[.1px]">Najlepszy pub w Twoim mieście</h1>
            <p className ="text-4xl">
                <Link href="/offert">
                    <button className =" bg-black  text-white font-serif font-roboto  text-xl md:text-2xl py-[5px] pr-3"><span className ="w-full h-full  p-[8px] bg-[#ecb855]">ZOBACZ</span> NASZĄ OFERTĘ</button></Link>
            </p>

            </div>

    )}