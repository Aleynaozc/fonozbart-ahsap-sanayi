"use client"

import Link from "next/link"
import { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaPhoneVolume } from "react-icons/fa6"
import { Button } from "../ui/button"
import { usePathname } from 'next/navigation'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
const pathname = usePathname()
    const navItems = [
        { href: "/", label: "ANASAYFA" },
        { href: "/hakkimizda", label: "HAKKIMIZDA" },
        { href: "/hizmetlerimiz", label: "HİZMETLERİMİZ" },
        { href: "/projelerimiz", label: "PROJELERİMİZ" },
        { href: "/referanslar", label: "REFERANSLAR" },
        { href: "/iletisim", label: "İLETİŞİM" },
    ]
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 h-24 transition-[background-color,box-shadow,margin] duration-[300ms,300ms,250ms] ease-in-out 
                ${scrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-transparent'} `}>

                <nav className="mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* Logo (sol) */}
                    <div className="flex items-center h-full w-1/4 max-w-[23.5%] pt-4">
                        <a href="/" aria-label="FNZ Home">
                            <img
                                src="/assets/images/logo2.png"
                                alt="FNZ Logo"
                                className="h-[90px] object-contain"
                            />
                        </a>
                    </div>

                    {/* Menü (orta) */}
                    <ul className="flex space-x-8 uppercase text-sm font-medium tracking-wider justify-center items-center">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <li key={item.href} className="flex flex-col items-center">
                                    <Link
                                        href={item.href}
                                        className={`${scrolled ? 'text-[#3b2616]' : 'text-white'} hover:text-orange-600 transition-colors ${isActive ? 'text-orange-600' : ''}`}
                                    >
                                        {item.label}
                                    </Link>
                                    {isActive && (
                                        <hr className="w-full border-[1px] border-orange-600 " />
                                    )}
                                </li>
                            )
                        })}
                    </ul>


                    {/* Sosyal ikonlar + buton (sağ) */}
                    <div className="flex items-center space-x-4 w-1/4 max-w-[23.5%] justify-end">
                        <a
                            href="https://www.facebook.com/fnzwood/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className=" transition-colors"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com/fnzwood/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className=" transition-colors"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <div className="bg-transparent ">
                            <Button
                                variant="outline"
                                className="rounded-full border-green-600 bg-green-100 text-green-600 p-3 hover:text-green-500"
                            >

                                <a
                                    href="https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Telefon"
                                    className=""
                                >
                                    <FaPhoneVolume size={18} className="icon  " />
                                </a>

                            </Button>


                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}
