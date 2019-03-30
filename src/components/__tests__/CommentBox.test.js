import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

describe("<CommentBox />", function() {

  let wrapper;

  beforeEach(function() {
    wrapper = mount(<CommentBox />);
  });

  afterEach(function() {
    wrapper.unmount();
  });

  it("has a textarea and a button", function() {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

});
