import { NavStyle } from './nav.style';
// import { useState, useEffect } from 'react';

const Navigation = () => {
  const navLinks = [
    { 
      id: 1, 
      title: 'Home', 
      link: '/', 
      isActive: true,
    },
    { 
      id: 2, 
      title: 'Portfolio', 
      link: '/portfolio'
    },
    { 
      id: 3, 
      title: 'Contact', 
      link: '/contact', 
     },
  ];

  // const [pageURL, setPageURL] = useState(0);
  // useEffect(() => {
  //   setPageURL(window.location.href);
  // }, [])

  // console.log('pageURL', pageURL);

  // const isActive = pageURL;

  return (
    <>
      <NavStyle>
        <div className="header-menu">
        {navLinks.map(({ id, title, link }) => (
          <div key={id}>
            <a href={link} className={'' ? "isActive" : "navLink"}>
              {title}
            </a>
          </div>
         ))}
        </div>
      </NavStyle> 
    </>
  );
}; 

export default Navigation;

