import React, { useState } from "react";
import "./App.css";
import { TotalItems } from "./totalItems";
const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [columns, setColumns] = useState([TotalItems]);
  const [border, setBorder] = useState(Array(columns.length).fill(null));

 const onSelect = (columnIndex, itemIndex) => {
   setSelectedItems((prevSelectedItems) => [
     ...prevSelectedItems.slice(0, columnIndex),
     columns[columnIndex][itemIndex],
   ]);

   setBorder((prevIndices) => [
     ...prevIndices.slice(0, columnIndex),
     itemIndex,
   ]);

   setColumns((prevColumns) => [
     ...prevColumns.slice(0, columnIndex + 1),
     columns[columnIndex][itemIndex].children || [],
   ]);
 };


  const onSearch = () => {
    console.log("جستجو");
  };

  const whenClose = () => {
    console.log("کلوز");
  };

  return (
    <div className="app-container">
      <div className="header">
        <img
          src="/src/assets/headerTitle.png"
          alt="Header Title"
          className="title-img"
        />
        <br />
        <span className="title-text">درختواره کسب و کار</span>
        <div className="close-div">
          <button className="close-btn" type="button" onClick={whenClose}>
            <img
              className="close-img"
              src="/src/assets/close.png"
              alt="Close"
            />
          </button>
        </div>
        <br />
        <br />
        <div
          className={`divHeaderOfPermissions ${
            selectedItems.length > 0 ? "with-border" : ""
          }`}
        >
          {selectedItems.length > 0 && (
            <>
              {selectedItems.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="span-header">{item.title}</span>
                  {index < selectedItems.length - 1 && (
                    <span className="arrow-span">{" > "}</span>
                  )}
                </React.Fragment>
              ))}
              <button className="btn-header" onClick={onSearch}>
                جستجو
              </button>
            </>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
        <div className="items-container">
        {columns.map((items, columnIndex) => (
          <div
            className={`columns ${
              border[columnIndex] !== null ? "selected" : ""
            }`}
            key={columnIndex}
          >
            <ul className={`column-selected ${border[columnIndex] !== null ? "with-left-border" : ""}`}>
              {items.map((item, itemIndex) => (
                <li
                  className={`li-columns ${
                    border[columnIndex] === itemIndex ? "selected" : ""
                  }`}
                  key={itemIndex}
                  onClick={() => onSelect(columnIndex, itemIndex)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
