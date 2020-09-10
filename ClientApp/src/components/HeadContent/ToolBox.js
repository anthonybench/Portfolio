import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class ToolBox extends Component {

  render() {
    return (
      <Container>

        <h2>Sleepy's ToolBox</h2>
        <h4>My personally crafted reference</h4>
        <p>
          <strong>My ToolBox</strong>, hosted on <a href="https://github.com/anthonybench/anthonybench.github.io" target="_blank" rel="noopener noreferrer"><em>GitHub Pages</em></a>, <br />
          is a static filesystem of references collected and authored by me for developing <br />
          convenience. Delivering a minimal design without using a <em>Jekyll template</em>, <br />
          the homepage drops you right into my <em>Docs</em>, which I've summarized below as <br />
          well. The ToolBox is organized as shown below, with links to those sections.
        </p>

        <div>
          <h5>Docs</h5>
          <p>
            <a href="https://anthonybench.github.io/"><em>This page</em></a> serves as the home page for the ToolBox, <br />

          </p>

          <h5>Forms</h5>
          <p>
            <a href="https://anthonybench.github.io/forms.html"><em>This page</em></a>
          </p>

          <h5>Colors</h5>
          <p>
            <a href="https://anthonybench.github.io/colors.html"><em>This page</em></a>
          </p>

          <h5>Fonts</h5>
          <p>
            <a href="https://anthonybench.github.io/fonts.html"><em>This page</em></a>
          </p>

          <h5>Scripts</h5>
          <p>
            <a href="https://anthonybench.github.io/scripts.html"><em>This page</em></a>
          </p>
        </div>

      </Container>
    );
  }
}