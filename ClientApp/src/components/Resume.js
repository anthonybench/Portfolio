// import React, { Component } from 'react';
// import { AboutMe } from './AboutMe';
// import ResumePg1 from './ResumePg1.jpeg';
// import ResumePg2 from './ResumePg2.jpeg';
// import './Resume.css';

// export class Resume extends Component {
  

//   render() {
//     return (
//       <div>
//         <AboutMe />
//         <span className="resume-embed">
//           <img src={ResumePg1} alt="Resume, Pg. 1" width="620" height="877" />
//           <img src={ResumePg2} alt="Resume, Pg. 1" width="620" height="877" />
//         </span>
//       </div>
//     );
//   }
// }

////////////////////////////////////

import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { AboutMe } from './AboutMe';
import ResumePg1 from './ResumePg1.jpeg';
import ResumePg2 from './ResumePg2.jpeg';
import './Resume.css';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <AboutMe />
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Cover
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            More
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <img className="resume-embed" src={ResumePg1} alt="Resume, Pg. 1" width="992" height="1403" />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <img className="resume-embed" src={ResumePg2} alt="Resume, Pg. 1" width="992" height="1403" />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Resume;