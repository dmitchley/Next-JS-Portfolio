import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
          <div className="inline-style">
            <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
              me
            </h2>

            <div className="shadow-xl shadow-blue-300 my-8 px-8">
              <p className="py-4 max-w-2xl mx-auto">
                I grew up on the East Coast of South Africa however I now live
                in Beautiful Cape Town. I recently completed a Bootcamp at
                Hyperion Development and look forward to what the future has in
                store! I am Proficient in HTML, CSS, Javascript and UI Design
                with more than 8 years of freelance experience. I love designing
                and have a very creative eye, all of my work follows current
                industry standards.
              </p>
            </div>

            <div className="flex items-center justify-center gap-10">
              <Link href="/resume.pdf" download={true}>
                <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                  resume
                  <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                    <MdExpandMore size={25} />
                  </span>
                </div>
              </Link>

              <Link href="/Portfolio">
                <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                  my portfolio
                  <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                    <MdExpandMore size={25} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .inline-style {
          margin-top: 50px;
        }
      `}</style>
    </>
  );
};

export default About;
