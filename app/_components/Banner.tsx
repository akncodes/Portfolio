'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[1.05] text-[70px] sm:text-[90px] md:text-[110px] font-anton text-foreground tracking-tight sm:tracking-normal">
                        FULLSTACK
                        <br /> <span className="ml-0 md:ml-4 text-muted-foreground">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[500px]">
                        Hi! I&apos;m{' '}
                        <span className="font-semibold text-foreground">
                            Abhishek KUMAR NIGAM.
                        </span>
                        {' '}I’m a Web Developer currently pursuing Electrical Engineering, with a strong interest in building scalable web applications and efficient RESTful APIs. I enjoy turning ideas into real-world products and continuously improving my development skills.
                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={GENERAL_INFO.linkedInProfile}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Hire Me
                    </Button>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex max-md:flex-wrap md:flex-col gap-8 md:gap-12 text-left md:text-right z-10 w-full md:w-auto mt-12 md:mt-0">
                    <div className="slide-up-and-fade border-l-2 md:border-l-0 md:border-r-2 border-primary/20 pl-4 md:pl-0 md:pr-4">
                        <h5 className="text-4xl sm:text-5xl font-anton text-foreground mb-1">
                            3rd <span className="text-xl font-sans text-muted-foreground font-light">Year</span>
                        </h5>
                        <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] font-medium mt-1">
                            EE Student
                        </p>
                    </div>
                    <div className="slide-up-and-fade border-l-2 md:border-l-0 md:border-r-2 border-primary/20 pl-4 md:pl-0 md:pr-4">
                        <h5 className="text-4xl sm:text-5xl font-anton text-foreground mb-1">
                            5+
                        </h5>
                        <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] font-medium mt-1">
                            Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade border-l-2 md:border-l-0 md:border-r-2 border-primary/20 pl-4 md:pl-0 md:pr-4">
                        <h5 className="text-4xl sm:text-5xl font-anton text-foreground mb-1">
                            29
                        </h5>
                        <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] font-medium mt-1">
                            Cloud Badges
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
