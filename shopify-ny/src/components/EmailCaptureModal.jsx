import { useState } from 'react';

const EmailCaptureModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call - replace with actual newsletter signup
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset after 3 seconds and close
            setTimeout(() => {
                setIsSuccess(false);
                setEmail('');
                onClose();
            }, 3000);
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-[9999]" style={{ isolation: 'isolate' }}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal - positioned with transform for perfect centering */}
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-white max-w-md w-[90vw] md:w-full p-8 rounded-lg z-[10000] max-h-[90vh] overflow-y-auto">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center">
                    <h2 className="text-3xl font-light text-white mb-2 tracking-tight">
                        Stay Updated
                    </h2>
                    <p className="text-white/70 mb-8">
                        Get the latest on events, workshops, and community updates from Shopify NY.
                    </p>

                    {!isSuccess ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                            </button>

                            <p className="text-xs text-white/50 mt-4">
                                By subscribing, you agree to receive marketing emails from Shopify NY.
                                You can unsubscribe at any time.
                            </p>
                        </form>
                    ) : (
                        <div className="py-8">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-white text-lg">
                                Thank you for subscribing!
                            </p>
                            <p className="text-white/60 text-sm mt-2">
                                Check your inbox for a confirmation email.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmailCaptureModal; 