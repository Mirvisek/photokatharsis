'use client';

import { motion } from 'framer-motion';

export default function AboutClient({ content, imageUrl }: { content: string, imageUrl: string }) {
    return (
        <>
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-primary mb-6"
                >
                    O Mnie
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-500 max-w-2xl mx-auto"
                >
                    Poznajmy się bliżej.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={imageUrl}
                        alt="Portret"
                        className="rounded-2xl shadow-2xl w-full object-cover max-h-[800px]"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6 text-lg text-gray-700 leading-relaxed prose prose-lg prose-headings:text-dark prose-p:text-gray-700 prose-a:text-primary max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </>
    );
}
