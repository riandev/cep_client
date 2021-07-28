import React from "react";

const LeadGenerate = () => {
  const numbers = [
    163563663, 262662662, 266266626, 27726255, 27726625542, 2552542442,
    947465363, 56255242,
  ];
  const handleAddLead = () => {
    fetch(
      `http://192.168.1.70/vicidial/non_agent_api.php?source=test&user=admin&pass=F1f0t3ch&function=add_lead&phone_number=19397735544&phone_code=1&list_id=10001`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h3>hello</h3>
      <button className="btn btn-danger" onClick={handleAddLead}>
        Add Numbers
      </button>
    </div>
  );
};

export default LeadGenerate;
