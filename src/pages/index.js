import Head from "next/head";
import { BsFillMoonStarsFill, BsBrushFill, BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { SiVisualstudiocode } from "react-icons/si";
import {
  SiReact,
  SiJavascript,
  SiSass,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiMiro,
} from "react-icons/si";
import Image from "next/image";
import myImg from "../pages/personalimg.png";
import proj1 from "../pages/proj1.png";
import soonprof from "../pages/soon.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Idan Ermias Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <nav className="py-5 px-10 flex justify-between align-middle bg-gray-200 dark:bg-black">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-3xl dark:text-white"
          />
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="https://www.linkpicture.com/q/Screenshot-2023-02-04-at-17.52.33.png"
          >
            Open CV
          </a>
        </nav>
      </section>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-cyan-600 font-medium md:text-6xl">
              Idan Ermias
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-white">
              Im a Front End Developer & UX/UI Designer. I bring with me tools
              and knowledge of programming languages and building projects from
              scratch.I like to work on a team. I am very creative with a sharp eye
              and attention to detail.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              className="hover:text-blue-800 hover:-translate-y-2 transition duration-500 dark:hover:text-white"
              href="https://www.linkedin.com/in/idan-ermias"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="hover:text-black hover:-translate-y-2  transition duration-500 dark:hover:text-white"
              href="https://github.com/IdanErmias"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-90 mt-20 md:h-96 md:w-96">
            <Image src={myImg} />
          </div>
        </section>
        <section>
          <div className="text-center p-10" id="about">
            <h3 className="text-3xl md:pt-20 md:text-3xl">About me</h3>
            <p className="text-md py-10 leading-8 text-gray-800 md:text-xl dark:text-white">
              I was born and raised in Ashdod, Israel. Since I can remember I
              have had a talent to build and design things. It started with my
              ability to draw and build a Lego structures as a kid. This
              continued into adulthood when I changed the whole design of my
              parents apartment. When you talk with me about design I am
              <span className="text-cyan-600"> excited</span> with all of the
              attention to details. My natural talent is expressed here and I care
              about every cm of my work.
            </p>
          </div>
        </section>
        <section>
          <div className="text-center p-10" id="services">
            <h3 className="text-3xl py-5 md:text-3xl">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-white">
              After a year of studying programming, I realized that I connect
              more with design and started to explore and study UI/UX design in
              my free time. When it comes to design and user experience, I have
              a high <span className="text-cyan-600">motivation</span> and{" "}
              <span className="text-cyan-600">desire </span> that the product I
              work on be the most efficient and convenient for the customer.
            </p>
          </div>
          <div></div>
          <div className="lg:flex gap-10">
            {/* DESIGN CARD */}
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-500 text-black">
              <BsBrushFill className="text-3xl" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful UX/UI Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4">Tools I Use:</h4>
              <div className="flex justify-around">
                <div className="text-center font-semibold p-5 rounded-xl my-10">
                  Figma
                  <SiFigma className="text-5xl" />
                </div>
                <div className="text-center font-semibold p-5 rounded-xl my-10">
                  Miro
                  <SiMiro className="text-5xl" />
                </div>
              </div>
            </div>
            {/* DEVELOPING CARD */}
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-500 text-black">
              <SiVisualstudiocode className="text-3xl text-blue-500" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Developing Client Side
              </h3>
              <p className="py-2">
                Creating clean code based on the structures of the design format
                i made.
              </p>
              <h4 className="py-4">Tools I Use:</h4>
              <div className="lg:flex">
                <div className="text-center font-semibold md:p-5 rounded-xl my-10">
                  React
                  <SiReact className="text-5xl text-blue-900" />
                </div>
                <div className="text-center font-semibold md:p-5 rounded-xl my-10">
                  JavaScript
                  <SiJavascript className="text-5xl text-yellow-400" />
                </div>
                <div className="text-center font-semibold md:p-5 rounded-xl my-10">
                  HTML5
                  <SiHtml5 className="text-5xl text-orange-600" />
                </div>
                <div className="text-center font-semibold md:p-5 rounded-xl my-10">
                  Sass
                  <SiSass className="text-5xl text-pink-700" />
                </div>
                <div className="text-center font-semibold md:p-5 rounded-xl my-10">
                  Tailwind
                  <SiTailwindcss className="text-5xl text-blue-400" />
                </div>
                <div className="text-center font-semibold md:p-5 rounded-xl my-10">
                  Bootstrap
                  <SiBootstrap className="text-5xl text-purple-900" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center p-10" id="projects">
            <h3 className="text-3xl md:text-3xl">Projects</h3>
            <p className="text-md py-10 leading-8 text-gray-800 md:text-xl dark:text-white"></p>
          </div>
          <div className="flex flex-col gap-10 py-0 lg:flex-row lg:flex-wrap">
            <div className="text-center rounded-lg h-0 basis-1/3 flex-1 shadow-2xl">
              <Image
                src={proj1}
                className="rounded-lg object-cover"
                layout="responsive"
              />
              <a
                href="https://github.com/IdanErmias/SA-ART-JEWELRY"
                className="relative  sm::text-sm inline-flex items-center justify-center p-4 px-6 py-3 lg:mt-5 mx-5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-cyan-600 rounded-full shadow-md group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-cyan-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Github
                </span>
                <span class="relative invisible">Button Text</span>
              </a>
              <a
                href="https://shayabergal-jewelry.netlify.app/"
                class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-cyan-600 rounded-full shadow-md group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-cyan-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Demo
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-2xl">
              <Image
                src={soonprof}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl mt-20 md:text-3xl text-center">
            Lets stay in touch
          </h3>
          <div className="text-center p-10 flex flex-col lg:gap-10 py-0 lg:flex-row lg:justify-center">
            <div className="shadow-xl p-10 rounded-xl my-10 dark:bg-gray-500 text-black">
              <TfiEmail className="text-2xl text-red-700" />
              <h4 className="font-medium">Email</h4>
              <h5>IdanErmias@Gmail.Com</h5>
              <a
                href="mailto:idanermias965478@gmail.com"
                className="text-blue-500"
              >
                Send a message
              </a>
            </div>
            <div className="shadow-xl p-10 rounded-xl my-10 dark:bg-gray-500 text-black">
              <BsWhatsapp className="text-2xl text-green-600" />
              <h4 className="font-medium">WhatsApp</h4>
              <h5>052-899-1935</h5>
              <a
                href="https://api.whatsapp.com/send?phone=972528991935"
                className="text-blue-500"
              >
                Send a message
              </a>
            </div>
          </div>
        </section>
      </main>
      <section>
        <footer className="text-center p-10 leading-10 bg-gray-200 dark:bg-black">
          <a href="#" className="text-2xl text-cyan-600">
            Idan Ermias
          </a>
          <ul className="lg:flex justify-center lg:gap-10 dark:text-white">
            <li className="hover:font-medium">
              <a href="#">Home</a>
            </li>
            <li className="hover:font-medium">
              <a href="#about">About</a>
            </li>
            <li className="hover:font-medium">
              <a href="#services">Services</a>
            </li>
            <li className="hover:font-medium">
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <div className="flex justify-center py-5 text-3xl gap-5 text-gray-600">
            <a
              href="https://www.linkedin.com/in/idan-ermias"
              className="hover:text-blue-800 dark:hover:text-white transition-colors duration-500"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/IdanErmias"
              className="hover:text-black dark:hover:text-white transition-colors duration-500"
            >
              <AiFillGithub />
            </a>
          </div>
          <div>
            <small className="dark:text-white">
              &copy; 2023 Idan-Ermias.Portfolio
            </small>
          </div>
        </footer>
      </section>
    </div>
  );
}
