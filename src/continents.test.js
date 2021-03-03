import React from 'react';
import { shallow } from 'enzyme';
import Continent from './continent';
import { render, fireEvent, getByTestId } from "@testing-library/react";

let list = ["Asia", "Africa", "America", "Europe", "Oceania"];
let continents = [{
  continent: "Africa",
  countries: [{ name: "Nigeria", flag: "🇳🇬" },
  { name: "Ethiopia", flag: "🇪🇹" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "DR Congo", flag: "🇨🇩" },
  { name: "South Africa", flag: "🇿🇦" }
  ]
}];
describe("Continets", () => {
  it("should render Continet Component", () => {
    const wrapper = shallow(<Continent selectedContinent="Africa" continents={continents} />);
    expect(wrapper.find('div h2').text()).toBe("Step 1");
  });

  it("display list of continets when text box is clicked", () => {
    const { container } = render(<Continent selectedContinent="Africa" continentList={list} continents={continents} />);
    const continent = getByTestId(container, "continent");
    fireEvent.focus(continent);
    const continentList = getByTestId(container, "cont");
    expect(continentList).toBeVisible();
  });

  it("should filter countries when searched for and should display selected continent", () => {
    let wrapper = shallow(<Continent selectedContinent="Africa" continentList={list} continents={continents} getCountry={jest.fn()} />);
    const input = wrapper.find("input");
    input.simulate("change", {
      target: { value: "Africa" }
    });
    expect(wrapper.state().continentSuggestion.length).toEqual(1);

    const li = wrapper.find("li");
    li.simulate("click");
    expect(wrapper.instance().props.selectedContinent.length).toEqual(6);
  });
})

