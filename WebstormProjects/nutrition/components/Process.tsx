import React from 'react'

const Process = () => {
    return (
        <section className="process-section py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our 4-Step Process</h2>
                    <p className="text-xl text-gray-400">
                        From assessment to results, we guide you every step of the way.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="process-step text-center">
                        <div className="w-16 h-16 bg-[#00FF99]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-[#00FF99]">1</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Assessment</h3>
                        <p className="text-gray-400">Dietary history, goals & optional labs.</p>
                    </div>

                    <div className="process-step text-center">
                        <div className="w-16 h-16 bg-[#00FF99]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-[#00FF99]">2</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Plan Build</h3>
                        <p className="text-gray-400">Macros and menu, tailored to your routine.</p>
                    </div>

                    <div className="process-step text-center">
                        <div className="w-16 h-16 bg-[#00FF99]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-[#00FF99]">3</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Implementation</h3>
                        <p className="text-gray-400">Coaching, check-ins, and habit work.</p>
                    </div>

                    <div className="process-step text-center">
                        <div className="w-16 h-16 bg-[#00FF99]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-[#00FF99]">4</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Review & Adjust</h3>
                        <p className="text-gray-400">Data-driven tweaks for continuous progress.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Process
