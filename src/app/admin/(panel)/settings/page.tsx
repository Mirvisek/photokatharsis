
import { getSettings } from '@/app/lib/data';
import SettingsForm from '../../components/SettingsForm';

// We force dynamic rendering to fetch fresh settings
export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
    const settings = await getSettings();

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Ustawienia Strony</h1>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-4xl">
                <SettingsForm settings={settings} />
            </div>
        </div>
    );
}
