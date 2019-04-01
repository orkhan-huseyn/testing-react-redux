import { SAVE_COMMENT } from "actions/types";
import { saveComment } from "actions";

describe("saveComment", function() {
  it("has the correct type", function() {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", function() {
    const action = saveComment("new comment");
    expect(action.payload).toEqual("new comment");
  });
});
