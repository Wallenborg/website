import { useState } from "react";

function ListGroup() {
  let items = ["New", "San", "Toy", "Lon", "Par"];
  /*  useState is a Hook, a hook is a special function that allows you 
  to use state and perform side effects in functional components */
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {/* If true then the content is rendered if false nothing is rendered */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
