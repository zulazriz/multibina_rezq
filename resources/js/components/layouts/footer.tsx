import { Facebook, Hammer, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '@/data/mockData';

const Footer: React.FC = () => {
    return (
        <footer className="bg-wood-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="bg-wood-600 rounded-lg p-2">
                                <Hammer className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Artisan Woodworks</h3>
                                <p className="text-wood-300 text-sm">Custom Furniture & Wardrobes</p>
                            </div>
                        </div>
                        <p className="text-wood-300 text-sm leading-relaxed">
                            Crafting exceptional custom furniture and wardrobes for over 25 years. Quality, craftsmanship, and customer satisfaction
                            are our top priorities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Gallery', href: '/gallery' },
                                { name: 'Services', href: '/services' },
                                { name: 'Contact', href: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="text-wood-300 transition-colors duration-200 hover:text-white">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Our Services</h4>
                        <ul className="text-wood-300 space-y-2">
                            <li>Custom Kitchen Design</li>
                            <li>Wardrobe Solutions</li>
                            <li>Living Room Furniture</li>
                            <li>Office Furniture</li>
                            <li>Bedroom Sets</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="text-wood-400 mt-0.5 h-5 w-5 flex-shrink-0" />
                                <p className="text-wood-300 text-sm">{contactInfo.address}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="text-wood-400 h-5 w-5 flex-shrink-0" />
                                <p className="text-wood-300 text-sm">{contactInfo.phone}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="text-wood-400 h-5 w-5 flex-shrink-0" />
                                <p className="text-wood-300 text-sm">{contactInfo.email}</p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-6">
                            <h5 className="mb-3 text-sm font-semibold">Follow Us</h5>
                            <div className="flex space-x-3">
                                {contactInfo.socialMedia.facebook && (
                                    <a
                                        href={contactInfo.socialMedia.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-wood-800 hover:bg-wood-700 rounded-full p-2 transition-colors duration-200"
                                    >
                                        <Facebook className="h-4 w-4" />
                                    </a>
                                )}
                                {contactInfo.socialMedia.instagram && (
                                    <a
                                        href={contactInfo.socialMedia.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-wood-800 hover:bg-wood-700 rounded-full p-2 transition-colors duration-200"
                                    >
                                        <Instagram className="h-4 w-4" />
                                    </a>
                                )}
                                {contactInfo.socialMedia.linkedin && (
                                    <a
                                        href={contactInfo.socialMedia.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-wood-800 hover:bg-wood-700 rounded-full p-2 transition-colors duration-200"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-wood-800 mt-12 border-t pt-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <p className="text-wood-400 text-sm">© 2024 Artisan Woodworks. All rights reserved.</p>
                        <div className="mt-4 flex space-x-6 md:mt-0">
                            <Link to="/admin" className="text-wood-400 text-sm transition-colors duration-200 hover:text-white">
                                Admin Login
                            </Link>
                            <span className="text-wood-400 text-sm">Privacy Policy</span>
                            <span className="text-wood-400 text-sm">Terms of Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
