'use client'

import React, {useState} from 'react'
import {Check} from "lucide-react";

type Plan = {
    name: string,
    monthlyPrice: number,
    annualPrice: number,
    popular?: boolean,
    features: string[]
}

const pricingPlans: Plan[] = [
    {
        name: "Starter",
        monthlyPrice: 49,
        annualPrice: 39,
        features: ["Basic meal plans", "Monthly group call", "Email support", "Recipe database"]
    },
    {
        name: "Performance",
        monthlyPrice: 199,
        annualPrice: 159,
        popular: true,
        features: ["1:1 coaching", "Weekly check-ins", "Custom meal plans", "Direct messaging", "Lab review"]
    },
    {
        name: "Elite",
        monthlyPrice: 399,
        annualPrice: 319,
        features: ["Daily support", "Multiple check-ins/week", "Supplement protocols", "Priority scheduling", "Advanced testing"]
    }
];

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section id="plans" className="pricing-section py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Plan</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Flexible pricing to match your commitment level.
                    </p>

                    {/* Pricing Toggle */}
                    <div className="inline-flex items-center bg-white/10 rounded-full p-1">
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-2 rounded-full transition-colors ${!isAnnual ? 'bg-[#00FF99] text-black' : 'text-white'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`px-6 py-2 rounded-full transition-colors ${isAnnual ? 'bg-[#00FF99] text-black' : 'text-white'}`}
                        >
                            Annual <span className="text-sm ml-1">(Save 20%)</span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan: Plan, index: number) => (
                        <div key={index} className={`pricing-card relative bg-white/5 rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-[#00FF99]' : ''}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-4/5 md:left-5/6 transform -translate-x-1/2 w-full">
                    <span className="bg-[#00FF99] text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-2">
                                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                    <span className="text-lg text-gray-400">/month</span>
                                </div>
                                {isAnnual && (
                                    <div className="text-sm text-gray-400">
                                        Billed annually (${plan.annualPrice * 12}/year)
                                    </div>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature: string, idx: number) => (
                                    <li key={idx} className="flex items-start space-x-3">
                                        <Check className="w-5 h-5 text-[#00FF99] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-full font-semibold transition-colors ${
                                plan.popular
                                    ? 'bg-[#00FF99] text-black hover:bg-[#00CC7A]'
                                    : 'border border-[#00FF99] text-[#00FF99] hover:bg-[#00FF99] hover:text-black'
                            }`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Pricing
