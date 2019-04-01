import { commentsReducer } from "reducers/comments";
import { saveComment } from "actions";

describe("Comments Reducer", function() {
  it("handles actions of type SAVE_COMMENT", function() {
    const action = saveComment("new comment");
    const newState = commentsReducer([], action);
    expect(newState).toEqual(["new comment"]);
  });

  it("handles actions with unknown type", function() {
    const newState = commentsReducer([], { type: "RANDOM_ACTION" });
    expect(newState).toEqual([]);
  });
});
