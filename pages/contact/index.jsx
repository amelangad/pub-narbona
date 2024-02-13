import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <div className ="pt-40 lg:pt-0 w-full h-auto lg:h-screen flex flex-col lg:flex-row justify-center items-center  bg-orange-400  lg:overflow-hidden">
   <div className ="lg:pt-10 flex flex-col justify-center items-start px-10 w-full lg:w-1/2 h-full">
    <p className =" text-2xl lg:text-4xl font-roboto  w-full lg:w-1/2  py-10 lg:py-0 lg:pb-10">Chcesz zarezerować stolik lub lokal? Nie ma sprawy!</p>
    <div className ="flex flex-col gap-1 text-2xl">
    <p className ="flex flex-row gap-3 items-center text-3xl py-2"> <FaGlobeAmericas size={30} />Adres:</p>
    <p>ul. Balowa 50</p>
    <p>45-222, Opole</p>
    <p className ="flex flex-row gap-3 items-center text-3xl py-2"> <FaPhoneAlt size={30} />Telefon:</p>
    <p>555-555-555</p>
    <p className ="flex flex-row gap-3 items-center text-3xl py-2"> <MdOutlineMailOutline  size={30}/> Email:</p>
    <p>hello@narbona.pl</p>
    </div>
    <div className ="text-2xl font-roboto py-3 flex flex-row gap-2 ">Czekamy na wiadomość od Ciebie! <CiHeart size={30} /> </div>
    </div>
    <div className ="bg-[#fdba61] flex flex-col  gap-20 justify-center items-start px-10  w-full lg:w-1/2 h-full">
    <p className =" pt-10 lg:pt-0 text-2xl lg:text-4xl font-roboto w-full flex justify-center">Sprawdź nasze inne media społecznościowe!</p>
    <div className ="flex flex-row gap-10 justify-center items-center w-full">
      <p className ="cursor-pointer">
      <a href="http://instagram.pl"><FaInstagram size={40} /></a>
      </p>
      <p className ="cursor-pointer">
      <a href="https://www.facebook.pl"><FaFacebook size={40} /></a>
      </p>
      <p className ="cursor-pointer">
      <a href="http://www.tiktok.pl"><FaTiktok size={40} /></a>
      </p>
    </div>
    <div className ="w-full flex flex-col justify-center items-centr gap-10">
    <p className ="text-3xl w-full flex justify-center">lub odezwij się do nas na messenger</p>
    <p className ="w-full flex justify-center pb-20">
      <FaFacebookMessenger size={50} />
    </p>
    </div>
    </div>
    </div> 
  )}
