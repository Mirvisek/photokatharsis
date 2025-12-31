import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar } from 'lucide-react';

export default function Rezerwacja() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="flex flex-col min-h-[80vh] items-center justify-center pt-20 px-4">
                <div className="bg-gray-50 p-12 rounded-3xl text-center max-w-2xl w-full shadow-xl border border-gray-100">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                        <Calendar size={40} />
                    </div>
                    <h1 className="text-4xl font-bold text-primary mb-6">Rezerwacja Online</h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Szybko i wygodnie zarezerwuj termin sesji lub spotkania.
                        Skorzystaj z naszego zewnętrznego systemu rezerwacji.
                    </p>

                    <a
                        href="https://photokatharsis.mafelo.net/pl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary hover:bg-dark text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg shadow-primary/30 transition-all transform hover:scale-105"
                    >
                        Przejdź do kalendarza
                    </a>

                    <p className="mt-8 text-sm text-gray-400">
                        Zostaniesz przekierowany do systemu Mafelo/Booksy itp.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
