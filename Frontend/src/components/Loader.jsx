import "../styles/Loading.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <svg viewBox="25 25 50 50" className="loader-svg">
        <circle className="loader-circle" r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
}
