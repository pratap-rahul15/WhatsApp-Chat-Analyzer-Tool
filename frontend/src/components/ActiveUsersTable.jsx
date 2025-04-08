import React from "react";

const ActiveUsersTable = ({ users }) => {
  if (!users || users.length === 0) {
    return <p style={{ color: "#888", fontStyle: "italic" }}>No users active for ≥ 4 days.</p>;
  }

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>
        Users Active ≥ 4 Days
      </h3>
      <table style={{ width: "100%", border: "1px solid #ccc", fontSize: "0.9rem" }}>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "8px",
};

export default ActiveUsersTable;
