import ME from './assets/newpocketed.png';
import MeAbout from "./assets/newpocketed.png";
import { IoLanguageSharp } from 'react-icons/io5'
import { BsPatchCheckFill, BsWhatsapp } from 'react-icons/bs'
import { FaAward, FaChalkboardTeacher } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi';
// import { HiPencil } from 'react-icons/hi';
import { MdCodeOff, MdOutlineEmail } from 'react-icons/md'
import { FiTwitter } from 'react-icons/fi'

import IMG1 from './assets/Screenshotemg.png'
import IMG2 from './assets/Screenshotdeliv.png'
import IMG3 from './assets/dabbbb.jpg'
import IMG4 from './assets/Screenshotartscard.png'
import IMG5 from './assets/mmmmssss.jpg'
import IMG6 from './assets/Screenshotchat.png'
import IMG7 from './assets/eterlandscrn.png'
import IMG8 from './assets/secondlotus.png'
import IMG9 from './assets/certfrontend.jpeg'

import AVT1 from './assets/omoebi.jpeg'
import AVT2 from './assets/pointeradam.jpeg'
// import AVT3 from './assets/avatar3.jpg'
// import AVT4 from './assets/avatar4.jpg'


export const data = {
    imag: ME,
    imag2: MeAbout,
}

export const cardData = [
    { icon: <IoLanguageSharp />, title: "JavaScript Skill", year: "Over 5+ Years" },
    { icon: <FaAward />, title: "React Development", year: "4+ Years" },
    { icon: <GiTeacher />, title: "Node and Express", year: "4+ Years" },
  ];

export const expFrontEndData = [
    {
        icon: <BsPatchCheckFill />, 
        progLang: "HTML5", 
        experience: "Experienced" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "CSS", 
        experience: "Experienced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "Bootstrap", 
        experience: "Experienced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "Material-UI", 
        experience: "Experienced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "JavaScript", 
        experience: "Experienced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "ReactJS", 
        experience: "Experienced",
    },
    {
        icon: <BsPatchCheckFill/>,
        progLang: "TypeScript",
        experience: "Experienced",
    },
    {
        icon: <BsPatchCheckFill/>,
        progLang: "Responsiveness",
        experience: "Experienced",
    },
    {
        icon: <BsPatchCheckFill/>,
        progLang: "Styled-Components",
        experience: "Experienced",
    },
]

export const expBackEndData = [
  
    {
        icon: <BsPatchCheckFill />, 
        progLang: "MYSQL", 
        experience: "Experienced" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "NodeJs", 
        experience: "Experienced" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "MongoDB", 
        experience: "Experienced" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "Express", 
        experience: "Experienced" 
    },
]

