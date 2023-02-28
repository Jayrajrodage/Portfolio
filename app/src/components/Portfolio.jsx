import React from "react";
import EtherPay from "../assets/portfolio/EtherPay.png" ;
import Google from "../assets/portfolio/google drive dapp.png";
import Voting from "../assets/portfolio/Voting dapp.png";
import Lottery from "../assets/portfolio/Lotterydapp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: EtherPay,
      wesite: " https://etherpay-jayrajrodage.vercel.app",
      name:"EtherPay",
      link: "https://github.com/Jayrajrodage/EtherPay"
    },
    {
      id: 2,
      src: Voting,
      wesite: "https://votingdapp-jayrajrodage.vercel.app",
      name: "Voting Dapp",
      link: "https://github.com/Jayrajrodage/Voting_Dapp"
    },
    {
      id: 3,
      src: Lottery,
      wesite: "https://lottery-dapp-jayrajrodage.vercel.app",
      name: "Lottery Dapp",
      link: "https://github.com/Jayrajrodage/lottery_dapp"
    },
    {
      id: 4,
      src: Google,
      wesite: "https://google-drive-dapp.vercel.app",
      name: "Google drive Dapp",
      link: "https://github.com/Jayrajrodage/Goole-drive-dapp"
    },
  ];
  const handleCodeClick = (link) => {
    window.open(link, '_blank');
    
  };

  const handleLinkClick = (wesite) => {
    window.open(wesite, '_blank');  
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0">
          {portfolios.map(({ id, src,name, wesite , link}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />  <h1 className="flex items-center justify-center mt-5 font-signature font-bold text-2xl duration-200 hover:scale-105">{name}</h1>
              <div className="flex items-center justify-center">
              
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleLinkClick(wesite)} >
                  Link 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleCodeClick(link)}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
