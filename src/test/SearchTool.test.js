import React from "react";
import SearchTool from "../SearchTool";
import renderer from "react-test-renderer";

describe("SearchTool component", () => {
  let wrapper = renderer.create(<SearchTool />);
  it("renders succesfully", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders without props", () => {
    const testInstace = wrapper.root;
    expect(testInstace.props).toEqual({});
  });

  it("renders correct initial state", () => {
    const testInstance = wrapper.root;
    expect(testInstance.instance.state).toEqual({ username: "" });
  });
});

describe("SearchTool component", () => {
  let wrapper = renderer.create(<SearchTool />);
  const testInstance = wrapper.root.instance;
  testInstance.setState({ username: "aromokeye" });

  it("renders succesfully with props", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders with props", () => {
    console.log(testInstance);
    expect(testInstance.state).toEqual({ username: "aromokeye" });
  });
});

fdescribe("SearchTool functionalities", () => {
  // let handleFormSubmit = false;
  // const node = {
  //   createNodeMock: element => {
  //     if (element.type === "button") {
  //       // mock a focus function
  //       return {
  //         handleFormSubmit: () => {
  //           focused = true;
  //         }
  //       };
  //     }
  //     return null;
  //   }
  // }

  const stub = () => true;

  const componentRoot = renderer.create(<SearchTool onClick={stub} />).root;

  const componentInstance = componentRoot.instance;
  componentInstance.setState({ username: "aromokeye" });
  const button = componentRoot.findByType("button").props;
  console.log(
    "button",
    componentRoot.findByType("button").props.onClick(),
    componentInstance
  );
  it("calls handleFormSubmit on button click", () => {
    expect(
      componentRoot.findByType(button).props.handleFormSubmit()
    ).toHaveBeenCalledTimes(1);
  });
});
