'use client';
import SectionTitle from '@/components/SectionTitle';
import { myEducation } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.education-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-education">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Education" />

                <div className="grid gap-14 mt-10">
                    {myEducation.map((item) => (
                        <div key={item.degree} className="education-item border-b border-white/10 pb-10 last:border-0 last:pb-0">
                            <div className="flex justify-between items-start max-md:flex-col mb-4">
                                <div>
                                    <p className="text-xl text-muted-foreground">
                                        {item.school}
                                    </p>
                                    <p className="text-3xl md:text-5xl font-anton leading-[1.2] mt-3.5 mb-2.5">
                                        {item.degree}
                                    </p>
                                </div>
                                <div className="text-left md:text-right mt-2 md:mt-0">
                                    <p className="text-lg text-muted-foreground">
                                        {item.duration}
                                    </p>
                                    <p className="text-md text-muted-foreground mt-1">
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                            
                            {item.major && (
                                <p className="text-muted-foreground text-md mb-2">Major: {item.major}</p>
                            )}
                            {item.details && (
                                <p className="text-muted-foreground text-md leading-relaxed">{item.details}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
