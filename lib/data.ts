import { IProject } from '@/types';

import { IconType } from 'react-icons';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaPython, FaDatabase, FaServer, FaBrain } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiGreensock, SiFramer, SiExpress, SiMongodb, SiSqlite, SiPostman, SiCplusplus, SiTypescript, SiDjango, SiVite, SiNextdotjs, SiSass } from 'react-icons/si';
import { TbBrandVscode, TbApi } from 'react-icons/tb';

interface ProjectTag {
    id: number;
    name: string;
    path: IconType;
}

interface MyProjectItem {
    id: number;
    title: string;
    description: string;
    subDescription: string[];
    href: string;
    logo: string;
    image: string;
    tags: ProjectTag[];
}

export interface EducationItem {
    school: string;
    degree: string;
    duration: string;
    location: string;
    details?: string;
    major?: string;
}

export interface AchievementItem {
    title: string;
    description: string;
    year: number;
}

export interface ExperienceItem {
    title: string;
    job: string;
    date: string;
    contents: string[];
}

export const GENERAL_INFO = {
    fullName: 'Abhishek Kumar Nigam',
    brandName: 'AKNCODES',
    role: 'Fullstack Developer and Student',
    academicStatus: '3rd Year B.Tech, Electrical Engineering',
    university:
        'Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, India',
    email: 'imabhishek40@gmail.com',
    availability: 'Available for opportunities',
    linkedInProfile: 'https://www.linkedin.com/in/abhishek-kumar-nigam-665925294/',
    linkedInContact: 'https://www.linkedin.com/in/ak-nigam/',
    whatsapp: 'https://api.whatsapp.com/send?phone=918009615096',
    telegram: 'https://t.me/aknocodes',
    instagram: 'https://www.instagram.com/imabhishek40/',
    github: 'https://github.com/akncodes',
    resumeLink:
        'https://drive.google.com/file/d/1vJjXWwjR0gmxcK8GPat16i48dcotT6OE/view?usp=drive_link',
    portfolioUrl: 'https://akncodes.nubcoder.dev/',
    twitter: 'https://x.com/AKNCODES',
    leetcode: 'https://leetcode.com/u/akncode/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.github },
    { name: 'linkedin', url: GENERAL_INFO.linkedInProfile },
    { name: 'instagram', url: GENERAL_INFO.instagram },
    { name: 'telegram', url: GENERAL_INFO.telegram },
    { name: 'whatsapp', url: GENERAL_INFO.whatsapp },
    { name: 'resume', url: GENERAL_INFO.resumeLink },
    { name: 'twitter', url: GENERAL_INFO.twitter },
    { name: 'leetcode', url: GENERAL_INFO.leetcode },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'React', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'SCSS / SASS', icon: SiSass },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'GSAP', icon: SiGreensock },
        { name: 'Framer Motion', icon: SiFramer },
        { name: 'Bootstrap', icon: FaBootstrap },
    ],
    backend: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'Django', icon: SiDjango },
        { name: 'REST APIs', icon: TbApi },
        { name: 'Python', icon: FaPython },
        { name: 'C++', icon: SiCplusplus },
    ],
    database: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'SQL / SQLite', icon: FaDatabase },
    ],
    tools: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
        { name: 'Postman', icon: SiPostman },
        { name: 'Linux', icon: FaLinux },
        { name: 'VS Code', icon: TbBrandVscode },
        { name: 'AI/ML & LLMs', icon: FaBrain },
    ],
};

