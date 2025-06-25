import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/ProtectedRoute';
import { Head } from '@inertiajs/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Pages
import About from '@/pages/users/about';
import Contact from '@/pages/users/contact';
import Gallery from '@/pages/users/gallery';
import Home from '@/pages/users/home';
import Services from '@/pages/users/services';

// Admin Pages
import Dashboard from '@/pages/admin/dashboard';
import Login from '@/pages/admin/login';

export default function UserDashboard() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Admin Routes */}
                    <Route path="/admin" element={<Login />} />
                    <Route
                        path="/admin/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* Public Routes with Layout */}
                    <Route
                        path="/*"
                        element={
                            <div className="flex min-h-screen flex-col">
                                <Header />
                                <main className="flex-1">
                                    <Head title="Dashboard" />
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/gallery" element={<Gallery />} />
                                        <Route path="/services" element={<Services />} />
                                        <Route path="/contact" element={<Contact />} />
                                    </Routes>
                                </main>
                                <Footer />
                            </div>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}
