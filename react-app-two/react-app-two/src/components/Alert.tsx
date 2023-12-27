import { ReactNode } from "react";
// Define an interface named Props to describe the expected things of the component's props
interface Props {
  children: ReactNode; // The content inside the Alert, which can be any valid ReactNode - string, html and so on
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissible">
      {children}{" "}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
