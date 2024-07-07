import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tanmay Chaudhari",
  initials: "TC",
  location: "Binghamton, New York",
  locationLink: "https://www.google.com/maps/place/Binghamton",
  about:
    "Computer Programmer",
  summary:
    "A Master's in Computer Science student at Binghamton University making result-driven and user-focused applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/48885301?v=4",
  personalWebsiteUrl: "https://tanmayc.me/personal-site",
  contact: {
    email: "hctanmay@gmail.com",
    tel: "+16072968139",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tanmayc07",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hctanmay/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/[name]",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "State University of New York at Binghamton",
      degree: "Master's of Science in Computer Science - 3.8 GPA",
      start: "2023",
      end: "2025",
    },
    {
      school: "University of Mumbai",
      degree: "Bachelor's Degree in Computer Engineering - 8.7 CGPA",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Ugam - A Merkle Company",
      badges: [],
      title: "Associate Analyst",
      start: "June 2022",
      end: "May 2023",
      description: 
        "Designed and deployed over 50 survey forms using HTML, CSS, JavaScript, and Python, leveraging Dynata for efficient and accurate data collection, resulting in a 30% increase in response rates and significantly enhancing the overall data quality. Implemented and automated end-to-end data pipelines with SQL, Python, and Apache Airflow, significantly reducing data processing time by 40% and improving data accuracy by 25%, while also enhancing the overall data handling efficiency. Constructed interactive dashboards using Tableau and Power BI, enhancing decision-making and efficiency by 20%, and automated internal tools with Python and Shell scripting to optimize project management, saving 100+ hours monthly"
    },
    {
      company: "Dezignolics pvt. ltd",
      // link: "https://parabol.co",
      badges: [],
      title: "Machine Learning Intern",
      // logo: ParabolLogo,
      start: "January 2021",
      end: "June 2021",
      description:
        "Trained extensively and acquired expertise in AI/ML Concepts predominantly with Python programming language, leveraging libraries such as Scikit-learn, Matplotlib, Seaborn, and Pandas. Created and fine-tuned machine learning models for a house price prediction problem, achieving a 15% increase in predictive accuracy compared to baseline models. Processed and analyzed a dataset of over 100K samples, deriving insights leading to a 35% improvement in model performance through feature engineering and selection.",
    },
    {
      company: "Trivia Softwares",
      // link: "https://clevertech.biz",
      badges: [],
      title: "Java Developer Intern",
      // logo: ClevertechLogo,
      start: "June 2019",
      end: "December 2019",
      description:
        "Led and contributed to diverse Java application projects, skillfully incorporating Graphical User Interfaces (GUI) and Database Connectivity, demonstrating a high level of proficiency in Java development. Spearheaded development of a Student Management System Software Project utilizing Java Swing Library, ensuring a user-friendly interface at frontend and achieved a 20% improvement in efficiency and user satisfaction through intuitive design and functional implementation.",
    },
  ],
  skills: [
    "C",
    "C++",
    "Java",
    "Python",
    "Flask",
    "SQL",
    "Scikit-Learn",
    "Tensorflow",
    "Nodejs/Reactjs",
    "Docker/NGINX/Git-Github",
    "Linux/Windows/MacOS",
  ],
  projects: [
    {
      title: "Write.it",
      techStack: [
        "Team Project",
        "Nodejs",
        "Expressjs",
        "MongoDB",
        "Ejs",
        "JWT"
      ],
      description: "A Full-Stack Web Blogging Application",
      // logo: ConsultlyLogo,
      link: {
        label: "writeit",
        href: "https://github.com/tanmayc07/Blog-App",
      },
    },
    {
      title: "FIFA Player Stats Analysis",
      techStack: ["Team Project", "Python", "Flask", "MongoDB Atlas"],
      description:
        "Analysis of FIFA Player Stats for last 10 years using non-trivial NoSQL queries.",
      // logo: MonitoLogo,
      link: {
        label: "fifastats",
        href: "https://github.com/tanmayc07/CS532_Nosql_Project",
      },
    },
    {
      title: "tanmayc.me",
      techStack: ["Side Project", "Hugo", "PaperMod", "CSS"],
      description:
        "My personal website and blog. Powered by Hugo and PaperMod with custom CSS.",
      // logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://tanmayc.me/personal-site",
      },
    },
    {
      title: "Vaccine Efficiency Predictor",
      techStack: ["Team Project", "Python", "Scikit-learn", "Streamlit"],
      description:
        "Automating Prediciton of B-cell Epitope for Vaccine Efficiency Estimation.",
      // logo: Minimal,
      link: {
        label: "vaccine",
        href: "https://github.com/tanmayc07/WWCodeHackathon",
      },
    },
    {
      title: "Weather Dashboard",
      techStack: ["Side Project", "Python", "Django", "OpenWeatherMap API"],
      description:
        "Simple and functional Weather Dashboard Web App.",
      // logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/tanmayc07/WeatherDashboard",
      },
    },
  ],
} as const;
