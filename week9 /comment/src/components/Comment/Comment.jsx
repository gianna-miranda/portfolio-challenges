import 
React from 
'react';





class 
Comment extends 
React.Component {

render () {

return(

<div
className="comment">

<p
className="comment-header">{this.props.author}</p>

<p
className="comment-body">-
{this.props.body}</p>

<div
className="comment-footer">

<a
className="comment-footer-delete"
onClick={this._deleteComment}>Delete Comment</a>

</div>

</div>

);

}

_deleteComment() {

alert("-- DELETE Comment Functionality COMMING SOON...");

}

}



export 
default Comment;