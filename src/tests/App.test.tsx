import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {shallow} from 'enzyme';
import App from '../components/App';
import { initState } from '../stores/TodoStore';
import ITodoState from '../Interfaces/ITodoState';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoList from '../components/TodoList';
import Spinner from '../components/Spinner';
import { isAssertionExpression } from "typescript";
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);
let mockedStore:any;
let wrapper:any;
let component:any;

beforeEach(() => {
    
});

afterEach(() => {
    mockedStore = null;
    wrapper = null;
    component = null;
});

describe('<App /> component tests', () => {

    it("appState contains all the properties", ()=>{

        mockedStore = mockStore(initState);
        let appState:any = mockedStore.getState();
        
        //Check if are defined
        expect(appState.isLoading).toBeDefined();
        expect(appState.message).toBeDefined();
        expect(appState.error).toBeDefined();
        expect(appState.todos).toBeDefined();

        //Check the type
        expect(appState.todos instanceof Array).toBeTruthy();

    });



    it('App should render with given state from Redux store', () => {
            mockedStore = mockStore(initState);
            component = renderer.create(
            <Provider store={mockedStore}>
              <App /> 
            </Provider>
          );
          expect(component.toJSON()).toMatchSnapshot();
    });

    it("App contains the spinner component", async () => {
        mockedStore = mockStore(initState);
        component = renderer.create(
          <Provider store={mockedStore}>
            <App /> 
          </Provider>
        );
        expect(component.root.findByProps({className: "spinner"})).toBeTruthy();
        expect(component.root.findByType(Spinner)).toBeTruthy();
    });


});