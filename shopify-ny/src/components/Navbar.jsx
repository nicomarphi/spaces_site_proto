import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EmailCaptureModal from './EmailCaptureModal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            // If not on home page, navigate to home first
            window.location.href = `/#${sectionId}`;
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
            }
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <img
                                src="/NY Spaces Logo.svg"
                                alt="Shopify NY Spaces"
                                className="h-8 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => scrollToSection('upcoming-events')}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                Events
                            </button>
                            <Link
                                to="/partnership"
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                Partnerships
                            </Link>
                            <Link
                                to="/faqs"
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                FAQs
                            </Link>

                            <button
                                onClick={() => setIsEmailModalOpen(true)}
                                className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                            >
                                Stay Updated
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-white/10">
                            <div className="flex flex-col space-y-4">
                                <button
                                    onClick={() => scrollToSection('upcoming-events')}
                                    className="text-white/80 hover:text-white transition-colors text-left"
                                >
                                    Events
                                </button>
                                <Link
                                    to="/partnership"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white/80 hover:text-white transition-colors text-left"
                                >
                                    Partnerships
                                </Link>
                                <Link
                                    to="/faqs"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white/80 hover:text-white transition-colors text-left"
                                >
                                    FAQs
                                </Link>

                                <button
                                    onClick={() => {
                                        setIsEmailModalOpen(true);
                                        setIsMenuOpen(false);
                                    }}
                                    className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-center w-full"
                                >
                                    Stay Updated
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <EmailCaptureModal
                isOpen={isEmailModalOpen}
                onClose={() => setIsEmailModalOpen(false)}
            />
        </>
    );
};

export default Navbar; 