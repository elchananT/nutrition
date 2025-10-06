import React from 'react'
import {Mail, Phone} from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 bg-[#00FF99] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <span className="text-xl font-bold">FuelUp Nutrition</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Personalized nutrition coaching for sustainable results and real performance.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[#00FF99]">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-[#00FF99]">Instagram</a>
                            <a href="#" className="text-gray-400 hover:text-[#00FF99]">Twitter</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-[#00FF99]">1:1 Coaching</a></li>
                            <li><a href="#" className="hover:text-[#00FF99]">Group Programs</a></li>
                            <li><a href="#" className="hover:text-[#00FF99]">Meal Prep Plans</a></li>
                            <li><a href="#" className="hover:text-[#00FF99]">Corporate Wellness</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-[#00FF99]">Blog</a></li>
                            <li><a href="#" className="hover:text-[#00FF99]">Nutrition Calculator</a></li>
                            <li><a href="#" className="hover:text-[#00FF99]">Recipe Database</a></li>
                            <li><a href="#" className="hover:text-[#00FF99]">Success Stories</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span>hello@fuelupnutrition.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>+1 (555) FUEL-UP</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col justify-between items-center">
                    <h4>
                        You should know !
                    </h4>
                    <p className="text-sm text-gray-300 text-center mt-6">
                        This website is for demonstration and portfolio purposes only. It does not represent a real
                        business.
                    </p>
                    <p className="text-gray-400 text-sm mt-5">
                        © 2025 FuelUp Nutrition. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
