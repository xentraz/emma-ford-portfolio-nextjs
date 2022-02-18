import {useState} from 'react';

const NavItems = () => {

  const [isActive, setActive ] = useState({
    activeObject: false, 
    navLinks: [
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
      }
    ],
  });
  
  const toggleActive = (index) => {
    setActive({
      ...isActive,
      activeObject: isActive.navLinks[index],
    });
  }
  
  const toggleActiveStyle = (index) => {
    if(isActive.navLinks[index] === isActive.navLinks){
      return "navLink";
    } else {
      return "isActive";
    }
  }
  
   return (
    <>
    <div className="logo">
       <div
         onClick={() => window.location.href = '/'}
         className="logo-img"
         style={{ backgroundImage: `url(/img/logo.png)` }}
         alt="Logo: </et>"
       >
       </div>
     </div><div className="header-menu">
         {isActive.navLinks.map(({ id, title, link, index }) => (
           <div
             key={id}
             onClick={() => {
               toggleActive(index);
             } }
           >
             <a
               href={link}
               className={toggleActiveStyle(index)}>
               {title}
             </a>
           </div>
         ))}
       </div>
    </>
   ) 
}

export default NavItems;