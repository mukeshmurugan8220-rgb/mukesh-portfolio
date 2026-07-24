import "./Skills.css";

import {
FaHtml5,
FaCss3Alt,
FaJs,
FaReact,
FaNodeJs,
FaGitAlt
} from "react-icons/fa";

import {
SiMongodb,
SiExpress
} from "react-icons/si";


function Skills(){

const skills=[

{
name:"HTML",
icon:<FaHtml5/>
},

{
name:"CSS",
icon:<FaCss3Alt/>
},

{
name:"JavaScript",
icon:<FaJs/>
},

{
name:"React.js",
icon:<FaReact/>
},

{
name:"Node.js",
icon:<FaNodeJs/>
},

{
name:"Express.js",
icon:<SiExpress/>
},

{
name:"MongoDB",
icon:<SiMongodb/>
},

{
name:"Git & GitHub",
icon:<FaGitAlt/>
}

];


return(

<section className="skills" id="skills">

<h2>My Skills</h2>


<div className="skill-container">


{
skills.map((skill,index)=>(

<div className="skill-card" key={index}>

<div className="skill-icon">
{skill.icon}
</div>

<h3>
{skill.name}
</h3>

</div>

))
}


</div>


</section>

)

}

export default Skills;