// Skills Icons
import htmlIcon from "./images/html-5.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react-js.svg"
import jsIcon from "./images/icons8-javascript.svg"
import codeIcon from "./images/code.svg"
import node from './images/nodejs.svg'
import git from './images/git.svg'
import postgresql from './images/postgresql.svg'
import express from './images/express-js.svg'
import materialUi from './images/material-ui-1.svg'


// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import linkedin from './images/linkedin.svg';


// Project Images
import dailyTaskManager from './images/daily-task-manager.png'
import runningDashboard from './images/runningDashboard.png'
import DTM from './components/dailytask.js'

//About image
import profileImage from './images/profilephoto.png'

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Taylor",
  headerTagline: [
    //Line 1 For Header
    "Web Developer",
    //Line 2 For Header
    "Software Engineer",
    //Line 3 For Header
    "Tech Enthusiast",
  ],
  //   Header Paragraph
  headerParagraph:
    "Whether you think you can or you think you can't, you're right. -Henry Ford",

  //Contact Email
  contactEmail: "TFurman47@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Daily Task Manager", //Project Title - Add Your Project Title Here
      para:
        "A task manager that would give various goals based on different categories that ranged from short-, medium-, and long-term goals.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "./static/daily-task-manager-ed2e2dbef63a38a529f527b14d03bcf4.png",
      //Project URL - Add Your Project Url Here
      url: "https://taylorfurman.github.io/daily-task-manager/",
    },
    {
      title: "Running Dashboard", //Project Title - Add Your Project Title Here
      para:
        "Create a visual dashboard based upon users Strava data.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        runningDashboard,
      //Project URL - Add Your Project Url Here
      url: "https://runnerdashboard.herokuapp.com/",
    },
    // {
    //   title: "Project Three", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    
    
    

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hello! My name is Taylor Furman. I'm a software engineer living in Houston, TX.",
  aboutParaTwo:
    "I attended Texas A&M University Galveston for my Bachelor's degree in Marine Science with a Chemistry minor. Upon graduating, I have worked at a third-party testing laboratory in the oil and gas industry. I eventually found myself interested in learning new skills that would further enhance my career. So, I decided to enroll at DigitalCrafts for their full-stack web development flex coding boot camp, and recently graduated.",
  aboutParaThree:
    "As a software engineer, I enjoy consistently learning new technologies and skills that challenge me to continue to grow.",
  aboutImage:
  profileImage,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      },
    {
      img: cssIcon,
      },
    {
      img: jsIcon,
      },
    {
      img: reactIcon,
      },
    {
      img: node,
     },
    {
      img: git,
     },
    {
      img: postgresql,
     },
    {
      img: express,
     },
    {
      img: materialUi,
      },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Please feel free to reach out!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/TaylorFurman" },
    {
      img: linkedin,
      url: "https://linkedin.com/in/taylor-furman47/",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/tfurman47/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
