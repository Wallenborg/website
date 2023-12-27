// Import the ListGroup component from the "./ListGroup" file
import ListGroup from "./ListGroup";
// Define the FoodListGroup functional component
function FoodListGroup() {
  let items = ["Pizza", "Pasta", "Tacos", "Lasagna"];
  // Define a function to handle the selection of a food item
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* Render the ListGroup component with the following props:
           - items: the array of food items
           - heading: the heading "Food"
           - onSelectItem: the handleSelectItem function */}

      <ListGroup items={items} heading="Food" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default FoodListGroup;
