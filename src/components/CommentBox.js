import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends React.Component {
  state = {
    comment: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment </h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit comment</button>
        </div>
        <div style={{ marginTop: "6px" }}>
          <button
            type="button"
            className="btn-fetch-comments"
            onClick={this.props.fetchComments}
          >
            Fetch comments
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
