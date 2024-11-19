/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Tickets.css"; // External CSS
import { Link, useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component

function Tickets() {
  // Sample data for tickets
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const userData = JSON.parse(localStorage.getItem("userDetail"));

  const [tickets, setTickets] = useState([]);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNewTicket = () => {
    navigate("/newTicket");
  };

  useEffect(() => {
    try {
      async function getAllTickets() {
        const response = await fetch("http://127.0.0.1:8000/api/tickets", {
          method: "GET", // or 'POST', 'PUT', etc.
          headers: {
            "Content-Type": "application/json", // specify the content type
            Authorization: `${token}`, // add authorization token if needed
            // add any other headers here
          },
          // body: JSON.stringify(data) // include for POST, PUT, etc.
        });
        const data = await response.json();
        setTickets(data);
      }
      getAllTickets();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="tickets-container">
      <div className="right-content">
        {/* Create Ticket Button */}
        <div className="create-ticket-btn">
          <button onClick={handleNewTicket}>New Ticket</button>
        </div>

        {/* Incident Tickets Section 
        {/* <TicketSection
          title="Incident Tickets"
          tickets={tickets}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handleItemsPerPageChange={handleItemsPerPageChange}
          handlePageChange={handlePageChange}
        />

        {/* RITM Tickets Section 
        <TicketSection
          title="SR Tickets"
          tickets={tickets}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handleItemsPerPageChange={handleItemsPerPageChange}
          handlePageChange={handlePageChange}
        /> */}
        <GridExample tickets={tickets} />
      </div>
    </div>
  );
}

const GridExample = (tickets) => {
  // Row Data: The data to be displayed.
  console.log(tickets);
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 50, 100];
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    setRowData(tickets.tickets);
  }, [tickets]);

  const CustomUUIDComp = (props) => {
    return <Link to={`/newTicket/${props.value}`}>{props.value}</Link>;
  };

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { headerName: "UUID", field: "uid", flex: 2, cellRenderer: CustomUUIDComp },
    { headerName: "Created Date", field: "create_date", flex: 2 },
    { headerName: "Severity", field: "severity", flex: 2 },
    { headerName: "Assigned to", field: "assign_to_id", flex: 2 },
    { headerName: "Description", field: "description", flex: 2 },
    // { field: "Category", flex: 2 },
    { headerName: "Status", field: "status", flex: 2 },
    { headerName: "Type", field: "typ", flex: 2 },
  ]);

  // ...
  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 500, width: 1000 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
      />
    </div>
  );
};

// function TicketSection({
//   title,
//   tickets,
//   itemsPerPage,
//   currentPage,
//   handleItemsPerPageChange,
//   handlePageChange,
// }) {
//   const startIdx = (currentPage - 1) * itemsPerPage;
//   const currentTickets = tickets.slice(startIdx, startIdx + itemsPerPage);

//   return (
//     <section className="ticket-section">
//       <div className="header">
//         <h2>{title}</h2>
//         <button className="filter-btn">🔍</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>UUID</th>
//             <th>Created Date</th>
//             <th>Severity</th>
//             <th>Assigned To</th>
//             <th>Description</th>
//             <th>Category</th>
//             <th>Status</th>
//             <th>Type</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentTickets.map((ticket, index) => (
//             <tr key={ticket.uuid}>
//               <td>
//                 <Link to={`/newTicket/${index + 1}`}>{index + 1}</Link>
//               </td>
//               <td>{ticket.dueDate}</td>
//               <td>{ticket.severity}</td>
//               <td>{ticket.assignedTo}</td>
//               <td>{ticket.description}</td>
//               <td>{ticket.category}</td>
//               <td>{ticket.status}</td>
//               <td>{ticket.type}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Pagination */}
//       <div className="pagination">
//         <span>Items per page</span>
//         <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
//           <option value={10}>10</option>
//           <option value={20}>20</option>
//           <option value={50}>50</option>
//         </select>
//         <span>
//           {startIdx + 1}-{Math.min(startIdx + itemsPerPage, tickets.length)} of{" "}
//           {tickets.length}
//         </span>

//         <div className="pagination-controls">
//           {/* Previous Page Button */}
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="page-arrow"
//           >
//             &#8249; {/* Left arrow symbol */}
//           </button>

//           {/* Page Numbers */}
//           {[1, 2, "...", 200].map((page, index) => (
//             <button
//               key={index}
//               onClick={() => typeof page === "number" && handlePageChange(page)}
//               className={currentPage === page ? "active-page" : "inactive-page"}
//             >
//               {page}
//             </button>
//           ))}

//           {/* Next Page Button */}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === 200} // Assuming 200 is the max page
//             className="page-arrow"
//           >
//             &#8250; {/* Right arrow symbol */}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

export default Tickets;
