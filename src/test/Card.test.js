import React from "react";
import Card from "../Card";
import renderer from "react-test-renderer";

const initialState = {
  data: [],
  error: ""
};

describe("Card component", () => {
  let wrapper = renderer.create(<Card />);
  it("renders succesfully", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders without props", () => {
    const testInstace = wrapper.root;
    expect(testInstace.props).toEqual({});
  });

  it("renders correct initial state", () => {
    const testInstance = wrapper.root;
    expect(testInstance.instance.state).toEqual(initialState);
  });
});

describe("Card component", () => {
  let wrapper = renderer.create(<Card />);
  const testInstance = wrapper.root.instance;
  testInstance.setState({ username: "aromokeye" });

  it("renders succesfully with props", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders with props", () => {
    expect(testInstance.state).toEqual({
      data: [],
      error: "",
      username: "aromokeye"
    });
  });
});

// fdescribe("Card functionalities", () => {
//   let fetchEventPayload = false;
//   // const node = {
//   //   createNodeMock: () => {
//   //     return {
//   //       handleFormSubmit: () => {
//   //         focused = true;
//   //       }
//   //     };
//   //   }
//   // };

//   const stub = () => true;

//   const componentRoot = renderer.create(<Card />).root;
//   // , node).root;

//   const componentInstance = componentRoot.instance;
//   componentInstance.setState({ username: "aromokeye" });
//   const fetchEventPayloadSpy = jest.spyOn(
//     componentInstance.prototype,
//     "fetchEventPayload"
//   );

//   console.log(
//     "button",
//     fetchEventPayloadSpy,
//     "========",
//     componentInstance.fetchEventPayload
//   );
//   it("calls fetchEventPayload", () => {
//     expect(fetchEventPayloadSpy).toHaveBeenCalled();
//   });
// });
