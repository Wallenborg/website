// Defining a functional component named Header
function Header() {
  // Returning JSX representing the header section of the website text and navigation links
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
// Exporting the Header component as the default export of this module
export default Header;
