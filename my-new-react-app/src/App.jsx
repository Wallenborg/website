// Importing the Header, Footer and Food component from their .jsx files
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
// Defining the main App component
function App() {
  // The App component renders the Header, Food, and Footer components
  return (
    <>
      <Header />
      <Food />
      <Footer />
    </>
  );
}
// Exporting the App component as the default export of this module
export default App;
