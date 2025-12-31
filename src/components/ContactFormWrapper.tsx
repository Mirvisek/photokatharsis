'use client';

import { useSearchParams } from 'next/navigation';

export default function ContactFormWrapper() {
    const searchParams = useSearchParams();
    const subject = searchParams.get('subject') || '';

    return (
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-dark mb-8">Wyślij wiadomość</h2>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Imię i nazwisko</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="Jan Kowalski"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="jan@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Temat</label>
                    <input
                        type="text"
                        id="subject"
                        defaultValue={subject}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="W czym mogę pomóc?"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Wiadomość</label>
                    <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="Treść wiadomości..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full btn bg-primary hover:bg-dark text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-primary/30"
                >
                    Wyślij
                </button>
            </form>
        </div>
    );
}
