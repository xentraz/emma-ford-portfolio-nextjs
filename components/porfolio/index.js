import { PortfolioStyle } from "./portfolio.style";
import Image from 'next/image';

const PortfolioContent = () => {
  return (
    <>
    <PortfolioStyle>
    <div className="project_list">
      <div className="project">
        <div className="project_headingR">
          <h2 className="static">Semester Project</h2>
        </div>
        <div className="project_img">
          <div className="main_img img">
            <Image 
            src="/img/SemProject21.png" 
            alt="Screenshot of the semester project font page. The page contains a navigation on the top left side, the nagivation contains Home, Archive, Gallery, About and Contact. In the top right corner are the letters E.F.T listed in dark green. Below the navigation in an image slider wich contains 5 different images, the image displayed is of a canal in amsterdam surrounded by buildings. Below the image slider is a heading saying Emma's Travel Blog. Below the heading is an image of Emma inside a white circle, to the left of the image is a description of the website."
            height="400px"
            width="650px"
            layout="responsive"
            />
          </div>
          <div className="side_img img top">
            <Image  
            src="/img/SemProject21-2.png" 
            alt="Screenshot of the Archive page. The page contains the navigation on top, below is the heading for the page 'See all posts or search for one'. Below the heading is a search bar and below the search bar is a list of all the posts. The first post visible is of Oslo. The posts have a green background with white text listed on the left. On the right hand side is a larger image of Oslo with a smaller circular image of Oslo in the top left hand sied of the larger image."
            height="200px"
            width="315px"
            layout="responsive"
            />
          </div>
          <div className="side_img img bottom">
            <Image 
            src="/img/SemProject21-3.png" 
            alt="Screenshot of the Gallery page. The page contains the navigation on top, below is the heading for the page 'Gallery: See all media'. Below the heading is a list of images from all the differnt posts. The images are contained in a black frame with the image heading below the image."
            height="200px"
            width="315px"
            layout="responsive"
            />
          </div>
        </div>
        <div className="project_dsc">
          <p>The objective of this assignment was to create an ecommerce website of our choosing. The website was to connect to an API that we created ourselves. <br></br> The API needed to include specific details such as title, an image and description etc. After connecting to the API we had to create a login portal where you could add, edit and create new products which would be changed in the API. We also needed to be able to add all the products to a cart using localstorage and then remove the items from localstorage if the item was deleted from the cart.</p>
          <a href="https://emmastravelblog.netlify.app/" className="project_link grey">Go to website</a>
        </div>
      </div>
      <div className="project">
        <div className="project_headingL">
          <h2 className="static">Project Exam</h2>
        </div>
        <div className="project_img">
          <div className="main_img img">
            <Image 
            src="/img/exam.jpg" 
            alt="Screenshot of the semester project font page. The page contains a navigation on the top left side, the nagivation contains Home, Archive, Gallery, About and Contact. In the top right corner are the letters E.F.T listed in dark green. Below the navigation in an image slider wich contains 5 different images, the image displayed is of a canal in amsterdam surrounded by buildings. Below the image slider is a heading saying Emma's Travel Blog. Below the heading is an image of Emma inside a white circle, to the left of the image is a description of the website."
            height="400px"
            width="650px"
            layout="responsive"
            />
          </div>
          <div className="side_img img top">
            <Image  
            src="/img/exam2.jpg" 
            alt="Screenshot of the Archive page. The page contains the navigation on top, below is the heading for the page 'See all posts or search for one'. Below the heading is a search bar and below the search bar is a list of all the posts. The first post visible is of Oslo. The posts have a green background with white text listed on the left. On the right hand side is a larger image of Oslo with a smaller circular image of Oslo in the top left hand sied of the larger image."
            height="200px"
            width="315px"
            layout="responsive"
            />
          </div>
          <div className="side_img img bottom">
            <Image 
            src="/img/exam3.png" 
            alt="Screenshot of the Gallery page. The page contains the navigation on top, below is the heading for the page 'Gallery: See all media'. Below the heading is a list of images from all the differnt posts. The images are contained in a black frame with the image heading below the image."
            height="200px"
            width="315px"
            layout="responsive"
            />
          </div>
        </div>
        <div className="project_dsc">
          <p>The objective of this assignment was to create a blog website with the topic of your choosing. The website needed to include a home page, a blog specific page, an about me page and a contact page. The blog specific page needed to use an API call from a word press website we had set up prior to making the website. The contact page needed a contact form with a validation process using javascript. <br></br> Won Diamond award for best project.</p>
          <a href="https://emmastravelblog.netlify.app/" className="project_link grey">Go to website</a>
        </div>
      </div>
      <div className="project r">
        <div className="project_headingR">
          <h2 className="static">Interaction Design Module</h2>
        </div>
        <div className="project_img">
          <div className="main_img img">
            <Image 
            src="/img/interaction_design.png" 
            alt="Screenshot of the interaction design home page. The page has an illustration of a person giving a gift to a friend in the top left corner and an illustration of a girl packing down clothes and a teddy bear with her father on the top right hand side. Inbetween the illustrations is the heading 'Donations of Love' with some information text below. Below the information text and illustrations are a list of charities."
            height="400px"
            width="650px"
            layout="responsive"
            />  
          </div>
          <div className="side_img img top">
            <Image 
            src="/img/interaction_design2.png" 
            alt="Screenshot of a modal popup for payment details. On the right hand side is a litst of input fields for payment information: card type, card number, expiration date, CVV and country. Below that list are two buttons, a paypal button and a Vipps button. On the right hand side is an illustration of a woman making a card payment on a card reader. Below the illustration is some information regarding the payment and a submit button."
            height="200px"
            width="315px"
            layout="responsive"
            />  
          </div>
        <div className="side_img img bottom">
          <Image 
            src="/img/interaction_design3.png" 
            alt="Screenshot of a specific charity page (Frelsesarmeen), the page has a navigation on the top of the page. On the left hand side is an image of the charity logo, below the image is a description of the charity and a link to the charity website. On the right hand side is a list of buttons to choose the amount you want to donate (ranging from 100 nok - 200 nok). Below that is some information and another list of buttons to choose what type of dontions you want to make (monthly, annyal, one time payment). Below those buttons is an input form for name, email and address."
            height="200px"
            width="315px"
            layout="responsive"
            />
        </div>
        </div>
        <div className="project_dsc">
          <p>The objective of this assignment was to create a website for different charities, where you could choose whichever charity you wanted, the amount of money you wanted to donate and how frequently you wanted to donate. The list of charities were fetched using an API call.</p>
          <a href="https://clever-visvesvaraya-aa5b16.netlify.app/" className="project_link grey">Go to website</a>
        </div>
      </div>
      <div className="project">
        <div className="project_headingL">
          <h2 className="static">Rick & Morty Hackathon</h2>
        </div>
        <div className="project_img">
          <div className="main_img img">
            <Image 
            className="main_img img" 
            src="/img/hackathon.png" 
            alt="Screenshot of the Rick and Morty hackathon website. In the top middle you can see the Rick and Morty logo, below the logo is the heading 'Explore the characters found in Rick and Morty'. Below the heading are 4 buttons: All, Alive, Dead and Unknown. Below the buttons are a list of characters, with their image on the left and information about them on the right."
            height="200px"
            width="315px"
            layout="responsive"
            />
          </div>
          <div className="side_img img top">
            <Image 
            src="/img/hackaton2.png" 
            alt="Screenshot of the Rick and Morty information page. In the top middle you can see the Rick and Morty logo, below the logo is the heading 'Rick and Morty'. Below the heading is a paragraph of information about the TV show, with an image of Rick and Morty on the left hand side."
            height="200px"
            width="315px"
            layout="responsive"
            />
          </div>
          <div className="side_img img bottom">
            <Image 
            src="/img/hackathon3.png" 
            alt="Screenshot of the home page with a list of all characters listed with the status 'unknown'. On top are 4 buttons: All, Alive, Dead and Unknown. Below the buttons are a list of characters, with their image on the left and information about them on the right."
            height="200px"
            width="315px"
            layout="responsive"
            />  
          </div>
        </div>
        <div className="project_dsc">
          <p>The objective of this hackathon was to create a website that listed all the different characters from the show Rick & Morty. The list was needed to display whether the different characters were dead, alive or status unknown. The objective was to create this website to look like an extension of Netflix, and needed to be completed within 24 hours. I came 2nd place.</p>
          <a href="https://friendly-allen-8d7c65.netlify.app" className="project_link grey">Go to website</a>
        </div>
      </div>
      <div className="project r">
        <div className="project_headingR">
          <h2 className="static">Semester Project</h2>
        </div>
        <div className="project_img">
          <div className="main_img img">
            <Image 
            src="/img/semester_project.png" 
            alt="Screenshot of the semester project home page. In the top left hand side is the logo 'community science musem', on the top right hand side is the navigation: Home, Events, Tickets, Info, Explore and Gift Shop. Below the navigation and logo is an image of a boy staring into the museum with the heading 'Welcome' written across is. Below the image is a list (from left to right) of special events and exhibitions. The list contains 3 events: visting professor of aeronautics, spend the night at the museum & Energetica exhibition on loan. Each of the events have an image on top with information listed below."
            height="400px"
            width="650px"
            layout="responsive"
            />  
          </div>
          <div className="side_img img top">
            <Image 
            src="/img/semester_project2.png" 
            alt="Screenshot of the Special Events page. The page has the logo and navigation on top, with an image of a girl looking at an aquarium below. Across the image is the heading 'special events'. Below the image is the first event listed: Visiting professor of aeronautics."
            height="200px"
            width="315px"
            layout="responsive"
            />
          </div>
          <div className="side_img img bottom">
            <Image 
            src="/img/semester_project3.png" 
            alt="Screenshot of the booking page. The page contains the heading 'Entrance prices and bookings' in the top middle of the page. Below that is some information regarding prices with the website logo on the left hand side of that. Below this is a calendar and below the calendar is a list of ticket types and prices."
            height="200px"
            width="315px"
            layout="responsive"
            />
          </div>
        </div>
        <div className="project_dsc">
          <p>The objective of this assignment was to create a website for a childrens museum. The website needed to include information on special events, the different exhibitions they have available, a booking page, a contact page and an explore page. As the target audience was kinds and families with children aged 5-15, the website was supposed to reflect that.</p>
          <a href="https://friendly-allen-8d7c65.netlify.app" className="project_link grey">Go to website</a>
        </div>
      </div>
      <div className="project">
        <div className="project_headingL">
          <h2 className="static">HTML & CSS Project</h2>
        </div>
        <div className="project_img">
          <div className="main_img img">
            <Image 
            src="/img/html_css.png" 
            alt="Screenshot of the HTML & CSS project home page. The page has a navigation on top, with the logo (GH) on the top left side. The navigation contains Browse, Sell Games, Membership, Contact Us, FAQ, Basket and Login links. Below the navigation is an image of a game controller which spreads across the whole page. In the middle of the page (over the image), is some information about the website, the website logo in the middle and a button for 'browse games'."
            height="400px"
            width="650px"
            layout="responsive"
            />
          </div>
          <div className="side_img img top">
            <Image 
            src="/img/html_css2.png" 
            alt="Screenshot of the Contact us page. The page has the navigation on top, below the navigation is the heading 'Need help? Contact us'. Below the heading is a list of 3 methods of contact (from left to right); address, live chat or social media."
            height="200px"
            width="315px"
            layout="responsive"
            />
          </div>
          <div className="side_img img bottom">
            <Image 
            src="/img/html_css3.png" 
            alt="Screenshot of the Account page. The page has the navigation on top, below the navigation is the account settings, where you can edit or change username, email, personal details and address."
            height="200px"
            width="315px"
            layout="responsive"
            />
          </div>
        </div>
        <div className="project_dsc">
          <p>The objective of this assignment was to create a website for a game buying service where you could buy and sell games. The website needed to include a game browsing page (sorted by game type), a profile and login page, a checkout page and a checkout complete page.<br></br><span>NB! The API used to get the list of games is no longer available and therefore the browse page is empty.</span></p>
          <a href="https://affectionate-easley-709bde.netlify.app" className="project_link grey">Go to website</a>
        </div>
      </div>
     </div>
    </PortfolioStyle>
    </>
  );
};

export default PortfolioContent;