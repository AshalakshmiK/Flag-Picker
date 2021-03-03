import App from './App';
import { shallow } from 'enzyme';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('should render correctly', () => {
    expect(wrapper.find('.flagHeader').length).toBe(1);
  });
});
