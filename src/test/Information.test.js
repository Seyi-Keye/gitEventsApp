import React from "react";
import Information from "../Information";
import renderer from "react-test-renderer";

describe("Information component", () => {
  let wrapper = renderer.create(<Information data={{}} />);
  it("renders succesfully", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders without props", () => {
    const testInstace = wrapper.root;
    expect(testInstace.props).toEqual({ data: {} });
  });
});

describe("Information component", () => {
  const testProps = {
    data: {
      type: "Test Type",
      created_at: "2018-12-17T03:24:00",
      actor: {
        display_login: "Aromokeye"
      }
    }
  };
  let wrapper = renderer.create(<Information data={testProps.data} />);

  it("renders succesfully with props", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders with props", () => {
    const testInstace = wrapper.root;
    console.log(testInstace.props.data);
    expect(testInstace.props.data).toEqual(testProps.data);
  });
});
