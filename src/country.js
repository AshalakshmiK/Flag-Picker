import { Component } from "react";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conuntry: "",
      countryList: [],
      selectedContinent: "",
      showCountry: false,
      countrySuggestion: [],
      flag: []
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.clearFlag === true) {
        this.setState({
          showCountry: false
        })
      }
      if (prevProps.countryList !== this.props.countryList) {
        this.setState({
          countrySuggestion: this.props.countryList
        })
      }
    }
  }
  onChange = (e) => {
    this.setState({ showCountry: true, [e.target.name]: e.target.value })
    let list = this.props.countryList.filter(cont => cont.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      countrySuggestion: list
    })
  }
  onChangeCheck = (e, country) => {
    let countryList = this.state.countrySuggestion.map(c => {
      if (c.name === country.name) {
        return { ...c, checked: !c.checked }
      } else {
        return { ...c }
      }
    })
    this.setState({ countrySuggestion: countryList })
    this.props.onChangeCheck(e, country);
  }
  render() {
    return <div className="countryContainer">
      {this.props.selectedContinent.length > 0 ? <div><h2>Step 2</h2>
        <div className="subHeading">Now, Select a country</div>
        <input type="text"
          data-testid="country"
          className="searchText"
          name="country"
          onChange={this.onChange}
          onFocus={this.onChange} /> </div> : ""}

      {this.state.showCountry ? <div data-testid="countries"> {this.state.countrySuggestion.map(cont => <div key={cont.name} className="countryList" ><input type='checkbox' id={cont.name}
        checked={cont.checked}
        onChange={(e) => this.onChangeCheck(e, cont)}
      />{cont.name}</div>)} </div> : ""}
    </div>
  }
}

export default Country;