import React from 'react'
import {Check} from "lucide-react";

type Service = {
    title: string,
    bullets: string[],
    tag: string
}

const services: Service[] = [
    {
        title: "1:1 Coaching",
        bullets: ["Customized meal plans", "Weekly check-ins & adjustments", "Direct messaging support"],
        tag: "From $199 / month"
    },
    {
        title: "Group Programs",
        bullets: ["Small group coaching", "Community support", "Monthly group calls"],
        tag: "From $99 / month"
    },
    {
        title: "Meal Prep Plans",
        bullets: ["Ready-to-cook recipes", "Shopping lists", "Prep instructions"],
        tag: "From $49 / month"
    }
];

const Service = () => {
    return (
        <section id="services" className="services-section py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Choose the level of support that fits your goals and lifestyle.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service: Service, index: number) => (
                        <div key={index} className="service-card bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <ul className="space-y-3 mb-6">
                                {service.bullets.map((bullet: string, idx: number) => (
                                    <li key={idx} className="flex items-start space-x-3">
                                        <Check className="w-5 h-5 text-[#00FF99] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-[#00FF99] font-semibold text-lg">{service.tag}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Service
