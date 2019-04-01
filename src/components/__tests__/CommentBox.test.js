import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentBox from "components/CommentBox";

describe("<CommentBox />", function() {
  let wrapper;

  beforeEach(function() {
    wrapper = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(function() {
    wrapper.unmount();
  });

  it("has a textarea and a button", function() {
    expect(wrapper.find("textarea").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });

  describe("<form>", function() {
    beforeEach(function() {
      wrapper.find("textarea").simulate("change", {
        target: { value: "new comment" }
      });
      wrapper.update();
    });

    it("has a text area that users can type is", function() {
      expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
    });

    it("clears the textarea after form is submitted", function() {
      wrapper.find("form").simulate("submit");
      wrapper.update();
      expect(wrapper.find("textarea").prop("value")).toEqual("");
    });
  });
});
