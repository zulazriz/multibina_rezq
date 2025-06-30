import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import { aboutContent, projects } from '@/data/mockData';
import { Head } from '@inertiajs/react';
import { ArrowRight, Award, Calendar, Star, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

    const images = [
        '/images/1.jpeg',
        '/images/2.jpeg',
        '/images/3.jpeg',
        '/images/4.jpeg',
        '/images/5.jpeg',
        '/images/6.jpeg',
        '/images/7.jpeg',
        '/images/8.jpeg',
        '/images/9.jpeg',
        '/images/10.jpeg',
        '/images/11.jpeg',
        '/images/12.jpeg',
        '/images/13.jpeg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // 5 seconds per slide

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <Head title="Home" />

            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative py-30">
                    <div
                        className="relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
                        style={{
                            backgroundImage: `url(${images[currentImageIndex]})`,
                            backgroundBlendMode: 'overlay',
                        }}
                    >
                        <div className="mx-auto max-w-7xl px-4 py-24 text-black sm:px-6 lg:px-8 lg:py-32">
                            <div className="max-w-3xl">
                                <h1 className="mb-6 text-4xl leading-tight font-bold lg:text-6xl">
                                    Crafting Dreams into
                                    <span className="text-wood-200 block">Timeless Furniture</span>
                                </h1>
                                <p className="text-wood-100 mb-8 text-xl leading-relaxed lg:text-2xl">
                                    Transform your space with our handcrafted, custom woodwork. 25+ years of excellence in kitchen cabinets,
                                    wardrobes, and bespoke furniture.
                                </p>
                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <Button size="lg" className="px-8 py-4 text-lg">
                                        <Link to="/gallery" className="flex items-center text-black">
                                            View Our Work
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-black px-8 py-4 text-lg text-black transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-rose-800 hover:to-pink-600 hover:text-black"
                                    >
                                        <Link to="/contact">Get Free Quote</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
                            <div className="space-y-2">
                                <div className="text-wood-800 text-4xl font-bold lg:text-5xl">25+</div>
                                <div className="text-wood-600 font-medium">Years Experience</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-wood-800 text-4xl font-bold lg:text-5xl">500+</div>
                                <div className="text-wood-600 font-medium">Projects Completed</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-wood-800 text-4xl font-bold lg:text-5xl">100%</div>
                                <div className="text-wood-600 font-medium">Customer Satisfaction</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-wood-800 text-4xl font-bold lg:text-5xl">50+</div>
                                <div className="text-wood-600 font-medium">Awards Won</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Preview */}
                <section className="bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                            <div>
                                <h2 className="text-wood-800 mb-6 text-3xl font-bold lg:text-4xl">Master Craftsmen Since 1999</h2>
                                <p className="text-wood-600 mb-6 text-lg leading-relaxed">{aboutContent.description}</p>
                                <div className="mb-8 grid grid-cols-2 gap-6">
                                    <div className="flex items-center space-x-3">
                                        <Award className="text-wood-600 h-8 w-8" />
                                        <span className="text-wood-700 font-medium">Award Winning</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Users className="text-wood-600 h-8 w-8" />
                                        <span className="text-wood-700 font-medium">Expert Team</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Star className="text-wood-600 h-8 w-8" />
                                        <span className="text-wood-700 font-medium">Premium Quality</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Calendar className="text-wood-600 h-8 w-8" />
                                        <span className="text-wood-700 font-medium">Timely Delivery</span>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-black px-8 py-4 text-lg text-black transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-rose-800 hover:to-pink-600 hover:text-black"
                                >
                                    <Link to="/about" className="text-inherit">
                                        Learn More About Us
                                    </Link>
                                </Button>
                            </div>
                            <div className="relative">
                                <img src={aboutContent.teamImage} alt="Our craftsmen at work" className="rounded-xl shadow-2xl" />
                                <div className="absolute -right-6 -bottom-6 rounded-xl bg-gray-200 p-6 text-black shadow-lg">
                                    <div className="text-2xl font-bold">25+</div>
                                    <div className="text-sm">Years of Excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects */}
                <section className="bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="text-wood-800 mb-4 text-3xl font-bold lg:text-4xl">Featured Projects</h2>
                            <p className="text-wood-600 mx-auto max-w-3xl text-xl">
                                Discover our latest masterpieces that showcase the perfect blend of functionality and artistic craftsmanship.
                            </p>
                        </div>

                        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {featuredProjects.map((project) => (
                                <Card key={project.id} className="group">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-wood-600 rounded-full px-3 py-1 text-sm font-medium text-white capitalize">
                                                {project.category.replace('-', ' ')}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-wood-800 mb-2 text-xl font-semibold">{project.title}</h3>
                                        <p className="text-wood-600 mb-4 line-clamp-3">{project.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-wood-500 text-sm">
                                                {new Date(project.completedDate).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                            <Link to={`/gallery`} className="text-wood-600 hover:text-wood-800 flex items-center font-medium">
                                                View Details
                                                <ArrowRight className="ml-1 h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <div className="text-center">
                            <Button size="lg">
                                <Link to="/gallery" className="flex items-center text-black">
                                    View All Projects
                                    <ArrowRight className="ml-2 h-5 w-5 text-black" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 py-20">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Ready to Transform Your Space?</h2>
                        <p className="text-wood-100 mx-auto mb-8 max-w-3xl text-xl">
                            Let our master craftsmen bring your vision to life. From initial consultation to final installation, we're with you every
                            step of the way.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button variant="outline" size="lg" className="border-black px-8 py-4 text-lg text-black hover:bg-black hover:text-white">
                                <Link to="/contact">Get Free Consultation</Link>
                            </Button>
                            <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
                                <Link to="/services" className="text-black">
                                    Explore Services
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
