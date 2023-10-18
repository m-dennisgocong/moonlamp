'use client'
import {useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { BsCart4, BsFillBagHeartFill } from 'react-icons/bs'
import Cart from "./Cart"; 
import { useCartStore } from "@/store/useCartStore";

import logo from '@/public/moonlamplogo.png'

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const mobileMenuHandler = () => setOpenMobileMenu(!openMobileMenu);
    const [isScrolling, setIsScrolling] = useState(false);
    const cartStore = useCartStore();

    useEffect(() => {
        if(openMobileMenu){
            document.body.style.overflowY = "hidden";
        }else{
            document.body.style.overflowY = "auto";
        }
    }, [openMobileMenu]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0){
                setIsScrolling(true);
            }else{
                setIsScrolling(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); 
        }
    },[])
    return (
      <nav className={`py-4 w-full ${isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative"}`}>
          <div className="w-[89%] m-auto flex justify-between items-center max-w-[1400px]">
                <a href="/">
                    <Image src={logo} width={200} height={200} alt="logo"/>
                </a>
                <ul className={`md:flex items-center gap-8 text-gray-600 md:static absolute ${openMobileMenu ? "top-12 py-10 w-full bg-secondary left-0 text-center space-y-10 text-white drop-shadow-lg z-20 font-medium" : "hidden"}`}>
                    <li>
                        <Link href={"#shop"} onClick={() => setOpenMobileMenu(false)}>Shope</Link>
                    </li>
                    <li>
                        <Link href={"#features"} onClick={() => setOpenMobileMenu(false)}>Features</Link>
                    </li>
                    <li>
                        <Link href={"#faq"} onClick={() => setOpenMobileMenu(false)}>FAQ</Link>
                    </li>
                    <li>
                        <Link href={"#contact"} onClick={() => setOpenMobileMenu(false)}>Contact</Link>
                    </li>
                    <li>
                        <Link href={"/orders"} onClick={() => setOpenMobileMenu(false)}>My Orders</Link>
                    </li>
               </ul>
               <div className="flex gap-4 items-center text-dark ml-auto md:ml-0">
                    <div onClick={() => cartStore.toggleCart()}>
                        <BsCart4 size={20}/>
                    </div>
                    <div>
                        <BsFillBagHeartFill size={20}/>
                    </div>
                </div>
                <div className="md:hidden ml-4" onClick={mobileMenuHandler}>
                    {openMobileMenu ? <MdClose size={25}/> : <FiMenu size={25}/>}
                </div>
            </div>
            {!cartStore.isOpen && <Cart/>}
      </nav>
    )
}

export default Navbar