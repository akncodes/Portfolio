'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-24 slide-up-and-fade leading-[1.2] tracking-tight text-foreground max-w-5xl">
                    I engineer robust digital products by combining scalable
                    architectures with intuitive designs to solve complex
                    real-world problems.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-16 gap-y-12">
                    <div className="md:col-span-4">
                        <p className="text-4xl md:text-5xl font-anton text-foreground slide-up-and-fade">
                            Hi, I&apos;m Abhishek Kumar Nigam
                        </p>
                    </div>
                    <div className="md:col-span-8 md:pl-12 lg:pl-20">
                        <div className="text-lg md:text-xl text-muted-foreground/80 max-w-[600px] leading-loose">
                            <p className="slide-up-and-fade">
                                I’m a Web Developer dedicated to turning ideas into scalable and impactful digital solutions, with a strong focus on building clean, efficient, and user-friendly applications. I enjoy crafting seamless experiences that combine functionality with thoughtful design.
                            </p>
                            <p className="mt-6 slide-up-and-fade">
                                My approach emphasizes performance, responsiveness, and accessibility, ensuring that every product not only looks good but also performs reliably and meets real-world user and business needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
