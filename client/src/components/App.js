import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/* <Header /> */}
            <Route path="/" component={Landing} exact></Route>
            <Route path="/" component={Landing}></Route>
            <Route path="/" component={Landing}></Route>
            <Route path="/" component={Landing}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
