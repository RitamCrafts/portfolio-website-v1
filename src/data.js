import {ageCalc} from "./utils/ageCalc.js"

const birthDate = new Date("2007-05-11");
const data={
    general:{
        name:"Ritam Mandal",
        birthDate,
        age: ageCalc(birthDate),
        profession: "Student",
        work: "I am a college student, who can build responsive front-end web applications with React with many features."
    },
    contact:{
        email: "ritamrm1157@gmail.com",
        github: ["https://github.com/RitamCrafts/","RitamCrafts"],
        linkedIn: ["https://www.linkedin.com/in/itzritamm/","itzritamm"],
        location: "West Bengal, IN",
        websites:[],
        availibility: false, 
    }


};

export default data;
