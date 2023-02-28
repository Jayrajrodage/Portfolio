import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 font-signature">
          Hello, I'm Yuvraj Rodage, currently pursuing B.Tech in Computer Science, and I am passionate about blockchain technology.My passion for blockchain technology started during my studies, where I learned about the potential of decentralized systems to bring about positive change in various industries.
        </p>
        <br />
        <p className="text-xl font-signature">
          I have worked on several blockchain projects during my studies. I am also familiar with developing decentralized applications (DApps) and smart contracts.
        </p>
        <br />

        <p className="text-xl font-signature">
          My ultimate goal as a blockchain developer is to build decentralized solutions that enable trust, transparency, and security. I believe that blockchain technology has the potential to revolutionize various industries and create new opportunities for people around the world.
        </p>
      </div>
    </div>
  );
};

export default About;
