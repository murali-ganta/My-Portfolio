import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden flex items-center">
      {/* Animated SVG waves background */}
      <svg
        className="absolute top-0 left-0 w-[200%] h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
      >
        <g className="animate-wave">
          <path
            fill="#ffffff"
            fillOpacity="0.15"
            d="M0,160 C360,240 720,80 1080,160 C1440,240 1800,80 2160,160 C2520,240 2880,80 3240,160 L3240,320 L0,320Z"
          />
          <path
            fill="#ffffff"
            fillOpacity="0.15"
            d="M2880,160 C3240,240 3600,80 3960,160 C4320,240 4680,80 5040,160 C5400,240 5760,80 6120,160 L6120,320 L2880,320Z"
          />
        </g>
      </svg>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 relative z-10">
        <div className="text-center md:text-left myInfo">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Murali Ganta
          </h1>
          <span className="block text-indigo-200 tracking-widest font-semibold mt-2">
            UX/UI DESIGNER & FULL STACK WEB DEVELOPER
          </span>

          <p className="mt-6 mb-8 max-w-lg mx-auto md:mx-0 text-indigo-100 text-lg leading-relaxed">
            I'm a Web developer crafting fast, responsive web applications with
            the MERN stack.
          </p>
          <a
            href="#projects"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-indigo-100 transition"
          >
            Explore My Work
          </a>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave {
          animation: wave 10s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-15px) }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
