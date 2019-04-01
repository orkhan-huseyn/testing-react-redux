import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentList from "components/CommentList";

describe("<CommentList />", function() {
  let wrapper;

  beforeEach(function() {
    const initialState = {
      comments: ["Comment 1", "Comment 2"]
    };

    wrapper = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  it("creates one <li> per comment", function() {
    expect(wrapper.find("li").length).toEqual(2);
  });
});
