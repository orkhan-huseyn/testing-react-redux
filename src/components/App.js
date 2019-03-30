import React from "react";

import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default function() {
  return (
    <React.Fragment>
      <CommentBox />
      <CommentList />
    </React.Fragment>
  );
};
