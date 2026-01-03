import Link from 'next/link';
import { signOut } from '@/auth';
import { LayoutDashboard, Images, ShoppingBag, LogOut, Settings, FolderOpen, BriefcaseBusiness } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="w-64 bg-dark text-white min-h-screen flex flex-col p-4">
            <div className="mb-8">
                <h2 className="text-2xl font-bold">Admin Panel</h2>
            </div>
            <nav className="flex-1 space-y-2">
                <Link
                    href="/admin/dashboard"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </Link>
                <Link
                    href="/admin/portfolio"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                    <Images size={20} />
                    <span>Portfolio</span>
                </Link>
                <Link
                    href="/admin/oferta"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                    <ShoppingBag size={20} />
                    <span>Oferta</span>
                </Link>
                <Link
                    href="/admin/settings"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                    <Settings size={20} />
                    <span>Ustawienia</span>
                </Link>
                <Link
                    href="/admin/clients"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                    <BriefcaseBusiness size={20} />
                    <span>Zaufali mi</span>
                </Link>
                <Link
                    href="/admin/hero"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                    <Images size={20} />
                    <span>Slider Hero</span>
                </Link>
            </nav>
            <div className="mt-auto pt-4 border-t border-white/10">
                <form
                    action={async () => {
                        'use server';
                        await signOut({ redirectTo: '/admin/login' });
                    }}
                >
                    <button type="submit" className="flex items-center space-x-3 px-4 py-3 w-full text-left rounded-lg hover:bg-red-500/20 text-red-300 transition-colors">
                        <LogOut size={20} />
                        <span>Wyloguj</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
