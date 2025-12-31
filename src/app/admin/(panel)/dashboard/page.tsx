
import { auth } from '@/auth';

export default async function DashboardPage() {
    const session = await auth();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Witaj, {session?.user?.name}!</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Portfolio</h3>
                    <p className="text-2xl font-bold text-dark mt-2">-- Projektów</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Oferta</h3>
                    <p className="text-2xl font-bold text-dark mt-2">-- Usług</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Opinie</h3>
                    <p className="text-2xl font-bold text-dark mt-2">-- Opinii</p>
                </div>
            </div>
        </div>
    );
}
