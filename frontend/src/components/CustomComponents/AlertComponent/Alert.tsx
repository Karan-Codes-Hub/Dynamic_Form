import React, { useEffect, useState } from "react";
import "./Alert.css"; // Import styles
import { X } from "lucide-react"; // Close icon

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="custom-alert">
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>
        <X size={18} />
      </button>
    </div>
  );
};

export default Alert;
