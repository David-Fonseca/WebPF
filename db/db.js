export const bio = [
  "Hello",
  "",
];

export const skills = [
  {
    title: "Languages",
    skillName: "JavaScript",
  },
    {
    title: "Java",
    skillName: "Java",
    
  },
    {
    title: "Python",
    skillName: "Python",
    
  },
    {
    title: "C/C++",
    skillName: "C/C++",
    
  },
  {
    title: "Basics in Web Development",
    skillName: "HTML, Bootstrap",
  
  },
  {
    title: "Embedded Systems",
    skillName: "Instrumentation and Sensors",
  },
  {
    title: "Testing",
    skillName: "Code Testing",

  },
  {
    title: "Analytics",
    skillName: "Microsoft Excel, R, Tableau",
  },
  {
    title: "Editor",
    skillName: "VS Code",

  },
];

// export const awards={

//   academicAwards:[
//     {
//       awardName:"President's Admission",
//       number:"1",
//       image:"",
//       summary:"",
//       issuer:"University of Calgary",
//     },
//     {
//       awardName:"Jason Lang",
//       number:"3",
//       image:"",
//       summary:"",
//       issuer:"University of Calgary",
//     },
//     {
//       awardName:"Dean's List",
//       number:"3",
//       image:"",
//       summary:"",
//       issuer:"University of Calgary",
//     },

//     {
//       awardName:"Physics 30 IB Award",
//       number:"1",
//       image:"",
//       summary:"",
//       issuer:"St. Mary's Senior High School",
//     },

//     {
//       awardName:"Mathematics 30 IB Award",
//       number:"1",
//       image:"",
//       summary:"",
//       issuer:"St. Mary's Senior High School",
//     }

//   ]
// }


