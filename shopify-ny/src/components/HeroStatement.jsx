import { VerticalCutReveal } from './ui/vertical-cut-reveal';

const HeroStatement = () => {
    return (
        <section id="hero" className="h-[50vh] md:h-[60vh] flex items-start justify-start bg-black relative z-10 pt-24 md:pt-32">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-light text-left text-white max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[500px] leading-[0.85] sm:leading-[0.7] md:leading-[0.55] tracking-tighter">
                    <VerticalCutReveal
                        splitBy="words"
                        staggerDuration={0.15}
                        staggerFrom="first"
                        autoStart={true}
                        wordLevelClassName="!py-0"
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                            delay: 0.1,
                        }}
                    >
                        New York is for entrepreneurs.
                    </VerticalCutReveal>
                </h1>
            </div>
        </section>
    );
};

export default HeroStatement; 