import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

const SizzleReel = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section className="pt-8 pb-16 bg-black">
            <div className="container mx-auto px-4">
                <h1
                    ref={containerRef}
                    className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-light text-left text-white leading-[0.95] sm:leading-[0.85] md:leading-[0.7] tracking-tighter mb-12"
                >
                    <VerticalCutReveal
                        splitBy="characters"
                        staggerDuration={0.025}
                        staggerFrom="first"
                        autoStart={isInView}
                        wordLevelClassName="!py-0"
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                            delay: 0.1,
                        }}
                    >
                        Shopify NY is where creators, founders, and the future of commerce connect IRL.
                    </VerticalCutReveal>
                </h1>

                <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-800 w-full">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/images/u7312621251_background_gradient_graphic_poster_--ar_23_--prof_85f64a58-42ce-497d-85d6-2bf827a791ba_0.png"
                    >
                        <source src="/videos/spaces.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="text-center mt-8">
                    <Link
                        to="/partnership"
                        className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                    >
                        See the space
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SizzleReel; 