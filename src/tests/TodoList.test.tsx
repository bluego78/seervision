import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TodoList from '../components/TodoList';
import { store } from '../stores/TodoStore';

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

describe('<TodoList /> component tests', () => {

    // Verify if renders the TodoList container
    it("TodoList renders the TodoList container and all its children", () => {
        
        act(() => {
          render(<TodoList store={store}  />, container);
        });

        expect(container.querySelector(".todo-list-header")).toBeInTheDocument;
        expect(container.querySelector(".todo-list-header-title")).toBeInTheDocument;
        expect(container.querySelector(".todo-list-header-title").textContent).toBe("Todo List");
        expect(container.querySelector(".btn-add")).toBeInTheDocument;
        
    });

});