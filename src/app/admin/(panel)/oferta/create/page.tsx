'use client';

import { useActionState } from 'react';
import { createOffer } from '@/app/lib/actions';
import Link from 'next/link';

export default function CreateOfferPage() {
    const [state, formAction] = useActionState(createOffer, null);

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dodaj usługę</h1>
                <Link href="/admin/oferta" className="text-sm text-gray-600 hover:text-dark">Wróć</Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <form action={formAction} className="space-y-6">
                    {state?.message && (
                        <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">{state.message}</div>
                    )}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Kategoria</label>
                        <select
                            name="category"
                            id="category"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        >
                            <option value="fotografia">Fotografia</option>
                            <option value="grafika">Grafika</option>
                            <option value="marketing">Marketing</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Tytuł</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            required
                            placeholder="np. Pakiet Standard"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Cena</label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            required
                            placeholder="np. 500 PLN"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Opis</label>
                        <textarea
                            name="description"
                            id="description"
                            required
                            rows={3}
                            placeholder="Krótki opis usługi..."
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="features" className="block text-sm font-medium text-gray-700">Cechy (opcjonalne, oddziel przecinkami)</label>
                        <textarea
                            name="features"
                            id="features"
                            rows={3}
                            placeholder="np. 10 zdjęć, 2h sesji, obróbka graficzna"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                        <p className="mt-1 text-xs text-gray-500">Te cechy będą wyświetlane jako lista punktowana (tylko dla fotografii).</p>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Zapisz
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
