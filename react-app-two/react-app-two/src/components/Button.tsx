// Define an interface named Props to describe the expected things of the component's props
interface Props {
  children: string;
  // The color variant of the button, optional, and restricted to specific values
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}
// Define a functional component named Button that takes props of type Props
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    // Render a button element with dynamic class based on the color prop, and an onClick event handler
    <button className={"btn btn-" + color} onClick={onClick}>
      {" "}
      {children}
    </button>
  );
};

export default Button;
