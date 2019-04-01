import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.comments.map(function(comment, index) {
          return <li key={index}>{comment}</li>;
        })}
      </ul>
    );
  }
}

function mapStateToProps({ comments }) {
  return { comments };
}

export default connect(mapStateToProps)(CommentList);
