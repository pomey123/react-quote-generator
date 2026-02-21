import React from 'react';

function EmpCards({ data }) {
  return (
    <div style={{
      border: '2px solid green',
      width: '450px',
      margin: '10px',
      padding: '10px',
      borderRadius: '10px',
      background: 'light yellow'
    }}>
      <h1 style={{ color: "red" }}>Employee Card</h1>
      <h2>Employee ID: <span style={{ color: "green" }}>{data.id}</span></h2>
      <h2>Name: <span style={{ color: "green" }}>{data.name}</span></h2>
      <h2>Age: <span style={{ color: "green" }}>{data.age}</span></h2>
      <h2>Email: <span style={{ color: "green" }}>{data.email}</span></h2>
      <h2>Address: <span style={{ color: "green" }}>{data.address}</span></h2>
    </div>
  );
}

export default EmpCards;
