import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Placeholder for actual newsletter signup logic
            setStatus('success');
            setTimeout(() => {
                setStatus('');
                setEmail('');
            }, 3000);
        }
    };

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            // If not on home page, navigate to home first
            window.location.href = `/#${sectionId}`;
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Address */}
                    <div>
                        <h3 className="font-normal text-lg mb-4">Address</h3>
                        <address className="not-italic text-gray-300 space-y-1 text-sm">
                            <p>Shopify NY</p>
                            <p>131 Greene St</p>
                            <p>New York, NY, 10012</p>
                        </address>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="font-normal text-lg mb-4">Hours</h3>
                        <div className="text-gray-300 text-sm space-y-1">
                            <p>Mon: Closed</p>
                            <p>Tue - Fri: 10am - 5pm</p>
                            <p>Sat: 10am - 4pm</p>
                            <p>Sun: Closed</p>
                        </div>
                    </div>

                    {/* Shopify NY Links */}
                    <div>
                        <h3 className="font-normal text-lg mb-4">Shopify NY</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <button
                                    onClick={() => scrollToSection('upcoming-events')}
                                    className="text-gray-300 hover:text-white transition-colors text-left"
                                >
                                    Events & Workshops
                                </button>
                            </li>
                            <li>
                                <a href="https://shopify-ny.com/partner-application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors">
                                    Partnerships
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/faqs"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-normal text-lg mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="max-w-2xl">
                        <h3 className="font-normal text-lg mb-4">Sign up for our newsletter</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                                className="flex-1 px-4 py-2 bg-transparent border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        {status === 'success' && (
                            <p className="mt-2 text-green-400 text-sm">Thanks for subscribing!</p>
                        )}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Shopify Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 