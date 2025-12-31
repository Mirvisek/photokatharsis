'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import Link from 'next/link';

type Offer = {
    id: string;
    title: string;
    description: string;
    price: string;
    features: string;
};

type GroupedOffers = {
    fotografia: Offer[];
    grafika: Offer[];
    marketing: Offer[];
};

export default function OfferList({ offers }: { offers: GroupedOffers }) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const toggleCategory = (cat: string) => {
        setActiveCategory(activeCategory === cat ? null : cat);
    };

    return (
        <div className="space-y-6">
            {/* FOTOGRAFIA */}
            <div id="fotografia" className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeCategory === 'fotografia' ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-gray-200 hover:border-primary/50'}`}>
                <button
                    onClick={() => toggleCategory('fotografia')}
                    className="w-full flex items-center justify-between p-6 md:p-8 bg-white cursor-pointer"
                >
                    <div className="flex items-center space-x-4">
                        <span className="text-2xl md:text-3xl font-bold text-dark">Fotografia</span>
                    </div>
                    <ChevronDown
                        className={`text-gray-400 transition-transform duration-300 ${activeCategory === 'fotografia' ? 'rotate-180 text-primary' : ''}`}
                        size={32}
                    />
                </button>

                <AnimatePresence>
                    {activeCategory === 'fotografia' && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-gray-50"
                        >
                            <div className="p-6 md:p-8 border-t border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {offers.fotografia.map((pkg) => (
                                        <div key={pkg.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                                            <h3 className="text-xl font-bold text-dark mb-2">{pkg.title}</h3>
                                            <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                                            <p className="text-gray-500 text-sm mb-6">{pkg.description}</p>

                                            <ul className="space-y-3 mb-8 flex-1">
                                                {pkg.features.split(',').map((feat, i) => (
                                                    <li key={i} className="flex items-start text-sm text-gray-600">
                                                        <Check className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                                                        <span>{feat.trim()}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link
                                                href="/kontakt?subject=Fotografia"
                                                className="w-full block text-center bg-dark text-white py-3 rounded-lg font-semibold hover:bg-primary transition-colors"
                                            >
                                                Zarezerwuj
                                            </Link>
                                        </div>
                                    ))}
                                    {offers.fotografia.length === 0 && (
                                        <p className="text-gray-500">Brak ofert w tej kategorii.</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* GRAFIKA */}
            <div id="grafika" className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeCategory === 'grafika' ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-gray-200 hover:border-primary/50'}`}>
                <button
                    onClick={() => toggleCategory('grafika')}
                    className="w-full flex items-center justify-between p-6 md:p-8 bg-white cursor-pointer"
                >
                    <div className="flex items-center space-x-4">
                        <span className="text-2xl md:text-3xl font-bold text-dark">Grafika</span>
                    </div>
                    <ChevronDown
                        className={`text-gray-400 transition-transform duration-300 ${activeCategory === 'grafika' ? 'rotate-180 text-primary' : ''}`}
                        size={32}
                    />
                </button>

                <AnimatePresence>
                    {activeCategory === 'grafika' && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-gray-50"
                        >
                            <div className="p-6 md:p-8 border-t border-gray-100 space-y-4">
                                {offers.grafika.map((item) => (
                                    <div key={item.id} className="bg-white p-6 rounded-xl border border-gray-100">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                                            <span className="font-bold text-primary">{item.price}</span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{item.description}</p>
                                        <Link href="/kontakt?subject=Grafika" className="inline-block text-sm font-semibold text-primary hover:text-dark transition-colors">
                                            Zapytaj o wycenę →
                                        </Link>
                                    </div>
                                ))}
                                {offers.grafika.length === 0 && (
                                    <p className="text-gray-500">Brak ofert w tej kategorii.</p>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* MARKETING */}
            <div id="marketing" className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeCategory === 'marketing' ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-gray-200 hover:border-primary/50'}`}>
                <button
                    onClick={() => toggleCategory('marketing')}
                    className="w-full flex items-center justify-between p-6 md:p-8 bg-white cursor-pointer"
                >
                    <div className="flex items-center space-x-4">
                        <span className="text-2xl md:text-3xl font-bold text-dark">Marketing</span>
                    </div>
                    <ChevronDown
                        className={`text-gray-400 transition-transform duration-300 ${activeCategory === 'marketing' ? 'rotate-180 text-primary' : ''}`}
                        size={32}
                    />
                </button>

                <AnimatePresence>
                    {activeCategory === 'marketing' && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-gray-50"
                        >
                            <div className="p-6 md:p-8 border-t border-gray-100 space-y-4">
                                {offers.marketing.map((item) => (
                                    <div key={item.id} className="bg-white p-6 rounded-xl border border-gray-100">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                                            <span className="font-bold text-primary">{item.price}</span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{item.description}</p>
                                        <Link href="/kontakt?subject=Marketing" className="inline-block text-sm font-semibold text-primary hover:text-dark transition-colors">
                                            Zapytaj o wycenę →
                                        </Link>
                                    </div>
                                ))}
                                {offers.marketing.length === 0 && (
                                    <p className="text-gray-500">Brak ofert w tej kategorii.</p>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
