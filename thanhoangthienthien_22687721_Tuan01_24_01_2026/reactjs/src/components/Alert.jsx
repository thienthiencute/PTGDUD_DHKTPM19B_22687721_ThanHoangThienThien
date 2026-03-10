import { useState } from "react";
import "./Alert.css";

function Alert({ type, message }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>

      <button 
        className="close-btn"
        onClick={() => setVisible(false)}
      >
        ×
      </button>
    </div>
  );
}

export default Alert;