import { AboutContent, ContactInfo, Project, Service } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        title: 'Modern Kitchen Island',
        description: 'A stunning contemporary kitchen island featuring premium oak wood with integrated storage solutions and a breakfast bar.',
        category: 'kitchen',
        images: [
            'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
            'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
            'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
        ],
        featured: true,
        completedDate: '2024-01-15',
        materials: ['Oak Wood', 'Marble Countertop', 'Stainless Steel Hardware'],
        dimensions: '3m x 1.2m x 0.9m',
    },
    {
        id: '2',
        title: 'Walk-in Wardrobe System',
        description: 'Custom-built walk-in wardrobe with adjustable shelving, LED lighting, and premium walnut finish.',
        category: 'wardrobe',
        images: [
            'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
            'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
            'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg',
        ],
        featured: true,
        completedDate: '2024-02-08',
        materials: ['Walnut Wood', 'LED Strip Lighting', 'Soft-Close Hinges'],
        dimensions: '4m x 2.5m x 2.4m',
    },
    {
        id: '3',
        title: 'Living Room Entertainment Unit',
        description: 'Elegant entertainment center with hidden cable management and ambient lighting.',
        category: 'living-room',
        images: [
            'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
            'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
            'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
        ],
        featured: false,
        completedDate: '2024-01-28',
        materials: ['Cherry Wood', 'Tempered Glass', 'LED Backlighting'],
        dimensions: '2.8m x 0.45m x 0.6m',
    },
    {
        id: '4',
        title: 'Master Bedroom Suite',
        description: 'Complete bedroom furniture set including bed frame, nightstands, and dresser in matching teak finish.',
        category: 'bedroom',
        images: [
            'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
            'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
            'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg',
        ],
        featured: false,
        completedDate: '2024-02-20',
        materials: ['Teak Wood', 'Brass Hardware', 'Natural Finish'],
        dimensions: 'Various pieces',
    },
    {
        id: '5',
        title: 'Executive Office Desk',
        description: 'Handcrafted executive desk with built-in storage and wire management.',
        category: 'office',
        images: [
            'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
            'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
            'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
        ],
        featured: false,
        completedDate: '2024-01-05',
        materials: ['Mahogany Wood', 'Leather Inlay', 'Antique Brass'],
        dimensions: '1.8m x 0.9m x 0.75m',
    },
    {
        id: '6',
        title: 'Custom Kitchen Cabinets',
        description: 'Full kitchen renovation with custom cabinetry, soft-close drawers, and integrated appliances.',
        category: 'kitchen',
        images: [
            'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
            'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
            'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg',
        ],
        featured: true,
        completedDate: '2024-03-10',
        materials: ['Maple Wood', 'Quartz Countertops', 'Premium Hardware'],
        dimensions: 'Full kitchen renovation',
    },
];

export const aboutContent: AboutContent = {
    title: 'Artisan Woodworks',
    description:
        'For over 25 years, Artisan Woodworks has been crafting exceptional custom furniture and wardrobes that blend traditional craftsmanship with contemporary design. Our passion for woodworking excellence drives us to create pieces that are not just functional, but works of art that enhance your living spaces.',
    mission:
        "To create exceptional custom woodwork that transforms houses into homes, combining time-honored craftsmanship with innovative design to exceed our clients' expectations.",
    vision: 'To be recognized as the premier custom woodworking company, known for our unwavering commitment to quality, creativity, and customer satisfaction.',
    values: [
        'Exceptional Craftsmanship',
        'Sustainable Materials',
        'Customer-Centric Approach',
        'Innovation in Design',
        'Attention to Detail',
        'Timeless Quality',
    ],
    teamImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    companyVideo: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
};

export const services: Service[] = [
    {
        id: '1',
        title: 'Custom Kitchen Design',
        description: 'Transform your kitchen with our bespoke cabinetry and islands, designed to maximize both functionality and aesthetic appeal.',
        features: [
            'Custom cabinet design and installation',
            'Kitchen islands and breakfast bars',
            'Pantry organization systems',
            'Integrated appliance housing',
            'Soft-close drawer systems',
        ],
        icon: 'ChefHat',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
        inspirationPdf: '/inspiration/kitchen-designs.pdf',
    },
    {
        id: '2',
        title: 'Wardrobe & Closet Solutions',
        description: 'Maximize your storage with our custom wardrobe systems, from walk-in closets to fitted wardrobes.',
        features: [
            'Walk-in closet design',
            'Built-in wardrobe systems',
            'Adjustable shelving solutions',
            'LED lighting integration',
            'Mirror and accessory integration',
        ],
        icon: 'Shirt',
        image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
        inspirationPdf: '/inspiration/wardrobe-solutions.pdf',
    },
    {
        id: '3',
        title: 'Living Room Furniture',
        description: 'Create a stunning living space with our custom entertainment units, bookcases, and storage solutions.',
        features: ['Entertainment centers', 'Built-in bookcases', 'Coffee tables and side tables', 'Storage ottomans', 'Custom shelving units'],
        icon: 'Sofa',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
        inspirationPdf: '/inspiration/living-room-furniture.pdf',
    },
    {
        id: '4',
        title: 'Office & Study Furniture',
        description: 'Enhance your productivity with our custom office furniture, designed for both home and commercial spaces.',
        features: ['Executive desks', 'Built-in office storage', 'Conference tables', 'Bookshelf systems', 'Ergonomic workspace solutions'],
        icon: 'Briefcase',
        image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
        inspirationPdf: '/inspiration/office-furniture.pdf',
    },
];

export const contactInfo: ContactInfo = {
    address: '123 Craftsman Avenue, Woodwork District, City 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@artisanwoodworks.com',
    workingHours: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: By Appointment',
    socialMedia: {
        facebook: 'https://facebook.com/artisanwoodworks',
        instagram: 'https://instagram.com/artisanwoodworks',
        linkedin: 'https://linkedin.com/company/artisanwoodworks',
    },
};
