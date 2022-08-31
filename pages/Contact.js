import Image from "next/image";
import React from "react";
import Link from "next/link";

import contactus from "../public/contact-us.jpg";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div id="contact" className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
          <div className="inline-style">
            <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
              contact
            </h2>

            <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white mt-4">
              <div className="w-full md:w-1/2 h-full rounded-xl p-4">
                <Image
                  src={contactus}
                  alt="man with laptop"
                  className="rounded-xl"
                />

                <p className="pt-2">+27 82 254 1550</p>
                <p className="pb-8">dylanmitchley1994@gmail.com</p>

                <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                    <Link
                      a
                      href="https://www.linkedin.com/in/dylan-mitchley-750a6798/"
                    >
                      <FaLinkedin size={25} />
                    </Link>
                  </div>

                  <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                    <Link a href="https://github.com/dmitchley">
                      <FaGithub size={25} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* form stuff  */}
              <div className="w-full md:w-1/2 h-full rounded-xl p-4">
                <div className="p-4 text-left">
                  <form
                    action="https://getform.io/f/2b84b341-c959-48ea-9266-432f28558610"
                    method="POST"
                  >
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                      <div className="flex flex-col">
                        <label className="capitalize text-sm py-2 text-slate-600 font-light">
                          name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="capitalize text-sm py-2 text-slate-600 font-light">
                          phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                        />
                      </div>

                      <div className="flex flex-col col-span-2">
                        <label className="capitalize text-sm py-2 text-slate-600 font-light">
                          email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <label className="capitalize text-sm py-2 text-slate-600 font-light">
                          message
                        </label>
                        <textarea
                          name="message"
                          rows="10"
                          className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <button className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                        send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .inline-style {
              margin-top: 50px;
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Contact;
