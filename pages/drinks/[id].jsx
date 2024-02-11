import { getAllIds, getDrinkById } from "../../lib/gallery";
import Link from "next/link";

export default function Drink({ drink }) {
    return (
        <div className ="w-full lg:h-screen flex flex-col justify-center items-center pt-20 bg-orange-400">
                <div className="w-full flex flex-col gap-20">
                <h1 className ="w-full flex justify-center items-center text-3xl py-10">{drink.id}</h1>
                </div>
        <div className ="w-full lg:w-3/4 flex flex-col lg:flex-row gap-20 justify-center items-center  p-5 lg:p-20">
            <div className="relative gallery  w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
                <div className="absolute w-full h-full  origin-center three ">
                    <img src={drink.src} alt="drink"
                        className="absolute w-full h-full object-cover rounded-3xl " /></div>
            </div>
            <div className ="w-full lg:w-1/2 flex flex-col">
            <p className ="w-full text-xl flex justify-center">{drink.desc}</p>
            <Link href="/drinks">
                    <button className ="bg-[#0f0f0fcc]  text-white font-roboto  text-2xl py-[5px] px-3  mt-20 uppercase rouned-xl">Zobacz inne</button></Link>
        </div>
        </div>
    
          </div>
    
    )
}

export async function getStaticPaths() {
    const ids = getAllIds()
    return {
        paths: ids.map(id => {
            return {
                params: {
                    id
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const drink = getDrinkById(params.id)
    return {
        props: {
            drink
        }
    }
}
