import React, { Component } from 'react';
import SidePane from './SidePane';
import PaneContent from './PaneContent';
import PaneContentGallery from './PaneContentGallery';
import IconBar from './IconBar';
import Icon from './Icon';
import jqueryImg from '../res/jquery.svg';
import reactImg from '../res/react.svg';
import reduxImg from '../res/redux.svg';
import sassImg from '../res/sass.svg';
import firebaseImg from '../res/firebase.svg';
import semanticImg from '../res/semantic-ui.svg';
import githubImg from '../res/github.svg';
import previewImg from '../res/preview.svg';

export default class PaneProjects extends Component {
  render() {
    return (
      <SidePane
        rotationHome={-86}
        label="Projects"
        className="projectsPane contentPane"
      >
        <PaneContentGallery>
          <PaneContent
            className="paneContentProjectsColor"
            headerText="Hangman"
          >
            <div>
              <p>
                Getting started in JS, one of the first real "apps" I created. A
                simple SPA of hangman.
              </p>

              <p>
                This was my first experience with jQuery and really JavaScript
                in general. Before hand I had nearly zero experience in
                JavaScript, HTML, CSS or any sort of programming language in
                general. This was created to get a foundational understand of
                the interaction of the DOM with JS, CSS as well as serving as an
                introduction to GIT and Git Hub.
              </p>
            </div>
            <IconBar>
              <Icon image={jqueryImg} link="https://jquery.com/" />
              <Icon
                image={githubImg}
                link="https://github.com/Lou-Saydus/hangman"
              />
              <Icon
                image={previewImg}
                link="http://hkmdevelopment.com/projects/hangman/"
              />
            </IconBar>
          </PaneContent>

          <PaneContent
            className="paneContentProjectsColor"
            headerText="Tic Tac Toe - jQuery"
          >
            <div>
              <p>
                First implementation of a javascript library. Namely, jQuery.
                This implementation is primative and makes little to no use of
                third party tooling such as babel, webpack, or NodeJS.
              </p>

              <p>
                This version of the project was abandoned due to complexity and
                lack of proper state management however, it is in a mostly
                functional state. Shortly there after I moved to more standard
                approach to this task.
              </p>
            </div>
            <IconBar>
              <Icon image={jqueryImg} link="https://jquery.com/" />
              <Icon
                image={githubImg}
                link="https://github.com/Lou-Saydus/ticTacToe/"
              />
              <Icon
                image={previewImg}
                link="http://hkmdevelopment.com/projects/ticTacToe/"
              />
            </IconBar>
          </PaneContent>

          <PaneContent
            className="paneContentProjectsColor"
            headerText="Tic Tac Toe - React"
          >
            <div>
              <p>
                A more mature implementation of the original idea, fully
                implemented and functional. This approach uses a number of
                frameworks and or libraries such as React, Material Web
                Components, and Redux.
              </p>
              <p>
                This version of the Tic Tac Toe demonstration takes a more
                modern "app" approach. It fully implements real-time multiplayer
                via Google's platform, state management with Redux and front end
                interaction with Facebook's React framework.
              </p>
              <p>
                Styled with Google's Material UI guidelines it takes on a modern
                and stylish visual appearance most users are familiar with.
              </p>
            </div>
            <IconBar>
              <Icon image={reactImg} link="https://reactjs.org/" />
              <Icon image={reduxImg} link="https://redux.js.org/" />
              <Icon image={firebaseImg} link="https://firebase.google.com/" />
              <Icon image={sassImg} link="https://www.sass-lang.com/" />
              <Icon
                image={githubImg}
                link="https://github.com/Lou-Saydus/ticTacToe-react"
              />
              <Icon
                image={previewImg}
                link="http://hkmdevelopment.com/projects/ticTacToe-react/"
              />
            </IconBar>
          </PaneContent>

          <PaneContent
            className="paneContentProjectsColor"
            headerText="HKM - Dev V1.0"
          >
            <div>
              <p>
                Used as a platform to track personal projects and demonstrate
                aptitude in designing, implementing, and deploying your every
                day web page. Primarily a static experience with swift and
                smooth interaction and loading.
              </p>
              <p>
                Styled with Semantic UI it assumes a modern and stylish demeanor
                with a minimalist approach. Once again using React as the
                backbone of the website.
              </p>
              <p>
                This version of this site was scraped due not feeling happy with
                the design. It gave a far more static and monolithic feel than
                what I had originally intended.
              </p>
            </div>
            <IconBar>
              <Icon image={reactImg} link="https://reactjs.org/" />
              <Icon image={semanticImg} link="https://semantic-ui.com/" />
              <Icon image={sassImg} link="https://www.sass-lang.com/" />
              <Icon
                image={githubImg}
                link="https://github.com/Lou-Saydus/hkmdevelopment"
              />
              <Icon
                image={previewImg}
                link="http://hkmdevelopment.com/projects/hkmdevelopment/"
              />
            </IconBar>
          </PaneContent>

          <PaneContent
            className="paneContentProjectsColor"
            headerText="HKM - Dev V2.0"
          >
            <div>
              <p>
                A custom implementation of this site again using React as the
                front end framework but with completely custom styling and
                design.
              </p>
              <p>
                More interactive and far more lively in color palette than the
                original design. This version gives a much warmer feel and
                handles site navigation in an intuitive manner.
              </p>
            </div>
            <IconBar>
              <Icon image={reactImg} link="https://reactjs.org/" />
              <Icon image={sassImg} link="https://www.sass-lang.com/" />
              <Icon
                image={githubImg}
                link="https://github.com/Lou-Saydus/hkmdevelopmentv2"
              />
            </IconBar>
          </PaneContent>
        </PaneContentGallery>
      </SidePane>
    );
  }
}
