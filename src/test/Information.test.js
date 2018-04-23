import React from "react";
import Information from "../Information";
import renderer from "react-test-renderer";

describe("Information component", () => {
  let wrapper = renderer.create(<Information />);
  it("renders succesfully", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders without props", () => {
    const testInstace = wrapper.root;
    expect(testInstace.props).toEqual({});
  });
});

describe("Information component", () => {
  const testProps = {
    type: "testType",
    created_at: "2018-12-17T03:24:00",
    actor: {
      display_login: "Aromokeye"
    }
  };
  let wrapper = renderer.create(<Information data={testProps} />);

  it("renders succesfully with props", done => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders with props", done => {
    setTimeout(() => {
      const testInstace = wrapper.root;
      expect(testInstace.props).toEqual(testProps);
      // wrapper.unmount();
      done();
    }, 5000);
  });
});
