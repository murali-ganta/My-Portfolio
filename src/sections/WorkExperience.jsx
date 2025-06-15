import React from "react";
import { motion } from "framer-motion";
import { Server, Code2, LayoutTemplate } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "UI/UX Designer",
      company: "Cambrian R&D",
      location: "Sudbury, ON, Canada",
      duration: "April 2025 – Present",
      description: [
        "Designing user interfaces and experiences for web applications.",
        "Collaborating with developers to implement designs and ensure usability.",
        "Conducting user research and usability testing to improve designs.",
        "Creating wireframes, prototypes, and high-fidelity mockups.",
        "Staying updated with design trends and best practices.",
        "Participating in design reviews and providing feedback to team members.",
      ],
      icon: <LayoutTemplate className="text-white w-5 h-5" />,
      color: "blue",
    },
    {
      role: "Software Design Engineer - I",
      company: "Pixentia Solutions India Pvt. Ltd.",
      location: "Hyderabad, TS, India",
      duration: "Sep 2021 – Dec 2023",
      description: [
        "Led a team of developers to improve efficiency and deliver projects successfully.",
        "Collaborated with customers and teams to gather requirements and resolve issues.",
        "Built responsive web interfaces using React, Redux, and RESTful APIs.",
        "Wrote clean, testable code and automated UI tests using Selenium.",
        "Contributed in Agile sprints, standups, and maintained implementation documentation.",
      ],
      icon: <Code2 className="text-white w-5 h-5" />,
      color: "green",
    },
    {
      role: "Application Support Engineer",
      company: "SLK Software Pvt. Ltd.",
      location: "Bengaluru, KA, India",
      duration: "Sep 2020 – July 2021",
      description: [
        "Provided L1/L2 support using ServiceNow for issue tracking and resolution.",
        "Analyzed logs and collaborated with users to troubleshoot production issues.",
        "Maintained documentation and shared regular status updates with leads.",
      ],
      icon: <Server className="text-white w-5 h-5" />,
      color: "purple",
    },
  ];

  // Mapping colors to full Tailwind classes (static)
  const colorClasses = {
    blue: {
      border: "border-blue-500",
      bg: "bg-blue-600",
    },
    green: {
      border: "border-green-500",
      bg: "bg-green-600",
    },
    purple: {
      border: "border-purple-500",
      bg: "bg-purple-600",
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="py-16 px-4 bg-indigo-50 text-indigo-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">
          Work Experience
        </h2>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`bg-white shadow-md rounded-xl p-6 flex gap-4 items-start ${
                colorClasses[exp.color].border
              }`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div
                className={`${
                  colorClasses[exp.color].bg
                } p-2 rounded-full flex items-center justify-center`}
              >
                {exp.icon}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <div className="text-sm text-indigo-500">
                      {exp.duration}
                    </div>

                    <h3 className="text-lg font-semibold text-indigo-700 mt-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-indigo-600 font-medium">
                      {exp.company}
                    </h4>
                  </div>
                  <p className="text-sm text-indigo-500">{exp.location}</p>
                </div>
                <ul className="text-indigo-700 mt-2 list-disc list-inside space-y-1 text-sm">
                  {Array.isArray(exp.description) ? (
                    exp.description.map((point, i) => <li key={i}>{point}</li>)
                  ) : (
                    <li>{exp.description}</li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
