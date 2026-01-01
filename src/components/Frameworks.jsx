import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    { name: "javascript", ext: "svg" },
    { name: "html5", ext: "svg" },
    { name: "css3", ext: "svg" },
    { name: "cplusplus", ext: "svg" },
    { name: "react", ext: "svg" },
    { name: "Nodejs", ext: "png" },
    { name: "expressjs", ext: "png" },
    { name: "Mongodb", ext: "png" },
    { name: "tailwindcss", ext: "svg" },
    { name: "vitejs", ext: "svg" },
    { name: "git", ext: "svg" },
    { name: "github", ext: "svg" },
  ];
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.name}.${skill.ext}`} alt={skill.name} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.name}.${skill.ext}`} alt={skill.name} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, alt }) => (
  <img src={src} alt={alt} className="duration-200 rounded-sm hover:scale-110" />
);
