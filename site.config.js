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
        description:
          "An Ethereum-based Patient Record Management System. Efficiently stores and manages patient records on the blockchain.",
      },
      {
        id: 2,
        image: "/StakingApp.png",
        slug: "Staking Dapp",
        name: "Staking Dapp",
        github: true,
        githubLink: "https://github.com/salaimuniselvam-s/Staking-Dapp",
        website: true,
        websiteLink: "https://staking-dapp-delta.vercel.app/",
        invite: false,
        inviteLink: "",
        description:
          "Decentralised Staking Application Where Users can Stake their token for rewards. Application was Deployed on Polygon Mumbai Test Network.",
      },
      {
        id: 3,
        image: "/Fabric.png",
        slug: "Patient Data Management",
        name: "Patient Data Management",
        github: true,
        githubLink:
          "https://github.com/salaimuniselvam-s/patient-data-management-using-hyperledger-fabric",
        website: false,
        websiteLink: "",
        invite: false,
        inviteLink: "",
        description:
          "Patient data management solution built on Hyperledger Fabric provides a highly secure and scalable platform for sharing patient data across healthcare providers.",
      },
      {
        id: 4,
        image: "/Booklandia.png",
        slug: "Booklandia",
        name: "Booklandia",
        github: true,
        githubLink: "https://github.com/salaimuniselvam-s/Booklandia",
        website: true,
        websiteLink: "https://salaimuniselvam-s.github.io/Booklandia/",
        invite: false,
        inviteLink: "",
        description:
          "Booklandia is a personal website where I share my favorite books and provide detailed descriptions and recommendations for each genre.",
      },
      {
        id: 5,
        image: "/nftMarketplace.jpg",
        slug: "NFT Marketplace",
        name: "NFT Marketplace",
        github: true,
        githubLink: "https://github.com/salaimuniselvam-s/nft-marketplace",
        website: true,
        websiteLink: "https://nft-marketplace-sms.vercel.app/",
        invite: false,
        inviteLink: "",
        description:
          "The NFT Marketplace project aims to create an engaging and visually appealing web page that serves as an entry point to a marketplace focused on the trading, buying, and selling of NFTs.",
      },
      {
        id: 6,
        image: "/foodDelight.jpg",
        slug: "Food Delight",
        name: "Food Delight",
        github: true,
        githubLink: "https://github.com/salaimuniselvam-s/food-app",
        website: true,
        websiteLink: "https://food-delight.vercel.app/",
        invite: false,
        inviteLink: "",
        description:
          "Food Delight is a user-friendly web application focused on providing a delightful interface for exploring and ordering delicious meals.",
      },
      {
        id: 7,
        image: "/streamingApp.jpg",
        slug: "CODIIS Stream",
        name: "CODIIS Stream",
        github: true,
        githubLink: "https://github.com/salaimuniselvam-s/streaming-app",
        website: true,
        websiteLink: "https://streaming-app-swart-one.vercel.app/",
        invite: false,
        inviteLink: "",
        description:
          "C Stream (CODIIS Stream) is a streaming application Which allows users to enjoy their screen time by providing a platform to watch and purchase videos based on different plans.",
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
