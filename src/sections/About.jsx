import React from "react";
import { motion } from "framer-motion";
// import profileImage from "../assets/Profile-Image.png";

const About = () => {
  return (
    <div className="py-16 px-4 bg-indigo-50 text-indigo-900">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I'm a{" "}
            <span className="font-semibold text-indigo-700">
              Full Stack Developer
            </span>{" "}
            passionate about creating clean, responsive, and user-focused web
            applications. I specialize in frontend development while also
            integrating backend services to deliver seamless solutions. I
            collaborate closely on product decisions, translating business goals
            into intuitive, high-impact user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {["React", "Node.js", "Tailwind CSS", "MongoDB", "TypeScript"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-indigo-200 text-indigo-900 px-4 py-1 rounded-full text-sm font-semibold"
                >
                  {skill}
                </span>
              )
            )}
          </div>
          {/* 
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-100 transition shadow"
          >
            Download Resume
          </a> */}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
