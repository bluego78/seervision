import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from '../components/App';
import { store } from '../stores/TodoStore';
import ITodoState from '../Interfaces/ITodoState';
import { Provider } from 'react-redux';

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

describe('<App /> component tests', () => {

    it("App renders the loading spinner if iLoading is true", async () => {
        
        var appState = await store.getState();
        appState.isLoading = true;
        act(() => {
          render(<Provider store={store}><App appState={appState} /></Provider>, container);
        });

        expect(container.querySelector(".spinner")).toBeInTheDocument;
    });

    it("App doesn't render the loading spinner if iLoading is false", async () => {
        
        var appState = await store.getState();
        appState.isLoading = false;
        act(() => {
          render(<Provider store={store}><App appState={appState} /></Provider>, container);
        });

        expect(container.querySelector(".spinner")).not.toBeInTheDocument;
    });

});