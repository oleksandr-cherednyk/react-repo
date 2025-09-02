import '../css/Button.css';

export default function Button({ children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`rating-btn ${active ? "active" : ""}`}
      type="button"
    >
      {children}
    </button>
  );
}
