import { useState } from "react";
import Alert from "./components/Alert";
import CitiesListGroup from "./components/CitiesListGroup";
import FoodListGroup from "./components/FoodListGroup";
import Button from "./components/Button";

function App() {
  // State variables to manage the visibility of the alerts
  const [alertVisible, setAlertVisibility] = useState(false);
  const [secondAlertVisible, seconsSetAlertVisibility] = useState(false);
  return (
    <>
      {/* Button that, when clicked, sets alertVisible to true */}
      <Button onClick={() => setAlertVisibility(true)}>Press Me!</Button>
      <br />
      {/* Display a list of cities */}
      <CitiesListGroup />
      <br />
      <Button onClick={() => seconsSetAlertVisibility(true)}>
        Press Me Too!
      </Button>
      <FoodListGroup />
      <br />
      {/* Button that, when clicked, sets alertVisible to true */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Out <span>of</span> Food!
        </Alert>
      )}
      <br />
      {secondAlertVisible && (
        <Alert onClose={() => seconsSetAlertVisibility(false)}>
          Order <span>more</span> Food!
        </Alert>
      )}
    </>
  );
}
export default App;
