'use client'

import React from "react";
import {X} from "lucide-react";
import {useDownloadModal} from "@/store/store";

const DownloadModal = () => {
    const {close, isOpen} = useDownloadModal()

    return (
        <div className={isOpen ? "" : "hidden"}>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">Get Your Free 7-Day Plan</h3>
                        <button onClick={() => close()} className="text-gray-500 hover:text-gray-700">
                            <X className="w-6 h-6"/>
                        </button>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input type="email" required
                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                            <input type="text" required
                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent"/>
                        </div>
                        <div className="flex items-start space-x-3">
                            <input type="checkbox" id="marketing" className="mt-1"/>
                            <label htmlFor="marketing" className="text-sm text-gray-600">I agree to receive marketing
                                emails and can unsubscribe at any time.</label>
                        </div>
                        <button type="submit"
                                className="w-full bg-[#00FF99] text-black font-semibold py-3 px-6 rounded-full hover:bg-[#00CC7A] transition-colors">
                            Download 7-Day Starter Plan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DownloadModal;
