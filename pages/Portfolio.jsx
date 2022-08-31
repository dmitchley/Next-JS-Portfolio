import React from "react";

import { MdExpandMore } from "react-icons/md";
import eosdashboard from "../public/eosdashboard.jpg";
import eosApp from "../public/eos-dance-1.png";
import Fakealot from "../public/fakealot.png";
import Link from "next/link";
import winnr from "../public/winnr.png";
import Hangman from "../public/hangman.png";
import itunesAPI from "../public/itunes.png";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Fakealot",
      imageSrc: Fakealot,
      url: "https://github.com/dmitchley/Ecommerce-Store---Vanilla-JS-",
    },
    {
      id: 2,
      title: "Eos Dance School - Mobile App",
      imageSrc: eosApp,
      url: "https://github.com/dmitchley/eos_application",
    },
    {
      id: 3,
      title: "Eos Dance School - Dashboard",
      imageSrc: eosdashboard,
      url: "https://github.com/dmitchley/eos_adminpanel",
    },
    {
      id: 4,
      title: "Betting Application",
      imageSrc: winnr,
      url: "https://github.com/dmitchley/WinnR",
    },
    {
      id: 5,
      title: "Hangman Game",
      imageSrc: Hangman,
      url: "https://hyperion-hangman.herokuapp.com/",
    },
    {
      id: 6,
      title: "iTunes API",
      imageSrc: itunesAPI,
      url: "https://hyperionitunes.herokuapp.com/",
    },
  ];

  return (
    <>
      <div className="w-full mt-5">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
          <div className="inline-style">
            <h2 className="text-center text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold mb-10">
              portfolio
            </h2>

            <div className="max-w-5xl mx-auto grid  gap-8 ">
              {portfolios.map(({ id, title, imageSrc, url }) => (
                <Link key={id} href={`${url}`} target="_blank">
                  <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md ">
                    <h1 className="text-5xl text-center  capitalize my-4 font-bold duration-200 group-hover:underline underline-offset-4">
                      {title}
                    </h1>
                    <Image
                      src={imageSrc}
                      alt={title}
                      className="  rounded-md duration-200 
                  hover:scale-110 "
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <style jsx>{`
            .inline-style {
              margin-top: 50px;
            }
            .image-heights {
              max-height: 515px;
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
