import Head from "next/head";
import {AiFillLinkedin,AiFillGithub} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import AI_Chat from "../public/AI_Chat.png";
import Avatars from "../public/Avatars.png";
import card from "../public/card.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ali Alsalkhadi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between dark:text-white">
            <h1 className="text-4xl py-2 text-blue-800 font-medium md:text-6xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-6xl py-2 text-blue-800 md:text-7xl">
              Ali Alsalkhadi
            </h2>
            <div className="mx-auto bg-gradient-to-b from-blue-700 rounded-full w-80 h-80 relative overflow-hidden mt-7 mb-3 md:h-96 md:w-96">
              <Image src={Avatars} layout="fill" objectFit="cover" alt="Avatar"/>
            </div>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web Developer, Designer, Software Engineer
            </h3>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl py-1 text-blue-800 md:text-4xl">About Me</h3>
            <p className="text-justify text-md py-1 leading-8 text-gray-800 dark:text-gray-200">
              My name is Ali Alsalkhadi, and I am a second-year Computer Science student at the University of Windsor with a specialization in software engineering. I am passionate about utilizing my technical skills to develop innovative solutions for real-world problems. I have experience in a variety of programming languages and technologies, and am always looking for new ways to improve my skills. I am excited to share with you some of my most significant projects and accomplishments to date, which showcase my abilities in software development, web development and data structures.
            </p>
            <h3 className="text-4xl py-1 text-blue-800 md:text-4xl">Projects</h3>
          </div>
          <div className="lg:flex gap-10 text-white">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-blue-700 text- to-blue-900 flex-1">
              <Image src={AI_Chat} width={130} height={100} alt="AI Chat"/>
              <h3 className="text-lg font-medium pt-1 pb-1">
                AI_Chat
              </h3>
              <p className="py-2">
                An application that generate human-like text based on the input it receives and can be used for a variety of natural language processing tasks such as language translation, text summarization, and conversation generation.
              </p>
              <h4 className="py-2 text-white">Tools I Use</h4>
              <p className="text-white py-2">HTML | CSS | JavaScript | React | Vite | NodeJs | OpenAI</p>
              <h4 className="text-white py-1">For furthur information check out my Github</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-blue-700 text- to-blue-900 flex-1">
              <Image src={card} width={150} height={100} alt="Card"/>
              <h3 className="text-lg font-medium pt-1 pb-1">
                Credit_Card_Checkout
              </h3>
              <p className="py-2">
                A Credit_Card_Checkout application is a web-based tool that allows users to securely input their credit card information and complete a purchase. The application is built using a combination of HTML, JavaScript, and CSS to create an interactive and visually appealing user interface.
              </p>
              <h4 className="py-2 text-white">Tools I Use</h4>
              <p className="text-white py-2">HTML | CSS | JavaScript</p>
              <h4 className="text-white py-1">For furthur information check out my Github</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-blue-700 text- to-blue-900 flex-1">
              <Image src={Avatars} width={100} height={100} alt="Avatar"/>
              <h3 className="text-lg font-medium pt-1 pb-1">
                Portfolio (This Website)
              </h3>
              <p className="py-2">
                This is my personal portfolio that showcase information about me.
              </p>
              <h4 className="py-2 text-white">Tools I Use</h4>
              <p className="text-white py-2">HTML | CSS | JavaScript | React | TailwindCss | Next.js</p>
            </div>
          </div>
          <selection>
          <div className="text-5xl flex gap-6 py-3 text-blue-800">
              <AiFillLinkedin onClick={() => window.open("https://www.linkedin.com/in/alialsalkhadi")}/>
              <AiFillGithub onClick={() => window.open("https://github.com/AliAlsalkhadi") } />
            </div>
          </selection>
        </section>
      </main>
    </div>
  );
}
