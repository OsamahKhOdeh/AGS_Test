import React, { useState } from "react";
function App() {
  const [checkedList, setCheckedList] = useState([]);
  const availabilityStatus = [
    { id: "1", value: "All Status" },
    { id: "2", value: "Coming" },
    { id: "3", value: "Available" },
    { id: "4", value: "No Stock" },
  ];
  const itemKind = [
    { id: "1", value: "All Kinds" },
    { id: "2", value: "Inverter" },
    { id: "3", value: "Solar" },
    { id: "4", value: "Batary" },
  ];

  const country = [
    { id: "1", value: "All Countries" },
    { id: "2", value: "China" },
    { id: "3", value: "India" },
    { id: "4", value: "Syria" },
    { id: "3", value: "UAE" },
    { id: "4", value: "Vitnam" },
  ];
  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      //Add checked item into checkList
      setCheckedList([...checkedList, value]);
    } else {
      //Remove unchecked item from checkList
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p className="title">Select to Filter products</p>
        </div>

        <div className="list-container">
          <label style={{ fontSize: "2rem" }}>You Selected:</label>
          {checkedList.map((item, index) => {
            return (
              <div className="chip">
                <p style={{ fontSize: "1.6rem" }} className="chip-label">
                  {item}
                </p>
              </div>
            );
          })}
        </div>

        <div className="card-body">
          {availabilityStatus.map((item, index) => {
            return (
              <div key={item.id} className="checkbox-container">
                <input type="checkbox" name="languages" value={item.value} onChange={handleSelect} />
                <label style={{ fontSize: "1.5rem" }}>{item.value}</label>
              </div>
            );
          })}
        </div>
        <div className="card-body">
          {itemKind.map((item, index) => {
            return (
              <div key={item.id} className="checkbox-container">
                <input type="checkbox" name="languages" value={item.value} onChange={handleSelect} />
                <label style={{ fontSize: "1.5rem" }}>{item.value}</label>
              </div>
            );
          })}
        </div>
        <div className="card-body">
          {country.map((item, index) => {
            return (
              <div key={item.id} className="checkbox-container">
                <input style={{ fontSize: "2rem" }} type="checkbox" name="languages" value={item.value} onChange={handleSelect} />
                <label style={{ fontSize: "1.5rem" }}>{item.value}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
