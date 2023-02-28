import React from "react";
import solidity from "../assets/solidity.png"
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import etherJS from "../assets/ethers-vector-logo-seeklogo.com/ethers-seeklogo.com.svg"
import hardhat from "../assets/hardhat-vector-logo-seeklogo.com/hardhat-seeklogo.com.svg"
import Web3JS from "../assets/web3js-vector-logo-seeklogo.com/web3js-seeklogo.com.svg"
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: solidity,
      title: "Solidity",
      style: "shadow-gray-500",
    },

    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: "https://trufflesuite.com/assets/logo.png",
      title: "Truffle",
      style: "shadow-white",
    },
    {
      id: 8,
      src: hardhat,
      title: "HardHat",
      style: "shadow-yellow-400",
    },
    {
      id: 9,
      src: etherJS,
      title: "Ether.js",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: Web3JS,
      title: "Web3.js",
      style: "shadow-gray-200",
    },
  ];

  return (
    <div>
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-12 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Experience;
