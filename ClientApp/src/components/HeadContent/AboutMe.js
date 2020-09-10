import React, {Component} from 'react';
import ResPdf from '../../Assets/Isaac Yep; Personal Resume.pdf';
import './Resume.css';

export class AboutMe extends Component {

  render() {
    return (
      <div>
        <h1>About Me</h1>
        <p>
          Hello! ようこそ! <br />
          I'm glad you made it to my portfolio. <br />
          My name's Isaac, I love people and I make things. <br />
          I was born and raised in Anchorage Alaska, where I studied at UAA and earned <br />
          a BS. in Mechanical Engineering while working as a math and physics tutor for <br />
          both the VA and the student services center. I worked as an engineering <br />
          researcher during our state's recession, and when layoffs were high and hiring <br />
          was frozen, was offered an adjunct math professor position at UAA. I began a <br />
          second interdisciplinary degree in mathematical physics while I was teacing, <br />
          and decided to move to Portland Oregon to finish my physics degree, in part <br />
          by engaging in hands-on research in atmospheric physics and climate change. <br />
          It was there that I developed a low-cost CO2 sensor and test apparatus, and <br />
          and subsequently fell in love with programming. I had written a lot of MATLAB <br />
          prior in engineering school, but this felt like looking into another creative <br />
          universe that I couldn't afford to let pass me by. I interviewed for a post-bacc <br />
          in computer sciene at PSU shortly thereafter, where I took an intense array of <br />
          courses ranging from data sctructures to softwareing engineering to operating <br />
          systems. I joined the CAT (computer action team) here at PSU, a student-led <br />
          IT orginazation for engineering students, and then within the CAT joined an <br />
          internal team that manages full stack tools that the CAT members use internally, <br />
          called the <em>syndiCAT</em>. It was there that I got to experience consistant <br />
          team development as a student, and offered a refined perspective on my classes <br />
          as a whole. I'm now a master's student at PSU for computer science, and feel <br />
          well pivoted into the field, having completed two software engineering <br />
          internships at NASA, Stennis Space Center, and occassionally teaching <br />
          introductory <em>Arduino</em> workshops (have instructed 4 so far).

          <a href="https://www.uaa.alaska.edu/academics/institutional-effectiveness/departments/center-community-engagement-learning/student-opportunities/index.cshtml">Alex Hills</a>
          <a href="http://plasma.uaa.alaska.edu/team-page.html">Plasma</a>
          <a href="https://cat.pdx.edu/">CAT</a>
          <a href="https://www.nasa.gov/centers/stennis/home/index.html">NASA</a>
        </p>

        <p>
          A downloadable pdf of my resume can be found 
          <a href={ResPdf} target="_blank" rel="noopener noreferrer"> here</a>.
        </p>
      </div>
    );
  }
}