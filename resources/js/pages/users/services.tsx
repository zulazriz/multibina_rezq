import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import { services } from '@/data/mockData';
import { Head } from '@inertiajs/react';
import { ArrowRight, Briefcase, CheckCircle, ChefHat, Download, Shirt, Sofa } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
    ChefHat,
    Shirt,
    Sofa,
    Briefcase,
};

export default function Services() {
    return (
        <>
            <Head title="Services" />

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="from-wood-50 to-wood-100 bg-gradient-to-r py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-wood-800 mb-6 text-4xl font-bold lg:text-5xl">Our Services</h1>
                            <p className="text-wood-600 mx-auto max-w-3xl text-xl">
                                From concept to completion, we offer comprehensive woodworking services tailored to transform your space with
                                exceptional craftsmanship and attention to detail.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                            {services.map((service) => {
                                const IconComponent = iconMap[service.icon as keyof typeof iconMap];

                                return (
                                    <Card key={service.id} className="overflow-hidden">
                                        <div className="md:flex">
                                            <div className="md:w-1/2">
                                                <img src={service.image} alt={service.title} className="h-64 w-full object-cover md:h-full" />
                                            </div>
                                            <div className="p-8 md:w-1/2">
                                                <div className="mb-4 flex items-center">
                                                    <div className="bg-wood-100 mr-4 rounded-lg p-3">
                                                        <IconComponent className="text-wood-600 h-8 w-8" />
                                                    </div>
                                                    <h3 className="text-wood-800 text-2xl font-bold">{service.title}</h3>
                                                </div>

                                                <p className="text-wood-600 mb-6 leading-relaxed">{service.description}</p>

                                                <div className="mb-6">
                                                    <h4 className="text-wood-800 mb-3 font-semibold">What We Offer:</h4>
                                                    <ul className="space-y-2">
                                                        {service.features.map((feature, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <CheckCircle className="text-forest-600 mt-0.5 mr-2 h-5 w-5 flex-shrink-0" />
                                                                <span className="text-wood-600">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {service.inspirationPdf && (
                                                    <div className="flex flex-col gap-3 sm:flex-row">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => {
                                                                // In a real app, this would download the PDF
                                                                alert('Inspiration guide download would start here');
                                                            }}
                                                            className="flex items-center"
                                                        >
                                                            <Download className="mr-2 h-4 w-4" />
                                                            Inspiration Guide
                                                        </Button>
                                                        <Button size="sm">
                                                            <Link to="/contact" className="flex items-center">
                                                                Get Quote
                                                                <ArrowRight className="ml-2 h-4 w-4" />
                                                            </Link>
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Materials & Equipment Section */}
                <section className="bg-wood-50 py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h2 className="text-wood-800 mb-6 text-3xl font-bold lg:text-4xl">Materials & Equipment</h2>
                            <p className="text-wood-600 mx-auto max-w-3xl text-xl">
                                We use only the finest materials and state-of-the-art equipment to ensure every project meets our exacting standards.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                            <div>
                                <h3 className="text-wood-800 mb-6 text-2xl font-bold">Premium Wood Types</h3>
                                <div className="mb-8 grid grid-cols-2 gap-4">
                                    {['Oak', 'Walnut', 'Cherry', 'Maple', 'Teak', 'Mahogany', 'Pine', 'Birch'].map((wood) => (
                                        <div key={wood} className="border-wood-100 rounded-lg border bg-white p-4 shadow-sm">
                                            <span className="text-wood-700 font-medium">{wood}</span>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-wood-800 mb-6 text-2xl font-bold">Professional Equipment</h3>
                                <ul className="space-y-3">
                                    {[
                                        'CNC Machines for Precision Cutting',
                                        'Professional Table Saws & Band Saws',
                                        'Dust Collection Systems',
                                        'High-End Finishing Equipment',
                                        'Precision Measuring Tools',
                                        'Professional Grade Sanders',
                                    ].map((equipment, index) => (
                                        <li key={index} className="flex items-center">
                                            <CheckCircle className="text-forest-600 mr-3 h-5 w-5" />
                                            <span className="text-wood-600">{equipment}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <img
                                    src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg"
                                    alt="Professional woodworking equipment"
                                    className="w-full rounded-xl shadow-lg"
                                />
                                <div className="bg-wood-600 rounded-xl p-6 text-white">
                                    <h4 className="mb-2 text-xl font-bold">Quality Guarantee</h4>
                                    <p className="text-wood-100">
                                        Every piece comes with our comprehensive warranty covering craftsmanship and materials for complete peace of
                                        mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Overview */}
                <section className="bg-white py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h2 className="text-wood-800 mb-6 text-3xl font-bold lg:text-4xl">Our Service Process</h2>
                            <p className="text-wood-600 mx-auto max-w-3xl text-xl">
                                From initial consultation to final installation, we ensure a smooth and professional experience every step of the way.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    step: '01',
                                    title: 'Free Consultation',
                                    description: 'We visit your space, discuss your vision, and provide expert recommendations.',
                                    duration: '1-2 hours',
                                },
                                {
                                    step: '02',
                                    title: 'Design & Quote',
                                    description: 'Detailed designs, 3D renderings, and transparent pricing for your project.',
                                    duration: '3-5 days',
                                },
                                {
                                    step: '03',
                                    title: 'Crafting',
                                    description: 'Skilled artisans handcraft your furniture using premium materials.',
                                    duration: '2-6 weeks',
                                },
                                {
                                    step: '04',
                                    title: 'Installation',
                                    description: 'Professional installation and quality inspection to ensure perfection.',
                                    duration: '1-2 days',
                                },
                            ].map((process) => (
                                <Card key={process.step} className="p-6 text-center">
                                    <div className="bg-wood-600 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white">
                                        {process.step}
                                    </div>
                                    <h3 className="text-wood-800 mb-3 text-xl font-semibold">{process.title}</h3>
                                    <p className="text-wood-600 mb-4">{process.description}</p>
                                    <div className="text-forest-600 text-sm font-medium">Timeline: {process.duration}</div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="from-wood-700 to-wood-800 bg-gradient-to-r py-20 text-white">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Ready to Start Your Project?</h2>
                        <p className="text-wood-100 mx-auto mb-8 max-w-3xl text-xl">
                            Let's discuss your vision and create something beautiful together. Get your free consultation and detailed quote today.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button
                                variant="outline"
                                size="lg"
                                className="hover:text-wood-800 border-white px-8 py-4 text-lg text-white hover:bg-white"
                            >
                                <Link to="/contact">Schedule Consultation</Link>
                            </Button>
                            <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
                                <Link to="/gallery">View Our Work</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
