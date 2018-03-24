import React, { Component } from 'react';
import HomePane from './components/HomePane';
// import TentacleMonster from './components/TentacleMonster';
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
