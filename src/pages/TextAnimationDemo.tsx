import TextBlockAnimation from "@/components/ui/text-block-animation";
import { ArrowDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TextAnimationDemo() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
                {/* MAIN CONTENT */}
                <div className="flex-1 flex flex-col">

                    {/* 1. HERO SECTION: The Hook */}
                    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
                        <div className="max-w-4xl w-full">
                            <TextBlockAnimation
                                blockColor="#ffaa00" // Orange from Meraz theme
                                animateOnScroll={false}
                                delay={0}
                                duration={0.3}
                            >
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight font-orbitron">
                                    Don&apos;t just inform.<br />
                                    <span className="inline-block bg-gradient-cosmic text-white px-3 pb-1 rounded-md mt-2">
                                        Captivate.
                                    </span>
                                </h1>
                            </TextBlockAnimation>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-60">
                            <span className="text-xs uppercase tracking-widest text-muted-foreground">
                                Scroll to Reveal
                            </span>
                            <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
                        </div>
                    </section>

                    {/* 2. THE PITCH */}
                    <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 py-24 bg-muted/30">
                        <div className="max-w-3xl w-full space-y-16">
                            <TextBlockAnimation blockColor="#10b981" duration={0.7}>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron">
                                    Experience Meraz 2026
                                </h2>
                            </TextBlockAnimation>

                            <TextBlockAnimation blockColor="#ff6b35" stagger={0.03}>
                                <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground">
                                    You stopped scrolling because the motion caught your eye.
                                    That&apos;s the power of <strong>animation</strong> and <strong>design</strong> properly combined.
                                    Meraz brings together culture, creativity, and celebration for an unforgettable experience.
                                </p>
                            </TextBlockAnimation>

                            <div className="pl-6 border-l-2 border-primary">
                                <TextBlockAnimation blockColor="#ffffff" duration={0.6}>
                                    <p className="text-base md:text-lg italic text-muted-foreground">
                                        &quot;Where Stars Align - IIT Bhilai&apos;s Premier Cultural Festival&quot;
                                    </p>
                                </TextBlockAnimation>
                            </div>
                        </div>
                    </section>

                    {/* 3. FESTIVAL HIGHLIGHTS */}
                    <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 py-24 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-radial opacity-30" />

                        <div className="max-w-3xl w-full space-y-12 relative z-10">
                            <TextBlockAnimation blockColor="#ffd700" duration={0.7}>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center">
                                    Why Meraz?
                                </h2>
                            </TextBlockAnimation>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                                <TextBlockAnimation blockColor="#ff6b35" stagger={0.05}>
                                    <div className="cosmic-card p-6 text-center">
                                        <h3 className="text-4xl font-bold text-gradient mb-2">50+</h3>
                                        <p className="text-muted-foreground">Events</p>
                                    </div>
                                </TextBlockAnimation>

                                <TextBlockAnimation blockColor="#ffaa00" stagger={0.05} delay={0.1}>
                                    <div className="cosmic-card p-6 text-center">
                                        <h3 className="text-4xl font-bold text-gradient mb-2">10K+</h3>
                                        <p className="text-muted-foreground">Attendees</p>
                                    </div>
                                </TextBlockAnimation>

                                <TextBlockAnimation blockColor="#ffd700" stagger={0.05} delay={0.2}>
                                    <div className="cosmic-card p-6 text-center">
                                        <h3 className="text-4xl font-bold text-gradient mb-2">3</h3>
                                        <p className="text-muted-foreground">Days</p>
                                    </div>
                                </TextBlockAnimation>
                            </div>
                        </div>
                    </section>

                    {/* 4. FOOTER: Call to Action */}
                    <footer className="h-[40vh] md:h-[50vh] flex items-center justify-center border-t border-border bg-muted/20">
                        <TextBlockAnimation blockColor="#ff6b35" duration={0.8}>
                            <a
                                href="/passes"
                                className="text-4xl md:text-6xl lg:text-7xl font-black font-orbitron hover:text-primary transition-colors cursor-pointer text-gradient"
                            >
                                Get Your Pass Now
                            </a>
                        </TextBlockAnimation>
                    </footer>
                </div>
            </div>

            <Footer />
        </div>
    );
}
