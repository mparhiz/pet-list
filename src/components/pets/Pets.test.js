import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Pets } from "./pets";

let container = null;
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

describe('PetsComponent', () => {
    it("renders with a list of pets name and 'Male' gender", () => {
        const petsNameList = ['Simba','Max','Garfield','Tabby'];
        const gender = "Male";
        act(() => {
            render(<Pets gender={gender} petsName={petsNameList} />, container);
        });
        const h3 = container.querySelector('h3');
        const li = container.querySelector('li');
        expect(h3.textContent).toBe('Male');
        expect(li.textContent).toBe('Simba');
    });

    it("renders with a list of pets name and 'Female' gender", () => {
        const petsNameList = ['Simba','Max','Garfield','Tabby'];
        const gender = "Female";
        act(() => {
            render(<Pets gender={gender} petsName={petsNameList} />, container);
        });
        expect(container.textContent).toBe("FemaleSimbaMaxGarfieldTabby");
    });
});