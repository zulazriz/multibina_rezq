import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import { contactInfo } from '@/data/mockData';
import { Head } from '@inertiajs/react';
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send the form data to the backend
        alert('Thank you for your inquiry! We will get back to you within 24 hours.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
        });
    };

    return (
        <>
            <Head title="Contact" />

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="from-wood-50 to-wood-100 bg-gradient-to-r py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-wood-800 mb-6 text-4xl font-bold lg:text-5xl">Contact Us</h1>
                            <p className="text-wood-600 mx-auto max-w-3xl text-xl">
                                Ready to transform your space with custom woodwork? Get in touch with our expert team for a free consultation and
                                personalized quote.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Information & Form */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-wood-800 mb-6 text-3xl font-bold">Get in Touch</h2>
                                    <p className="text-wood-600 mb-8 text-lg">
                                        We'd love to hear about your project and discuss how we can bring your vision to life. Contact us through any
                                        of the methods below or fill out the form.
                                    </p>
                                </div>

                                {/* Contact Details */}
                                <div className="space-y-6">
                                    <Card className="p-6 transition-shadow duration-200 hover:shadow-lg" hover={false}>
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-wood-100 rounded-lg p-3">
                                                <MapPin className="text-wood-600 h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-wood-800 mb-1 font-semibold">Visit Our Workshop</h3>
                                                <p className="text-wood-600">{contactInfo.address}</p>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="p-6 transition-shadow duration-200 hover:shadow-lg" hover={false}>
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-wood-100 rounded-lg p-3">
                                                <Phone className="text-wood-600 h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-wood-800 mb-1 font-semibold">Call Us</h3>
                                                <p className="text-wood-600">{contactInfo.phone}</p>
                                                <p className="text-wood-500 mt-1 text-sm">Free consultations available</p>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="p-6 transition-shadow duration-200 hover:shadow-lg" hover={false}>
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-wood-100 rounded-lg p-3">
                                                <Mail className="text-wood-600 h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-wood-800 mb-1 font-semibold">Email Us</h3>
                                                <p className="text-wood-600">{contactInfo.email}</p>
                                                <p className="text-wood-500 mt-1 text-sm">We respond within 24 hours</p>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="p-6 transition-shadow duration-200 hover:shadow-lg" hover={false}>
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-wood-100 rounded-lg p-3">
                                                <Clock className="text-wood-600 h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-wood-800 mb-1 font-semibold">Business Hours</h3>
                                                <div className="text-wood-600 whitespace-pre-line">{contactInfo.workingHours}</div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <h3 className="text-wood-800 mb-4 font-semibold">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        {contactInfo.socialMedia.facebook && (
                                            <a
                                                href={contactInfo.socialMedia.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-wood-100 hover:bg-wood-200 rounded-lg p-3 transition-colors duration-200"
                                            >
                                                <Facebook className="text-wood-600 h-6 w-6" />
                                            </a>
                                        )}
                                        {contactInfo.socialMedia.instagram && (
                                            <a
                                                href={contactInfo.socialMedia.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-wood-100 hover:bg-wood-200 rounded-lg p-3 transition-colors duration-200"
                                            >
                                                <Instagram className="text-wood-600 h-6 w-6" />
                                            </a>
                                        )}
                                        {contactInfo.socialMedia.linkedin && (
                                            <a
                                                href={contactInfo.socialMedia.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-wood-100 hover:bg-wood-200 rounded-lg p-3 transition-colors duration-200"
                                            >
                                                <Linkedin className="text-wood-600 h-6 w-6" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <Card className="p-8" hover={false}>
                                <h2 className="text-wood-800 mb-6 text-2xl font-bold">Request a Free Consultation</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="text-wood-700 mb-2 block text-sm font-medium">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:outline-none"
                                                placeholder="Your full name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="text-wood-700 mb-2 block text-sm font-medium">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:outline-none"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="phone" className="text-wood-700 mb-2 block text-sm font-medium">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:outline-none"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="service" className="text-wood-700 mb-2 block text-sm font-medium">
                                                Service Interested In
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:outline-none"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="kitchen">Custom Kitchen Design</option>
                                                <option value="wardrobe">Wardrobe & Closet Solutions</option>
                                                <option value="living-room">Living Room Furniture</option>
                                                <option value="office">Office & Study Furniture</option>
                                                <option value="bedroom">Bedroom Furniture</option>
                                                <option value="consultation">General Consultation</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="text-wood-700 mb-2 block text-sm font-medium">
                                            Project Details *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:outline-none"
                                            placeholder="Please describe your project, timeline, budget range, and any specific requirements..."
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="flex w-full items-center justify-center">
                                        <Send className="mr-2 h-5 w-5" />
                                        Send Message
                                    </Button>
                                </form>

                                <div className="bg-wood-50 mt-6 rounded-lg p-4">
                                    <p className="text-wood-600 text-sm">
                                        <strong>What happens next?</strong> We'll review your inquiry and contact you within 24 hours to schedule your
                                        free consultation. During the consultation, we'll discuss your vision, take measurements, and provide you with
                                        a detailed quote.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Map Section (Placeholder) */}
                <section className="bg-wood-50 py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="text-wood-800 mb-4 text-3xl font-bold">Visit Our Workshop</h2>
                            <p className="text-wood-600 text-xl">See our craftsmanship in person and discuss your project with our expert team.</p>
                        </div>

                        <Card className="overflow-hidden" hover={false}>
                            <div className="bg-wood-100 flex h-96 items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="text-wood-400 mx-auto mb-4 h-16 w-16" />
                                    <h3 className="text-wood-600 mb-2 text-xl font-semibold">Interactive Map</h3>
                                    <p className="text-wood-500">{contactInfo.address}</p>
                                    <Button
                                        variant="outline"
                                        className="mt-4"
                                        onClick={() => {
                                            // In a real app, this would open Google Maps
                                            window.open('https://maps.google.com/', '_blank');
                                        }}
                                    >
                                        Open in Google Maps
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    );
}
