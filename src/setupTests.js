import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { shallowToJson, mountToJson } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = (Component) => {
  const tree = shallow(Component);
  tree.toJson = () => shallowToJson(tree);
  return tree;
};

global.mount = (Component) => {
  const tree = mount(Component);
  tree.toJson = () => mountToJson(tree);
  return tree;
};
