import { generateSlug } from "./utils/slugify";

const experienceDetails = [
  {
    title: "Break and Bread",
    role: "Full Stack Web Developer",
    description: [
      "Played a key role in the development of 'Break and Bread,' a web platform offering meal planning, AI-generated recipes, and meal nutrition information.",
      "Implemented robust front-end features using ReactJS, enhancing user experience and accessibility.",
      "Designed and integrated back-end APIs with Firebase to enable seamless data storage, user authentication, and dynamic content updates.",
      "Optimized database queries and application performance for faster load times and a smoother user interface.",
      "Collaborated closely with clients to translate requirements into technical solutions, ensuring business objectives were met.",
      "Mentored junior developers and provided code reviews to maintain high-quality coding standards.",
    ],

    achivements: [
      "Successfully developed and launched the 'Break and Bread' platform, providing users with AI-powered meal planning and nutrition insights.",
      "Mentored junior developers, fostering a collaborative environment and improving overall team productivity.",
      ,
    ],
    companyName: "Break and Bread",
    duration: "2021-present",
    slug: generateSlug("Break and Bread"),
  },
  {
    title: "Fantronics",
    role: "Full Stack Web Developer",
    description: [
      "Led the development of 'Skoboard,' a dynamic web application designed to provide real-time score tracking and analytics.",
      "Built a responsive front-end using ReactJS, ensuring seamless cross-platform usability and accessibility.",
      "Integrated real-time data fetching and updates using Firebase, enabling users to stay updated with live scores and statistics.",
    ],
    achivements: [
      "Played a pivotal role in designing user-centric features that boosted platform engagement and retention rates.",
      "Earned recognition for delivering a scalable and high-performance web app on tight deadlines.",
    ],
    companyName: "Fantronics",
    duration: "2021-present",
    slug: generateSlug("Fantronics"),
  },
  {
    title: "UpWork",
    role: "Full Stack Developer",
    description: [
      "Developed custom web solutions for clients, specializing in building responsive, scalable, and high-performance web apps using ReactJS and Firebase.",
      "Worked on both front-end and back-end development, ensuring seamless integration of features and a smooth user experience.",
      "Collaborated with clients to gather requirements and provide tailored solutions that meet business objectives and user needs.",
    ],
    achivements: [
      "Successfully delivered 15+ projects on Upwork with high client satisfaction, leading to a 95%+ client return rate.",
      "Consistently met project deadlines, leading to repeat business and long-term client relationships.",
      ,
    ],
    link: "",
    companyName: "UpWork",
    duration: "2020-present",
    slug: generateSlug("UpWork"),
  },
  {
    title: "Fiverr",
    role: "Full Stack Developer",
    description: [
      "Experienced full-stack web developer with expertise in ReactJS, Firebase, and creating high-performance, scalable web applications.",
      "Available for both front-end and back-end development, offering end-to-end web solutions tailored to your business needs.",
      "Proficient in integrating real-time data, user authentication, and APIs to create dynamic and interactive platforms.",
    ],
    achivements: [
      "Successfully completed 20+ projects on Fiverr, with clients consistently rating my work 5 stars for quality and timely delivery.",
      "Built custom solutions for businesses of all sizes, from startups to established brands, delivering tailored web apps that meet specific needs.",
      ,
    ],
    link: "",
    companyName: "Fiverr",
    duration: "2020-present",
    slug: generateSlug("Fiverr"),
  },
];


export default experienceDetails;
