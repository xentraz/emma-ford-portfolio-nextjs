import { HeroContainer } from "../indexHero/hero.style";
import Navigation from "../nav";
import ResponsiveNav from "../nav/responsiveNav";
import { CTAStyles } from "../CTA/cta.style";

const PortfolioHero = () => {
  return (
    <>
      <HeroContainer>
        {/* Hero Grid */}
        <div className="hero-nav" id="overlay">
          <Navigation />
          <ResponsiveNav />
        </div>
        {/* Hero BgImg */}
        <div
          className="hero-overlay"
          style={{ backgroundImage: `url(/img/portfolioHero.jpg)` }}
          alt="Picture of Emma Thurmer"
        ></div>
        {/* Hero Logo */}
        <div className="hero-logo">
          <div
            // FIXME: USe next/link
            onClick={() => (window.location.href = "/")}
            className="hero-logo-img"
            style={{ backgroundImage: `url(/img/logo.png)` }}
            alt="Logo: </et>"
          ></div>
        </div>
        {/* Hero Text */}
        <div className="hero-text">
          <div className="hero-text-container">
            <h1>Portfolio</h1>
            <h3 className="white">Below is a list of</h3>
            <h3 className="white">all my previous projects</h3>
          </div>
          <CTAStyles>
            {/* FIXME: Use Next/Link */}
            <a href="#" onClick={() => (window.location.href = "/")}>
              About Me
            </a>
          </CTAStyles>
        </div>
      </HeroContainer>
    </>
  );
};

export default PortfolioHero;
