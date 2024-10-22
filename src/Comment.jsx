import React, { useState } from 'react';
import './Comment.css';  // Importing the CSS file

function CommentFunction() {
  const [message, setMessage] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Submit logic goes here
    console.log("Comment submitted:", message);
    setMessage(''); // Clear the input after submission
  };

  return (
    <div className="comments-section">
      <div className="comments-header">
        <h3>Comments</h3>
      </div>

      <div className="comments-list">
        {/* Example comments */}
        <div className="comment">
          <img src="/path-to-avatar1.png" alt="User1" className="comment-avatar" />
          <div className="comment-content">
            <strong>User1</strong>
            <p>This is a comment</p>
          </div>
        </div>

        <div className="comment">
          <img src="/path-to-avatar2.png" alt="User2" className="comment-avatar" />
          <div className="comment-content">
            <strong>User2</strong>
            <p>Another comment</p>
          </div>
        </div>
      </div>

      {/* Comment input form */}
      <form className="comment-input-form" onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">
          <img src="/path-to-send-icon.png" alt="Submit" />
        </button>
      </form>
    </div>
  );
}

export default CommentFunction;
