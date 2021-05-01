import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { shallow } from 'enzyme';
import App from '../components/App';
import { initState } from '../stores/TodoStore';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


const mockStore = configureStore([]);
let mockedStore:any;
let component:any;
let container:any = null;
let appState:any;

beforeEach(async () => {
  mockedStore = mockStore(initState);
  appState = await mockedStore.getState();
  component = shallow(
    <Provider store={mockedStore}>
      <App appState={appState} />
    </Provider>
  )
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

describe('<App /> component tests', () => {
    
    
    it("App renders the loading spinner if iLoading is true", async () => {
        appState.isLoading = true;
        act(() => {
          render(<Provider store={mockedStore}><App /></Provider>, container);
        });
        expect(container.querySelector(".spinner")).toBeInTheDocument;
    });
 

    it("App doesn't render the loading spinner if iLoading is false", async () => {
        appState.isLoading = false;
        act(() => {
          render(<Provider store={mockedStore}><App /></Provider>, container);
        });
        expect(container.querySelector(".spinner")).not.toBeInTheDocument;
    });

});