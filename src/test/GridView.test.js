import React from "react";
import GridView from "../GridView";
import renderer from "react-test-renderer";

describe("GridView component", () => {
  let wrapper = renderer.create(<GridView />);
  it("renders succesfully", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders without props", () => {
    const testInstace = wrapper.root;
    expect(testInstace.props).toEqual({});
  });
});

describe("GridView component", () => {
  let wrapper = renderer.create(<GridView username="seyi" />);

  it("renders succesfully with props", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders with props", () => {
    const testInstace = wrapper.root;
    expect(testInstace.props).toEqual({ username: "seyi" });
  });
});
