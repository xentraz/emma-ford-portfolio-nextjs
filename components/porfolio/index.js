import { PortfolioStyle } from "./portfolio.style";
import Image from "next/image";
import styled from "styled-components";

const ProjectWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Project = ({
  title = "Project Title",
  mainImgs = [],
  description = "Project description",
  isReverse = false,
}) => {
  return (
    <ProjectWrapper>
      <div className={`project_heading${isReverse ? "R" : ""}`}>
        <h2 className="static">{title}</h2>
      </div>

      <div className="project_img">
        {/* DRY - use array */}
        {mainImgs.map((img) => (
          <div
            key={img.url}
            // TODO: this should just be states passed to a styled-component. This can all be done with css
            className={`${img.isMainImg ? "main_img img" : "side_img img"} ${
              img.position
            }"`}
          >
            <Image
              src={img.url}
              alt={img.alt}
              height="400px"
              width="650px"
              layout="responsive"
              dynamicPosition={() => "top" || "bottom"}
            />
          </div>
        ))}
      </div>
      <div className="project_dsc">
        {/* TODO: Need markdown for HTML */}

        <p>{description}</p>
        <a
          href="https://emmastravelblog.netlify.app/"
          className="project_link grey"
        >
          Go to website
        </a>
      </div>
    </ProjectWrapper>
  );
};

const PortfolioContent = () => {
  const projectList = [
    {
      id: "0",
      title: "Semester Project 01",
      description: `The objective of this assignment was to create an ecommerce website of
        our choosing. The website was to connect to an API that we created
        ourselves. <br></br> The API needed to include specific details such as
        title, an image and description etc. After connecting to the API we had
        to create a login portal where you could add, edit and create new
        products which would be changed in the API. We also needed to be able to
        add all the products to a cart using localstorage and then remove the
        items from localstorage if the item was deleted from the cart.`,
      mainImgs: [
        {
          url: "/img/SemProject21.png",
          isMainImg: true,
          position: "",
          alt: "Screenshot of the semester project font page. The page contains a navigation on the top left side, the nagivation contains Home, Archive, Gallery, About and Contact. In the top right corner are the letters E.F.T listed in dark green. Below the navigation in an image slider wich contains 5 different images, the image displayed is of a canal in amsterdam surrounded by buildings. Below the image slider is a heading saying Emma's Travel Blog. Below the heading is an image of Emma inside a white circle, to the left of the image is a description of the website.",
        },
        {
          url: "/img/SemProject21-2.png",
          position: "top",
          alt: "Screenshot of the semester project font page. The page contains a navigation on the top left side, the nagivation contains Home, Archive, Gallery, About and Contact. In the top right corner are the letters E.F.T listed in dark green. Below the navigation in an image slider wich contains 5 different images, the image displayed is of a canal in amsterdam surrounded by buildings. Below the image slider is a heading saying Emma's Travel Blog. Below the heading is an image of Emma inside a white circle, to the left of the image is a description of the website.",
        },
        {
          url: "/img/SemProject21.png",
          position: "bottom",
          alt: "Screenshot of the semester project font page. The page contains a navigation on the top left side, the nagivation contains Home, Archive, Gallery, About and Contact. In the top right corner are the letters E.F.T listed in dark green. Below the navigation in an image slider wich contains 5 different images, the image displayed is of a canal in amsterdam surrounded by buildings. Below the image slider is a heading saying Emma's Travel Blog. Below the heading is an image of Emma inside a white circle, to the left of the image is a description of the website.",
        },
      ],
    },
  ];
  return (
    <>
      <PortfolioStyle>
        <div className="project_list">
          {projectList.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              mainImgs={project.mainImgs}
            />
          ))}
          {/*
          This should be a component 
          {DRY  - listOfProject.map} */}
          <div className="project">
            <div className="project_headingR">
              <h2 className="static">Semester Project</h2>
            </div>
            <div className="project_img">
              <div className="main_img img">
                {/* DRY - use array */}
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
              <p>
                The objective of this assignment was to create an ecommerce
                website of our choosing. The website was to connect to an API
                that we created ourselves. <br></br> The API needed to include
                specific details such as title, an image and description etc.
                After connecting to the API we had to create a login portal
                where you could add, edit and create new products which would be
                changed in the API. We also needed to be able to add all the
                products to a cart using localstorage and then remove the items
                from localstorage if the item was deleted from the cart.
              </p>
              <a
                href="https://emmastravelblog.netlify.app/"
                className="project_link grey"
              >
                Go to website
              </a>
            </div>
          </div>
        </div>
      </PortfolioStyle>
    </>
  );
};

export default PortfolioContent;
