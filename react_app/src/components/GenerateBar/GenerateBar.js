import React from "react";
import "./GenerateBar.css";

class GenerateBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      term: ""
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.generateShortUrl = this.generateShortUrl.bind(this);
  }

  // get input value
  handleTermChange (event) {
    this.setState({ term: event.target.value });
  }

  // call api to get short URL
  generateShortUrl () {
    // eslint-disable-next-line react/prop-types
    this.props.onGenerate(this.state.term);
  }

  render () {
    return (
          <div className="GenerateBar">
            <input placeholder="http://" onChange={this.handleTermChange} />
            <button className="GenerateButton" onClick={this.generateShortUrl}>Generate</button>
          </div>
    );
  }
}

export default GenerateBar;
