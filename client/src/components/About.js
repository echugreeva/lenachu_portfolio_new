import React from "react";
import heroimage from '../media/port2square.jpg'
import { BsArrowRight } from 'react-icons/bs';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 mx-10">
          <img
            className="hidden md:inline-block rounded-lg object-cover h-70 m-0 md:mb-5"
            alt="hero"
            src={heroimage}
          />
        </div>
        <div className="lg:flex-grow md:w-2/3 lg:pr-16 md:pr-8  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-2 font-medium text-white">
            Hi, I'm Lena!
          </h1>
          <h2></h2>
          <p className="mb-8 leading-relaxed">
            A fullstack developer experienced in JavaScript based programming with a background in web creation,
            ed tech & cyber security industries. Passionate about user experience and making an impact.

          </p>
          <div className="flex justify-center">
          <a
            href="#contact"
            className=" hover:bg-pink-900 py-2 px-6 focus:outline-none rounded text-base mt-auto mr-3 md:mt-0 ring-2 ring-pink-500">

            Hire Me
            <BsArrowRight className="hidden md:inline-block md:w-4 md:h-4 md:ml-1" />
          </a>
            <button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 hover:text-white rounded ring-2 ring-indigo-600">
              <a
                href="#projects"
              >
                My projects
              </a>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
