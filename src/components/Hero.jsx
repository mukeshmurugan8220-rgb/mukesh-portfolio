import "./Hero.css";
import profile from "../assets/mukesh.jpg";

function Hero() {

return(

<section className="hero" id="home">

<div className="hero-text">

<h1>
Hi, I'm Mukesh 👋
</h1>

<h2>
Full Stack Developer
</h2>

<p>
B.Sc Computer Science Student | MERN Stack Developer
</p>


<div className="hero-buttons">


<a
href="https://github.com/mukeshmurugan8220-rgb"
target="_blank"
rel="noreferrer"
className="github-btn"
>
GitHub
</a>


</div>

</div>


<div className="hero-image">

<img 
src={profile} 
alt="Mukesh Profile"
/>

</div>


</section>

)

}

export default Hero;