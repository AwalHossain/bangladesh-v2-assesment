import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white py-4 md:py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link href="/">Bijoy 2024</Link>
                </div>
                <div className="space-x-4 hidden md:block">
                    <Link href="/login" className="hover:text-gray-400">
                        Login
                    </Link>
                    <Link href="/registration" className="hover:text-gray-400">
                        Register
                    </Link>
                    <Link href="/dashboard" className="hover:text-gray-400">
                        Dashboard
                    </Link>
                </div>
                <div className="md:hidden">
                    <button className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}