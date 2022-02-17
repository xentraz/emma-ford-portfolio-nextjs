import {ExperienceStyle} from './experience.style';
import { Icon } from '@iconify/react';

const Experience = () => {
  return (
    <>
    <ExperienceStyle>
    <div classNameName="experience">
      <div className="experience_heading">
        <h2>Work Experience</h2>
      </div>
      <div className="experience_list">
        <div className="job left">
          <div className="job_info">
            <p className="blue date">2021</p>
            <h3 className="grey">Insj</h3>
            <p>Web Developer</p>
            <ul>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> NEEDED</li>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> NEEDED</li>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> NEEDED</li>
            </ul>
          </div>
        </div>
        <div className="job right">
          <div className="job_info">
            <p className="blue date">2021</p>
            <h3 className="grey">HeiPetter</h3>
            <p>Front-End Developer</p>
            <ul>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Created the design and layout of the product (website)</li>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Coded and created the website (font-end), ensuring all functionality and responsiveness is in order</li>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Usability testing, idea pitching and development of general product</li>
            </ul>
          </div>
        </div>
        <div className="job left">
          <div className="job_info">
            <p className="blue date">2019</p>
            <h3 className="grey">ColorLine</h3>
            <p>Sales & Group Coordinator</p>
            <ul>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Booking and coordinating travels for groups of up to 200 people</li>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Booking of hotels and other on land arrangements in Norway, Sweden, Denmark and Germany</li>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> B2B, B2C and internal communication in Norwegian and English. Taking payments, ensuring giros and / or invoices are sent out and paid</li>
            </ul>
          </div>
        </div>
        <div className="job right">
          <div className="job_info">
            <p className="blue date">2016</p>
            <h3 className="grey">Kingston University</h3>
            <p>Receptionist / Halls Assistant</p>
            <ul>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Reception and administrative work; answering phone calls, e-mails andattending to visitors</li>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Planning, scheduling and organising day to day tasks</li>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Ordering equipment, budgeting and taking inventory</li>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Reporting and follow-up of maintenance issues</li>
            </ul>
          </div>
        </div>
        <div className="job left">
          <div className="job_info">
            <p className="blue date">2013</p>
            <h3 className="grey">ColorLine</h3>
            <p>Booking Agent</p>
            <ul>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Booking of travels to all of ColorLine’s destinations</li>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Booking of event travels, both on board and on land</li>
              <li className="grey"><Icon icon="akar-icons:circle" color="#0E899F"/> Sales of extras on board (food, drinks, events, spa etc)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </ExperienceStyle>
    </>
  );
};

export default Experience;