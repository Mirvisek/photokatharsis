'use client';

import { updateSettings } from '@/app/lib/actions';
import { useActionState, useState } from 'react';
import RichTextEditor from './RichTextEditor';
import ImageUploader from './ImageUploader';
import { ChevronDown, Save, Globe, User, Share2, FileText, Code, Layout } from 'lucide-react';

export default function SettingsForm({ settings }: { settings: Record<string, string> }) {
    const [state, formAction] = useActionState(updateSettings, null);

    // Local state for specialized inputs
    const [aboutContent, setAboutContent] = useState(settings.about_content || '');
    const [aboutImage, setAboutImage] = useState(settings.about_image || '');
    const [privacyContent, setPrivacyContent] = useState(settings.policy_privacy_content || '');
    const [cookiesContent, setCookiesContent] = useState(settings.policy_cookies_content || '');

    const Section = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                    <Icon size={20} />
                </div>
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>
            </div>
            <div className="p-6 space-y-6">
                {children}
            </div>
        </div>
    );

    const InputGroup = ({ label, name, defaultValue, type = "text", rows }: { label: string, name: string, defaultValue?: string, type?: string, rows?: number }) => (
        <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>
            {rows ? (
                <textarea
                    name={name}
                    rows={rows}
                    defaultValue={defaultValue}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y bg-gray-50 focus:bg-white"
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    defaultValue={defaultValue}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                />
            )}
        </div>
    );

    return (
        <form action={formAction} className="max-w-5xl mx-auto pb-24">
            {state?.message && (
                <div className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl border flex items-center gap-3 animate-fade-in ${state.message.includes('success') ? 'bg-white border-green-200 text-green-700' : 'bg-white border-red-200 text-red-700'}`}>
                    {state.message.includes('success') ? '✅' : '❌'} {state.message}
                </div>
            )}

            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Ustawienia Strony</h1>
                <p className="text-gray-500">Zarządzaj treścią i konfiguracją w jednym miejscu.</p>
            </div>

            {/* 1. Ustawienia Główne (SEO) */}
            <Section title="Główne & SEO" icon={Globe}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label="Tytuł Strony (Meta Title)" name="site_title" defaultValue={settings.site_title} />
                    <InputGroup label="Pełny Adres URL (np. https://twojadomena.pl)" name="site_url" defaultValue={settings.site_url} />
                    <div className="md:col-span-2">
                        <InputGroup label="Opis Strony (Meta Description)" name="site_description" rows={3} defaultValue={settings.site_description} />
                    </div>
                </div>
            </Section>

            {/* 2. Sekcja O Mnie */}
            <Section title="Sekcja O Mnie (Strona Główna & Podstrona)" icon={User}>
                <div className="grid grid-cols-1 gap-8">
                    <InputGroup label="Nagłówek na Stronie Głównej" name="home_about_heading" defaultValue={settings.home_about_heading || 'Tworzę wizerunek, który działa.'} />
                    <InputGroup label="Krótki tekst na Stronie Głównej" name="home_about_text" rows={3} defaultValue={settings.home_about_text} />

                    <div className="border-t border-gray-100 pt-8 mt-4">
                        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Podstrona "O Mnie"</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">Zdjęcie Profilowe</label>
                                <ImageUploader value={aboutImage} onUpload={setAboutImage} />
                                <input type="hidden" name="about_image" value={aboutImage} />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-600 mb-2">Pełna biografia</label>
                                <RichTextEditor value={aboutContent} onChange={setAboutContent} />
                                <input type="hidden" name="about_content" value={aboutContent} />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. Usługi (Opisy) */}
            <Section title="Opisy Usług (Strona Główna)" icon={Layout}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InputGroup label="Fotografia - Opis" name="service_fotografia_desc" rows={4} defaultValue={settings.service_fotografia_desc} />
                    <InputGroup label="Grafika - Opis" name="service_grafika_desc" rows={4} defaultValue={settings.service_grafika_desc} />
                    <InputGroup label="Marketing - Opis" name="service_marketing_desc" rows={4} defaultValue={settings.service_marketing_desc} />
                </div>
            </Section>

            {/* 4. Dane Kontaktowe */}
            <Section title="Kontakt & Stopka" icon={Share2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label="Email Kontaktowy" name="email_address" defaultValue={settings.email_address} />
                    <InputGroup label="Numer Telefonu" name="phone_number" defaultValue={settings.phone_number} />
                    <div className="md:col-span-2">
                        <InputGroup label="Adres Fizyczny" name="address" defaultValue={settings.address} />
                    </div>
                    <div className="md:col-span-2">
                        <InputGroup label="Tekst Copyright w stopce" name="footer_copyright" defaultValue={settings.footer_copyright || '© 2024 Photo Katharsis. Wszystkie prawa zastrzeżone.'} />
                    </div>
                </div>
            </Section>

            {/* 5. Social Media */}
            <Section title="Social Media" icon={Share2}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InputGroup label="Facebook URL" name="social_facebook" defaultValue={settings.social_facebook} />
                    <InputGroup label="Instagram URL" name="social_instagram" defaultValue={settings.social_instagram} />
                    <InputGroup label="TikTok URL" name="social_tiktok" defaultValue={settings.social_tiktok} />
                </div>
            </Section>

            {/* 6. Polityki */}
            <Section title="Dokumenty Prawne" icon={FileText}>
                <div className="space-y-8">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Polityka Prywatności</label>
                        <RichTextEditor value={privacyContent} onChange={setPrivacyContent} />
                        <input type="hidden" name="policy_privacy_content" value={privacyContent} />
                    </div>
                    <div className="border-t border-gray-100 pt-8">
                        <label className="block text-sm font-medium text-gray-600 mb-2">Polityka Cookies</label>
                        <RichTextEditor value={cookiesContent} onChange={setCookiesContent} />
                        <input type="hidden" name="policy_cookies_content" value={cookiesContent} />
                    </div>
                </div>
            </Section>

            {/* 7. Zaawansowane / Skrypty */}
            <Section title="Zaawansowane / Skrypty Customowe" icon={Code}>
                <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 text-yellow-800 text-sm rounded-lg border border-yellow-100 mb-4">
                        ⚠️ Ostrożnie! Kod tutaj wklejony będzie dodany bezpośrednio do strony. Błędny kod może zepsuć wyświetlanie.
                    </div>
                    <InputGroup label="Google Analytics ID (np. G-XXXXXXXX)" name="google_analytics_id" defaultValue={settings.google_analytics_id} />
                    <InputGroup label="Custom CSS (Globalne style)" name="custom_css" rows={5} defaultValue={settings.custom_css} />
                    <InputGroup label="Custom JS (Przed zamknięciem </body>)" name="custom_js" rows={5} defaultValue={settings.custom_js} />
                </div>
            </Section>

            {/* Floating Save Button */}
            <div className="fixed bottom-6 right-6 md:right-12 z-40">
                <button
                    type="submit"
                    className="flex items-center gap-2 bg-dark text-white pl-6 pr-8 py-4 rounded-full shadow-2xl hover:bg-primary transition-all hover:scale-105 active:scale-95 font-bold text-lg"
                >
                    <Save size={24} />
                    Zapisz Zmiany
                </button>
            </div>
        </form>
    );
}
