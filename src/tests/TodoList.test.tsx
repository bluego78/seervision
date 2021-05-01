import { unmountComponentAtNode } from "react-dom";
import TodoList from '../components/TodoList';
import { initState } from '../stores/TodoStore';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
let mockedStore:any;
let component:any;

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
  component = null;
});

describe('<TodoList />', () => {

    it("<TodoList /> renders all the elements", () => {
        
      let fakeTodos = [
          {_id:"1", text:"A", done:true, deleted:null, created:null, updated:null},
          {_id:"2", text:"B", done:true, deleted:null, created:null, updated:null},
          {_id:"3", text:"C", done:true, deleted:null, created:null, updated:null}
        ];

        mockedStore = mockStore({...initState, todos: fakeTodos });
       
        component = renderer.create(
          <Provider store={mockedStore}>
            <TodoList todos={fakeTodos} /> 
          </Provider>
        );

        expect(component.root.findByProps({className: "todo-list-container"})).toBeTruthy();
        expect(component.root.findByProps({className: "todo-list-header"})).toBeTruthy();
        expect(component.root.findByProps({className: "todo-list-header-title"})).toBeTruthy();
        expect(component.root.findByProps({className: "btn btn-add"})).toBeTruthy();

    });

});