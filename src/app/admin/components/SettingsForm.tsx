'use client';

import { updateSettings } from '@/app/lib/actions';
import { useActionState, useState } from 'react';
import RichTextEditor from './RichTextEditor';
import ImageUploader from './ImageUploader';

export default function SettingsForm({ settings }: { settings: Record<string, string> }) {
    const [state, formAction] = useActionState(updateSettings, null);

    // Local state for complex inputs to sync with hidden fields
    const [aboutContent, setAboutContent] = useState(settings.about_content || '');
    const [aboutImage, setAboutImage] = useState(settings.about_image || '');
    const [privacyContent, setPrivacyContent] = useState(settings.policy_privacy_content || '');
    const [cookiesContent, setCookiesContent] = useState(settings.policy_cookies_content || '');

    return (
        <form action={formAction} className="space-y-12">
            {state?.message && (
                <div className={`p-4 rounded-md ${state.message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {state.message}
                </div>
            )}

            {/* Sekcja O Mnie - Edycja Treści */}
            <div>
                <h2 className="text-xl font-bold text-dark mb-4 border-b pb-2">Sekcja "O Mnie"</h2>
                <div className="grid grid-cols-1 gap-8">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Zdjęcie Profilowe</label>
                        <ImageUploader
                            value={aboutImage}
                            onUpload={(url) => setAboutImage(url)}
                        />
                        <input type="hidden" name="about_image" value={aboutImage} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Treść "O Mnie"</label>
                        <RichTextEditor
                            value={aboutContent}
                            onChange={setAboutContent}
                        />
                        <input type="hidden" name="about_content" value={aboutContent} />
                    </div>
                </div>
            </div>

            {/* Sekcja Kontakt */}
            <div>
                <h2 className="text-xl font-bold text-dark mb-4 border-b pb-2">Dane Kontaktowe</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Numer Telefonu</label>
                        <input type="text" name="phone_number" defaultValue={settings.phone_number} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Adres Email</label>
                        <input type="text" name="email_address" defaultValue={settings.email_address} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Adres fizyczny</label>
                        <input type="text" name="address" defaultValue={settings.address} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                </div>
            </div>

            {/* Sekcja Social Media */}
            <div>
                <h2 className="text-xl font-bold text-dark mb-4 border-b pb-2">Social Media</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Facebook URL</label>
                        <input type="text" name="social_facebook" defaultValue={settings.social_facebook} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Instagram URL</label>
                        <input type="text" name="social_instagram" defaultValue={settings.social_instagram} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">TikTok URL</label>
                        <input type="text" name="social_tiktok" defaultValue={settings.social_tiktok} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                </div>
            </div>

            {/* Sekcja Strona Główna - Teksty */}
            <div>
                <h2 className="text-xl font-bold text-dark mb-4 border-b pb-2">Strona Główna - Teksty</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nagłówek sekcji "O mnie"</label>
                        <input type="text" name="home_about_heading" defaultValue={settings.home_about_heading || 'Tworzę wizerunek, który działa.'} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Podtytuł sekcji "O mnie"</label>
                        <textarea name="home_about_text" rows={4} defaultValue={settings.home_about_text || 'Cześć! Jestem Szymon. Łączę świat fotografii, designu i marketingu...'} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                </div>
            </div>

            {/* Sekcja Strona Główna - Usługi */}
            <div>
                <h2 className="text-xl font-bold text-dark mb-4 border-b pb-2">Strona Główna - Opisy Usług</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-primary mb-1">Fotografia</label>
                        <textarea name="service_fotografia_desc" rows={3} defaultValue={settings.service_fotografia_desc || 'Emocje uchwycone w kadrze. Sesje biznesowe, produktowe i lifestyle.'} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-primary mb-1">Grafika</label>
                        <textarea name="service_grafika_desc" rows={3} defaultValue={settings.service_grafika_desc || 'Projekty, które sprzedają. Branding, social media, print.'} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-primary mb-1">Marketing</label>
                        <textarea name="service_marketing_desc" rows={3} defaultValue={settings.service_marketing_desc || 'Strategie, które działają. Social media, ads, copywriting.'} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                </div>
            </div>

            {/* Sekcja Polityka i Prawne */}
            <div>
                <h2 className="text-xl font-bold text-dark mb-4 border-b pb-2">Polityka i Prawne</h2>
                <div className="space-y-8">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Polityka Prywatności</label>
                        <RichTextEditor
                            value={privacyContent}
                            onChange={setPrivacyContent}
                        />
                        <input type="hidden" name="policy_privacy_content" value={privacyContent} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Polityka Cookies</label>
                        <RichTextEditor
                            value={cookiesContent}
                            onChange={setCookiesContent}
                        />
                        <input type="hidden" name="policy_cookies_content" value={cookiesContent} />
                    </div>
                </div>
            </div>

            {/* Sekcja Strona Główna Meta */}
            <div>
                <h2 className="text-xl font-bold text-dark mb-4 border-b pb-2">Ustawienia Główne</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tytuł Strony (SEO)</label>
                        <input type="text" name="site_title" defaultValue={settings.site_title} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Opis Strony (SEO & Stopka)</label>
                        <textarea name="site_description" rows={3} defaultValue={settings.site_description} className="mt-1 block w-full px-3 py-2 border rounded-md" />
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t sticky bottom-0 bg-white pb-4 z-10">
                <button type="submit" className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-dark transition-colors shadow-lg">
                    Zapisz Wszystkie Ustawienia
                </button>
            </div>
        </form>
    );
}
