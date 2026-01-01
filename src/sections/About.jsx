import { useRef } from "react";

import { Globe } from "../components/globe";

import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="flex flex-col gap-4 mt-12">
        
        <div className="flex grid-default-color grid-1 relative">
          <div className="z-10 w-full justify-center">
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-full md:w-[60%]">
              Hello, I'm Abhishek Kumar Nigam passionate about building smart and scalable web applications. I've completed a full-stack development course and constantly explore new technologies to refine my skills. Focused on continuous learning, I aim to transition into the IT industry by 2027 and eventually move towards AI and data science.
            </p>
            <button 
              className="z-10 px-4 py-2 mt-10 cursor-pointer hover:underline h-15 text-white rounded-md bg-primary text-sm md:text-base"
              onClick={() => window.open('https://drive.google.com/file/d/1BB7GpM4b92N0CUIDXnZaElCwb_bJDpcR/view?usp=sharing', '_blank')}
            >
              Download Resume
            </button>
          </div>
          
          <figure className="absolute left-[55%] md:left-[70%] top-[10%]">
            <Globe />
          </figure>
        </div>
      
        
        <div className="flex grid-default-color min-h-100 grid-5 relative">
          <div className="z-10 w-[50%]">
            <p className="text-xl sm:text-2xl md:text-3xl">Tech Stack</p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4">
              I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications. My expertise includes MERN stack development.
            </p>
          </div>
          <div className="relative left-[37%] inset-y-0 md:inset-y-9 w-full h-1 start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
