import AboutMe from "./Components/AboutMe.jsx";
import {ageCalc} from "./utils/ageCalc.js";
import photo from "/src/assets/Decent1.png";

const birthDate = new Date("2007-05-11");
const data={
    general:{
        name:"Ritam Mandal",
        birthDate,
        age: ageCalc(birthDate),
        profession: "Student",
        photoLink:"/src/assets/"+"Decent1.png",
        photo:photo,
        work: "I am a college student, who can build responsive front-end web applications with React with many features."
    },
    contact:{
        email: "ritamrm1157@gmail.com",
        github: ["https://github.com/RitamCrafts/","RitamCrafts"],
        linkedIn: ["https://www.linkedin.com/in/itzritamm/","itzritamm"],
        location: "West Bengal, IN",
        websites:[],
        availibility: false, 
    },
    projects:{
        featured:[
            {
                title:"Rush Weather",
                desc:"My first weather app which finds weather of a place and location in a responsive UI.",
                techStack:["HTML","CSS","JavaScript","API"],
                link:"https://rush-weather-v2.vercel.app/"
            },
            {
                title:"Hand Cricket",
                desc:"A game which simulates a very common game among children and teens in India with a bot.",
                techStack:["HTML","CSS","JavaScript"],
                link:"https://ritamcrafts.github.io/Hand-Cricket/"
            },
            {
                title:"Retro Exchange",
                desc:"A real time currency rate conversion web app.",
                techStack:["HTML","JavaScript","TailwindCSS","ReactJS"],
                link:"https://retro-exchange.vercel.app/"
            },

        ],
        other:[
            {
                title:"Password Generator",
                desc:"A simple, yet powerfull random password generator with real time interaction.",
                techStack:["HTML","JavaScript","TailwindCSS","ReactJS"],
                link:"https://password-generator-reactjs-theta.vercel.app/"
            },
            {
                title:"Youtube GUI replica",
                desc:"My first web app made with just basics of web development.",
                techStack:["HTML","CSS"],
                link:"https://ritamcrafts.github.io/Youtube-GUI-replica/"
            },
            {
                title:"First Simple Calculator",
                desc:"A simple calculator made by me to learn JavaScript fundamentals.",
                techStack:["HTML","CSS","JavaScript"],
                link:"https://ritamcrafts.github.io/first-simple-calculator/"
            },
            {
                title:"Crypt",
                desc:"A simple application that encrypts a text to a custom encryption made by me and de-encrypts it, which I made in class 10.",
                techStack:["Java"],
                link:"https://github.com/RitamCrafts/Crypt-java"
            },
            {
                title:"BG changer",
                desc:"A simple BG changer made with more advanced tools.",
                techStack:["HTML","CSS","JavaScript","ReactJS","TailwindCSS"],
                link:"https://bg-changer-with-react-coral.vercel.app/"
            },

        ]
    },
    skills: {
            core:["HTML","CSS","Tailwind CSS","JavaScript","React","Java"],
            additional:["C","Python","MySQL"]
        },
    education:[
            {
                name:"Bachelor of Technology in Information Technology",
                institution:"Techno Main Salt Lake, Kolkata",
                status:"2025 - Present"
            },
            {
                name:"Higher Secondary Education (Class XII)",
                institution:"St. Xavier's High School, Palashdiha, Durgapur",
                status:"Completed in 2025"
            },
            {
                name:"Secondary Education (Class X)",
                institution:"St. Patrick's Higher Secondary School, Asansol",
                status:"Completed in 2023"
            }
        ],
    aboutMe: "I'm a B.Tech Information Technology student at Techno Main Salt Lake passionate about building modern web applications and improving my technical skills. I have working knowledge of C, Java, Python, and basic SQL, along with experience designing responsive and user-focused interfaces. As a fast learner who adapts quickly to new technologies, I aim to grow into a skilled software professional capable of contributing to impactful real-world projects.",


};

export default data;
