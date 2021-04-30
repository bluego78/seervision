import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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

describe('<Done /> component tests', () => {

    // Verify if renders the checked icon if done=true
    it("Done renders true", () => {
        
      let fakeTodo = {_id:"xxxx", text:"xxx", done:true, deleted:null, created:null, updated:null}
        act(() => {
          render(<Done todo={fakeTodo} />, container);
        });

        expect(container.querySelector(".done-true")).toBeInTheDocument;
    });

    // Verify if renders the unchecked icon if done=false
    it("Done renders false", () => {
        
      let fakeTodo = {_id:"xxxx", text:"xxx", done:false, deleted:null, created:null, updated:null}
        act(() => {
          render(<Done todo={fakeTodo} />, container);
        });

        expect(container.querySelector(".done-false")).toBeInTheDocument;
    });
});