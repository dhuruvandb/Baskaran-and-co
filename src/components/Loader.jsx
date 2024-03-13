import ReactDOM from "react-dom";
import "../styles/Loading.css";
export default function Loader() {
  return ReactDOM.createPortal(
    <div className="Load">
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    </div>,
    document.getElementById("loading")
  );
}
