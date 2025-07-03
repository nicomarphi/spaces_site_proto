import { useRef, useState } from 'react';
import eventsData from '../data/events.json';

const EventCarousel = () => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        scrollContainerRef.current.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        scrollContainerRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollLeftBtn = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRightBtn = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <section id="events" className="py-12 -mt-[160px] md:-mt-[200px] relative z-10">
            {/* Navigation arrows positioned in top right of carousel */}
            <div className="absolute top-8 right-8 z-20 flex gap-2">
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

            {/* Full-width scrollable container */}
            <div className="relative">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab select-none"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch',
                        paddingLeft: 'max(1rem, calc((100vw - 1280px) / 2))',
                        paddingRight: 'max(1rem, calc((100vw - 1280px) / 2))',
                        scrollBehavior: isDragging ? 'auto' : 'smooth',
                        userSelect: 'none'
                    }}
                >
                    {eventsData.events.map((event) => (
                        <div
                            key={event.id}
                            className={`group flex-none w-[240px] md:w-[280px] relative rounded-lg overflow-hidden ${event.status === 'past' ? 'opacity-60' : ''
                                }`}
                            style={{ aspectRatio: '2/3' }}
                        >
                            {/* Background Image */}
                            <img
                                src={event.posterImage}
                                alt={event.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                draggable={false}
                            />

                            {/* Gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            {/* Content */}
                            {event.status === 'sold_out' ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                    <div className="text-center transition-transform duration-300 ease-out group-hover:scale-105">
                                        <p className="text-white text-xl italic mb-2">Sorry</p>
                                        <p className="text-white text-5xl md:text-6xl font-normal leading-[0.75]">SOLD OUT</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                                    <h3 className="text-white text-2xl md:text-3xl font-normal mb-2 leading-[0.75] tracking-tight transition-transform duration-300 ease-out group-hover:scale-105 origin-bottom-left">
                                        {event.title}
                                    </h3>
                                    <p className="text-white/90 text-lg transition-all duration-300 ease-out group-hover:text-white">{event.date}</p>
                                    {event.status === 'upcoming' && (
                                        <a
                                            href={event.splashUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-4 bg-white text-black px-6 py-2 rounded-full font-medium transition-all duration-300 ease-out hover:bg-gray-100 group-hover:scale-105 group-hover:-translate-y-1"
                                        >
                                            RSVP
                                        </a>
                                    )}
                                </div>
                            )}

                            {/* Sold out button overlay */}
                            {event.status === 'sold_out' && (
                                <div className="absolute bottom-6 left-6 right-6 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-105">
                                    <button
                                        disabled
                                        className="w-full bg-white text-black px-6 py-3 rounded-full font-medium opacity-90 cursor-not-allowed"
                                    >
                                        Sold Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Hide scrollbar for Webkit browsers */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default EventCarousel; 