"use client"

import Link from "next/link"
import { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaPhoneVolume } from "react-icons/fa6"
import { Button } from "../ui/button"
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
                ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}
                h-14 xs:h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24 2xl:h-26`}>
                
                <nav className="mx-auto h-full flex items-center justify-between px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    
                    {/* Logo - Responsive for all screen sizes */}
                    <div className="flex items-center h-full w-auto max-w-[30%] sm:max-w-[25%] lg:max-w-[23.5%]">
                        <Link href="/" aria-label="FNZ Home" className="block">
                            <img
                                src="/assets/images/logo2.png"
                                alt="FNZ Logo"
                                className="h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 2xl:h-20 w-auto object-contain transition-all duration-300"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Shows on lg+ screens */}
                    <div className="hidden lg:flex items-center justify-center flex-1 px-4 xl:px-8 ">
                        <ul className="flex space-x-3 xl:space-x-6 2xl:space-x-8 uppercase font-medium tracking-wider justify-center items-center">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <li key={item.href} className="relative">
                                        <Link
                                            href={item.href}
                                            className={`block py-2 px-2 xl:px-3 text-xs xl:text-sm 2xl:text-base font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 whitespace-nowrap
                                                ${scrolled
                                                    ? (isActive ? 'text-orange-600' : 'text-gray-800 hover:text-orange-600')
                                                    : (isActive ? 'text-[#452c2a]' : 'text-white hover:text-orange-300')
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                        {isActive && (
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full w-full"></div>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Right Side - Social Icons + Phone + Mobile Menu */}
                    <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 lg:space-x-4">
                        
                        {/* Social Icons - Progressive visibility */}
                        <div className="hidden sm:flex md:flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                            <a
                                href="https://www.facebook.com/fnzwood/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110
                                    ${scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-300 hover:bg-white/10'}`}
                            >
                                <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/fnzwood/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110
                                    ${scrolled ? 'text-gray-700 hover:text-pink-600 hover:bg-pink-50' : 'text-white hover:text-pink-300 hover:bg-white/10'}`}
                            >
                                <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                            </a>
                        </div>

                        {/* Phone/WhatsApp Button - Only visible on desktop */}
                        <a
                            href="https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp İletişim"
                            className="hidden lg:inline-block"
                        >
                            <Button
                                size="sm"
                                className="p-2 sm:p-3 bg-green-500 text-white hover:bg-green-600 rounded-full transition-all duration-300"
                            >
                                <FaPhoneVolume className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                            </Button>
                        </a>

                        {/* Mobile Menu Button - Responsive sizing */}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                            className={`lg:hidden p-1.5 xs:p-2 transition-all duration-300
                                ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                            aria-label="Menu"
                        >
                            {isOpen ? (
                                <></>
                            ) : (
                                <Menu className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                            )}
                        </Button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay - Responsive for all mobile/tablet sizes */}
            <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                ></div>
                
                {/* Mobile Menu Panel - Responsive width */}
                <div className={`absolute top-0 right-0 h-full bg-white shadow-2xl transform transition-transform duration-300 
                    w-72 xs:w-80 sm:w-96 md:w-[28rem] ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                        <img
                            src="/assets/images/logo2.png"
                            alt="FNZ Logo"
                            className="h-6 xs:h-8 sm:h-10 w-auto object-contain"
                        />
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <X className="w-4 h-4 xs:w-5 xs:h-5" />
                        </Button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col py-4 sm:py-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-medium tracking-wide uppercase transition-all duration-200 border-l-4 ${
                                        isActive 
                                            ? 'text-orange-600 bg-orange-50 border-orange-600' 
                                            : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50 border-transparent hover:border-orange-300'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Mobile Social Links - Fixed at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
                        <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                            <a
                                href="https://www.facebook.com/fnzwood/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="p-2 sm:p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300"
                            >
                                <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/fnzwood/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="p-2 sm:p-3 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300"
                            >
                                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="p-2 sm:p-3 bg-green-500 text-white hover:bg-green-600 rounded-full transition-all duration-300"
                            >
                                <FaPhoneVolume className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Floating Phone Button - Only visible on mobile/tablet */}
            <div className={`lg:hidden fixed bottom-6 right-4 z-50 transition-all duration-300 ${
                scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
                <a
                    href="https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp İletişim"
                    className="block"
                >
                    <Button
                        size="lg"
                        className="rounded-full bg-green-500 hover:bg-green-600 text-white border-0 p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse"
                    >
                        <FaPhoneVolume className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>
                </a>
            </div>
        </>
    )
}