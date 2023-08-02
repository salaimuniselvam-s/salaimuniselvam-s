import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import config from "../../site.config";
import { motion } from "framer-motion";

export default function About() {
  let [heartColor] = useState("#ff0000");

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Head>
          <title>About | {config.siteMetadata.title}</title>
          <link
            rel="icon"
            href={config.siteMetadata.favicon}
            type="image/x-icon"
          />
        </Head>

        <div className=" flex flex-col py-3 mx-auto">
          <div className="flex flex-col items-center justify-center w-full flex-10 px-6 text-center">
            <h1 className="text-5xl font-semibold text-underline-2px button-text">
              About
            </h1>
            <p className="text-xl text-gray-600/90 dark:text-white/50 font-bold text-center mb-1 mt-3 button-text">
              Here's a little bit about me
            </p>
            <br />
            <div className="relative mx-auto">
              <div style={{ zIndex: 100 }} className="rounded-full">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Image
                      style={{ zIndex: 0 }}
                      src={config.siteMetadata.authorImage}
                      width="111"
                      className="rounded-full"
                      height="111"
                      draggable="false"
                    />
                  </motion.div>
                </motion.div>
              </div>
              <h1 className="text-3xl font-bold mt-2 padding-2 mx-auto max-w-sm text-black dark:text-white button-text">
                Hey, i'm{" "}
                <span className="font-semibold mt-4 text-3xl text-primary mx-auto max-w-sm">
                  {config.siteMetadata.author}
                </span>
                ,
              </h1>
              <div>
                <div className="flex flex-col items-center w-full flex-1 text-center">
                  <p className="text-black dark:text-white text-2xl padding-2 font-bold max-w-sm text-padding button-text">
                    I'm a{" "}
                    <span className="text-black dark:text-white text-underline-2px font-semibold mt-4 text-2xl max-w-sm">
                      {config.AboutMePage.developerGrade}
                    </span>
                    ,
                  </p>
                  <p className="text-black dark:text-white text-2xl padding-2 font-bold max-w-sm button-text">
                    from{" "}
                    <span className="text-black dark:text-white text-underline-2px font-semibold mt-4 text-2xl max-w-sm">
                      {config.AboutMePage.yourLand}
                    </span>
                    .
                  </p>
                </div>
                <br />
                <div className="pb-4 py-4 gap-3  flex flex-col justify-center items-center text-lg max-w-5xl">
                  <h1>
                    With a solid foundation in HTML, CSS, and JavaScript, I
                    bring expertise in modern frameworks such as React.js and
                    Next.js. I also possess a strong understanding of back-end
                    technologies including Node.js, Mongodb and SQL, enabling me
                    to develop full-stack applications seamlessly.
                  </h1>
                  <h1>
                    Over the past two years, I have honed my skills and
                    delivered impactful solutions as an Software Engineer. My
                    proficiency extends beyond traditional web development,
                    encompassing the realm of blockchain technology with
                    experience in Solidity and Hyperledger Fabric.{" "}
                  </h1>
                  <h1>
                    I possess expertise in leveraging Docker and GitHub Actions
                    to automate processes and optimize workflows, enabling
                    seamless development and deployment experiences.
                  </h1>{" "}
                  <h1>
                    With a keen eye for detail, I consistently strive to deliver
                    high-quality code and an intuitive user interface. As a
                    software developer, I am dedicated to pushing boundaries and
                    continuously improving my skills. I thrive in collaborative
                    environments, where I can contribute my expertise and work
                    alongside talented teams to deliver innovative solutions
                    that exceed expectations.
                  </h1>
                  <h1>
                    {" "}
                    Let's connect and discuss how we can leverage my skills to
                    create impactful and user-centric software solutions.
                    <i
                      className="fas fa-heart"
                      style={{ color: heartColor, cursor: "pointer" }}
                    />
                  </h1>
                  <div className="flex flex-row justify-center items-center mt-3 padding">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <a
                        href={config.social.github}
                        target="_blank"
                        className="bg-primary font-display font-semibold text-lg px-5 py-2 rounded-md mr-5 button text-white shadow-2xl shadow-primary transition-all duration-200 button button-text"
                      >
                        <i className="fa-brands fa-github" /> Github
                      </a>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <a
                        href={config.social.twitter}
                        target="_blank"
                        className="bg-primary  font-display font-semibold text-lg px-5 py-2 rounded-md button text-white shadow-2xl shadow-primary transition-all duration-200 button button-text"
                      >
                        <i className="fa-brands fa-twitter" /> Twitter
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
