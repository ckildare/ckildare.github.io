import { ProjectStatus } from '@/public/enums/projectStatus';

import axelWilson from '../../public/card-screenshots/axel-wilson-cover-image.png';
import buddySystems from '../../public/card-screenshots/buddy-systems-cover-image.png';
import csePhoto from '../card-screenshots/cse-background.jpg';
import laundryScheduler from '../../public/card-screenshots/laundry-scheduler-cover-image.png';
import deprecatedPortfolioSite from '../../public/card-screenshots/portfolio-site-cover-image.png';

export const projectData = [
  {
    title: "Current Portfolio Site",
    displayImg: csePhoto,
    context: "This is the upgrade to my previous portfolio site. I wanted to create a more dynamic site that would allow me to add more projects and information about myself. I also wanted to create a site that would allow me to practice my frontend development skills and learn more about React.js.",
    concept: "This project is built using React.js, HTML, Sass (CSS), and JavaScript. I have also used the Next.js framework to help with routing and deployment. I have also used the Vercel platform to deploy my site. As I continue in my carrer, I will continue to add more projects and information about myself to this site.",
    outcomes: ["I have learned how to deploy and manage a live website.", "I have learned more efficient ways to communicate my work and school experiences.", "I have continued my mastery in website responsive sizing.", "I have acquired more experience in React.js, HTML, Sass (CSS), and JavaScript.", "I have gotten the opportunity to acquire and set up a custom domain name."],
    status: ProjectStatus.Finished,
    projectLink: "https://connorkildare.com",
    repolink: "https://github.com/ckildare/ckildare.github.io",
    supportingImgs: [],
  },
  {
    title: "UNL Laundry Scheduler",
    displayImg: laundryScheduler,
    context: "This is a Buddy Systems project started in a Human-Computer Interaction course and evolved to a project sponsored by UNL Housing that would later be abandoned.",
    concept: "This product would allow users to schedule a load of laundry ( either single or reoccuring occurrence ), view laundry status, and recieve push notifications about laundry.",
    outcomes: [
      "I have developed stronger development collaboration skills.",
      "I have gained more confidence in speaking to stakeholders and negotiating requirements",
      "I have become more efficient in leading user interaction testing to verify wireframes and proposed UI elements",
      "I have acquired more experience in React.js, HTML, Sass (CSS)."
    ],
    status: ProjectStatus.Abandoned,
    projectLink: "",
    repoLink: "https://github.com/CodeCricut/laundry-scheduler",
    supportingImgs: [],
  },
  {
    title: "Cookie Jar",
    displayImg: csePhoto,
    context: "This is a Buddy Systems project completed in the summer of 2022 that allowed us to learn how to hook into the Google API and manage our cookies.",
    concept: "This product would allow users to view, search, manipulate, import, export, and store cookies on Google's storage system where cookies can only be accessed by the user.",
    outcomes: [
      "I have developed stronger development collaboration skills.",
      "I have gained more confidence in working with cookies, browser elements, and the Google API.",
      "I have become more efficient in considering use cases that our users want.",
      "I have acquired more experience in HTML, CSS, and JavaScript.",
    ],
    status: ProjectStatus.Finished,
    projectLink: "https://bit.ly/freemycookies",
    repoLink: "https://github.com/buddysystems/CookieJar",
    supportingImgs: [],
  },
  {
    title: "BuddySystem\'s Portfolio Site",
    displayImg: buddySystems,
    context: "This site was designed after the 2022 Cornhacks event, where my team members and I formed \"Buddy Systems\" to organize the work we do together as a group.",
    concept: "This website is designed to showcase the members of Buddy Systems and the work we do together.",
    outcomes: [
      "I have developed stronger development collaboration skills.",
      "I have acquired more experience in React.js, HTML, Sass (CSS)."
    ],
    status: ProjectStatus.Abandoned,
    projectLink: "https://buddysystems.github.io",
    repoLink: "https://github.com/buddysystems/buddysystems.github.io",
    supportingImgs: [],
  },
  {
    title: "Axel Wilson's Music Maker",
    displayImg: axelWilson,
    context: "I helped build Axel Wilson's Music Maker during the 2022 Cornhacks hackathon. The hackathon had the theme “Retro”. My contributions include research on the concept, frontend development, peer programming on integrating Spotify API.",
    concept: "Axel Wilson’s Music Maker is a dynamic web application that utilizes Spotify's web API. Our web app allows the user to… ",
    conceptStepList: [
      "Select a song to search.",
      "Recommends five songs based on the searched song.",
      "The user chooses one or more songs to continue.",
      "Recommends five more songs based off the selected search on the last screen.",
      "Repeats until the user decides to finish getting recommended songs.",
      "Each selected song will be compiled into a final playlist."
    ],
    outcomes: [
      "I am more efficient about preparing for a project through research.",
      "I have acquired more experience with React.js, HTML, Sass (CSS), JS, Python.",
      "I have become more efficient at building API connections and endpoints.",
      "I have gained more confidence manipulating GraphQL queries.",
      "I have acquired more expereince in managing state in a dynamic website.",
      "I have developed stronger development collaboration skills."
    ],
    status: ProjectStatus.InProgress,
    projectLink: "https://axel-wilsons-mixtape-maker.herokuapp.com",
    repoLink: "https://github.com/CodeCricut/RetroPlaylistGenerator",
    supportingImgs: [],
  },
  {
    title: "Deprecated Portfolio Site",
    displayImg: deprecatedPortfolioSite,
    context: "My first portfolio site was built to practice my frontend development skills and show internships as an example of the work I would be able to do.",
    concept: "This site included information on projects that I had completed, a short about me section, a link to my resume, and a few contact links. Although it was small, it was effective in communicating my experiences.",
    outcomes: [
      "I have learned how to deploy and manage a live website.",
      "I have learned more efficient ways to communicate my work and school experiences.",
      "I have continued my mastery in website responsive sizing.",
      "I have acquired more experience in HTML, Sass (CSS), Bootstrap",
      "I have gotten the opportunity to acquire and set up a custom domain name."
    ],
    status: ProjectStatus.Finished,
    repoLink: "https://github.com/ckildare/deprecated-portfolio-site",
    supportingImgs: [],
  }
]