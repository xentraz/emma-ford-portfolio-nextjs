import { HeroContainer } from './hero.style';
import Navigation from '../nav';
import { CTAStyles } from '../CTA/cta.style';
import ResponsiveNav from '../nav/responsiveNav';

const IndexHero = () => {
  return (
    <>
    <HeroContainer>
      {/* Hero Grid */}
      <div className="hero-nav" id="overlay">
        <Navigation/>
        <ResponsiveNav/>
      </div> 
      {/* Hero BgImg */}
      <div 
        className="hero-overlay"
        style={{backgroundImage: `url(/img/heroImg-1.jpg)`}}
        alt="Picture of Emma Thurmer"
        >
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