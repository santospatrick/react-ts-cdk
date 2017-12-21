import { shallow } from "enzyme";
import React from "react";
import Clock from "./clock";

test("Title message to be 'Ok!'", () => {
  const wrap = shallow(<Clock msg="Ok!" />);

  expect(wrap.find("h1").text()).toEqual("Ok!");
});
