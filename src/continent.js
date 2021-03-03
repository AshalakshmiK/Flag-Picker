import { Component } from "react";

class Continent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      continentList: [],
      continentSuggestion: [],
      continent: "",
      selectedContinent: ""
    }
  }

  componentDidMount() {
    let continentList = this.props.continents.map(cont => {
      return cont.continent;
    });
    this.setState({ showContinent: true, continentList })
  }

  hideContinents = () => {
    this.setState({
      showContinent: false
    })
  }
  getCountry = (e) => {
    this.setState({ showContinent: false })
    this.props.getCountry(e)
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, showContinent: true })
    let list = this.state.continentList.filter(cont => cont.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      continentSuggestion: list
    })
  }
  render() {
    return <div>
      <h2>Step 1</h2>
      <div className="subHeading">Select a continent</div>

      <input type="text"
        data-testid="continent"
        className="searchText"
        autoComplete="off"
        name="continent"
        onChange={this.onChange}
        onFocus={this.onChange}
      />

      {this.state.showContinent ? <div data-testid="cont">
        {this.state.continentSuggestion.map(cont => <li key={cont} onClick={e => this.getCountry(cont)}>{cont}</li>)}
      </div> : ""}
      {this.props.selectedContinent.length > 0 ?
        <div data-testid="selectedContinent" className="subHeading">You Selected: {this.props.selectedContinent}</div> : ""}
    </div>
  }
}

export default Continent;