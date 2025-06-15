import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    // {
    //   title: "TaskMaster Pro",
    //   description:
    //     "A productivity app that blocks distractions until tasks are done.",
    //   tech: ["React Native", "SQLite", "Node.js"],
    //   github: "https://github.com/yourusername/taskmaster",
    //   live: "https://taskmaster.app",
    // },
    // {
    //   title: "GroceryGo",
    //   description: "Mobile app for grocery shopping with user & admin modules.",
    //   tech: ["Flutter", "Firebase", "Stripe"],
    //   github: "https://github.com/yourusername/grocerygo",
    // },
    // {
    //   title: "DevPort",
    //   description:
    //     "A developer portfolio template with animations and theme switch.",
    //   tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    //   live: "https://devport.vercel.app",
    // },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-indigo-50 text-indigo-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        {projects.length === 0 ? (
          <p className="text-center text-indigo-700 text-lg">
            Will be updating this section soon with my latest projects. Stay
            tuned!
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md border border-indigo-200 border-l-4 border-l-indigo-500 hover:border-l-indigo-700 transition-colors duration-300 p-6 hover:shadow-xl hover:scale-[1.02]"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-indigo-800 mb-4">{project.description}</p>
                <ul className="flex flex-wrap text-sm text-indigo-600 mb-4 gap-2">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-indigo-100 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-700 hover:text-indigo-900"
                      aria-label="GitHub Repository"
                    >
                      <Github />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-700 hover:text-indigo-900"
                      aria-label="Live Project Link"
                    >
                      <ExternalLink />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
