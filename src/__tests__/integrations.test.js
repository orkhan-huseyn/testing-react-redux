import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(function() {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [
      {
        id: 1,
        name: "Fetched #1"
      },
      {
        id: 2,
        name: "Fetched #2"
      }
    ]
  });
});

afterEach(function() {
  moxios.uninstall();
});

it("can fetch list of comments and display them", function() {
  // render App
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  // click buton
  wrapper.find(".btn-fetch-comments").simulate("click");
  // expect list to have 500 items
  moxios.wait(function() {
    wrapper.update();
    expect(wrapper.find("li").length).toEqual(2);
    done();
    wrapper.unmount();
  });
});
