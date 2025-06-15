import React from "react";
import { useInView } from "react-intersection-observer";

const SectionWrapper = ({ id, title, children, className = "" }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 px-4 flex flex-col items-center justify-center ${className}`}
    >
      <h2
        className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-300 inline-block
          ${
            inView
              ? "text-blue-600 border-b-4 border-blue-600"
              : "text-gray-800 border-b-4 border-transparent"
          }
        `}
      >
        {title}
      </h2>
      <div className="w-full max-w-5xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;