export const servicesListWrite = [
    {
        icon: <FaChalkboardTeacher/>, 
        text: "Asynchronous Communication" 
    },
    {
        icon: <FaChalkboardTeacher/>, 
        text: "Dev Tool Debugging" 
    },
    {
        icon: <FaChalkboardTeacher/>, 
        text: "Traversing the DOM" 
    },
    {
        icon: <FaChalkboardTeacher/>, 
        text: "Conditional Statements" 
    },
    {
        icon: <FaChalkboardTeacher/>,
        text: "API Calls"
    }
   
]
export const servicesListWeb = [
    {
        icon: <MdCodeOff />, 
        text: "React Hooks" 
    },
    {
        icon: <MdCodeOff />, 
        text: "JSX" 
    },
    {
        icon: <MdCodeOff />, 
        text: "Redux" 
    },
    {
        icon: <MdCodeOff />, 
        text: "Material UI" 
    },
    {
        icon: <MdCodeOff />, 
        text: "Virtual DOM" 
    },
    
]
export const servicesListTeach = [
    {
        icon: <FaChalkboardTeacher />, 
        text: "Non Blocking code" 
    },
    {
        icon: <FaChalkboardTeacher />, 
        text: "Event Loops" 
    },
    {
        icon: <FaChalkboardTeacher />, 
        text: "Global Variables" 
    },
    {
        icon: <FaChalkboardTeacher />, 
        text: "Express" 
    },
    
    
]
export const portfolioData = [

    {   
        id: 1,
        img: IMG1,
        text: "Elizabeth Matthew Group App",
        gitlnk: "https://github.com/sibTunechy/emg",
        netlifylnk : "https://mge-app.netlify.app/"
    },


    {   
        id: 2,
        img: IMG2,
        text: "Delivery App",
        gitlnk : "https://github.com/sibTunechy/Deliveree",
        netlifylnk : "https://deliveree.netlify.app/"
    },

    
    {   
        id: 3,
        img: IMG3,
        text: "Lotus Bank Project",
        gitlnk : "https://github.com/sibTunechy/LotusQSV.git",
        netlifylnk : "https://pendingchangestolotusqsv.netlify.app/"
    },

    
    {   
        id: 4,
        img: IMG4,
        text: "Artisan Cards",
        gitlnk : "https://github.com/sibTunechy/Artisans",
        netlifylnk : "https://artscards.netlify.app/"
    },
    
    {   
        id: 5,
        img: IMG5,
        text: "Moshmed Designs Website",
        gitlnk : "https://github.com/sibTunechy/tested",
        netlifylnk : "https://www.moshmedesigns.com/"
    },
    {   
        id: 6,
        img: IMG6,
        text: "Chat App",
        gitlnk : "https://github.com/sibTunechy/chatengineapp",
        netlifylnk : "https://chatappwithchatengine.netlify.app/"
    },
    {   
        id: 7,
        img: IMG7,
        text: "Eterland School website",
        gitlnk : "https://github.com/sibTunechy/eterland",
        netlifylnk : "https://eterland.netlify.app/"
    },
    {   
        id: 8,
        img: IMG8,
        text: "Quickserve",
        gitlnk : "https://github.com/sibTunechy/ciblotu",
        netlifylnk : "https://lotusbankcib.netlify.app/"
    },
        {   
        id: 9,
        img: IMG9,
        text: "Frontend Certification",
        // gitlnk : "https://github.com/sibTunechy/ciblotu",
        // netlifylnk : "https://lotusbankcib.netlify.app/"
    },

    
]

export const testimonialData = [

    {
        id: 1,
        avatar: AVT1,
        name: 'Shabi Moshood',
        text: "An experienced React JS Frontend Developer who is a friend and hard worker, we worked on a project together and I can ascertain that he is a team player. "
    },

    {
        id: 2,
        avatar: AVT2,
        name: 'Adam Albarka',
        text: "A Frontend Developer that pays great attention to detail and an efficient worker who prioritizes job completion and achieving deliverables."
    },

    // {
    //     id: 3,
    //     avatar: AVT3,
    //     name: 'Tomi Adegoke',
    //     text: " A colleague that brings technical know how and understanding of the technology world to our company. An outstanding individual who has valuable skills in Programming."
    // },

    // {
    //     id: 4,
    //     avatar: AVT4,
    //     name: 'Jide Taiwo',
    //     text: " I have personally worked with Ahmed on some projects and he has shown how easy it is to work with him. A Frontend developer with good communication and technical skiils."
    // },
]

export const testimonialLinks = [ 
    {

    }
]

export const contactData = [
    {
        id: 1,
        icon:  <MdOutlineEmail />,
        contctType: 'Email',
        emailadrss: 'ayotemitope930@gmail.com',
        link: " mailto:ayotemitope930@gmail.com"
    },
    {
        id: 2,
        icon:  <FiTwitter />,
        contctType: 'Twitter',
        emailadrss: '@Sib_tunechy',
        link: " https://twitter.com/Sib_tunechy "
    },
    {
        id: 3,
        icon:  <BsWhatsapp />,
        contctType: 'WhatsApp',
        emailadrss: "+2348135163128",
        link: "https://api.whatsapp.com/send?phone=+2348135163128"
    },
]

