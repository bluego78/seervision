import { unmountComponentAtNode } from "react-dom";
import { shallow } from 'enzyme';
import Todo from '../components/Todo';
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

describe('<Todo />', () => {

    it('<Todo /> renders all the elements' , () => {
        let fakeTodo = {_id:"xxxx", text:"xxx", done:true, deleted:null, created:null, updated:null}
        let wrapper = shallow(<Todo todo={fakeTodo}/>);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find(Done).length).toBe(1);
        expect(wrapper.find(".btn-delete").length).toBe(1);
        expect(wrapper.find(".todo-input").length).toBe(1);
    });

    it('<Todo /> passes the todo props to <Done />' , () => {
        let fakeTodo = {_id:"xxxx", text:"xxx", done:true, deleted:null, created:null, updated:null}
        let wrapper = shallow(<Todo todo={fakeTodo}/>);
        let done = wrapper.find(Done);
        expect(done.props().todo).toEqual(fakeTodo); 
    });

});