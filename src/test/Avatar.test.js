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
  let wrapper = renderer.create(
    <Avatar picture="http://svgur.com/i/65U.svg" />
  );

  it("renders succesfully with props", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders with props", () => {
    const testInstace = wrapper.root;
    expect(testInstace.props).toEqual({
      picture: "http://svgur.com/i/65U.svg"
    });
  });
});