export const myProjects: MyProjectItem[] = [
    {
        id: 1,
        title: "ABHYUDAYA '26 - MMMUT Cultural Fest Website",
        description:
            "Designed and developed the official website for MMMUT's cultural fest, featuring event promotion, participant interaction, and seamless navigation.",
        subDescription: [
            'Managed 30,000 visitors with seamless page performance.',
            'Scaled platform to handle 5,000 successful registrations.',
            'Implemented lazy loading for faster image rendering.',
            'Deployed CDN caching to reduce global latency.',
            'Used srcset for device-specific image resolution delivery.',
            'Applied Gzip compression to minimize asset sizes.',
            'Integrated blur-up placeholders for better perceived speed.',
            'Achieved sub-2s load times under high traffic.',
        ],
        href: 'https://abhyudaya.site/',
        logo: '',
        image: '/Abhyudaya26.png',
        tags: [
            {
                id: 1,
                name: 'React',
                path: FaReact,
            },
            {
                id: 2,
                name: 'Express',
                path: SiExpress,
            },
            {
                id: 3,
                name: 'MongoDB',
                path: SiMongodb,
            },
            {
                id: 4,
                name: 'TailwindCSS',
                path: SiTailwindcss,
            },
            {
                id: 5,
                name: 'GSAP',
                path: SiGreensock,
            },
            {
                id: 6,
                name: 'Framer Motion',
                path: SiFramer,
            },
        ],
    },
    {
        id: 2,
        title: 'INTERVUE-AI - AI Mock Interview Platform',
        description:
            'An immersive, voice-first AI mock interview platform with virtual interviewers inspired by Detroit: Become Human characters.',
        subDescription: [
            'Developed conversational interview flow with realistic AI-driven interaction.',
            'Implemented voice-based UX, eliminating traditional forms for entirely speech-based interaction.',
            'Created human-like interview experience with feedback-driven system to reduce interview anxiety.',
            'Focused on AI integration and natural language processing for authentic interview simulation.',
        ],
        href: 'https://intervue-ai-sand.vercel.app/',
        logo: '',
        image: '/Intervue.png',
        tags: [
            {
                id: 1,
                name: 'React',
                path: FaReact,
            },
            {
                id: 2,
                name: 'AI/ML',
                path: FaBrain,
            },
            {
                id: 3,
                name: 'Voice API',
                path: TbApi,
            },
            {
                id: 4,
                name: 'Node.js',
                path: FaNodeJs,
            },
        ],
    },
    {
        id: 3,
        title: 'Personal Portfolio Website',
        description:
            'A high-performance personal portfolio website built to showcase projects, skills, and professional experience.',
        subDescription: [
            'Designed and deployed a fully responsive portfolio with React.js and Tailwind CSS.',
            'Implemented modular structure for easy scalability and future enhancements.',
            'Optimized for performance with efficient component architecture.',
            'Showcases projects, skills, and experience in a professional and engaging manner.',
        ],
        href: 'https://akncodes.nubcoder.dev/',
        logo: '',
        image: '/Portfolio.png',
        tags: [
            {
                id: 1,
                name: 'React',
                path: FaReact,
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: SiTailwindcss,
            },
            {
                id: 3,
                name: 'Vite',
                path: SiVite,
            },
            {
                id: 4,
                name: 'JavaScript',
                path: SiJavascript,
            },
        ],
    },
    {
        id: 4,
        title: "ABHYUDAYA '25 - Official Fest Website",
        description:
            'Built and maintained the official public-facing website for ABHYUDAYA with event discovery, clear navigation, and improved outreach.',
        subDescription: [
            'Shipped an updated production-ready experience for fest communication and audience engagement.',
            'Improved usability and information architecture for schedules, highlights, and participant flow.',
            'Focused on fast rendering, responsive behavior, and accessibility-first UI decisions.',
            'Published the website for broad public access through the www domain.',
        ],
        href: 'https://www.abhyudaya.live/',
        logo: '',
        image: '/Abhyudaya25.png',
        tags: [
            {
                id: 1,
                name: 'React',
                path: FaReact,
            },
            {
                id: 2,
                name: 'Express',
                path: SiExpress,
            },
            {
                id: 3,
                name: 'MongoDB',
                path: SiMongodb,
            },
            {
                id: 4,
                name: 'TailwindCSS',
                path: SiTailwindcss,
            },
        ],
    },
];

