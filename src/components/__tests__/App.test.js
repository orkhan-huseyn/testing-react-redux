import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapper;

beforeEach(function() {
  wrapper = shallow(<App />);
});

it("shows a comment box", function() {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("shows the comment list", function() {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
