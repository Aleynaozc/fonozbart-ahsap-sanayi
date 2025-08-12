"use client"

import { Facebook, Instagram, Phone, Search, Twitter } from "lucide-react"
import { FaPinterest } from "react-icons/fa"
import Image from "next/image"
import { useState } from "react"

export function Header() {
    const [activeMenu, setActiveMenu] = useState("Home")

    const menuItems = [
        { name: "Home", label: "ANASAYFA" },
        { name: "About", label: "HAKKIMIZDA" },
        { name: "Project", label: "PROJELERİMİZ" },
        { name: "Services", label: "HİZMETLERİMİZ" },
        { name: "Blog", label: "BLOG" },
        { name: "Contact", label: "İLETİŞİM" },
    ]

    return (
        <header className="bg-[#3d3d3d] fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center animate-fade-in">
                        <Image
                            src="/assets/images/footer-logo.png"
                            alt="FNZ Mobilya Logo"
                            width={100}
                            height={50}
                            className="object-contain"
                        />
                    </div>

                    {/* Social Media Icons - Hidden on mobile */}
                    <div className="hidden lg:flex items-center space-x-3 ml-8">
                        <div className="bg-gray-600 hover:bg-gray-500 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                            <Twitter className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-600 hover:bg-gray-500 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                            <Facebook className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-600 hover:bg-gray-500 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                            <FaPinterest className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-600 hover:bg-gray-500 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                            <Instagram className="w-4 h-4 text-white" />
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative">
                                <a
                                    href="#"
                                    onClick={() => setActiveMenu(item.name)}
                                    className={`relative inline-block text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 py-2 ${activeMenu === item.name ? "text-white" : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {item.label}

                                    {/* ÜÇLÜ DİKEY ÇİZGİ (masaüstü) */}
                                    {activeMenu === item.name && (
                                        <span className="absolute left-1/2 top-full -translate-x-1/2 mt-2 flex items-end gap-0.5 z-50 transition-all duration-200">
                                            <span className="w-px h-2 bg-white rounded-sm" />
                                            <span className="w-px h-3 bg-[#D4A574] rounded-sm" />
                                            <span className="w-px h-2 bg-white rounded-sm" />
                                        </span>
                                    )}
                                </a>
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu - Expandable (aynı mantık mobil için de) */}
                    <div className="lg:hidden mt-4 border-t border-gray-600 pt-4">
                        <nav className="flex flex-col space-y-3">
                            {menuItems.map((item) => (
                                <div key={item.name} className="relative">
                                    <a
                                        href="#"
                                        onClick={() => setActiveMenu(item.name)}
                                        className={`relative block text-sm font-medium tracking-wide transition-all duration-300 py-2 ${activeMenu === item.name ? "text-white" : "text-gray-300"
                                            }`}
                                    >
                                        {item.label}

                                        {/* Mobil için aynı üçlü çizgi (linkin altında ortalanmış) */}
                                        {activeMenu === item.name && (
                                            <span className="absolute left-1/2 top-full -translate-x-1/2 mt-2 flex items-end gap-0.5">
                                                <span className="w-px h-2 bg-white rounded-sm" />
                                                <span className="w-px h-3 bg-[#D4A574] rounded-sm" />
                                                <span className="w-px h-2 bg-white rounded-sm" />
                                            </span>
                                        )}
                                    </a>
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info and Search */}
                    <div className="flex items-center space-x-4">
                        {/* Contact Info - Hidden on small screens */}
                        <div className="hidden md:flex items-center space-x-3">
                            <div className="bg-gray-600 p-2 rounded-full">
                                <Phone className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-gray-400">Her zaman arayın</div>
                                <div className="text-sm text-white font-medium">+90 (212) 555 0123</div>
                            </div>
                        </div>

                        {/* Search Icon */}
                        <div className="bg-gray-600 hover:bg-gray-500 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                            <Search className="w-4 h-4 text-white" />
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden flex flex-col space-y-1 p-2">
                            <div className="w-5 h-0.5 bg-white"></div>
                            <div className="w-5 h-0.5 bg-white"></div>
                            <div className="w-5 h-0.5 bg-white"></div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Expandable */}
                <div className="lg:hidden mt-4 border-t border-gray-600 pt-4">
                    <nav className="flex flex-col space-y-3">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative">
                                <a
                                    href="#"
                                    onClick={() => setActiveMenu(item.name)}
                                    className={`text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 relative group py-2 ${activeMenu === item.name ? "text-white" : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {item.label}
                                </a>

                                {/* Aktif menü üçlü dikey çizgi */}
                                {activeMenu === item.name && (
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-end gap-0.5">
                                        {/* Sol kısa beyaz */}
                                        <div className="w-0.5 h-2 bg-white rounded"></div>
                                        {/* Orta uzun kahverengi */}
                                        <div className="w-0.5 h-3 bg-[#D4A574] rounded"></div>
                                        {/* Sağ kısa beyaz */}
                                        <div className="w-0.5 h-2 bg-white rounded"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Social Media */}
                    <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-600">
                        <div className="bg-gray-600 hover:bg-gray-500 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                            <Twitter className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-600 hover:bg-gray-500 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                            <Facebook className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-600 hover:bg-gray-500 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                            <FaPinterest className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-600 hover:bg-gray-500 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                            <Instagram className="w-4 h-4 text-white" />
                        </div>
                    </div>

                    {/* Mobile Contact */}
                    <div className="mt-4 pt-4 border-t border-gray-600">
                        <div className="flex items-center space-x-3">
                            <div className="bg-gray-600 p-2 rounded-full">
                                <Phone className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">Her zaman arayın</div>
                                <div className="text-sm text-white font-medium">+90 (212) 555 0123</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
