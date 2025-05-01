import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
    <Navbar/>
    <section className="min-h-screen px-6 py-12 md:px-20 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          About CodeX
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          A real-time collaborative space where developers and learners come together
          to discuss code, brainstorm ideas, and build together — all in one unified
          environment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <FeatureCard
            title="💬 Real-Time Chat"
            description="Discuss ideas, debug issues, and stay connected through integrated team chat — all while collaborating live."
          />
          <FeatureCard
            title="🤖 AI Copilot"
            description="Get smart coding suggestions, explanations, and real-time help with our built-in AI assistant."
          />
          <FeatureCard
            title="📎 Code Snippet Sharing"
            description="Easily share and comment on code snippets within discussions — making collaboration more productive."
          />
          <FeatureCard
            title="💻 In-Browser IDE"
            description="Code, run, and experiment with your projects directly in the browser — no setup required."
          />
          <FeatureCard
            title="🧠 Interactive Whiteboard"
            description="Sketch ideas, outline systems, or brainstorm with your team using a collaborative canvas in real-time."
          />
          <FeatureCard
            title="📱 Device-Friendly Experience"
            description="Whether you're on a desktop or mobile, our responsive design ensures smooth collaboration everywhere."
          />
        </div>
      </div>
      </section>
      <Footer/>
      </>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-zinc-700 shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
    <p className="text-md text-blue-400">{description}</p>
  </div>
);

export default About;
