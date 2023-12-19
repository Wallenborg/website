// Defining a functional component named Food
function Food() {
  // Defining two varibels to store the names of two fruits
  const food1 = "Orange";
  const food2 = "Banana";
  // Returning JSX representing a list of fruits
  return (
    <ul>
      <li>Appel</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}
// Exporting the Food component as the default export of this module
export default Food;
