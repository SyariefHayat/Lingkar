"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import EachUtils from "@/utils/EachUtils";
import { LIST_WHAT_WE_DO } from "@/constants/listWhatWeDo";

export default function WhatWeDoSection() {
    const [active, setActive] = useState(1);

    return (
        <section className="w-full min-h-screen sm:h-screen px-8 py-16 bg-white">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2"></div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
                    Apa yang Kami Lakukan ?
                </h3>
            </div>

            <div className="flex flex-col md:flex-row w-full h-full border rounded-xl">
                <EachUtils 
                    of={LIST_WHAT_WE_DO}
                    render={(item, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setActive(item.id)}
                            animate={{ flex: active === item.id ? 4 : 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={`
                                border-t md:border-t-0 md:border-l 
                                p-4 sm:p-6 flex flex-col justify-start text-left cursor-pointer
                                ${active === item.id ? "bg-green-50" : "bg-white"}
                            `}
                        >
                            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                {String(item.id).padStart(2, "0")}.
                            </p>

                            <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
                                {item.title}
                            </p>

                            <AnimatePresence>
                                {active === item.id && (
                                    <motion.p
                                        key="desc"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-sm sm:text-base text-gray-600 leading-relaxed"
                                    >
                                        {item.desc}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                />
            </div>
        </section>
    )
}