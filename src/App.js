import React, { Component } from 'react';
import SidePane from './components/SidePane';
import HomePane from './components/HomePane';
import TentacleMonster from './components/TentacleMonster';
import PaneContent from './components/PaneContent';
import PaneContentGallery from './components/PaneContentGallery';

import PaneProjects from './components/PaneProjects';
import PaneContactMe from './components/PaneContactMe';
import PaneMain from './components/PaneMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        I AM ROOT {/* <TentacleMonster/> */}
        <HomePane />
        <PaneMain />
        <PaneContactMe />
        <PaneProjects />
      </div>
    );
  }
}

export default App;
