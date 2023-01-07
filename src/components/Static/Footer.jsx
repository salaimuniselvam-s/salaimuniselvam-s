import config from "../../../site.config.js";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      link: config.social.twitter,
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      link: config.social.github,
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      link: config.social.instagram,
    },
  ];

  return (
    <>
      <footer>
        <div className="max-w-7xl mx-auto py-6  px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto py-6 border-t border-gray-500/10 padding">
            <div className="mt-1 flex justify-center space-x-6">
              {socials.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    key={social.name}
                    target="_blank"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 button-text"
                    href={social.link}
                  >
                    <span className="sr-only">{social.name}</span>
                    <i className={`${social.icon} cursor-pointer`}></i>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
