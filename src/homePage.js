import { React, Component } from "react";
import "./homePage.css";
import Continent from "./continent"
import Country from "./country"
import continents from "./continents.json"
import Flag from "./Flag";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      selectedContinent: "",
      countryList: [],
      flag: [],
      clearFlagData: false
    }
  }

  getCountry = (e) => {
    this.setState({ selectedContinent: e, flag: [] }, () => {
      let countryList = continents.filter(cont => cont.continent === this.state.selectedContinent)
      countryList = countryList[0].countries.map(c => {
        return { ...c, checked: false }
      })
      this.setState({
        countryList, clearFlagData: true
      })
    })
  }

  onChangeCheck = (e, country) => {
    let countryList = this.state.countryList.map(c => {
      if (c.name === country.name) {
        return { ...c, checked: !c.checked }
      } else {
        return { ...c }
      }
    })
    this.setState({
      countryList,
      clearFlagData: false
    }, () => this.getFlag())
  }

  getFlag = () => {
    let flag = this.state.countryList.filter(flag => {
      return flag.checked === true
    })
    this.setState({ flag })
  }

  clearFlag = () => {
    let countryList = this.state.countryList.map(count => {
      return { ...count, checked: false }
    })
    this.setState({ countryList, flag: [], clearFlagData: true })
  }

  render() {
    return <div className="container">
      <Continent
        continents={continents}
        selectedContinent={this.state.selectedContinent}
        getCountry={this.getCountry} />

      <Country
        continents={continents}
        countryList={this.state.countryList}
        selectedContinent={this.state.selectedContinent}
        onChangeCheck={this.onChangeCheck}
        clearFlag={this.state.clearFlagData}
      />

      <Flag
        flagList={this.state.flag}
        clearFlag={this.clearFlag}
      />
    </div>
  }
}

export default HomePage;