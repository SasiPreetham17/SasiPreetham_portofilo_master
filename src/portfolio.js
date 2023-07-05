/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sasi Preetham's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sasi Preetham's Portfolio",
    type: "website",
    
  },
};

//Home Page
const greeting = {
  title: "Sasi Preetham",
  logo_name: "Sasi Preetham",
  nickname: "Front-End Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://res.cloudinary.com/ddmmelgng/image/upload/v1660920389/Resume-page-001_1_bffroz.jpg",
  
  githubProfile: "https://github.com/SasiPreetham17",
};

const socialMediaLinks = [


  {
    name: "Github",
    link: "https://github.com/SasiPreetham17",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sasi-preetham-657387196",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:sasi245000@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/SasiPreetham14?t=7",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/sasi.preetham.16",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sasi_rulezz/?utm_medium=copy_link",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "JavaScript & React JS",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing Web Pages with Latest Features and Functionalities",
        "⚡ Creating User-Interactive Web Pages with latest libraries in React",
        "⚡ Developing Web Pages with Pictorial representation of data",
        "⚡ Creating Dropdowns and Forms ",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React JS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Bar Chart",
          fontAwesomeClassname: "fa-bar-chart",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        
      ],
    },
    {
      title: "Front-End Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using React JS",
        "⚡ Creating application backend in Node JS",
        
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React JS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Node JS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        
        
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Pulling and Commiting of Code from the repository",
      ],
      softwareSkills: [
        
        
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Editing Images in Photoshop and Lightroom",
      ],
      softwareSkills: [
        {
          skillName: "Adobe PhotoShop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#01014d",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe LightRoom",
          fontAwesomeClassname: "simple-icons:adobelightroom",
          style: {
            color: "#31A8FF",
          },
        },
       
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Pragati Engineering College Kakinada",
      subtitle: "B.Tech. in Mechanical Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "Pragati Engineering College Kakinada",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic mechanical engineering subjects like MOS, EM, TD, etc.",
        "⚡ Apart from this, I have done courses on Python, Core Java and Full Stack Development.",
      ],
      website_link: "https://pragati.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Vizag Steel Plant",
      subtitle: "- Prabhakara Rao",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://res.cloudinary.com/ddmmelgng/image/upload/v1661786576/Steel_Plant_Certificate__page-0001_axjaj6.jpg",
      alt_name: "Vizag Steel Plant",
      color_code: "#ffff",
    },
    {
      title: "Cloud Computing",
      subtitle: "- Jim Sullivan",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/3ZBTK29VUCES",
      alt_name: "Cloud Computing",
      color_code: "#00000099",
    },
    {
      title: "NIT",
      subtitle: "- Core Java Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://res.cloudinary.com/ddmmelgng/image/upload/v1661858133/Java_Certificate__page-0001_rlu6u6.jpg",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "IIRS",
      subtitle: "- R.P. Singh",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://res.cloudinary.com/ddmmelgng/image/upload/v1661858133/IIRS_Certificate__page-0001_kaypyl.jpg",
      alt_name: "IIRS",
      color_code: "#1F70C199",
    },
    {
      title: "APSSDC",
      subtitle: "- Arja Srikanth",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://res.cloudinary.com/ddmmelgng/image/upload/v1661858117/APSSDC_Automotive_BIW_zfkdee.jpg",
      alt_name: "APSSDC",
      color_code: "#0C9D5899",
    },
    {
      title: "MicroSoft",
      subtitle: "- Tom Brunskill",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://res.cloudinary.com/ddmmelgng/image/upload/v1661858134/Virtual_Internship_Platform_Certificate__page-0001_uuqxz1.jpg",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "APSSDC",
      subtitle: "- Arja Srikanth",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://res.cloudinary.com/ddmmelgng/image/upload/v1661858118/APSSDC_Aerospace_Structure_and_Simulation_liubtt.jpg",
      alt_name: "APSSDC",
      color_code: "#1F70C199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Workshops",
  description:
    "I am working in Tata Consultancy Services as Front-End Developer. I love taking part in events and workshops .",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Frontend Developer",
          company: "Ericsson",
          company_url: "https://www.ericsson.com",
          logo_path: "legato_logo.png",
          duration: "May 2022 - Present",
          location: "Hyderabad, Telangana",
          description:
            "Working closely with cross-functional teams, including designers,backend developers, and testers, to gather requirements and ensure smooth project execution.Creating user-friendly and visually appealinginterfaces using HTML, CSS, and JavaScript frameworks like ReactJS.Developing a robust and intuitive form submission system that allowed users to provide necessary safety information and upload images of their personalprotective equipment (PPE) kits.Implementing AI algorithms to detect the confidence and safetylevels of PPE equipment based on the uploaded images.",
          color: "#0879bf",
        },
        {
          title: "Frontend Developer",
          company: "Westpac Banking",
          company_url: "https://www.westpac.com.au",
          logo_path: "muffito_logo.png",
          duration: "April 2021 - May 2022",
          location: "Pune, Maharashtra",
          description:
            "Developed an UI for Banking to make the customers login and logout easily whenever they want toperform any operations.We created an form with input fields for creation of account and created an API to fetch the dataand check if user is present already in the database. We have also restricted age for creation of account and to access other features in banking.Developed other security features for authentication and toggle switches.",
          color: "#9b1578",
        },
       
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Light and Medium Merchant Mill",
          company: "Visakhaptnam Steel Plant",
          company_url: "https://www.vizagsteel.com",
          logo_path: "stanford_logo.png",
          duration: "Sept 2018 - Oct 2018",
          location: "Visakhapatnam, Andhra Pradesh",
          description:
            "I have worked on developing new Casting Division are rolled into billets, Evaporating cooling systems in Rolling Mill furnaces.",
          color: "#000000",
        },
        {
          title: "Undergraduate & Masters Virtual Internship Platform",
          company: "Microsoft",
          company_url: "https://www.delhivery.com/",
          logo_path: "microsoft_logo.png",
          duration: "May 2020 - June 2020",
          description:
            "I have learned how different it is from Campus to Corporate world and work ready skills which enhances the confidence and work lif balance easy as well.",
          color: "#ee3c26",
        },
        
      ],
    },
    {
      title: "Workshops",
      experiences: [
        {
          title: "Biped Robotics",
          company: "Robokart & Innovation cell, IIT Bombay",
          company_url: "https://istembcetworkshops.weebly.com/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "I have taken workshop for development of Robotic technology and working of the different parts while injecting the code to the Biped Robot.",
          color: "#4285F4",
        },
        {
          title: "ARDUINO VOICE CONTROLLED CAR",
          company: "JNTU Kakinada",
          company_url: "https://www.jntuk.edu.in",
          logo_path: "dsc_logo.jpg",
          duration: "Feb 2018 - Mar 2018",
          location: "Kakinada, Andhra Pradesh",
          description:
            "We have developed an Voice Controlled Car with latest technology which is also possible using mobile device as well which can enhance the usage of latest technology.",
          color: "#D83B01",
        },
      
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Frontend projects.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };


// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_profile.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you in Front-End Development.",
  },
  blogSection: {
    title: "Portfolio",
    /*subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",*/
    link: "https://sasipreetham.ccbp.tech/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "D.No-2-44-42,Bhaskar Nagar, Kakinada, Andhra Pradesh - 533003",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/XE52qTaDggdgwPxD8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8121495501, 8500990940",
  },
};


export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
