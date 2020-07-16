import React from "react";
import { shallow, mount } from 'enzyme';

import { Owners } from "./Owners";

beforeEach(() => {
  const mockOwners = [
        {
            "name":"Bob",
            "gender":"Male",
            "age":23,
            "pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]
        },
        {
            "name":"Jennifer",
            "gender":"Female",
            "age":18,
            "pets":[{"name":"Garfield","type":"Cat"}]
        }
    ];

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockOwners)
        })
    );
});

afterEach(() => {
  global.fetch.mockRestore();
});

describe('OwnersComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Owners debug />);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly in "debug" mode', () => {
        const component = mount(<Owners />);
        component
            .find('button')
            .simulate('keydown', { keyCode: 32 });
        expect(component).toMatchSnapshot();
    });
});