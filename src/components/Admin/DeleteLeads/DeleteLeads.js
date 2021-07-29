import React, { useState } from "react";

const DeleteLeads = () => {
  const [dStatus, setDstatus] = useState(false);
  const handleDelete = () => {
    fetch("http://192.168.10.11:5003/deleteAll", {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setDstatus(data));
  };
  return (
    <div>
      <div className="mt-5 text-center">
        <p className="text-secondary" style={{ color: "red" }}>
          Press here to Delete All Leads
        </p>
        <p style={{ color: "red" }}>
          !Warning This Will Delete All Leads and Call Datas
        </p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete All Data
        </button>
      </div>
      <div
        style={{ display: dStatus === true ? "block" : "none" }}
        className="mt-4"
      >
        <h3 style={{ color: "green", fontWeight: "bold" }}>Congratulations!</h3>
        <h5>Successfully Lead Delete From Database</h5>
        <p className="text-secondary">Now Go For Further Activity</p>
      </div>
    </div>
  );
};

export default DeleteLeads;
