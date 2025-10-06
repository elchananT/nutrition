'use client'

import React, {useState} from 'react'
import {Menu, X} from "lucide-react";
import {useBookingModal} from "@/store/store";
import Button from "@/components/Button";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const {open} = useBookingModal()

    return (
        <div>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#1A1B27]/95 backdrop-blur-sm`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-[#00FF99] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <span className="text-xl font-bold">FuelUp Nutrition</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {['Home', 'About', 'Services', 'Plans', 'Testimonials', 'Blog'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`}
                                   className="text-gray-300 hover:text-[#00FF99] transition-colors">
                                    {item}
                                </a>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <Button
                            size={'medium'}
                            onClick={() => open()}
                            className="hidden lg:inline-flex"
                        >
                            Book a Free Consult
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="lg:hidden text-white"
                        >
                            <Menu className="w-6 h-6"/>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)}></div>
                    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1B27] rounded-t-2xl p-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Menu</h3>
                            <button onClick={() => setIsMenuOpen(false)} className="text-gray-400">
                                <X className="w-6 h-6"/>
                            </button>
                        </div>
                        <nav className="space-y-4">
                            {['Home', 'About', 'Services', 'Plans', 'Testimonials', 'Blog'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`}
                                   className="block text-gray-300 hover:text-[#00FF99] py-2">
                                    {item}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    open();
                                    setIsMenuOpen(false);
                                }}
                                className="w-full bg-[#00FF99] text-black py-3 rounded-full font-semibold mt-4"
                            >
                                Book a Free Consult
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navigation
