import React, { useState } from "react";

const DeleteLeads = () => {
  const [dStatus, setDstatus] = useState(false);
  const handleDelete = () => {
    fetch("http://192.168.1.11:5009/deleteAll", {
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
    </div>
  );
};

export default DeleteLeads;
