import Card from '@/components/ui/card';
import { aboutContent } from '@/data/mockData';
import { Head } from '@inertiajs/react';
import { Award, CheckCircle, Heart } from 'lucide-react';

// Helper function to get value descriptions
const getValueDescription = (value: string): string => {
    const descriptions: { [key: string]: string } = {
        'Exceptional Craftsmanship': 'Every piece is meticulously crafted by skilled artisans with decades of experience.',
        'Sustainable Materials': 'We source eco-friendly, responsibly harvested wood and sustainable materials.',
        'Customer-Centric Approach': 'Your satisfaction is our priority, and we work closely with you throughout the process.',
        'Innovation in Design': 'We blend traditional techniques with modern design trends and technology.',
        'Attention to Detail': 'No detail is too small when it comes to creating furniture that will last generations.',
        'Timeless Quality': 'Our furniture is built to stand the test of time, both in style and durability.',
    };
    return descriptions[value] || 'A core value that drives our commitment to excellence.';
};

export default function About() {
    return (
        <>
            <Head title="About" />

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="from-wood-50 to-wood-100 bg-gradient-to-r py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h1 className="text-wood-800 mb-6 text-4xl font-bold lg:text-5xl">About {aboutContent.title}</h1>
                            <p className="text-wood-600 mx-auto max-w-4xl text-xl leading-relaxed">{aboutContent.description}</p>
                        </div>

                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                            <div>
                                <img src={aboutContent.teamImage} alt="Our skilled craftsmen" className="w-full rounded-xl shadow-2xl" />
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-wood-800 mb-4 flex items-center text-2xl font-bold">
                                        <Heart className="text-wood-600 mr-3 h-6 w-6" />
                                        Our Mission
                                    </h2>
                                    <p className="text-wood-600 leading-relaxed">{aboutContent.mission}</p>
                                </div>
                                <div>
                                    <h2 className="text-wood-800 mb-4 flex items-center text-2xl font-bold">
                                        <Award className="text-wood-600 mr-3 h-6 w-6" />
                                        Our Vision
                                    </h2>
                                    <p className="text-wood-600 leading-relaxed">{aboutContent.vision}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="bg-white py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h2 className="text-wood-800 mb-6 text-3xl font-bold lg:text-4xl">Our Values</h2>
                            <p className="text-wood-600 mx-auto max-w-3xl text-xl">
                                These core principles guide everything we do and ensure every project meets our exceptional standards.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {aboutContent.values.map((value, index) => (
                                <Card key={index} className="p-8 text-center">
                                    <div className="bg-wood-100 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                                        <CheckCircle className="text-wood-600 h-8 w-8" />
                                    </div>
                                    <h3 className="text-wood-800 mb-3 text-xl font-semibold">{value}</h3>
                                    <p className="text-wood-600">{getValueDescription(value)}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="bg-wood-50 py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h2 className="text-wood-800 mb-6 text-3xl font-bold lg:text-4xl">Our Process</h2>
                            <p className="text-wood-600 mx-auto max-w-3xl text-xl">
                                From concept to completion, we follow a proven process that ensures exceptional results every time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    step: '01',
                                    title: 'Consultation',
                                    description: 'We discuss your vision, requirements, and budget to understand your needs perfectly.',
                                },
                                {
                                    step: '02',
                                    title: 'Design',
                                    description: 'Our designers create detailed plans and 3D renderings for your approval.',
                                },
                                {
                                    step: '03',
                                    title: 'Crafting',
                                    description: 'Our skilled craftsmen bring your design to life using premium materials.',
                                },
                                {
                                    step: '04',
                                    title: 'Installation',
                                    description: 'Professional installation and final touches to complete your project.',
                                },
                            ].map((process, index) => (
                                <div key={index} className="text-center">
                                    <div className="bg-wood-600 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white">
                                        {process.step}
                                    </div>
                                    <h3 className="text-wood-800 mb-4 text-xl font-semibold">{process.title}</h3>
                                    <p className="text-wood-600">{process.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="bg-white py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h2 className="text-wood-800 mb-6 text-3xl font-bold lg:text-4xl">Meet Our Team</h2>
                            <p className="text-wood-600 mx-auto max-w-3xl text-xl">
                                Our passionate team of master craftsmen, designers, and project managers work together to exceed your expectations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                {
                                    name: 'Michael Rodriguez',
                                    role: 'Master Craftsman & Founder',
                                    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
                                    experience: '25+ years',
                                },
                                {
                                    name: 'Sarah Chen',
                                    role: 'Lead Designer',
                                    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
                                    experience: '15+ years',
                                },
                                {
                                    name: 'David Thompson',
                                    role: 'Project Manager',
                                    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
                                    experience: '12+ years',
                                },
                            ].map((member, index) => (
                                <Card key={index} className="p-6 text-center">
                                    <img src={member.image} alt={member.name} className="mx-auto mb-4 h-32 w-32 rounded-full object-cover" />
                                    <h3 className="text-wood-800 mb-2 text-xl font-semibold">{member.name}</h3>
                                    <p className="text-wood-600 mb-2">{member.role}</p>
                                    <p className="text-wood-500 text-sm">{member.experience}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Company Video Section */}
                {aboutContent.companyVideo && (
                    <section className="bg-wood-800 py-20">
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                            <div className="mb-12 text-center">
                                <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">See Our Craftsmanship in Action</h2>
                                <p className="text-wood-200 text-xl">Watch how we transform raw materials into beautiful, functional furniture.</p>
                            </div>
                            <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
                                <video
                                    src={aboutContent.companyVideo}
                                    controls
                                    className="h-full w-full object-cover"
                                    poster="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
