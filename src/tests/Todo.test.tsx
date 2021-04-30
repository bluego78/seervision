import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Todo from '../components/Todo';

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

describe('<Todo /> component tests', () => {

    // Verify if renders the todo row container
    it("Todo renders the todo row and all its children", () => {
        
      let fakeTodo = {_id:"xxxx", text:"xxx", done:true, deleted:null, created:null, updated:null}
        act(() => {
          render(<Todo todo={fakeTodo} />, container);
        });

        expect(container.querySelector(".todo-row")).toBeInTheDocument;
        expect(container.querySelector(".done-element")).toBeInTheDocument;
        expect(container.querySelector(".btn-delete")).toBeInTheDocument;
        
    });

});