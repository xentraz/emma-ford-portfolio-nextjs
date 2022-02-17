import { AboutMeStyle } from './aboutMe.style';
import Image from 'next/image'

const AboutMe = () => {
  return (
    <>
    <AboutMeStyle>
     <div className="aboutMe">
       <div className="aboutMe-text">
         <h2>About Me</h2>
         <p><span className="italic">Welcome to my portfolio website!</span></p>
         <p>My name is <span className="bold">Emma</span> and I&apos;m a highly motivated Front-End Developer student from Oslo, Norway.</p>
         <p>I enjoy taking problems or challenges and turning them into turning them into simple and beautiful websites. I have a passion for semantics and analytical correlations, and I love the logic and structure of coding. I always strive to write neat and efficient code that is SEO and WCAG friendly. </p>
       </div>
       <div className="aboutMe-img">
         <div className="aboutMe-img-wrapper">
          <Image 
          className="aboutMe-img-container"
          alt='Image of Emma Thurmer in black and white. A girl with curly hair wearing a white shirt.'
          src="/img/ProfilePic.jpg"
          height="400px"
          width="300px"
          />
         </div>
        </div>
      </div>
     </AboutMeStyle>
    </>
  )
};

export default AboutMe;