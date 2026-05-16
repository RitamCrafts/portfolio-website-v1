import AboutMe from "./Components/AboutMe.jsx";
import {ageCalc} from "./utils/ageCalc.js"
import photo from "/src/assets/cover.jpg";

const birthDate = new Date("2007-05-11");
const data={
    general:{
        name:"Ritam Mandal",
        birthDate,
        age: ageCalc(birthDate),
        profession: "Student",
        photoLink:"/src/assets/"+"cover.jpg",
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
        featured:[],
        other:[],
    },
    more:{
        aboutMe: "I'm a B.Tech Information Technology student at Techno Main Salt Lake passionate about building modern web applications and improving my technical skills. I have working knowledge of C, Java, Python, and basic SQL, along with experience designing responsive and user-focused interfaces. As a fast learner who adapts quickly to new technologies, I aim to grow into a skilled software professional capable of contributing to impactful real-world projects.",
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
    }


};

export default data;
