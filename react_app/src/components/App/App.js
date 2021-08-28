import React from "react";
import "./App.css";
import GenerateBar from "../GenerateBar/GenerateBar";

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state={
      generateResult = {};
    }

    this.generateResult = this.generateResult.bind(this);
  }

  
  generateResult(term){

  }

  render () {
    return (
      <div>
        <h1>Short Links</h1>
        <div className="App">
          <GenerateBar onGenerate={this.search}/>
          <div className="Content-List">
            <List UrlList={this.state.shortLinkResults}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
