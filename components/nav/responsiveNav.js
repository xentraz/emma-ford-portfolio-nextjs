import { ResponsiveNavStyle } from './responsiveNav.style';
import { useState, setState } from 'react';
import { Icon } from '@iconify/react';
import NavItems from './navItems';

const ResponsiveNav = () => {
 const [open, setOpen] = useState(false);

 const openIcon =  
 <Icon 
 className="header-menu-bar" 
 icon="dashicons:menu" 
 color="#0e899f"
 onClick={() => setOpen(!open)}
 />;

 const closeIcon = 
 <Icon 
 className="header-menu-x" 
 icon="emojione-monotone:cross-mark" 
 color="#0e899f" 
 onClick={() => 
  setOpen(!open)}
 />;

 const [navBar, setNavBar] = useState(false); 

 const changeBackground = () => {
   if(window.scrollY >= 700){
     setNavBar(true)
   } else {
     setNavBar(false)
   }
 }

 if (typeof window !== "undefined") {
  window.addEventListener('scroll', changeBackground);
}

const testScroll = () => {
  if((setOpen(open)) && (setNavBar(true))) {
    return 'active' ? navBar : ''
  } else {
    return navBar ? 'active' : ''
  }
}
// Can't make it work ^

  return (
    <>
      <ResponsiveNavStyle className={testScroll}>
        {open ? closeIcon : openIcon}
        {open && <NavItems/>}
      </ResponsiveNavStyle> 
    </>
  );
}; 

export default ResponsiveNav;

