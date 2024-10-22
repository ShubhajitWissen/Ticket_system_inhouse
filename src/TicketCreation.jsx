import React, { useState } from 'react';
import './TicketCreation.css'; // Import the CSS file

function TicketCreation() {
  const [description, setDescription] = useState('');
  
  return (
    <div className="ticket-form-container">
      <form>
        {/* First row of form fields */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="uuid">UUID</label>
            <input type="text" id="uuid" placeholder="Text" disabled />
          </div>
          <div className="form-group">
            <label htmlFor="createdDate">Created Date</label>
            <input type="text" id="createdDate" placeholder="12/09/24" disabled />
          </div>
          <div className="form-group">
            <label htmlFor="lastUpdated">Last Updated</label>
            <input type="text" id="lastUpdated" placeholder="12/09/24" disabled />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select id="type">
              <option value="Incident">Incident</option>
              <option value="Request">Request</option>
            </select>
          </div>
        </div>

        {/* Second row of form fields */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="owner">Owner</label>
            <input type="text" id="owner" placeholder="Text" />
          </div>
          <div className="form-group">
            <label htmlFor="severity">Severity <span>*</span></label>
            <select id="severity">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category <span>*</span></label>
            <select id="category">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="assignedTo">Assigned to <span>*</span></label>
            <input type="text" id="assignedTo" placeholder="Lorem" />
          </div>
        </div>

        {/* Description field */}
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="description">Description <span>*</span></label>
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
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TicketCreation;
