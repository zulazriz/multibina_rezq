import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import Modal from '@/components/ui/modal';
import { projects } from '@/data/mockData';
import { Project } from '@/types';
import { Head } from '@inertiajs/react';
import { Calendar, Eye, Filter, Ruler, Search } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>('');

    const categories = [
        { id: 'all', name: 'All Projects', count: projects.length },
        { id: 'kitchen', name: 'Kitchen', count: projects.filter((p) => p.category === 'kitchen').length },
        { id: 'wardrobe', name: 'Wardrobe', count: projects.filter((p) => p.category === 'wardrobe').length },
        { id: 'living-room', name: 'Living Room', count: projects.filter((p) => p.category === 'living-room').length },
        { id: 'bedroom', name: 'Bedroom', count: projects.filter((p) => p.category === 'bedroom').length },
        { id: 'office', name: 'Office', count: projects.filter((p) => p.category === 'office').length },
    ];

    const filteredProjects = projects.filter((project) => {
        const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const openProjectModal = (project: Project) => {
        setSelectedProject(project);
    };

    const openImageModal = (image: string) => {
        setSelectedImage(image);
    };

    return (
        <>
            <Head title="Gallery" />

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="from-wood-50 to-wood-100 bg-gradient-to-r py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-wood-800 mb-6 text-4xl font-bold lg:text-5xl">Our Portfolio</h1>
                            <p className="text-wood-600 mx-auto max-w-3xl text-xl">
                                Explore our collection of custom furniture and wardrobes that showcase the perfect blend of craftsmanship,
                                functionality, and timeless design.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Filters and Search */}
                <section className="border-wood-100 border-b bg-white py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* Search Bar */}
                        <div className="relative mx-auto mb-8 max-w-md">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search className="text-wood-400 h-5 w-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border-wood-200 focus:ring-wood-500 block w-full rounded-lg border py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:outline-none"
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`rounded-full px-6 py-3 font-medium transition-all duration-200 ${
                                        selectedCategory === category.id
                                            ? 'bg-wood-600 text-white shadow-lg'
                                            : 'bg-wood-100 text-wood-700 hover:bg-wood-200'
                                    }`}
                                >
                                    {category.name} ({category.count})
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {filteredProjects.length === 0 ? (
                            <div className="py-16 text-center">
                                <Filter className="text-wood-300 mx-auto mb-4 h-16 w-16" />
                                <h3 className="text-wood-600 mb-2 text-xl font-semibold">No projects found</h3>
                                <p className="text-wood-500">Try adjusting your filters or search term.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {filteredProjects.map((project) => (
                                    <Card key={project.id} className="group cursor-pointer" hover={true}>
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={project.images[0]}
                                                alt={project.title}
                                                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="bg-opacity-0 group-hover:bg-opacity-40 absolute inset-0 flex items-center justify-center bg-black transition-all duration-300">
                                                <div className="flex space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <Button
                                                        size="sm"
                                                        onClick={() => openProjectModal(project)}
                                                        className="flex items-center space-x-1"
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                        <span>View Details</span>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-wood-600 rounded-full px-3 py-1 text-sm font-medium text-white capitalize">
                                                    {project.category.replace('-', ' ')}
                                                </span>
                                            </div>
                                            {project.featured && (
                                                <div className="absolute top-4 right-4">
                                                    <span className="bg-forest-600 rounded-full px-3 py-1 text-sm font-medium text-white">
                                                        Featured
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-wood-800 mb-2 text-xl font-semibold">{project.title}</h3>
                                            <p className="text-wood-600 mb-4 line-clamp-2">{project.description}</p>
                                            <div className="text-wood-500 flex items-center justify-between text-sm">
                                                <div className="flex items-center space-x-1">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>
                                                        {new Date(project.completedDate).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            year: 'numeric',
                                                        })}
                                                    </span>
                                                </div>
                                                {project.dimensions && (
                                                    <div className="flex items-center space-x-1">
                                                        <Ruler className="h-4 w-4" />
                                                        <span>{project.dimensions}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Project Details Modal */}
                <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject?.title} size="xl">
                    {selectedProject && (
                        <div className="space-y-6">
                            {/* Image Gallery */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {selectedProject.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${selectedProject.title} - View ${index + 1}`}
                                        className="h-48 w-full cursor-pointer rounded-lg object-cover transition-opacity duration-200 hover:opacity-90"
                                        onClick={() => openImageModal(image)}
                                    />
                                ))}
                            </div>

                            {/* Project Details */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div>
                                    <h4 className="text-wood-800 mb-2 font-semibold">Description</h4>
                                    <p className="text-wood-600 mb-4">{selectedProject.description}</p>

                                    <h4 className="text-wood-800 mb-2 font-semibold">Category</h4>
                                    <span className="bg-wood-100 text-wood-700 mb-4 inline-block rounded-full px-3 py-1 text-sm capitalize">
                                        {selectedProject.category.replace('-', ' ')}
                                    </span>
                                </div>

                                <div>
                                    <h4 className="text-wood-800 mb-2 font-semibold">Materials Used</h4>
                                    <ul className="text-wood-600 mb-4 list-inside list-disc space-y-1">
                                        {selectedProject.materials.map((material, index) => (
                                            <li key={index}>{material}</li>
                                        ))}
                                    </ul>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="text-wood-800 mb-1 font-semibold">Completed</h4>
                                            <p className="text-wood-600">
                                                {new Date(selectedProject.completedDate).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}
                                            </p>
                                        </div>
                                        {selectedProject.dimensions && (
                                            <div>
                                                <h4 className="text-wood-800 mb-1 font-semibold">Dimensions</h4>
                                                <p className="text-wood-600">{selectedProject.dimensions}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>

                {/* Image Lightbox Modal */}
                <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage('')} size="xl">
                    {selectedImage && (
                        <div className="text-center">
                            <img src={selectedImage} alt="Project detail" className="mx-auto max-h-96 max-w-full rounded-lg" />
                        </div>
                    )}
                </Modal>
            </div>
        </>
    );
}
