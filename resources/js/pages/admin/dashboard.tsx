import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import Modal from '@/components/ui/modal';
import { useAuth } from '@/contexts/AuthContext';
import { aboutContent, projects, services } from '@/data/mockData';
import { Project } from '@/types';
import { BarChart, Edit, Eye, FolderOpen, LogOut, Plus, Settings, Trash2, Upload } from 'lucide-react';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!isAuthenticated) {
        return <Navigate to="/admin" replace />;
    }

    const stats = [
        { title: 'Total Projects', value: projects.length, icon: FolderOpen, color: 'bg-blue-500' },
        { title: 'Featured Projects', value: projects.filter((p) => p.featured).length, icon: Eye, color: 'bg-green-500' },
        { title: 'Categories', value: 5, icon: BarChart, color: 'bg-purple-500' },
        { title: 'Services', value: services.length, icon: Settings, color: 'bg-orange-500' },
    ];

    const handleLogout = () => {
        logout();
    };

    const openProjectModal = (project?: Project) => {
        setSelectedProject(project || null);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    return (
        <div className="bg-wood-50 min-h-screen">
            {/* Header */}
            <header className="border-wood-100 border-b bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        <div>
                            <h1 className="text-wood-800 text-2xl font-bold">Admin Dashboard</h1>
                            <p className="text-wood-600">Welcome back, {user?.username}</p>
                        </div>
                        <Button variant="outline" onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Navigation Tabs */}
                <div className="mb-8">
                    <nav className="flex space-x-8">
                        {[
                            { id: 'overview', name: 'Overview', icon: BarChart },
                            { id: 'projects', name: 'Projects', icon: FolderOpen },
                            { id: 'content', name: 'Content', icon: Edit },
                            { id: 'settings', name: 'Settings', icon: Settings },
                        ].map((tab) => {
                            const IconComponent = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                        activeTab === tab.id ? 'bg-wood-600 text-white' : 'text-wood-600 hover:text-wood-800 hover:bg-wood-100'
                                    }`}
                                >
                                    <IconComponent className="mr-2 h-4 w-4" />
                                    {tab.name}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="space-y-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => {
                                const IconComponent = stat.icon;
                                return (
                                    <Card key={stat.title} className="p-6" hover={false}>
                                        <div className="flex items-center">
                                            <div className={`${stat.color} mr-4 rounded-lg p-3 text-white`}>
                                                <IconComponent className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="text-wood-800 text-2xl font-bold">{stat.value}</p>
                                                <p className="text-wood-600 text-sm">{stat.title}</p>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* Recent Projects */}
                        <Card className="p-6" hover={false}>
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-wood-800 text-xl font-bold">Recent Projects</h2>
                                <Button size="sm" onClick={() => openProjectModal()}>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Project
                                </Button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="border-wood-100 border-b">
                                            <th className="text-wood-700 px-4 py-3 text-left font-medium">Title</th>
                                            <th className="text-wood-700 px-4 py-3 text-left font-medium">Category</th>
                                            <th className="text-wood-700 px-4 py-3 text-left font-medium">Status</th>
                                            <th className="text-wood-700 px-4 py-3 text-left font-medium">Date</th>
                                            <th className="text-wood-700 px-4 py-3 text-left font-medium">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.slice(0, 5).map((project) => (
                                            <tr key={project.id} className="border-wood-50 hover:bg-wood-25 border-b">
                                                <td className="text-wood-800 px-4 py-3">{project.title}</td>
                                                <td className="px-4 py-3">
                                                    <span className="text-wood-600 capitalize">{project.category.replace('-', ' ')}</span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span
                                                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                                                            project.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                        }`}
                                                    >
                                                        {project.featured ? 'Featured' : 'Published'}
                                                    </span>
                                                </td>
                                                <td className="text-wood-600 px-4 py-3 text-sm">
                                                    {new Date(project.completedDate).toLocaleDateString()}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex space-x-2">
                                                        <Button size="sm" variant="ghost" onClick={() => openProjectModal(project)}>
                                                            <Edit className="h-4 w-4" />
                                                        </Button>
                                                        <Button size="sm" variant="ghost" className="text-red-600 hover:bg-red-50">
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </div>
                )}

                {/* Projects Tab */}
                {activeTab === 'projects' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-wood-800 text-2xl font-bold">Manage Projects</h2>
                            <Button onClick={() => openProjectModal()}>
                                <Plus className="mr-2 h-4 w-4" />
                                Add New Project
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <Card key={project.id} className="overflow-hidden">
                                    <img src={project.images[0]} alt={project.title} className="h-48 w-full object-cover" />
                                    <div className="p-4">
                                        <div className="mb-2 flex items-start justify-between">
                                            <h3 className="text-wood-800 font-semibold">{project.title}</h3>
                                            {project.featured && (
                                                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-wood-600 mb-3 line-clamp-2 text-sm">{project.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-wood-500 text-xs capitalize">{project.category.replace('-', ' ')}</span>
                                            <div className="flex space-x-2">
                                                <Button size="sm" variant="ghost" onClick={() => openProjectModal(project)}>
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button size="sm" variant="ghost" className="text-red-600 hover:bg-red-50">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* Content Tab */}
                {activeTab === 'content' && (
                    <div className="space-y-6">
                        <h2 className="text-wood-800 text-2xl font-bold">Manage Content</h2>

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <Card className="p-6" hover={false}>
                                <h3 className="text-wood-800 mb-4 text-lg font-semibold">About Us Content</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-wood-700 mb-2 block text-sm font-medium">Company Title</label>
                                        <input
                                            type="text"
                                            value={aboutContent.title}
                                            className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:outline-none"
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label className="text-wood-700 mb-2 block text-sm font-medium">Description</label>
                                        <textarea
                                            value={aboutContent.description}
                                            rows={4}
                                            className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:outline-none"
                                            readOnly
                                        />
                                    </div>
                                    <Button>
                                        <Edit className="mr-2 h-4 w-4" />
                                        Edit Content
                                    </Button>
                                </div>
                            </Card>

                            <Card className="p-6" hover={false}>
                                <h3 className="text-wood-800 mb-4 text-lg font-semibold">Media Management</h3>
                                <div className="space-y-4">
                                    <div className="border-wood-200 rounded-lg border-2 border-dashed p-8 text-center">
                                        <Upload className="text-wood-400 mx-auto mb-2 h-8 w-8" />
                                        <p className="text-wood-600">Drag & drop files here or click to browse</p>
                                        <Button variant="outline" className="mt-4">
                                            Choose Files
                                        </Button>
                                    </div>
                                    <div className="text-wood-500 text-sm">Supported formats: JPG, PNG, MP4, PDF (Max: 10MB)</div>
                                </div>
                            </Card>
                        </div>
                    </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                    <div className="space-y-6">
                        <h2 className="text-wood-800 text-2xl font-bold">Settings</h2>

                        <Card className="p-6" hover={false}>
                            <h3 className="text-wood-800 mb-4 text-lg font-semibold">System Configuration</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" defaultChecked />
                                        <span className="text-wood-700">Enable email notifications</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" defaultChecked />
                                        <span className="text-wood-700">Auto-backup database daily</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-wood-700">Maintenance mode</span>
                                    </label>
                                </div>
                                <Button>Save Settings</Button>
                            </div>
                        </Card>
                    </div>
                )}
            </div>

            {/* Project Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedProject ? 'Edit Project' : 'Add New Project'} size="lg">
                <div className="space-y-4">
                    <div>
                        <label className="text-wood-700 mb-2 block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            defaultValue={selectedProject?.title || ''}
                            className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:outline-none"
                            placeholder="Project title"
                        />
                    </div>
                    <div>
                        <label className="text-wood-700 mb-2 block text-sm font-medium">Category</label>
                        <select
                            defaultValue={selectedProject?.category || ''}
                            className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:outline-none"
                        >
                            <option value="">Select category</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="wardrobe">Wardrobe</option>
                            <option value="living-room">Living Room</option>
                            <option value="bedroom">Bedroom</option>
                            <option value="office">Office</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-wood-700 mb-2 block text-sm font-medium">Description</label>
                        <textarea
                            defaultValue={selectedProject?.description || ''}
                            rows={4}
                            className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:outline-none"
                            placeholder="Project description"
                        />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="featured" defaultChecked={selectedProject?.featured || false} className="mr-2" />
                        <label htmlFor="featured" className="text-wood-700 text-sm font-medium">
                            Featured project
                        </label>
                    </div>
                    <div className="flex space-x-4">
                        <Button onClick={() => alert('Project saved!')}>{selectedProject ? 'Update Project' : 'Create Project'}</Button>
                        <Button variant="outline" onClick={closeModal}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Dashboard;
