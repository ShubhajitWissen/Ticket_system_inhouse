import { useEffect, useState } from "react";
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
  const [ticketType, setTicketType] = useState("INC");
  const [owner, setOwner] = useState("");
  const [severity, setSeverity] = useState("3");
  // const [category, setCategory] = useState("high");
  const [assignedTo, setAssignedTo] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const alldev = JSON.parse(localStorage.getItem("alldev"));
  const currentUser = JSON.parse(localStorage.getItem("userDetail"));
  const token = JSON.parse(localStorage.getItem("token"));

  const resetForm = () => {
    setTicketType("incident");
    setOwner("");
    setSeverity("high");
    // setCategory("high");
    setAssignedTo("");
    setDescription("");
  };

  const handleCancelBtn = () => {
    resetForm();
    navigate("/tickets");
  };

  useEffect(() => {
    setOwner(currentUser.username);
  }, []);
  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    if ((severity, assignedTo, description)) {
      const newTicket = {
        typ: ticketType,
        status: "0",
        state: "0",
        severity: severity,
        description: description,
        assign_to_id: assignedTo,
      };

      const response = await fetch("http://127.0.0.1:8000/api/tickets/inc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(newTicket),
      });
      const data = await response.json();
      console.log(data);
    } else {
      alert("Please fill all the required fields!");
    }
  };

  return (
    <div className="ticket-form-container">
      <form className="ticket-form">
        {/* First row of form fields */}
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
            <label htmlFor="type">Type</label>
            <select
              id="type"
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
            >
              <option value="INC">Incident</option>
              <option value="SR">Service Request</option>
            </select>
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
              <option value="3">High</option>
              <option value="2">Medium</option>
              <option value="1">Low</option>
            </select>
          </div>
        </div>

        {/* Second row of form fields */}
        <div className="form-row">
          {/* <div className="form-group">
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
          </div> */}
          <div className="form-group">
            <label htmlFor="assignedTo">
              Assigned to <span>*</span>
            </label>
            <select
              type="text"
              id="assignedTo"
              placeholder="eg. owner name"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              {alldev.map((user) => {
                return (
                  <option key={user.uid} value={user.uid}>
                    {user.username}
                  </option>
                );
              })}
            </select>
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
            className="submitForm-btn"
            onClick={handleSubmitBtn}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="ticket-info"></div>
    </div>
  );
}

export default TicketCreation;
