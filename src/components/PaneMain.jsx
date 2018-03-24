import React, { Component } from 'react';
import SidePane from './SidePane';
import PaneContent from './PaneContent';

export default class PaneMain extends Component {
  render() {
    return (
      <SidePane
        rotationHome={-78}
        label="Main"
        className="mainPane contentPane"
      >
        <PaneContent className="paneContentMainColor" headerText="About Me">
          <h3>Hello</h3>
          <p>My name is Brandon but, I prefer Hudson. Yup, like the river.</p>
          <p>
            Currently I am primarily focused on working with front-end web
            development with a particular interest in SPA and progressive web
            apps. I have a working knowlege with React, Redux, Firebase, Git,
            HTMLJSCSS, and a few other common industry build tools and utilites.
          </p>
          <p>
            I am completely self taught with a little guidance from my brother
            and mentor,{' '}
            <a
              className="levi"
              href="http://levithomason.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Levi
            </a>. I have been coding and studying computer programming and
            architecture since I was in my early teens as a passion of mine.
            Somewhat recently I've decided to take my passion to the next
            iteration and persue a career with development in earnest.
          </p>
          <p>
            At this point in time I am looking an environment that will test my
            design, coding and learning abilities. My primary interest is in
            UX/UI design and implementation, although I am always up for a new
            challenge. Constantly I find myself doing what I once thought
            impossible.
          </p>
        </PaneContent>
      </SidePane>
    );
  }
}
