
import Link from 'next/link';
import { getSettings } from '@/app/lib/data';

export default async function Footer() {
    const settings = await getSettings();

    return (
        <footer className="bg-dark text-white/80 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Szymon<span className="text-accent">.</span></h3>
                        <p className="text-sm leading-relaxed">
                            {settings.site_description || 'Profesjonalna fotografia, grafika i marketing. Pomagam budować wizerunek i łapać chwile.'}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Linki</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/o-mnie" className="hover:text-accent transition-colors">O mnie</Link></li>
                            <li><Link href="/oferta" className="hover:text-accent transition-colors">Oferta</Link></li>
                            <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
                            <li><Link href="/kontakt" className="hover:text-accent transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Legalne</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-accent transition-colors">Polityka Prywatności</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} {settings.site_title || 'Szymon'}. Wszelkie prawa zastrzeżone.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {settings.social_facebook && <a href={settings.social_facebook} className="hover:text-accent transition-colors">Facebook</a>}
                        {settings.social_instagram && <a href={settings.social_instagram} className="hover:text-accent transition-colors">Instagram</a>}
                        {settings.social_tiktok && <a href={settings.social_tiktok} className="hover:text-accent transition-colors">TikTok</a>}
                    </div>
                </div>
            </div>
        </footer>
    );
}
