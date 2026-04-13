import AboutMe from '@/components/sections/home/AboutMe';
import Banner from '@/components/sections/home/Banner';
import Education from '@/components/sections/home/Education';
import Experiences from '@/components/sections/home/Experiences';
import ProjectList from '@/components/sections/home/ProjectList';
import Skills from '@/components/sections/home/Skills';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <Education />
            <Experiences />
            <ProjectList />
        </div>
    );
}
