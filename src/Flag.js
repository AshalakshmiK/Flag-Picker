import { Component } from "react";

class Flag extends Component {

  render() {
    return <div className="flagContainer">
      {this.props.flagList.length > 0 ? <div><h2>Selected Flags:</h2>
        {this.props.flagList.map(flag => <span key={flag.flag} className="flag">{flag.flag}</span>)}<br />
        <button className="clearButton" onClick={this.props.clearFlag}>Clear Flag</button></div> : ""}
    </div>
  }
}

export default Flag;