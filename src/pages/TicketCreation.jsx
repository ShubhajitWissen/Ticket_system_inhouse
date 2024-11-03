import { useState } from "react";
import "./TicketCreation.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const formateDate = function (date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

function TicketCreation() {
  const [createdDate, setCreatedDate] = useState(formateDate(new Date()));
  const [lastUpdated, setLastUpdated] = useState(formateDate(new Date()));
  const [ticketType, setTicketType] = useState("incident");
  const [owner, setOwner] = useState("");
  const [severity, setSeverity] = useState("high");
  const [category, setCategory] = useState("high");
  const [assignedTo, setAssignedTo] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleCancelBtn = () => {
    navigate("/tickets");
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if ((severity, category, assignedTo, description)) {
      const newTicket = {
        createdDate,
        lastUpdated,
        ticketType,
        owner,
        severity,
        category,
        assignedTo,
        description,
        uuid: uuidv4(),
      };
      console.log(newTicket);
    } else {
      alert("Please fill all the required fields!");
    }
  };

  return (
    <div className="ticket-form-container">
      <form>
        {/* First row of form fields */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="uuid">UUID</label>
            <input type="text" id="uuid" placeholder="eg 9768" disabled />
          </div>
          <div className="form-group">
            <label htmlFor="createdDate">Created Date</label>
            <input
              type="text"
              id="createdDate"
              placeholder="12/09/24"
              disabled
              value={createdDate}
              onChange={(e) => setCreatedDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastUpdated">Last Updated</label>
            <input
              type="text"
              id="lastUpdated"
              placeholder="12/09/24"
              disabled
              value={lastUpdated}
              onChange={(e) => setLastUpdated(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
            >
              <option value="incident">Incident</option>
              <option value="request">Request</option>
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
              placeholder="eg. Owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="severity">
              Severity <span>*</span>
            </label>
            <select
              id="severity"
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">
              Category <span>*</span>
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.currentTarget.value)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="assignedTo">
              Assigned to <span>*</span>
            </label>
            <input
              type="text"
              id="assignedTo"
              placeholder="eg. owner name"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="character-count">{description.length}/100</div>
          </div>
        </div>

        {/* Cancel and Submit buttons */}
        <div className="form-row actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={handleCancelBtn}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="submit-btn"
            onClick={handleSubmitBtn}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TicketCreation;
