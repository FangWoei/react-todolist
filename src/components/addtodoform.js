import { useState } from "react";

export const AddFrom = (props) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addButton = () => {
    setList([...list, input]);
    setInput("");
  };
  return (
    <div>
      <div className="mt-4">
        <form className="d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Add new item..."
            required
          />
          <button
          onClick={addButton} 
          className={`btn btn-${props.color} btn-sm rounded ms-2`}>{props.button}</button>
        </form>
      </div>
    </div>
  );
};
