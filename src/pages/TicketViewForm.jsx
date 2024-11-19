import React, { useEffect, useState } from "react";
import "./TicketViewForm.css"; // Import the CSS file
import { useNavigate, useParams } from "react-router-dom";

function TicketViewForm(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [currentTicket, setCurrentTicket] = useState();
  const currentUser = localStorage.getItem("userDetail");
  console.log(currentUser);
  useEffect(() => {
    async function getTicketWithId() {
      const response = await fetch(`http://127.0.0.1:8000/api/tickets/${id}`);
      const data = await response.json();
      console.log(data);
      setCurrentTicket(data);
    }
    getTicketWithId();
  }, []);

  return (
    <div className="ticket-form-container">
      <form>
        {/* First row of form fields */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="uuid">UUID</label>
            <input
              type="text"
              id="uuid"
              placeholder="Text"
              value={id}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="createdDate">Created Date</label>
            <input
              type="text"
              id="createdDate"
              placeholder="12/09/24"
              value={currentTicket?.create_date}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastUpdated">Last Updated</label>
            <input
              type="text"
              id="lastUpdated"
              placeholder="12/09/24"
              value={currentTicket?.update_date}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select id="type" disabled value={currentTicket?.typ}>
              <option value="INC">Incident</option>
              <option value="SR">Request</option>
            </select>
          </div>
        </div>

        {/* Second row of form fields */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="owner">Owner</label>
            <input
              type="text"
              id="owner"
              placeholder="Text"
              disabled
              value={currentUser?.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="severity">
              Severity <span>*</span>
            </label>
            <select id="severity" disabled value={currentTicket?.severity}>
              <option value="3">High</option>
              <option value="2">Medium</option>
              <option value="1">Low</option>
            </select>
          </div>
          {/* <div className="form-group">
            <label htmlFor="category">
              Category <span>*</span>
            </label>
            <select id="category" disabled value={currentTicket?.category}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div> */}
          <div className="form-group">
            <label htmlFor="assignedTo">
              Assigned to <span>*</span>
            </label>
            <input
              type="text"
              id="assignedTo"
              placeholder="Lorem"
              disabled
              value={currentTicket?.assign_to_id}
            />
          </div>
        </div>

        {/* Description field */}
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="description">
              Description <span>*</span>
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Description"
              disabled
              value={currentTicket?.description}
            ></textarea>
            <div className="character-count">2/100</div>
          </div>
        </div>

        {/* Cancel and Submit buttons */}
        <div className="form-row actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => {
              navigate("/tickets");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TicketViewForm;
