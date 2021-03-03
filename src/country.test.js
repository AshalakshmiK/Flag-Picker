import React from 'react';
import { shallow } from 'enzyme';
import Country from './country';
import { render, fireEvent, getByTestId } from "@testing-library/react";

let cList = [{ name: "Nigeria", flag: "🇳🇬" },
{ name: "Ethiopia", flag: "🇪🇹" },
{ name: "Egypt", flag: "🇪🇬" },
{ name: "DR Congo", flag: "🇨🇩" },
{ name: "South Africa", flag: "🇿🇦" }
]

describe("Country", () => {
  it("should render Country", () => {
    const wrapper = shallow(<Country />);
    expect(wrapper.find('div h2').text()).toBe("Step 2");
    expect(wrapper.find('div .subHeading').text()).toBe("Now, Select a country");
  });

  it("display list of countries when text box is clicked", () => {
    const { container } = render(<Country countryList={cList} />);
    const country = getByTestId(container, "country");
    fireEvent.focus(country);
    const countryList = getByTestId(container, "countries");
    expect(countryList).toBeVisible();
  });

  it("should filter countries when searched for", () => {
    let wrapper = shallow(<Country countryList={cList} />);
    const input = wrapper.find("input");
    input.simulate("change", {
      target: { value: "Nigeria" }
    });
    expect(wrapper.state().countrySuggestion.length).toEqual(1);
  });
  it("should display countries on focus", () => {
    let wrapper = shallow(<Country countryList={cList} />);
    const input = wrapper.find("input");
    input.simulate("focus", {
      target: { value: "" }
    });
    expect(wrapper.state().countrySuggestion.length).toEqual(5);
  });
})

