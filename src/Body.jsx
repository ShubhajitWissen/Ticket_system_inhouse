

import React, { useState } from "react";
import './Tickets.css'; // External CSS

function Tickets() {
  // Sample data for tickets
  const tickets = [
    { uuid: 1, dueDate: "20 Oct 2024", severity: "High", assignedTo: "First Name", description: "Lorem Ipsum", category: "First Name", status: "First Name", type: "First Name" },
    { uuid: 2, dueDate: "20 Jan 2025", severity: "High", assignedTo: "First Name", description: "Lorem Ipsum", category: "First Name", status: "First Name", type: "First Name" },
    { uuid: 3, dueDate: "20 Dec 2024", severity: "Low", assignedTo: "First Name", description: "Lorem Ipsum", category: "First Name", status: "First Name", type: "First Name" },
    { uuid: 4, dueDate: "20 July 2024", severity: "Low", assignedTo: "First Name", description: "Lorem Ipsum", category: "First Name", status: "First Name", type: "First Name" },
    { uuid: 5, dueDate: "-", severity: "Medium", assignedTo: "First Name", description: "Lorem Ipsum", category: "First Name", status: "First Name", type: "First Name" },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="main-container">
      <div className="left-empty"></div>
      <div className="right-content">
        {/* Create Ticket Button */}
        <div className="create-ticket-btn">
          <button>New Ticket</button>
        </div>

        {/* Incident Tickets Section */}
        <TicketSection
          title="Incident Tickets"
          tickets={tickets}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handleItemsPerPageChange={handleItemsPerPageChange}
          handlePageChange={handlePageChange}
        />

        {/* RITM Tickets Section */}
        <TicketSection
          title="SR Tickets"
          tickets={tickets}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handleItemsPerPageChange={handleItemsPerPageChange}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

function TicketSection({ title, tickets, itemsPerPage, currentPage, handleItemsPerPageChange, handlePageChange }) {
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentTickets = tickets.slice(startIdx, startIdx + itemsPerPage);

  return (
    <section className="ticket-section">
      <div className="header">
        <h2>{title}</h2>
        <button className="filter-btn">🔍</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>UUID</th>
            <th>Due Date</th>
            <th>Severity</th>
            <th>Assigned To</th>
            <th>Description</th>
            <th>Category</th>
            <th>Status</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {currentTickets.map((ticket) => (
            <tr key={ticket.uuid}>
              <td><a href="#">{ticket.uuid}</a></td>
              <td>{ticket.dueDate}</td>
              <td>{ticket.severity}</td>
              <td>{ticket.assignedTo}</td>
              <td>{ticket.description}</td>
              <td>{ticket.category}</td>
              <td>{ticket.status}</td>
              <td>{ticket.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="pagination">
  <span>Items per page</span>
  <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
    <option value={10}>10</option>
    <option value={20}>20</option>
    <option value={50}>50</option>
  </select>
  <span>{startIdx + 1}-{Math.min(startIdx + itemsPerPage, tickets.length)} of {tickets.length}</span>
  
  <div className="pagination-controls">
    {/* Previous Page Button */}
    <button
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="page-arrow"
    >
      &#8249; {/* Left arrow symbol */}
    </button>

    {/* Page Numbers */}
    {[1, 2, '...', 200].map((page, index) => (
      <button
        key={index}
        onClick={() => typeof page === 'number' && handlePageChange(page)}
        className={currentPage === page ? 'active-page' : 'inactive-page'}
      >
        {page}
      </button>
    ))}

    {/* Next Page Button */}
    <button
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === 200}  // Assuming 200 is the max page
      className="page-arrow"
    >
      &#8250; {/* Right arrow symbol */}
    </button>
  </div>
</div>
    </section>
  );
}

export default Tickets;

