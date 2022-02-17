import { HeroContainer } from './hero.style';
import Navigation from '../nav';
import { CTAStyles } from '../CTA/cta.style';

const IndexHero = () => {
  return (
    <>
    <HeroContainer>
      {/* Hero Grid */}
      <div className="hero-nav" id="overlay">
        <Navigation/>
      </div> 
      {/* Hero BgImg */}
      <div 
        className="hero-overlay"
        style={{backgroundImage: `url(/img/heroImg-1.jpg)`}}
        alt="Picture of Emma Thurmer"
        >
      </div>  
      {/* Hero Logo */}
      <div className="hero-logo">
        <div 
          onClick={() => window.location.href = '/'}
          className="hero-logo-img"
          style={{backgroundImage: `url(/img/logo.png)`}}
          alt="Logo: </et>"
          >
        </div> 
      </div>
      {/* Hero Text */}
      <div className="hero-text">
          <div className="hero-text-container">
            <h3 className="white">Welcome!</h3>
            <h2 className="white">My name is</h2>
            <h1>Emma Thurmer</h1>
          </div>
          <CTAStyles>
            <a 
            href="#"
            onClick={() => window.location.href = '/portfolio'}
            >
            View My Work
            </a>
          </CTAStyles>
      </div>
     </HeroContainer>
    </>
  );
};

export default IndexHero;