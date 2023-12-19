// Defining a functional component named Footer
function Footer() {
  // Returning JSX text and JS date 2023 plus copyright symbol
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Website Niklas</p>
    </footer>
  );
}
// Exporting the Footer component as the default export of this module
export default Footer;
