import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  /*  useState is a Hook, a hook is a special function that allows you 
  to use state and perform side effects in functional components */
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/* If true then the content is rendered. If false nothing is rendered */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/*This is a mapping function that iterates (counting through) over the items array. 
        For each item in the array, it renders a list item */}
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
              onSelectItem(item);
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
