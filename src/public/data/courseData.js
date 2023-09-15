import { ProjectStatus } from '@/public/enums/projectStatus';

import csePhoto from '../card-screenshots/cse-background.jpg';

export var courseData = [
  {
    semesterName: "Fall 2021",
    courses: [
      {
        title: "Software Engineering I",
        courseNumber: "Soft 160",
        instructors: [
          "Dr. Christopher Bohn",
          "Dr. Suzanne Person"
        ],
        description: "Soft 160 is an introductory course into the Software Engineering program, teaching collaborative programming fundamentals and the basics of coding.",
        outcomes: [
          "I developed basic problem-solving skills within the context of computing and collaborative work",
          "I gained experience working on a project with real-life applications.",
          "I developed common techniques for debugging, testing, and writing code.",
          "I learned how to make code maintainable with a variety of coding artifacts such as documentation or requirements."
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/soft/#:~:text=160-,Software%20Engineering%20I,-Prerequisites%3A%C2%A0MATH",
        projects: [
          {
            title: "UNL Controlled Burn Planner",
            displayImg: csePhoto,
            context: "This project was the capstone / final project for the course. We built the project using Java on a virtual machine running Ubuntu alongside four classmates.",
            concept: "This project hooked into the Open-Source Weather API to gather configurations from a user in command-line and data about the weather in a specific location to determine if a controlled burn was viable by regulative standards.",
            outcomes: [
              "I learned basic software collaboration skills by working with classmates as a development group.",
              "I improved my ability to decompose requirements into tasks and issues.",
              "I became more efficient in building unit and integration testing suites.",
              "I acquired real-world experience in applying object-oriented programming with Java."
            ],
            status: ProjectStatus.Finished,
            projectLink: "",
            githubLink: "",
          }
        ],
      }
    ]
  },
  {
    semesterName: "Spring 2022",
    courses: [
      {
        title: "Software Engineering II",
        courseNumber: "Soft 161",
        semester: "Spring 2021",
        instructors: [
          "Dr. Christopher Bohn",
          "Dr. Shruti Bolman"
        ],
        description: "Soft 161 extended concepts learned in Soft 160 by teaching database systems, mutli-layer programming, and event-driven programming.",
        outcomes: [
          "I was exposed to good database design and learned basic concepts of persistent data storage.",
          "I learned how to separate code into different layers, allowing for better maintainabaility and efficiency.",
          "I learned how to drive programs with events and more types of user interaction.",
          "I more gained experience with texting complex software systems to promote safety."
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/soft/#:~:text=161-,Software%20Engineering%20II,-Prerequisites%3A%C2%A0A%20grade",
        projects: [
          {
            title: "UNL Travel Planning App",
            displayImg: csePhoto,
            context: "This project was the capstone / final project for the course. We built the project using Java and Python on a virtual machine running Ubuntu alongside four classmates. This project implemented using MariaDB for data storage and Kivy for the frontend.",
            concept: "This app is designed to help a user plan a trip, including scheduling venues, airplanes, and activities for the trip. Our app was capable of storing user data and mocked integration with external airline / venue systems.",
            outcomes: [
              "I learned how to build a multi-layer application.",
              "I gained experience making user-facing frontend design decisions.",
              "I learned how to design a frontend system using GUIs.",
              "I extended my understanding of Java, Python, and SQL.",
              "I extended my collaboration abilities by working with other students."
            ],
            status: ProjectStatus.Finished,
            projectLink: "",
            githubLink: "",
          }
        ],
      },
      {
        title: "Honors Introduction to Discrete Structures",
        courseNumber: "CSCE 235H",
        instructors: [
          "Dr. Berthe Choueiry"
        ],
        description: "Intro to discrete structures covered operations and proofs on data collections such as matricies, recursions, sets, graphs, etc. The course also covered a variety of boolean properties with research applications.",
        outcomes: [
          ""
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/csce/#:~:text=Honors%3A%20Introduction%20to%20Discrete%20Structures",
      }
    ]
  },
  {
    semesterName: "Fall 2022",
    courses: [
      {
        title: "Software Engineering III",
        courseNumber: "Soft 260",
        instructors: [
          ""
        ],
        description: "",
        outcomes: [
          ""
        ],
        courseLink: "",
        projects: []
      },
      {
        title: "Human-Computer Interaction",
        courseNumber: "",
        instructors: [
          ""
        ],
        description: "",
        outcomes: [
          ""
        ],
        courseLink: "",
        projects: []
      }
    ]
  },
  {
    semesterName: "Spring 2023",
    courses: [
      {
        title: "Software Engineering IV",
        courseNumber: "Soft 261",
        instructors: [
          ""
        ],
        description: "",
        outcomes: [
          ""
        ],
        courseLink: "",
        projects: []
      },
      {
        title: "Programming Language Concepts",
        courseNumber: "CSCE 231",
        instructors: [
          ""
        ],
        description: "",
        outcomes: [
          ""
        ],
        courseLink: "",
        projects: []
      },
      {
        title: "Computer Systems Engineering",
        courseNumber: "CSCE 235",
        instructors: [
          ""
        ],
        description: "",
        outcomes: [
          ""
        ],
        courseLink: "",
        projects: []
      },
      {
        title: "Technical Comunication",
        courseNumber: "JGEN 200",
        instructors: [
          ""
        ],
        description: "",
        outcomes: [
          ""
        ],
        courseLink: "",
        projects: []
      }
    ]
  },
  {
    semesterName: "Summer 2023",
    courses: [
      {
        title: "Speedway Motors Internship Reflection",
        courseNumber: "",
        instructors: [
          ""
        ],
        description: "",
        outcomes: [
          ""
        ],
        courseLink: "",
        projects: []
      }
    ]
  },
  {
    semesterName: "Fall 2023",
    courses: [
      {
        title: "Modeling Data Systems",
        courseNumber: "CSCE 411",
        instructors: [
          ""
        ],
        description: "",
        outcomes: [
          ""
        ],
        courseLink: "",
        projects: []
      },
      {
        title: "Algorithm Design and Analysis",
        courseNumber: "CSCE 423",
        instructors: [
          ""
        ],
        description: "",
        outcomes: [
          ""
        ],
        courseLink: "",
        projects: []
      },
      {
        title: "Testing and Verification",
        courseNumber: "CSCE 467",
        instructors: [
          ""
        ],
        description: "",
        outcomes: [
          ""
        ],
        courseLink: "",
        projects: []
      },
      {
        title: "DMSi Senior Design",
        courseNumber: "CSCE 487",
        instructors: [
          ""
        ],
        description: "",
        outcomes: [
          ""
        ],
        courseLink: "",
        projects: []
      }
    ]
  }
];
