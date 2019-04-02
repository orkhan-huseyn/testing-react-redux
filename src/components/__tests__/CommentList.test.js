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

  it("shows the text for each comment", function() {
    expect(wrapper.render().text()).toContain("Comment 1");
    expect(wrapper.render().text()).toContain("Comment 2");
  });
});
