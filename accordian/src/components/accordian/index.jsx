import { useState } from "react";
import { data } from "./data";
import "./styles.css";

export const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(null);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelection(getSelectionId) {
    setSelected(getSelectionId === selected ? null : getSelectionId);
  }
  function handleMultiSelection(getSelectionId) {
    
    
    let copyMultiple = [...multipleSelected];

    const findIndexOfCurrentId = copyMultiple.indexOf(getSelectionId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getSelectionId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultipleSelected([...copyMultiple]);

    
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Enable Multi Seelction{" "}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>
                  {dataItem.question} <span>+</span>
                </h3>

                {enableMultiSelection ? (
                  multipleSelected.indexOf(dataItem.id) != -1 && (
                    <div className="content">
                      <h6>{dataItem.answer}</h6>
                    </div>
                  )
                ) : selected === dataItem.id  ? (
                  <div className="content">
                    <h6>{dataItem.answer}</h6>
                  </div>
                ) : null}

                {/* {selected === dataItem.id ? (
                  <div className="content">
                    <h6>{dataItem.answer}</h6>
                  </div>
                ) : null} */}
              </div>
            </div>
          ))
        ) : (
          <div>Data not present !!</div>
        )}
      </div>
    </div>
  );
};
