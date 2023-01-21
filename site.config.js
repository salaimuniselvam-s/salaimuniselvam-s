module.exports = {
  base: "https:salaimuniselvam-s.github.io",
  siteMetadata: {
    title: "Salai Muni Selvam | Website | Developer",
    description: "I'm Salai muni selvam",
    author: (
      <span>
        {" "}
        <br />
        Salai Muni Selvam
      </span>
    ),
    authorImage: "/Profile.jpg",
    image: "/banner.png",
    favicon: "/favicon.png",
    url: "https:salaimuniselvam-s.github.io",
    themeColor: "#0055ff",
    email: "salaimuniselvam7@gmai.com",
  },

  IndexPage: {
    enabled: true,
    id: "679407120743137300",
  },

  AboutMePage: {
    yourLand: "India",
    developerGrade: "Software Developer",
    developerGrade2: "Full Stack",
  },

  github: {
    enabled: true,
    username: "salaimuniselvam-s",
  },

  social: {
    twitter: "https://twitter.com/SalaiMuniSelvam",
    github: "https://github.com/salaimuniselvam-s",
    linkedin: "https://www.linkedin.com/in/salai-muni-selvam-b7aaa71b4",
    instagram: "https://www.instagram.com/____s____m_____s____/",
    facebook: "https://www.facebook.com/SalaiMuniSelvam/",
  },

  projects: {
    enabled: true,
    data: [
      {
        id: 1,
        image: "/StakingApp.png",
        slug: "Staking Dapp",
        name: "Staking Dapp",
        github: true,
        githubLink: "https://github.com/salaimuniselvam-s/Staking-Dapp",
        website: true,
        websiteLink: "https://staking-dapp-delta.vercel.app/",
        invite: false,
        inviteLink: "",
        description: "Decentralised Staking Application on Polygon",
      },
      {
        id: 2,
        image: "/Patient.png",
        slug: "Patient Record Management",
        name: "Patient Record Management",
        github: true,
        githubLink:
          "https://github.com/salaimuniselvam-s/patient_public_blockchain",
        website: true,
        websiteLink: "https://patient-public-blockchain.vercel.app/",
        invite: false,
        inviteLink: "",
        description: "Record Management System for Patients on Ethereum",
      },
    ],
  },

  skills: {
    enabled: true,
    data: [
      { name: "HTML", src: "/images/html.svg" },
      { name: "CSS", src: "/images/css.svg" },
      { name: "TailwindCSS", src: "/images/tailwindcss.svg" },
      { name: "Javascript", src: "/images/javascript.svg" },
      { name: "React", src: "/images/react.svg" },
      { name: "Next.js", src: "/images/nextjs.svg" },
      { name: "Node.js", src: "/images/nodejs.svg" },
      { name: "MySQL", src: "/images/mysql.svg" },
      { name: "Mongo DB", src: "/images/mongodb.svg" },
    ],
  },

  socials: [
    {
      name: "Twitter",
      src: "/images/twitter.svg",
      link: "https://twitter.com/SalaiMuniSelvam",
    },
    {
      name: "Github",
      src: "/images/github.svg",
      link: "https://github.com/salaimuniselvam-s",
    },
    {
      name: "Instagram",
      src: "/images/instagram.svg",
      link: "https://www.instagram.com/____s____m_____s____/",
    },
  ],

  pages: [
    {
      name: "Home",
      href: "/",
      icon: {
        default: "fal fa-home",
        active: "fas fa-home",
      },
      current: false,
    },
    {
      name: "About",
      href: "/about",
      icon: {
        default: "fal fa-user",
        active: "fas fa-user",
      },
      current: false,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: {
        default: "fal fa-project-diagram",
        active: "fas fa-project-diagram",
      },
      current: false,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: {
        default: "fal fa-envelope",
        active: "fas fa-envelope",
      },
      current: false,
    },
  ],
};
