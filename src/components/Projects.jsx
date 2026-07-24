import "./Projects.css";

function Projects(){

const projects=[
{
title:"Bulk Mail Application",
desc:"MERN Stack bulk email application using Nodemailer.",
tech:"React | Node | MongoDB"
},

{
title:"E-Commerce Website",
desc:"Full stack shopping website with authentication and products.",
tech:"MERN Stack"
},

{
title:"Blog Application",
desc:"Blog platform with login and CRUD operations.",
tech:"React | Express | MongoDB"
}

];


return(

<section className="projects" id="projects">

<h2>My Projects</h2>

<div className="project-container">

{
projects.map((project,index)=>(

<div className="project-card" key={index}>

<h3>
{project.title}
</h3>

<p>
{project.desc}
</p>

<span>
{project.tech}
</span>

</div>

))
}

</div>

</section>

)

}

export default Projects;