const projectYears: Record<number, number> = {
    1: 2025,
    2: 2025,
    3: 2026,
    4: 2026,
};

const slugify = (value: string) =>
    value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

const asHtmlList = (items: string[]) =>
    `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;

export const PROJECTS: IProject[] = myProjects.map((project) => ({
    title: project.title,
    slug: slugify(project.title),
    liveUrl: project.href,
    year: projectYears[project.id] ?? 2026,
    description: `${project.description}<br/><br/>${asHtmlList(
        project.subDescription,
    )}`,
    role: `Built using ${project.tags.map((tag) => tag.name).join(', ')}.`,
    techStack: project.tags.map((tag) => tag.name),
    thumbnail: project.image,
    longThumbnail: project.image,
    images: [project.image],
}));

export const myEducation: EducationItem[] = [
    {
        school: 'Madan Mohan Malaviya University of Technology',
        degree: 'B.Tech in Electrical Engineering',
        duration: 'Sep 2023 - Present',
        location: 'Gorakhpur, India',
        details:
            'Core coursework includes Electrical Circuits, Electronics, Signals and Systems, Power Systems, Electrical Machines, and MATLAB programming.',
    },
    {
        school: 'Red Rose Senior Secondary School',
        degree: 'Senior Secondary (12th Grade)',
        duration: 'Completed May 2023',
        location: 'Lucknow, India',
        major: 'PCM-CS (Physics, Chemistry, Mathematics, Computer Science)',
    },
];

export const myAchievements: AchievementItem[] = [
    {
        title: 'Full-Stack MMMUT Cultural Fest Website',
        description:
            "Developed a complete full-stack cultural fest website using React, Express, MongoDB, and Tailwind CSS for ABHYUDAYA '25 with 500+ registered participants.",
        year: 2025,
    },
    {
        title: 'Google Cloud Skills Boost Badges',
        description:
            'Earned 29 Google Cloud Skills Boost badges through hands-on labs and practical learning (2024-2025), demonstrating expertise in cloud computing and infrastructure.',
        year: 2024,
    },
    {
        title: 'AI Mock Interview Platform',
        description:
            'Created an innovative voice-first AI mock interview platform inspired by Detroit: Become Human, integrating voice APIs and conversational AI.',
        year: 2025,
    },
];

export const experiences: ExperienceItem[] = [
    {
        title: 'Intern Engineer',
        job: 'NTPC Tanda - Thermal Power Plant',
        date: 'June 2025',
        contents: [
            'Analyzed operations at a 1980 MW thermal power plant consisting of 4 x 110 MW subcritical units and 2 x 660 MW supercritical units.',
            'Gained hands-on exposure to the BTG (Boiler-Turbine-Generator) cycle, including energy conversion processes, steam parameters, and generator output characteristics.',
            'Studied coal and ash handling systems, observing material flow mechanisms, conveyor belt operations, and environmental compliance processes.',
            'Developed expertise in power plant operations, thermal power generation workflow, and industrial electrical systems.',
            'Acquired comprehensive exposure to large-scale energy infrastructure and sustainable power generation practices.',
        ],
    },
    {
        title: 'Intern',
        job: 'Northern Eastern Railway',
        date: 'June - July',
        contents: [
            'Acquired knowledge of the Wheel Slide Protection (WSP) system in Indian Railways, realizing its role as an anti-lock braking system (ABS) for trains, especially in LHB coaches.',
            'Learned how WSP helps to avoid wheel lockup and skidding while braking, thus minimizing flat spots on wheels and maximizing braking efficiency.',
            'Recognized the function of WSP in improving train running safety, particularly at high speeds and under harsh weather conditions, by regulating brake pressure according to axle rotational speed.',
        ],
    },
];

export const MY_EXPERIENCE = experiences.map((item) => ({
    title: item.title,
    company: item.job,
    duration: item.date,
    contents: item.contents,
}));
