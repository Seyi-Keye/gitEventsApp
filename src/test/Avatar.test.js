import React from "react";
import Avatar from "../Avatar";
import renderer from "react-test-renderer";

describe("Avatar component", () => {
  let wrapper = renderer.create(<Avatar />);
  it("renders succesfully", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders without props", () => {
    const testInstace = wrapper.root;
    expect(testInstace.props).toEqual({});
  });
});

describe("Avatar component", () => {
  let wrapper = renderer.create(<Avatar picture="seyikkk" />);

  it("renders succesfully with props", done => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders with props", done => {
    setTimeout(() => {
      const testInstace = wrapper.root;
      expect(testInstace.props).toEqual({
        picture: "seyikkk"
      });
      // wrapper.unmount();
      done();
    }, 5000);
  });
});
