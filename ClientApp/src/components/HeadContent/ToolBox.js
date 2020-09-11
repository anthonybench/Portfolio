import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class ToolBox extends Component {

  render() {
    return (
      <Container>

        <h2>ToolBox</h2>
        <h4>My personally crafted reference</h4>
        <p>
          <em>Sleepy's ToolBox</em>, hosted on <a href="https://github.com/anthonybench/anthonybench.github.io" target="_blank" rel="noopener noreferrer"><em>GitHub Pages</em></a>, is a static filesystem of references <br />
          collected and authored by me for developing convenience. Delivering a <br />
          minimal design without using a <em>Jekyll template</em>, the homepage drops you <br /> right into my <em>Docs</em>, which I've summarized below as
          well.
          <br /><br />
          The site is organized as shown below, given as links to those sections:
        </p>

        <div>
        <a href="https://anthonybench.github.io/"><h5>Docs</h5></a>
          <p>
            My <em>ToolBox</em> homepage, which hosts a link farm to other colloquial <br />
            documentation.
          </p>

          <a href="https://anthonybench.github.io/fonts.html"><h5>Fonts</h5></a>
          <p>
            A scrolling gallery of well supported open source fonts I favorite.<br />
          </p>

          <a href="https://anthonybench.github.io/colors.html"><h5>Colors</h5></a>
          <p>
            A showcase of color themes/palletes of my invention.<br />
          </p>

          <a href="https://anthonybench.github.io/forms.html"><h5>Forms</h5></a>
          <p>
            A succinct demonstration of form components, as I find it easy to forget <br />
            them from project to project.
          </p>

          <a href="https://anthonybench.github.io/scripts.html"><h5>Scripts</h5></a>
          <p>
            Still under construction, but will serve as a gallery to demonstrate fun or <br />
            useful sciprts I've authored.
          </p>
        </div>

      </Container>
    );
  }
}