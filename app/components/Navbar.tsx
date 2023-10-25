'use client'
import {useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import logo from '@/public/moonlamplogo.png'

import Cart from "./Cart"; 
import WishList from "./Wishlist";

import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishListStore";
import { UserButton, useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

const Navbar = () => {
    
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const mobileMenuHandler = () => setOpenMobileMenu(!openMobileMenu);
    const [isScrolling, setIsScrolling] = useState(false);

    const cartStore = useCartStore();
    const wishlistStore = useWishlistStore();
    const {isSignedIn, user} = useUser();

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
                    <Image src={logo} width={150} height={150} alt="logo"/>
                </a>
                <ul className={`md:flex items-center gap-8 text-gray-600 md:static absolute ${openMobileMenu ? "max-md:top-12 max-md:py-10 max-md:w-full max-md:bg-secondary max-md:left-0 max-md:text-center max-md:space-y-10 max-md:text-white max-md:drop-shadow-lg max-md:z-20 max-md:font-medium" : "hidden"}`}>
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
                    <div onClick={() => cartStore.toggleCart()} className="relative">
                        <AiOutlineShoppingCart size={20} className="cursor-pointer"/>
                        {cartStore.cart.length > 0 && (
                            <span className="bg-primary text-white text-sm font-bold w-4 h-4 rounded-full absolute right-2 bottom-3 flex items-center justify-center">
                                {cartStore.cart.length}
                            </span>
                        )}
                    </div>
                    <div onClick={() => wishlistStore.toggleWishList()} className="cursor-pointer">
                        <AiOutlineHeart size={20}/>
                    </div>
                    {!isSignedIn ? 
                        (<Link href={"/sign-in"}><AiOutlineUser size={20}/></Link>) 
                        : 
                        (<div>
                            <UserButton afterSignOutUrl="/"/>
                        </div>)    
                    }
                </div>
                <div className="md:hidden ml-4" onClick={mobileMenuHandler}>
                    {openMobileMenu ? <MdClose size={25}/> : <FiMenu size={25}/>}
                </div>
            </div>
            {!cartStore.isOpen && <Cart/>}
            {!wishlistStore.openWishlist && <WishList />}
      </nav>
    )
}

export default Navbar