import "../styles/RefreshButton.css";

export default function RefreshButton() {
  return (
    <div className="centered-container">
      <button className="button" onClick={() => window.location.reload()}>
        Please Try Again!
      </button>
    </div>
  );
}
