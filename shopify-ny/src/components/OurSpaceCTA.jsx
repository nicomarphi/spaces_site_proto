import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

const OurSpaceCTA = () => {
    const spaceRef = useRef(null);
    const toolsRef = useRef(null);
    const spaceInView = useInView(spaceRef, { once: true, margin: "-100px" });
    const toolsInView = useInView(toolsRef, { once: true, margin: "-100px" });

    return (
        <section id="our-space-cta" className="py-12 bg-black">
            <div className="container mx-auto px-4">
                {/* Our Space Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
                    {/* All text content on the left */}
                    <div>
                        <div className="overflow-hidden pt-3 pb-4 mb-8">
                            <h1 ref={spaceRef} className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-light text-white text-left tracking-tighter leading-[0.75] sm:leading-[0.65] md:leading-[0.6]"
                                style={{ letterSpacing: '-0.02em' }}
                            >
                                <VerticalCutReveal
                                    splitBy="words"
                                    staggerDuration={0.15}
                                    staggerFrom="first"
                                    autoStart={spaceInView}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 25,
                                        delay: 0.1,
                                    }}
                                >
                                    Our space is your space
                                </VerticalCutReveal>
                            </h1>
                        </div>

                        <p className="text-gray-300 mb-8 text-lg">
                            We're always looking to collaborate with inspiring brands. When you partner with us, you'll get access to:
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-300">Our 5,000 square foot, fully staffed SoHo space at no cost</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-300">Market development funds</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-300">Collaborate with our on-site event marketing team to program and produce the experience</span>
                            </li>
                        </ul>

                        <div className="flex gap-4 flex-wrap">
                            <Link
                                to="/partnership"
                                className="text-white underline hover:no-underline"
                            >
                                Learn more
                            </Link>
                            <a
                                href="https://shopify-ny.com/partner-application"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                            >
                                Apply now
                            </a>
                        </div>
                    </div>

                    {/* Image Section on the right */}
                    <div className="relative rounded-lg overflow-hidden h-[500px]">
                        <img
                            src="/images/space.png"
                            alt="Shopify NY Space"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Tools Section */}
                <div className="mt-20 pt-20 border-t border-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="overflow-hidden pt-3 pb-4 mb-12">
                            <h1 ref={toolsRef} className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-light text-white text-left tracking-tighter leading-[0.95] sm:leading-[0.85] md:leading-[0.7]"
                                style={{ letterSpacing: '-0.02em' }}
                            >
                                <VerticalCutReveal
                                    splitBy="words"
                                    staggerDuration={0.15}
                                    staggerFrom="first"
                                    autoStart={toolsInView}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 25,
                                        delay: 0.1,
                                    }}
                                >
                                    Start and scale with Shopify
                                </VerticalCutReveal>
                            </h1>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                            {/* Just starting out - Card 1 */}
                            <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 min-h-[400px] md:min-h-0 md:aspect-video">
                                {/* Image */}
                                <img
                                    src="/images/0_0.jpg"
                                    alt="Start selling with Shopify"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

                                {/* Content overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 pb-8">
                                    <h4 className="text-xl md:text-2xl font-normal text-white mb-2">Just starting out?</h4>
                                    <p className="text-white/90 mb-4 text-sm md:text-base">
                                        Get your business started and online in no time with Shopify.
                                    </p>

                                    <a
                                        href="https://www.shopify.com/free-trial"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-white text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium hover:bg-gray-100 transition-colors self-start text-sm md:text-base"
                                    >
                                        Start free trial
                                    </a>
                                </div>
                            </div>

                            {/* Need a hand - Card 2 */}
                            <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 min-h-[400px] md:min-h-0 md:aspect-video">
                                {/* Image */}
                                <img
                                    src="/images/0_2.jpg"
                                    alt="Get expert help"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

                                {/* Content overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 pb-8">
                                    <h4 className="text-xl md:text-2xl font-normal text-white mb-2">Need a hand?</h4>
                                    <p className="text-white/90 mb-4 text-sm md:text-base">
                                        From marketing to design and store setup, find local agencies and freelancers to get the job done.
                                    </p>

                                    <a
                                        href="https://experts.shopify.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-white text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium hover:bg-gray-100 transition-colors self-start text-sm md:text-base"
                                    >
                                        Hire an expert
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurSpaceCTA; 