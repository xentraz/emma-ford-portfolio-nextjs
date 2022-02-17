import { HeroContainer } from './hero.style';
import Navigation from '../components/nav';

const HeroBanner = () => {
  const logo = '../img/logo.png';
  return (
    <>
    <HeroContainer>
      <div className="hero" id="overlay">
        <div className="hero-overlay">
          <div 
          className="hero-overlay-img"
          style={{backgorundImage: `${logo}`}}
          alt="</et>"/>
        </div>
      </div>   
      <Navigation/>
     </HeroContainer>
    </>
  );
};

export default HeroBanner;