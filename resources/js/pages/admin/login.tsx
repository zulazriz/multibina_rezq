import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Hammer, LogIn } from 'lucide-react';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login, isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/admin/dashboard" replace />;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const success = await login(credentials.username, credentials.password);
            if (!success) {
                setError('Invalid username or password');
            }
        } catch {
            setError('Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="from-wood-50 to-wood-100 flex min-h-screen items-center justify-center bg-gradient-to-br px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <div className="flex justify-center">
                        <div className="bg-wood-600 rounded-lg p-4">
                            <Hammer className="h-12 w-12 text-white" />
                        </div>
                    </div>
                    <h2 className="text-wood-800 mt-6 text-3xl font-bold">Admin Login</h2>
                    <p className="text-wood-600 mt-2 text-sm">Sign in to manage your woodworking portfolio</p>
                </div>

                <Card className="p-8" hover={false}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">{error}</div>}

                        <div>
                            <label htmlFor="username" className="text-wood-700 mb-2 block text-sm font-medium">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={credentials.username}
                                onChange={handleInputChange}
                                className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:outline-none"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="text-wood-700 mb-2 block text-sm font-medium">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={credentials.password}
                                onChange={handleInputChange}
                                className="border-wood-200 focus:ring-wood-500 w-full rounded-lg border px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:outline-none"
                                placeholder="Enter your password"
                            />
                        </div>

                        <Button type="submit" size="lg" className="flex w-full items-center justify-center" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <LogIn className="mr-2 h-5 w-5" />
                                    Sign In
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="bg-wood-50 mt-6 rounded-lg p-4">
                        <p className="text-wood-600 text-sm">
                            <strong>Demo Credentials:</strong>
                            <br />
                            Username: admin
                            <br />
                            Password: admin123
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Login;
