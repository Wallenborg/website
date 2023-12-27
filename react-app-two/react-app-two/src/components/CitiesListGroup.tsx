import ListGroup from "./ListGroup";
// Define the CitiesListGroup functional component
function CitiesListGroup() {
  let items = ["New York", "Milano", "Mexico City", "Naples"];
  // Define a function to handle the selection of a city item

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* Render the ListGroup component with the following props:
           - items: the array of citys items
           - heading: the heading "Cities"
           - onSelectItem: the handleSelectItem function */}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default CitiesListGroup;
