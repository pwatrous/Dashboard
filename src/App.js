import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import Time from './Components/Time';
import './App.css';
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

class App extends Component {
  render() {

    let layout = [
      { i: "a", x: 0, y: 0, w: 2, h: 2 },
    ];

    return (
      <ReactGridLayout className="app" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div className="timeContainer" key="a">
          <Time />
        </div>
      </ReactGridLayout>
    );
  }
}

export default App;
