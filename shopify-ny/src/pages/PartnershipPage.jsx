import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { VerticalCutReveal } from '../components/ui/vertical-cut-reveal'

// Photo Gallery Component
function PhotoGallery() {
    const scrollRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)
        scrollRef.current.style.cursor = 'grabbing'
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
        scrollRef.current.style.cursor = 'grab'
    }

    const handleMouseUp = () => {
        setIsDragging(false)
        scrollRef.current.style.cursor = 'grab'
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX) * 2
        scrollRef.current.scrollLeft = scrollLeft - walk
    }

    const scrollLeftBtn = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
        }
    }

    const scrollRightBtn = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
        }
    }

    const photos = [
        { rotate: -3, mt: 0, img: '/images/DSC03333(1).jpg', orientation: 'portrait' },
        { rotate: 2, mt: 20, img: '/images/0_0.jpg', orientation: 'landscape' },
        { rotate: -4, mt: 10, img: '/images/DSC02524.jpg', orientation: 'landscape' },
        { rotate: 3, mt: 25, img: '/images/u7312621251_background_gradient_graphic_poster_--ar_23_--prof_b9840bb9-7cc2-4c5c-9cab-89f5082ceb95_0.png', orientation: 'portrait' },
        { rotate: -2, mt: 5, img: '/images/DSC02555.jpg', orientation: 'portrait' },
        { rotate: 4, mt: 15, img: '/images/GOB_Interiors_Products_0008.jpg', orientation: 'landscape' },
        { rotate: -3, mt: 20, img: '/images/u7312621251_background_gradient_graphic_poster_--ar_23_--prof_85f64a58-42ce-497d-85d6-2bf827a791ba_1.png', orientation: 'portrait' },
        { rotate: 2, mt: 0, img: '/images/GOB_Interiors_Products_0005.jpg', orientation: 'portrait' },
        { rotate: -2, mt: 15, img: '/images/DSC06646.jpg', orientation: 'landscape' },
        { rotate: 3, mt: 10, img: '/images/DSC07554.jpg', orientation: 'portrait' },
        { rotate: -4, mt: 20, img: '/images/DSC07573.jpg', orientation: 'landscape' },
        { rotate: 2, mt: 5, img: '/images/u7312621251_colorful_gradient_ethereal_--ar_23_--profile_mm6n_7ac23999-908b-4d8b-8418-397ecbaeb7e8_1.png', orientation: 'portrait' },
        { rotate: -3, mt: 15, img: '/images/DSC09994.jpg', orientation: 'portrait' },
        { rotate: 4, mt: 0, img: '/images/DSC00023.jpg', orientation: 'landscape' },
        { rotate: -2, mt: 25, img: '/images/DSC00674.jpg', orientation: 'portrait' },
        { rotate: 3, mt: 10, img: '/images/DSC00663.jpg', orientation: 'landscape' },
        { rotate: -4, mt: 20, img: '/images/2025-05-08_SHOPIFY_FENTY_439.jpg', orientation: 'portrait' },
        { rotate: 2, mt: 0, img: '/images/2025-05-08_SHOPIFY_FENTY_325.jpg', orientation: 'landscape' },
        { rotate: -3, mt: 15, img: '/images/Digital_Undivided_73.jpg', orientation: 'portrait' },
        { rotate: 4, mt: 5, img: '/images/IMG_1856.jpg', orientation: 'landscape' },
        { rotate: -2, mt: 10, img: '/images/u7312621251_illustration_of_latino_culture_still_life_fun_pop_40f89261-73c3-4cd8-b871-565f97118672_3.png', orientation: 'portrait' },
        { rotate: 3, mt: 20, img: '/images/0_2.jpg', orientation: 'landscape' },
        { rotate: -4, mt: 0, img: '/images/u7312621251_background_gradient_graphic_poster_--ar_23_--prof_b9840bb9-7cc2-4c5c-9cab-89f5082ceb95_1.png', orientation: 'portrait' },
        { rotate: 2, mt: 15, img: '/images/space.png', orientation: 'landscape' },
        { rotate: -2, mt: 5, img: '/images/u7312621251_colorful_gradient_ethereal_--ar_23_--profile_mm6n_7ac23999-908b-4d8b-8418-397ecbaeb7e8_3.png', orientation: 'portrait' }
    ]

    return (
        <div className="relative w-screen -ml-[50vw] left-1/2 overflow-hidden pb-6">
            <style jsx>{`
                .photo-gallery-scroll::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            {/* Navigation arrows positioned in top right */}
            <div className="absolute top-0 right-[5vw] z-10 flex gap-2">
                <button
                    onClick={scrollLeftBtn}
                    className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-2 transition-all"
                    aria-label="Scroll left"
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={scrollRightBtn}
                    className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-2 transition-all"
                    aria-label="Scroll right"
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div
                ref={scrollRef}
                className="overflow-x-auto cursor-grab select-none photo-gallery-scroll"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{
                    scrollBehavior: isDragging ? 'auto' : 'smooth',
                    userSelect: 'none',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                <div className="flex gap-6 py-4 pl-[5vw] pr-[10vw]" style={{ width: 'max-content' }}>
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className={`relative flex-shrink-0 bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer shadow-lg ${photo.orientation === 'portrait' ? 'w-64 h-96' : 'w-96 h-64'
                                }`}
                            style={{
                                transform: `rotate(${photo.rotate}deg)`,
                                marginTop: `${photo.mt}px`
                            }}
                        >
                            <img
                                src={photo.img}
                                alt={`Gallery photo ${index + 1}`}
                                className="w-full h-full object-cover"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function PartnershipPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Create refs for each section heading
    const heroRef = useRef(null)
    const whatYouGetRef = useRef(null)
    const theSpaceRef = useRef(null)
    const whoItsForRef = useRef(null)
    const activationRef = useRef(null)
    const testimonialsRef = useRef(null)
    const ctaRef = useRef(null)

    // Create inView hooks for each section
    const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
    const whatYouGetInView = useInView(whatYouGetRef, { once: true, margin: "-100px" })
    const theSpaceInView = useInView(theSpaceRef, { once: true, margin: "-100px" })
    const whoItsForInView = useInView(whoItsForRef, { once: true, margin: "-100px" })
    const activationInView = useInView(activationRef, { once: true, margin: "-100px" })
    const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })
    const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <div className="overflow-hidden py-2">
                            <h1 ref={heroRef} className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight text-left leading-[0.95] md:leading-[0.7]"
                                style={{ letterSpacing: '-0.02em' }}
                            >
                                <VerticalCutReveal
                                    splitBy="words"
                                    staggerDuration={0.15}
                                    staggerFrom="first"
                                    autoStart={heroInView}
                                    wordLevelClassName="!py-[0.05em]"
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 25,
                                        delay: 0.1,
                                    }}
                                >
                                    Our Space
                                </VerticalCutReveal>
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-300 font-light text-left mt-4">
                            A community hub for commerce, culture, and connection.
                        </p>
                    </div>
                </div>
            </section>

            {/* Video/Image Gallery Section - Placeholder */}
            <section className="pb-12 bg-black">
                <div className="container mx-auto px-4 mb-8">
                    <div
                        className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden"
                        style={{
                            transform: 'translateZ(0)',
                            WebkitMaskImage: '-webkit-radial-gradient(white, white)',
                            maskImage: 'radial-gradient(white, white)'
                        }}
                    >
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ borderRadius: '0.5rem' }}
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/videos/spaces1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Photo Gallery - Draggable Horizontal Scroll */}
                <PhotoGallery />
            </section>

            {/* What You Get Section */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
                        <h1 ref={whatYouGetRef} className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-left tracking-tight leading-[0.95] md:leading-[0.7]"
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            <VerticalCutReveal
                                splitBy="words"
                                staggerDuration={0.15}
                                staggerFrom="first"
                                autoStart={whatYouGetInView}
                                wordLevelClassName="!py-0"
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25,
                                    delay: 0.1,
                                }}
                            >
                                What You Get
                            </VerticalCutReveal>
                        </h1>
                        <p className="text-lg text-gray-400 text-left md:text-right">
                            When you partner with us, you'll get access to:
                        </p>
                    </div>

                    {/* List format */}
                    <div className="w-full">
                        {/* Item 1 */}
                        <div className="py-6 md:py-8 border-b border-gray-800">
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 md:gap-8 items-start">
                                <h3 className="text-xl md:text-2xl font-light text-white">A beautiful, fully staffed venue — free of charge</h3>
                                <p className="text-gray-400 text-base md:text-lg">Located at 131 Greene Street, our space includes high-end retail fittings, street-level visibility, and a flexible garden level for activations or workshops.</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="py-6 md:py-8 border-b border-gray-800">
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 md:gap-8 items-start">
                                <h3 className="text-xl md:text-2xl font-light text-white">Full event production support</h3>
                                <p className="text-gray-400 text-base md:text-lg">We provide on-site staff, security, and a dedicated event manager to help with planning, marketing, and execution.</p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="py-6 md:py-8 border-b border-gray-800">
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 md:gap-8 items-start">
                                <h3 className="text-xl md:text-2xl font-light text-white">Promotion to our community</h3>
                                <p className="text-gray-400 text-base md:text-lg">Your event will be featured on our site, in our localized newsletter, and through targeted paid promotion.</p>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="py-6 md:py-8 border-b border-gray-800">
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 md:gap-8 items-start">
                                <h3 className="text-xl md:text-2xl font-light text-white">Retail-ready tech & amenities</h3>
                                <p className="text-gray-400 text-base md:text-lg">From Shopify PoS hardware and digital signage to built-in cold brew taps and a full café setup, the space is designed to host and sell.</p>
                            </div>
                        </div>

                        {/* Special callout */}
                        <div className="mt-16 bg-white rounded-2xl p-12 text-center">
                            <h3 className="text-3xl md:text-4xl font-normal text-black mb-4">100% of your retail sales go to you</h3>
                            <p className="text-gray-600 text-xl">We don't take a cut — you keep what you earn.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Space Details Section */}
            <section className="py-16 bg-black border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <h1 ref={theSpaceRef} className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-16 text-left tracking-tight leading-[0.95] md:leading-[0.7]"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        <VerticalCutReveal
                            splitBy="words"
                            staggerDuration={0.15}
                            staggerFrom="first"
                            autoStart={theSpaceInView}
                            wordLevelClassName="!py-0"
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                                delay: 0.1,
                            }}
                        >
                            The Space
                        </VerticalCutReveal>
                    </h1>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                        <div className="space-y-3">
                            <p className="text-white text-lg">• 5,000+ sq ft across two levels</p>
                            <p className="text-white text-lg">• 170-person standing capacity / 125 seated</p>
                            <p className="text-white text-lg">• AV-ready with 110" video wall, distributed speakers, mic setup, and in-house recording</p>
                            <p className="text-white text-lg">• Ground-floor café with espresso machine, taps, refrigeration, and service area</p>
                        </div>
                        <div className="space-y-3">
                            <p className="text-white text-lg">• On-site photo studio</p>
                            <p className="text-white text-lg">• Street-facing retail with premium fixtures</p>
                            <p className="text-white text-lg">• Freight access + elevator for load-in</p>
                            <p className="text-white text-lg">• Located in the heart of SoHo, surrounded by top-tier neighbors like Apple, Proenza Schouler, and Design Within Reach</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="#"
                            className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors"
                        >
                            → Take a virtual tour
                        </a>
                    </div>
                </div>
            </section>

            {/* Who It's For Section */}
            <section className="py-16 bg-black border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <h1 ref={whoItsForRef} className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-16 text-left tracking-tight leading-[0.95] md:leading-[0.7]"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        <VerticalCutReveal
                            splitBy="words"
                            staggerDuration={0.15}
                            staggerFrom="first"
                            autoStart={whoItsForInView}
                            wordLevelClassName="!py-0"
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                                delay: 0.1,
                            }}
                        >
                            Who It's For
                        </VerticalCutReveal>
                    </h1>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
                        {/* Card 1 - Shopify Merchants */}
                        <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 min-h-[350px] md:min-h-0 md:aspect-[4/3]">
                            {/* Image */}
                            <img
                                src="/images/u7312621251_background_gradient_graphic_poster_--ar_23_--prof_85f64a58-42ce-497d-85d6-2bf827a791ba_0.png"
                                alt="Shopify merchants"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 pb-8">
                                <p className="text-white text-lg md:text-xl">
                                    Current Shopify merchants with a strong brand and local following
                                </p>
                            </div>
                        </div>

                        {/* Card 2 - Founders & Creatives */}
                        <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 min-h-[350px] md:min-h-0 md:aspect-[4/3]">
                            {/* Image */}
                            <img
                                src="/images/u7312621251_colorful_gradient_ethereal_--ar_23_--profile_mm6n_7ac23999-908b-4d8b-8418-397ecbaeb7e8_1.png"
                                alt="Founders and creatives"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 pb-8">
                                <p className="text-white text-lg md:text-xl">
                                    Founders and creatives looking to test new ideas IRL
                                </p>
                            </div>
                        </div>

                        {/* Card 3 - Mission-aligned Partners */}
                        <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 min-h-[350px] md:min-h-0 md:aspect-[4/3]">
                            {/* Image */}
                            <img
                                src="/images/u7312621251_illustration_of_latino_culture_still_life_fun_pop_40f89261-73c3-4cd8-b871-565f97118672_3.png"
                                alt="Community partners"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 pb-8">
                                <p className="text-white text-lg md:text-xl">
                                    Mission-aligned partners who want to build something community-first
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activation Formats Section */}
            <section className="py-20 bg-black border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <h1 ref={activationRef} className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-16 text-left tracking-tight leading-[0.95] md:leading-[0.7]"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        <VerticalCutReveal
                            splitBy="words"
                            staggerDuration={0.15}
                            staggerFrom="first"
                            autoStart={activationInView}
                            wordLevelClassName="!py-0"
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                                delay: 0.1,
                            }}
                        >
                            Activation Formats We Support
                        </VerticalCutReveal>
                    </h1>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-light text-white mb-4">Retail Pop-Ups</h3>
                            <p className="text-gray-400">Product launches, founder showcases, VIP nights, or multi-day storefronts</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-light text-white mb-4">Marketplaces</h3>
                            <p className="text-gray-400">Curated collections of makers, brands, or communities brought together in one space</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-light text-white mb-4">Workshops & Panels</h3>
                            <p className="text-gray-400">Educational moments that help others grow — from masterclasses to summits</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h1 ref={testimonialsRef} className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-16 text-left tracking-tight leading-[0.95] md:leading-[0.7]"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        <VerticalCutReveal
                            splitBy="words"
                            staggerDuration={0.15}
                            staggerFrom="first"
                            autoStart={testimonialsInView}
                            wordLevelClassName="!py-0"
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                                delay: 0.1,
                            }}
                        >
                            What Our Partners Say
                        </VerticalCutReveal>
                    </h1>

                    {/* Masonry Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
                        {/* Quote 1 - Tall Card */}
                        <div className="relative rounded-2xl overflow-hidden h-[440px] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] mb-6 break-inside-avoid">
                            <img
                                src="/images/u7312621251_colorful_gradient_ethereal_--ar_23_--profile_mm6n_7ac23999-908b-4d8b-8418-397ecbaeb7e8_1.png"
                                alt="Testimonial background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-10">
                                <p className="text-xl md:text-2xl text-white mb-6 font-light italic leading-relaxed">
                                    "We sold out tickets in less than 2 hours, and our 150+ attendees loved the space."
                                </p>
                                <p className="text-white/80 text-sm">— Rachel Wong, Co-founder, Monday Girl</p>
                            </div>
                        </div>

                        {/* Quote 2 - Short Card */}
                        <div className="relative rounded-2xl overflow-hidden h-[280px] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] mb-6 break-inside-avoid">
                            <img
                                src="/images/u7312621251_background_gradient_graphic_poster_--ar_23_--prof_b9840bb9-7cc2-4c5c-9cab-89f5082ceb95_0.png"
                                alt="Testimonial background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-10">
                                <p className="text-lg md:text-xl text-white mb-4 font-light italic leading-relaxed">
                                    "Shopify NY is hands-down one of the best event spaces in the city."
                                </p>
                                <p className="text-white/80 text-sm">— Olivia Ho, Founder, The Give and Grow</p>
                            </div>
                        </div>

                        {/* Quote 3 - Medium Card */}
                        <div className="relative rounded-2xl overflow-hidden h-[360px] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] mb-6 break-inside-avoid">
                            <img
                                src="/images/u7312621251_illustration_of_latino_culture_still_life_fun_pop_40f89261-73c3-4cd8-b871-565f97118672_3.png"
                                alt="Testimonial background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-10">
                                <p className="text-xl md:text-2xl text-white mb-6 font-light italic leading-relaxed">
                                    "The Shopify NYC crew became an extension of our team — agile, creative, and supportive."
                                </p>
                                <p className="text-white/80 text-sm">— Julien Bouzitat, AmorePacific</p>
                            </div>
                        </div>

                        {/* Quote 4 - Tall Card */}
                        <div className="relative rounded-2xl overflow-hidden h-[420px] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] mb-6 break-inside-avoid">
                            <img
                                src="/images/u7312621251_background_gradient_graphic_poster_--ar_23_--prof_85f64a58-42ce-497d-85d6-2bf827a791ba_1.png"
                                alt="Testimonial background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-10">
                                <p className="text-xl md:text-2xl text-white mb-6 font-light italic leading-relaxed">
                                    "The energy in the space is unmatched. Our community loved connecting IRL at Shopify NY."
                                </p>
                                <p className="text-white/80 text-sm">— Marcus Chen, Founder, Local Goods Co.</p>
                            </div>
                        </div>

                        {/* Quote 5 - Medium Card */}
                        <div className="relative rounded-2xl overflow-hidden h-[340px] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] mb-6 break-inside-avoid">
                            <img
                                src="/images/u7312621251_colorful_gradient_ethereal_--ar_23_--profile_mm6n_7ac23999-908b-4d8b-8418-397ecbaeb7e8_3.png"
                                alt="Testimonial background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-10">
                                <p className="text-xl md:text-2xl text-white mb-6 font-light italic leading-relaxed">
                                    "From setup to breakdown, the team made everything seamless. It's a founder's dream venue."
                                </p>
                                <p className="text-white/80 text-sm">— Sarah Kim, CEO, Wellness Works</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-black border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <h1 ref={ctaRef} className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-left leading-[0.95] md:leading-[0.7]"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        <VerticalCutReveal
                            splitBy="words"
                            staggerDuration={0.15}
                            staggerFrom="first"
                            autoStart={ctaInView}
                            wordLevelClassName="!py-0"
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                                delay: 0.1,
                            }}
                        >
                            Ready to Host?
                        </VerticalCutReveal>
                    </h1>
                    <p className="text-xl text-gray-300 mb-12">
                        Whether you're launching your next product, rallying your community, or creating an unforgettable moment — we'd love to bring your idea to life.
                    </p>
                    <a
                        href="https://shopify-ny.com/partner-application"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-black px-10 py-5 rounded-full font-medium text-xl hover:bg-gray-100 transition-colors"
                    >
                        → Apply to Host
                    </a>
                </div>
            </section>
        </div>
    )
}

export default PartnershipPage 