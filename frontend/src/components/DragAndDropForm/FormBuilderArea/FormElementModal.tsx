// src/components/DragAndDropForm/FormBuilderArea/FormElementModal.tsx
import React, { useState } from 'react';
import { FormElement } from '../types';
import './FormElementModal.css';

interface FormElementModalProps {
  element: FormElement;
  onSave: (updatedElement: FormElement) => void;
  onClose: () => void;
}

const FormElementModal: React.FC<FormElementModalProps> = ({ element, onSave, onClose }) => {
  const [label, setLabel] = useState(element.name || '');
  const [options, setOptions] = useState<string[]>([]);
  const [newOption, setNewOption] = useState('');

  const handleAddOption = () => {
    if (newOption.trim()) {
      setOptions([...options, newOption.trim()]);
      setNewOption('');
    }
  };

  const handleSave = () => {
    const updatedElement = { ...element, name: label, options };
    onSave(updatedElement);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3>Configure {element.type}</h3>
        <div className="form-group">
          <label>Label</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Enter label"
          />
        </div>
        {(element.type === 'single-select' || element.type === 'multi-select') && (
          <div className="form-group">
            <label>Options</label>
            <div className="options-list">
              {options.map((option, index) => (
                <div key={index} className="option-item">
                  {option}
                </div>
              ))}
            </div>
            <div className="add-option">
              <input
                type="text"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
                placeholder="Add option"
              />
              <button onClick={handleAddOption}>Add</button>
            </div>
          </div>
        )}
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default FormElementModal;