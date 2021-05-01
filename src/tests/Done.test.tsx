import { unmountComponentAtNode } from "react-dom";
import {shallow } from 'enzyme';
import Done from '../components/Done';

let container:any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('<Done />', () => {

    // Verify if renders the checked icon if done=true
    it("<Done /> renders true", () => {
        
        let fakeTodo = {_id:"xxxx", text:"xxx", done:true, deleted:null, created:null, updated:null}
        let wrapper = shallow(<Done todo={fakeTodo}/>);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find(".done-true").length).toBe(1);

    });

    // Verify if renders the unchecked icon if done=false
    it("<Done /> renders false", () => {
        
        let fakeTodo = {_id:"xxxx", text:"xxx", done:false, deleted:null, created:null, updated:null}
        let wrapper = shallow(<Done todo={fakeTodo}/>);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find(".done-false").length).toBe(1);
    });
});