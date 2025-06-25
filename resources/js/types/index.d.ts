import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'kitchen' | 'wardrobe' | 'living-room' | 'bedroom' | 'office';
    images: string[];
    videos?: string[];
    featured: boolean;
    completedDate: string;
    materials: string[];
    dimensions?: string;
}

export interface AboutContent {
    title: string;
    description: string;
    mission: string;
    vision: string;
    values: string[];
    teamImage: string;
    companyVideo?: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: string;
    image: string;
    inspirationPdf?: string;
}

export interface ContactInfo {
    address: string;
    phone: string;
    email: string;
    workingHours: string;
    socialMedia: {
        facebook?: string;
        instagram?: string;
        linkedin?: string;
    };
}

export interface User {
    id: string;
    username: string;
    role: 'admin';
}
