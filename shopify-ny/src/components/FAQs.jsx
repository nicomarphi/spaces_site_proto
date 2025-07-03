import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

const FAQs = () => {
    const [openItems, setOpenItems] = useState({});
    const titleRef = useRef(null);
    const isInView = useInView(titleRef, { once: true, margin: "-100px" });

    const toggleItem = (sectionIndex, itemIndex) => {
        const key = `${sectionIndex}-${itemIndex}`;
        setOpenItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const faqSections = [
        {
            title: "Visiting",
            items: [
                {
                    question: "How do I get there?",
                    answer: "Shopify NYC is located in the SoHo neighborhood of Manhattan, near the B, D, F, M subway at Broadway-Lafayette Streets Station, the A, C subway at Spring Street, the 4, 6 at Bleecker Street Station and the R, W subway at Prince Street Station."
                },
                {
                    question: "Is there parking nearby?",
                    answer: "There are several garages in the SoHo area, but we are not currently affiliated with any."
                }
            ]
        },
        {
            title: "Events",
            items: [
                {
                    question: "Do you have a calendar of events?",
                    answer: "Yes we do! Here's our calendar of events. All of our workshops and events happening within our space are listed on our calendar. Please visit our calendar prior to your visit to ensure that we are open for the day, as we host private events from time-to-time."
                },
                {
                    question: "I'd like to bring a guest to one of your workshops/events, can I do that?",
                    answer: "You are welcome to bring a guest, however, to ensure that we have a space for each individual, all guests must be registered prior to attending our workshops/events. Please ensure your guest RSVPs to the event prior to attending."
                },
                {
                    question: "I'm interested in partnering with Shopify NY on an event. Who can I reach out to?",
                    answer: "We're always looking for partners with whom we can build engaging, on-site events and experiences for our community members. We provide our partners access to a no-cost event venue, plus market development funds and a skilled marketing team to help program and produce the experience. In return, partners co-market the event to their followers and drive attendance. Learn more here."
                }
            ]
        },
        {
            title: "The Space",
            items: [
                {
                    question: "Is this a co-working space?",
                    answer: "Our space is open to the public. Our seating, however, is limited and reserved for people who have booked appointments or workshops with us. Upon booking an appointment or a workshop at the space, you are welcome to come early and/or stay after your service."
                },
                {
                    question: "Do you offer WiFi?",
                    answer: "Yes, we offer complimentary wifi to our guests at Shopify NY, once you check-in to your event/workshop."
                }
            ]
        },
        {
            title: "Photo studio",
            items: [
                {
                    question: "How many photos can I take?",
                    answer: "You are allowed to take as many photos as you can within your 2-hour time frame. Go all out!"
                },
                {
                    question: "Are my photos edited onsite?",
                    answer: "We do not edit photos."
                },
                {
                    question: "What kind of photography do we do?",
                    answer: "Product shoots, Lookbooks, and editorials."
                },
                {
                    question: "Do I need to bring in my own equipment?",
                    answer: "No! All the equipment listed above is provided under its corresponding package."
                },
                {
                    question: "Which package is best for me?",
                    answer: "Let's find out together! Book a free consultation with our Photo Specialist here."
                }
            ]
        },
        {
            title: "Shopify Retail Hardware Orders",
            subtitle: "For merchants who have previously purchased Shopify POS equipment in store or online.",
            items: [
                {
                    question: "What is your return policy?",
                    answer: {
                        intro: "",
                        sections: [
                            {
                                title: "For in store purchases:",
                                content: [
                                    "Shopify Products (Card Readers ONLY) - We will provide a refund for items returned within 90 days as long as the product is returned unopened. If the card reader has been opened, and the item is not defective, we will provide a refund if returned within 30 days.",
                                    "Defective items can be replaced after the 30 day period, up to 1 year after purchase. A replacement will be provided as long as inventory is available in store. Otherwise, a replacement can be done online through our hardware store.",
                                    "3rd Party Products - We accept returns within 30 days of purchase as long as the item is in working and new condition in its original box.",
                                    "Defective products can be returned within 30 days and a replacement will be provided. If the item is defective after 30 days, please contact the manufacturer regarding their warranty."
                                ]
                            },
                            {
                                title: "For Online Purchases:",
                                content: [
                                    "Shopify Products (Card Readers) - If the item is defective, we will accept the return and provide a replacement. Damaged items purchased online will not be accepted. If the item is unopened, we can provide a refund to the merchant as long as we are provided with the email address matching the initial order.",
                                    "3rd party products - Hardware purchased online must be returned online. Please follow the below procedure:",
                                    "1. Fill out the return form.",
                                    "2. After Shopify reviews your return form, you will be emailed a return label to print. Attach the label to the shipping vessel and drop off at the shipping carrier's location.",
                                    "Please refer to our online return policy for further details."
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ];

    return (
        <section id="faqs" className="py-20 bg-black">
            <div className="container mx-auto px-4 mb-16">
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-6xl lg:text-7xl font-light text-white text-left tracking-tight leading-[0.95] md:leading-[0.7]"
                    style={{ letterSpacing: '-0.02em' }}
                >
                    <VerticalCutReveal
                        splitBy="words"
                        staggerDuration={0.15}
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
                        FAQs
                    </VerticalCutReveal>
                </h1>
            </div>

            <div className="w-full">
                {faqSections.map((section, sectionIndex) => (
                    <motion.div
                        key={sectionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                        className="mb-12"
                    >
                        {/* Section Header with full-width border */}
                        <div className="border-b border-white mb-0">
                            <div className="container mx-auto px-4">
                                <h2 className="text-xl md:text-2xl font-light text-white py-4 tracking-tight uppercase">
                                    {section.title}
                                </h2>
                                {section.subtitle && (
                                    <p className="text-gray-400 -mt-2 pb-4 text-sm">{section.subtitle}</p>
                                )}
                            </div>
                        </div>

                        {/* Questions with full-width borders */}
                        {section.items.map((item, itemIndex) => {
                            const isOpen = openItems[`${sectionIndex}-${itemIndex}`];

                            return (
                                <div
                                    key={itemIndex}
                                    className="border-b border-white hover:bg-gray-900/30 transition-colors"
                                >
                                    <div className="container mx-auto px-4">
                                        <button
                                            onClick={() => toggleItem(sectionIndex, itemIndex)}
                                            className="w-full py-3 flex justify-between items-center text-left group"
                                        >
                                            <span className="text-base md:text-lg text-white pr-4 font-normal leading-tight">
                                                {item.question}
                                            </span>
                                            <svg
                                                className={`w-5 h-5 text-white flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pb-4 text-gray-400 text-sm md:text-base">
                                                        {typeof item.answer === 'string' ? (
                                                            <p>{item.answer}</p>
                                                        ) : (
                                                            <div>
                                                                {item.answer.intro && <p className="mb-4">{item.answer.intro}</p>}
                                                                {item.answer.sections.map((subSection, subIndex) => (
                                                                    <div key={subIndex} className="mb-6">
                                                                        <h4 className="text-white font-medium mb-3">{subSection.title}</h4>
                                                                        {subSection.content.map((paragraph, pIndex) => (
                                                                            <p key={pIndex} className="mb-3">{paragraph}</p>
                                                                        ))}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FAQs; 