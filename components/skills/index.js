import {SkillsStyle} from './skills.style';
import Image from 'next/image'
import { Icon } from '@iconify/react';

const Skills = () => {
  return (
    <>
     <SkillsStyle>
        <div className="container">
          <div className="container-heading">
            <h2>Skills</h2>
          </div>
          <div className="container-skills">
            <div className="container-skills-soft">
              <h3>Soft Skills</h3>
              <ul>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Communication</li>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Critical Thinking</li>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Creativity</li>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Problem-Solving</li>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Organization</li>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Dependability</li>
              </ul>
            </div>
            <div className="container-skills-hard">
            <h3>Hard Skills</h3>
              <ul>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Programming</li>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Wireframes</li>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> User interface design</li>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Debugging</li>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Bilingual / Multilingual</li>
                <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Sales</li>
              </ul>
            </div>
            <div className="container-skills-software">
              <h3>Software</h3>
              <div className="container-skills-software-icons">
                {/* Struggling to get all these images to load?? */}
                <Image 
                alt='Image of CSS Logo'
                src="/img/CSS3.png"
                height="63px"
                width="63px"
                />
                <Image 
                alt='Image of Figma Logo'
                src="/img/figma.png"
                height="63px"
                width="63px"
                />
                <Image 
                alt='Image of Google Analytics photo'
                src="/img/google_analytics.png"
                height="63px"
                width="63px"
                />
                <Image 
                alt='Image of HTML logo'
                src="/img/html.png"
                height="63px"
                width="63px"
                />
                <Image 
                alt='Image of JavaScript Logo'
                src="/img/javascript.png"
                height="63px"
                width="63px"
                />
                <Image 
                alt='Image of Microsoft Office logo'
                src="/img/microsoft_office.png"
                height="63px"
                width="63px"
                />
                <Image 
                alt='Image of Miro logo'
                src="/img/miro.png"
                height="63px"
                width="63px"
                />
                <Image 
                alt='Image of Photoshop logo'
                src="/img/photoshop.png"
                height="63px"
                width="63px"
                />
                <Image 
                alt='Image of Twitch logo'
                src="/img/twitch.png"
                height="63px"
                width="63px"
                />
              </div>
            </div>
          </div>
        </div>
      </SkillsStyle>
    </>
  )
};

export default Skills;

