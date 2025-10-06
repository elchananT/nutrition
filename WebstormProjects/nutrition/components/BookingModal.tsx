'use client'

import React from "react";
import {X} from "lucide-react";
import {useBookingModal} from "@/store/store";

const BookingModal = () => {
    const {close, isOpen} = useBookingModal()

    return (
        <div className={isOpen ? "" : "hidden"}>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">Book Free Consult</h3>
                        <button onClick={() => close()} className="text-gray-500 hover:text-gray-700">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                            <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                            <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Weight/Height (optional)</label>
                            <input type="text" placeholder="e.g., 150lbs, 5'6\" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Goals</label>
                            <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent" placeholder="What would you like to achieve?"></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Times</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent">
                                <option>Morning (9-11 AM)</option>
                                <option>Afternoon (1-3 PM)</option>
                                <option>Evening (5-7 PM)</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full bg-[#00FF99] text-black font-semibold py-3 px-6 rounded-full hover:bg-[#00CC7A] transition-colors">
                            Book My Free Consult
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default BookingModal;
