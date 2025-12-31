
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Particles } from "../components/Particles";

export default function Hero() {
  const redGradient =
    'bg-linear-to-r from-rose-500 via-pink-500 to-purple-500 text-transparent bg-clip-text';

  return (
    <main className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      
     

      {/* Particle background */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        staticity={50}
        ease={50}
        size={0.4}
        color="#ffffff"
      />

      <section className="w-full h-full flex items-center justify-center px-4 relative z-10">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center w-full max-w-5xl gap-12">
          <motion.div
            className="flex flex-col basis-2/3 justify-start pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="mb-4 inline-flex"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">
                ✨ Welcome to my portfolio
              </span>
            </motion.div>

            <h1 className="font-peachi text-4xl md:text-6xl tracking-tight text-black dark:text-white mb-4 leading-tight">
              <span className="relative inline-block group overflow-hidden">
                <span
                  className={clsx(
                    redGradient,
                    'block transform transition-transform duration-500 group-hover:translate-y-full'
                  )}
                >
                  Hi, I&apos;m Abhishek Kumar Nigam 
                </span>
                <span
                  className={clsx(
                    redGradient,
                    'absolute text-[#1D4ED8] inset-0 block transform translate-y-full transition-transform duration-500 group-hover:translate-y-0'
                  )}
                >  AKNCODES
                </span>
              </span>
            </h1>

            <h2 className="text-gray-700 dark:text-gray-200 mb-4 text-xl md:text-2xl font-medium">
              <span className="relative inline-block group overflow-hidden">
                <span
                  className={clsx(
                    'bg-linear-to-r from-green-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-green-500',
                    'block transform transition-transform duration-500 group-hover:translate-y-full'
                  )}
                >
                  Web developer{' '}
                </span>
                <span
                  className={clsx(
                    'bg-linear-to-r from-green-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-green-500',
                    'absolute inset-0 block transform translate-y-full transition-transform duration-500 group-hover:translate-y-0'
                  )}
                >
                  And a Student
                </span>
              </span>
            </h2>

            {/* Divider line */}
            <motion.div
              className="w-20 h-1 bg-linear-to-r from-rose-500 to-purple-500 rounded-full mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed max-w-2xl">
              A wizard of code, weaving stories through projects and applications. I'm passionate about web development and an enthusiast for technology, constantly crafting web experiences and building tools that make an impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="px-8 py-3 bg-linear-to-r from-rose-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-rose-500/50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                className="px-8 py-3 border-2 border-rose-500 text-rose-500 dark:text-rose-400 rounded-lg font-semibold hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-300 relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 border-2 border-rose-600 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="flex basis-1/3 justify-center sm:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 w-40 h-40 bg-linear-to-r from-rose-500/30 to-purple-500/30 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative flip-card w-40 h-40 perspective-[1000px] group cursor-pointer">
                  <div className="relative w-full h-full transition-transform duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
                    <div className="absolute w-full h-full backface-hidden">
                      <img
                        alt="Profile Image"
                        src="/assets/profile.png"
                        width={180}
                        height={180}
                        className="w-full h-full object-cover rounded-full shadow-2xl"
                        draggable={false}
                        style={{ userSelect: "none" }}
                      />
                    </div>
                    <div className="absolute w-full h-full backface-hidden transform-[rotateY(180deg)]">
                      <img
                        alt="Back Image"
                        src="/assets/rickroll-roll.gif"
                        width={180}
                        height={180}
                        className="w-full h-full object-cover rounded-full shadow-2xl"
                        draggable={false}
                        style={{ userSelect: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
