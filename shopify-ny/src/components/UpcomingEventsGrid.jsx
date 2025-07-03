import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';
import eventsData from '../data/events.json';

const UpcomingEventsGrid = () => {
    // Filter only upcoming events
    const upcomingEvents = eventsData.events.filter(event => event.status === 'upcoming');

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section id="upcoming-events" className="py-12 bg-black relative z-20">
            <div className="container mx-auto px-4 relative">
                <div className="overflow-hidden pt-2 pb-3 mb-16">
                    <h1
                        ref={containerRef}
                        className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-light text-left text-white leading-[0.95] sm:leading-[0.85] md:leading-[0.7] tracking-tighter relative z-10"
                        style={{ isolation: 'isolate' }}
                    >
                        <VerticalCutReveal
                            splitBy="words"
                            staggerDuration={0.15}
                            staggerFrom="first"
                            autoStart={isInView}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                                delay: 0.1,
                            }}
                        >
                            All Upcoming Events
                        </VerticalCutReveal>
                    </h1>
                </div>
            </div>

            <div className="w-full">
                {/* Header with full-width border */}
                <div className="border-b border-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-12 gap-4 pb-2 text-gray-400 text-base uppercase tracking-wider font-medium leading-[1.4] md:leading-[1.2]" style={{ fontFamily: "'Iosevka Fixed', 'Iosevka', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace" }}>
                            <div className="col-span-4 md:col-span-3">Event</div>
                            <div className="col-span-2">Date</div>
                            <div className="col-span-2">Time</div>
                            <div className="hidden md:block col-span-3">Type</div>
                            <div className="col-span-4 md:col-span-2 text-right">Tickets</div>
                        </div>
                    </div>
                </div>

                {/* Event Rows with full-width borders */}
                {upcomingEvents.map((event) => (
                    <div key={event.id} className="border-b border-white hover:bg-gray-900/30 transition-colors">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-12 gap-4 py-3 items-center text-white leading-[1.4] md:leading-[1.2]" style={{ fontFamily: "'Iosevka Fixed', 'Iosevka', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace" }}>
                                <div className="col-span-4 md:col-span-3">
                                    <a
                                        href={event.splashUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block hover:text-gray-300 transition-colors"
                                    >
                                        <h3 className="font-medium leading-[1.3] md:leading-[1.1] tracking-tight text-base">
                                            {event.title}
                                        </h3>
                                    </a>
                                </div>

                                <div className="col-span-2 text-gray-300 text-base uppercase font-medium">
                                    {event.date.split(',')[0].replace('July', 'JUL')}
                                </div>

                                <div className="col-span-2 text-gray-300 text-base font-medium">
                                    {event.time ? event.time.split(' - ')[0] : '-'}
                                </div>

                                <div className="hidden md:block col-span-3 text-gray-400 text-base font-medium">
                                    {event.tag}
                                    {event.daysAway && (
                                        <span className="ml-2 text-gray-500">• {event.daysAway}</span>
                                    )}
                                </div>

                                <div className="col-span-4 md:col-span-2 text-right">
                                    <a
                                        href={event.splashUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block border border-white text-white px-4 py-2 text-base uppercase tracking-wider hover:bg-white hover:text-black transition-colors font-medium"
                                    >
                                        RSVP
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {upcomingEvents.length === 0 && (
                    <div className="container mx-auto px-4">
                        <div className="text-center py-12">
                            <p className="text-gray-400 text-base font-medium" style={{ fontFamily: "'Iosevka Fixed', 'Iosevka', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace", lineHeight: '1.2' }}>No upcoming events at the moment. Check back soon!</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default UpcomingEventsGrid; 