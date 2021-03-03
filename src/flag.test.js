import React from 'react';
import { shallow } from 'enzyme';
import Flag from './Flag';

let flagList = [{ name: "Nigeria", flag: "🇳🇬" },
{ name: "Ethiopia", flag: "🇪🇹" },
]

describe("Flag Component", () => {
  it("should render Flag and call clear function on clicked on clear button", () => {
    const wrapper = shallow(<Flag flagList={flagList} clearFlag={jest.fn()} />);
    expect(wrapper.find('div h2').text()).toBe("Selected Flags:");
    expect(wrapper.instance().props.flagList.length).toEqual(2);
    wrapper.find('.clearButton').simulate('click');
    expect(wrapper.instance().props.clearFlag).toHaveBeenCalled();
  });
})

