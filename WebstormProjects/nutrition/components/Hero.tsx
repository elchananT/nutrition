'use client'

import React from 'react'
import {Star} from "lucide-react";
import {ModalState, useBookingModal, useDownloadModal} from "@/store/store";
import Button from "@/components/Button";

const Hero = () => {
    const bookingModal: ModalState = useBookingModal()
    const downloadModal: ModalState = useDownloadModal()

    return (
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-center md:px-12 lg:px-auto lg:text-left text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="gradient-text">Personalized Nutrition</span> for Real Performance
                        </h1>
                        <p className="text-center md:px-28 text-wrap lg:px-auto lg:text-left text-xl text-gray-300 leading-relaxed">
                            Meal plans, coaching, and sports nutrition tailored to your lifestyle — sustainable, evidence-based, and performance-first.
                        </p>

                        <div className="flex max-lg:justify-center flex-col md:flex-row gap-4">
                            <Button
                                onClick={() => bookingModal.open()}
                            >
                                Book a Free Consult
                            </Button>
                            <Button
                                onClick={() => downloadModal.open()}
                                variant={'secondary'}
                            >
                                Download 7-Day Starter Plan
                            </Button>
                        </div>

                        {/* Trust Row */}
                        <div className="flex justify-center lg:flex-col sm:flex-row items-center gap-6 pt-8 border-t border-gray-800">
                            <div className="flex items-center space-x-2">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-400">4.9 ★ — 3,400+ clients coached</span>
                            </div>
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="animate-float">
                            <img
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=600&q=80"
                                alt="FuelUp App Mockup"
                                className="w-full h-auto rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
