import React, {Component} from 'react';
import ResPdf from '../../Assets/Isaac Yep; Personal Resume.pdf';
import './Resume.css';

export class AboutMe extends Component {

  render() {
    return (
      <div>
        <h1>About Me</h1>
        {/* <h2>About Me</h2>
        <h3>About Me</h3> */}

        <p>This will be a paragraph that includes things, such as <a href={ResPdf} target="_blank">this</a></p>
      </div>
    );
  }
}