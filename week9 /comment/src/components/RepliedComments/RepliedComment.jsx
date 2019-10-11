import React from 'react'



const RepliedComment = (props) => {
    return(
        <div className='replied-comment'>
            <p>{props.repliedCommentObj.commentDescription}</p>
            <button onClick={() => props.likeRepliedComment(props.originalCommentIndex, props.repliedCommentIndex)}>Like</button>
            <p>{props.repliedCommentObj.likes}</p>
            <button onClick={() => props.dislikeRepliedComment(props.originalCommentIndex, props.repliedCommentIndex)}>Dislike</button>
            <p>{props.repliedCommentObj.dislikes}</p>
            <button onClick={() => props.deleteRepliedComment(props.originalCommentIndex, props.repliedCommentIndex)}>Delete</button>
          </div>
    )
}
export default RepliedComment