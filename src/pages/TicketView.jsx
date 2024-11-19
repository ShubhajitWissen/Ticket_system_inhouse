import React from "react";
import TicketViewForm from "./TicketViewForm"; // Your TicketCreation component
import CommentFunction from "./Comment"; // Your CommentSection component
import "./TicketView.css"; // The CSS file we just created
import { useParams } from "react-router-dom";

function TicketView() {
  const params = useParams()
  
  return (
    <div className="main-container">
      {/* Left section: Ticket Creation */}
      <div className="left-column">
        <TicketViewForm id={params.id}/>
      </div>

      {/* Right section: Comment Section */}
      <div className="right-column">
        <CommentFunction />
      </div>
    </div>
  );
}

export default TicketView;