export const projects = {
  disclaimer:
    "",
  webProjects: [
    {
      projectName: "To Do App",
      image: "images/To-Do.png",
      summary:
        "Web app for keeping a list of incomplete objectives, built on html and java script for quick deployment.",
      preview: "https://david-fonseca.github.io/To-Do_List_App/",
      techStack: ["HTML", "JavaScript", "CSS"],
    },
    {
      projectName: "BMI calculator",
      image: "images/bmi.png",
      summary:
        "Simple web application that calculates body mass index (BMI) based on weight and height inputs. The app has been styled with modern CSS for an appealing visual design.",
      preview: "https://david-fonseca.github.io/BMI-calculator/",
      techStack: ["HTML", "CSS","JavaScript"],
    }
  ],
  softwareProjects: [
    {
      projectName: "VR bowling game",
      image: "images/bowling.png",
      summary:
        "Virtual reality bowling game, designed and built with unreal engine and C++. ",
      preview: "https://online.fliphtml5.com/veymr/gsof/",
      techStack: ["Unreal Engine", "C++","VR","User Experience"],
    },
    {
      projectName: "Neural Network for feature extraction of DSA images",
      image: "images/ml.png",
      summary:
        "Developed deep learning neural networks that accurately detect occlusion and recanalization within a patient's DSA brain scans, and a secondary network to determine the hemisphere where occlusion occured.",
      preview: "https://online.fliphtml5.com/veymr/fwvd/",
      techStack: ["Machine Learning", "Neural Networks", "TensorFlow","PyDicom"],
    },
    {
      projectName: "Food bank hamper software",
      image: "images/hamper.png",
      summary:
        "User friendly food hamper software. Built in Java with object oriented programming principles",
      preview: "https://github.com/David-Fonseca/ENSF-409-Final-Project-Group-27",
      techStack: ["Java", "Object Oriented Programming", "My SQL"],
    },

    {
      projectName: "Smaller projects in Java",
      image: "images/javaAssignments.png",
      summary:
        "Collection of several programs in Java, such as Flight Itinerary generator, Parking Ticket automation, Robot Control System",
      preview: "https://github.com/David-Fonseca/Java-Projects",
      techStack: ["Java", "Object Oriented Programming"],
    },
    {
      projectName: "Booking Software",
      image: "images/vet.png",
      summary:
        "Booking system for a veteranary clinnic, written in Java following OOPs principles",
      preview: "https://github.com/David-Fonseca/Booking-System",
      techStack: ["Java", "Object Oriented Programming", "My SQL"],
    },

    {
      projectName: "Smaller projects in C",
      image: "images/javaAssignments.png",
      summary:
        "Collection of several programs written in C, containing file writters/readers, obejcts & classes",
      preview: "https://github.com/David-Fonseca/C-Projects",
      techStack: ["C","Data Structures","CSV files", "TXT files"],
    },

  ],
  androidProjects: [
    {
      projectName: "Control System for an airplane",
      image: "images/airplane.png",
      summary:
        "Elevator used to control the pitch of the aircraft which in turn determines the altitude of the aircraft",
      preview: "https://youtu.be/yAzQbHMPyfY",
      techStack: ["Python", "Control", "Root Locus analysis", "PID controllers","Lead/Lag Compensators"],
    },
    {
      projectName: "Find the Hacker",
      image: "images/Hacker.png",
      summary:
        "Short python script that detects a hacker in a network using \'Spoofing\', script outputs the hacker's true IP address, and how many packets the hacker was able to steal.",
      preview: "https://github.com/David-Fonseca/findTheHacker/blob/main/mitmbuster.py",
      techStack: ["Python", "Networks", "Scapy", "Wireshark"],
    },
    {
      projectName: "Power Lines protection and Analysis",
      image: "images/power.png",
      summary:
        "Several tasks done in ETAP to analyze and design protection zones for power lines",
      preview: "https://online.fliphtml5.com/veymr/jkha/",
      techStack: ["ETAP", "Single Line Diagrams", "Three Phase Systems", "Protection Zones","Relays","breakers","Power Engineering"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "GuapaPro",
      image: "images/GuapaPro.png",
      summary:
        "E commerce platform, currently under development",
      preview: "index.html",
      techStack: ["HTML", "JavaScript", "CSS", "Firebase", "Git Bash"],
   
    },

    {
      projectName: "AutoCAD plant schematic",
      image: "images/autocad.png",
      summary:
        "industry standard schematic for Brooks JBS plant",
      preview: "https://web.autocad.com/acad/me/sid/shares/drawings/9b258f5a-6fef-4168-acfb-fe4377a6569f/editor",
      techStack: ["AutoCAD", "Computer Drafting"],
   
    },
  ],
};

export const experience = [
  {
    title: "Foothills Medical Hospital",
    duration: "September 2022 - Present",
    subtitle: "Machine Learning with Medical Imaging Intern",
    details: [
      "Working with Medical Imaging team on a transfer learning project using prebuilt complex neural networks",
      "Managing team of 5 students, overseeing progress and development of team members.",
      "",
      ""
    ],
    tags: ["Python", "Keras", "Tensorflow", "Data Pipelines", "Data Processing"],
    icon: "heartbeat",
  },
  {
    title: "Suncor",
    duration: "January 2021 - December 2021",
    subtitle: "Detchnologyst & Data Analytics Intern",
    details: [
      "Worked with data recognition algorithms to extract relevant information from critical legacy pipeline documents nationwide, and digitalized info to a standardized relational databases",
      "Maintained large databases and digitalized records dating to founding of company ",
      "Supported Developed data migration strategies to standardize all records which was implemented by company at provincial level",
      " Provided back-end support to technical team, focused on development of digitalizing company records on massive scale"
    ],
    tags: ["Python", "PowerBI", "EXCEL VBA", "SQL", "Microsoft Access", ],
    icon: "qrcode",
  },
  {
    title: "JBS Brooks",
    duration: "june 2020 - september 2020",
    subtitle: "Computer Drafter Intern",
    details: [
      "Used AutoCad to develop and produce industry standard schematic for Brooks JBS plant to be used by the senior drafters for emergency escape routes by the JBS safety department. ",
      "Consulted with Architects, senior AutoCad drafters and safety managers regarding project scope and milestone dates.",
    ],
    tags: ["AutoDesk", "AutoCad", "AutoPlant", "CAD Standards"],
    icon: "group",
  },
  {
    title: "TutorBright",
    duration: "April 2019 - January 2021",
    subtitle: "Tutor",
    details: [
      "Researched successful tutoring practices to support students to improve their fundamental understanding in all subjects and guided them towards achieving their personal academic goals.", 
      "All students that were committed to improving reached high standards of academic excellence, such as high school honour roll, and middle school honour's with distinction tittles."
    ],
    tags: ["AutoDesk", "AutoCad", "AutoPlant", "CAD Standards"],
    icon: "book",
  },
];

export const education = [
  {
    title: "Bachelors in Electrical & Computer Engineering",
    duration: "September 2018 - Current",
    subtitle: "University of Calgary",
    details: [
    "4th year student",
    "Consecutively on the Engineer's Dean's List every semester since enrollment, a shortlist of students in Engineering that achieve an average 3.7 GPA or higher; a testament of my commitment to researching, studying, and learning",
    "Additionally, I am proud to have maintained and currently holding an exceptional 3.88 gpa across my major and minor degrees"   
  ],
    tags: [
      "MATLAB",
      "Networks",
      "Hardware Design",
      "Power Engineering",
      "Engineering Practices & Ethics",
      "Circuit Design",
      "Digital Circuit Design & Pipelining",
      "Electromagentic Physics",
      "Acustic physics",
      "Quantum Mechanics",
      "Control Systems"
    ],
    icon: "graduation-cap",
  },
  {
    title: "Minor in Computer Science",
    duration: "January 2020 - Current",
    subtitle: "University of Calagry",
    details: [
      "Challenged myself to take on a minor in the interesting and rapidly developing field of computer science alongside my academically rigorous major",
    ],
    tags: ["Data Structures & Algorythms", "C/C++", "Python","Java","Version Control", "RISC-5", "MIPS",],
    icon: "book",
  },
  {
    title: "High School Diploma",
    duration: "September 2015 - April 2018",
    subtitle: "St. Mary's Senior High School",
    details: [
      "Graduate of full international baccalaureate.",
      "Wrote IB research papers in the subjects of Classical Chemistry, World History, and Electromagnetic Physics"
      ,"Very proud to have achieved a 97% average across all grade 12 core subjects"
    ],
    tags: ["Physics", "Calculus", "Mathematics","Biology","Chemistry", "World History", "Philosophy",],
    icon: "book",
  },

];

export const coursework = {
  disclaim:
    "",
  elecEngg: [
    {
      projectName: "dfgdb",
      image: "fbdfb",
      summary:
        "fbdfbf",
      preview: "fdbfdb",
      techStack: ["fbdf", "fbdf"],
    },
    {
      projectName: "fbdf",
      image: "fbd",
      summary:
        "fbd",
      preview: "dfb",
      techStack: ["fbd", "fbd", "fbd"],
    },
    {
      projectName: "",
      image: "",
      summary:
        "",
      preview: "",
      techStack: ["", "", ""],
    },
  ],
  compEngg: [
    {
      projectName: "",
      image: "",
      summary:
        "",
      preview: "",
      techStack: ["", ""],
    },
    {
      projectName: "",
      image: "",
      summary:
        "",
      preview: "",
      techStack: ["", "", ""],
    },
    {
      projectName: "",
      image: "",
      summary:
        "",
      preview: "",
      techStack: ["", "", ""],
    },
  ],
  softEngg: [
    {
      projectName: "",
      image: "",
      summary:
        "",
      preview: "",
      techStack: ["", "", ""],
    },
    {
      projectName: "",
      image: "",
      summary:
        "",
      preview: "",
      techStack: ["", "", ""],
    },
  ],
  dataSci: [
    {
      projectName: "",
      image: "",
      summary:
        "",
      preview: "",
      techStack: ["", "", ""],
    },
    {
      projectName: "",
      image: "",
      summary: "",
      preview:
        "",
      techStack: ["", "", ""],
    },
  ],
};


export const footer = [
  
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/david-fonseca-209040187/",
      },
      {
        text: "Github",
        link: "https://github.com/David-Fonseca/",
      },

    ],
  },
  
];

const gitUserName = "David-Fonseca";
const mediumUserName = "David-Fonseca";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
