import Link from 'next/link'
import {getAllDrinks} from '../../lib/gallery.js'


export default function Drinks({ drinks }) {
    return (
        <div className ="min-h-screen flex flex-col justify-start items-center w-full pt-40 lg:pt-[8rem] bg-orange-400">
            <h1 className =" text-3xl lg:text-5xl py-5">Wybierz swojego idealnego drinka!</h1>
            <div className ='flex flex-wrap justify-center items-center gap-5 py-20 w-3/4'>
                {drinks.map(drink => {
                    return (
                        <div key={drink.id}>
                             <Link href={`/drinks/${drink.id}`}>
                            <img
                                src={drink.src}
                                alt={drink.desc}
                                className ="object-cover h-[200px] w-[200px] rounded-xl"
                            
                            />
                            </Link>
                        </div>
                    )
                })}
                
            </div>
            <Link href="/offert">
                    <button className = "bg-[#0f0f0fcc]  text-white font-roboto  text-2xl py-[5px] px-3 uppercase rouned-xl">Wróć do oferty</button></Link>
        </div>
    )
}

export async function getStaticProps() {
    const drinks = getAllDrinks()
    return {
        props: {
            drinks
        }
    }
}
