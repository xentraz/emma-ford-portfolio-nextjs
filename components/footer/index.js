import { FooterStyle } from "./footer.style";
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <>
    <FooterStyle>
    <div className="wrapper">
      <div className="wrapper-contact">
        <h3 className="white underline">Contact Me</h3>
        <p className="white">Emma.thurmer@gmail.com</p>
        <p className="white">+47 40000000</p>
      </div>
      <div className="wrapper-copyright">
        <p className="white">&copy; Emma Thurmer</p>
      </div>
      <div className="wrapper-socials">
        <a href="https://www.instagram.com/emma_xen/" className="social_icons"><Icon icon="akar-icons:instagram-fill" color="#0e899f" /></a>
        <a href="https://twitter.com/xentrazx" className="social_icons"><Icon icon="akar-icons:twitter-fill" color="#0e899f" /></a>
        <a href="https://www.linkedin.com/in/emmathurmer/" className="social_icons"><Icon icon="akar-icons:linkedin-box-fill" color="#0e899f" /></a>
        <a href="https://github.com/xentraz" className="social_icons"><Icon icon="akar-icons:github-fill" color="#0e899f" /></a>
      </div>
    </div>
    </FooterStyle>
    </>
  );
};

export default Footer;