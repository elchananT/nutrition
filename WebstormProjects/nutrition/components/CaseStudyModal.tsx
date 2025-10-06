'use client'

import React from "react";
import {X} from "lucide-react";
import {useCaseStudyModal} from "@/store/store";

const CaseStudyModal = () => {
    const {close, isOpen} = useCaseStudyModal()
    
    return (
        <div className={isOpen ? "" : "hidden"}>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">Success Story: Maria's Transformation</h3>
                        <button onClick={() => close()} className="text-gray-500 hover:text-gray-700">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="space-y-4">
                        <img src="https://images.unsplash.com/photo-1594824019054-b3a95b85a0f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80" alt="Maria's transformation" className="w-full rounded-lg" />
                        <p className="text-gray-700 leading-relaxed">
                            "After struggling with yo-yo dieting for years, I found FuelUp Nutrition. In just 6 months, I lost 35 pounds sustainably while training for my first triathlon. The personalized approach meant I never felt deprived, and the weekly check-ins kept me accountable. Most importantly, I learned how to fuel my body properly for performance and life. My energy levels are consistently high, my recovery improved dramatically, and I finally have a healthy relationship with food. This isn't just a diet - it's a complete lifestyle transformation that I can maintain forever."
                        </p>
                        <div className="grid grid-cols-3 gap-4 text-center bg-gray-50 rounded-lg p-4">
                            <div>
                                <div className="text-2xl font-bold text-[#00FF99]">35lbs</div>
                                <div className="text-sm text-gray-600">Weight Lost</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-[#00FF99]">6mo</div>
                                <div className="text-sm text-gray-600">Timeline</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-[#00FF99]">1st</div>
                                <div className="text-sm text-gray-600">Triathlon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseStudyModal;
