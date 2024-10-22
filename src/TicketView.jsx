import React from 'react';
import TicketCreation from './TicketCreationCopy';  // Your TicketCreation component
import CommentFunction from './Comment';  // Your CommentSection component
import './TicketView.css';  // The CSS file we just created

function TicketWithComments() {
  return (
    <div className="main-container">
      {/* Left section: Ticket Creation */}
      <div className="left-column">
        <TicketCreation />
      </div>

      {/* Right section: Comment Section */}
      <div className="right-column">
        <CommentFunction />
      </div>
    </div>
  );
}

export default TicketWithComments;
