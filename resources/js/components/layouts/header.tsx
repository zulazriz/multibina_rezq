import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4 py-1">
                    <Link to="/" className="flex items-center space-x-6">
                        <div className="bg-wood-600 flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-2xl">
                            <img src="/images/logo/watermark_logo.png" alt="Multibina Logo" className="h-full w-full object-contain" />
                        </div>
                        <div className="leading-tight">
                            <h1 className="text-wood-800 text-xl font-bold sm:text-wxl">Multibina Rezq Resources</h1>
                            <p className="text-wood-600 text-sm sm:text-base">Custom Furniture & Wardrobes</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden space-x-8 md:flex">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    isActive(item.href) ? 'text-wood-800 border-wood-600 border-b-2' : 'text-wood-600 hover:text-wood-800'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-wood-600 hover:text-wood-800 hover:bg-wood-50 rounded-md p-2"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="pb-4 md:hidden">
                        <div className="space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                                        isActive(item.href)
                                            ? 'text-wood-800 bg-wood-50 border-wood-600 border-l-4'
                                            : 'text-wood-600 hover:text-wood-800 hover:bg-wood-50'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
