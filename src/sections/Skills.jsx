import React from "react";
import { motion } from "framer-motion";

const categorizedSkills = {
  Frontend: [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "SCSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
  ],
  Databases: [
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],
  Tools: [
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Azure DevOps",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
    },
    {
      name: "Postman",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ],
};

const categoryColors = {
  Frontend: "border-blue-400",
  Backend: "border-green-400",
  Databases: "border-purple-400",
  Tools: "border-pink-400",
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const categories = Object.entries(categorizedSkills);

  return (
    <section className="bg-indigo-50 text-indigo-900 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.h2
          className="text-3xl font-bold text-center col-span-2 mb-10"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        {categories.map(([category, skills]) => (
          <motion.div
            key={category}
            className={`grid grid-cols-5 gap-3 bg-white rounded-lg shadow p-4 ${categoryColors[category]}`}
            style={{ height: 240 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Category Label */}
            <motion.div
              className="col-span-1 flex items-center justify-center"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-indigo-700 rotate-[-90deg] origin-center whitespace-nowrap">
                {category}
              </h3>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              className="col-span-4 grid grid-cols-4 gap-3 justify-items-center items-center"
              variants={containerVariants}
            >
              {skills.map(({ name, logo }) => (
                <motion.div
                  key={name}
                  className="flex flex-col items-center w-12 cursor-pointer"
                  title={name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={logo}
                    alt={name}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                  <span className="text-xs text-indigo-700 mt-1">{name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
