
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OfferList from '@/components/OfferList';
import { getOffers } from '@/app/lib/data';

export const dynamic = 'force-dynamic';

export default async function Oferta() {
    const allOffers = await getOffers();

    // Group offers by category for easier consumption in Client Component
    const groupedOffers = {
        fotografia: allOffers.filter(o => o.category === 'fotografia'),
        grafika: allOffers.filter(o => o.category === 'grafika'),
        marketing: allOffers.filter(o => o.category === 'marketing'),
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">Oferta</h1>

                <OfferList offers={groupedOffers} />
            </div>
            <Footer />
        </main>
    );
}
