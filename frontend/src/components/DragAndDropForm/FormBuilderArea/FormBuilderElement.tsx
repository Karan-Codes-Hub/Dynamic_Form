// src/components/DragAndDropForm/FormBuilderArea/FormBuilderElement.tsx
import React, { useState } from 'react';
import { FormElement } from '../types';
import './FormBuilderArea.css';
import { showToast } from '../../../services/toastService';
import FormElementModal from './FormElementModal'; // Import the modal component

interface FormBuilderElementProps {
  index: number; // Index of the form element
  element: FormElement;
  value: string; // Current value of the form element
  onChangeValue: (index: number, value: string) => void; // Handler for value changes
  onDelete: (id: number) => void; // Handler for deletion
  onUpdate: (index: number, updatedElement: FormElement) => void; // Handler for updating the element
}

const FormBuilderElement: React.FC<FormBuilderElementProps> = ({
  index,
  element,
  value,
  onChangeValue,
  onDelete,
  onUpdate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    onChangeValue(index, e.target.value); // Update the value in the parent component
  };

  // Function to handle double-click
  const handleDoubleClick = () => {
    setIsModalOpen(true); // Open the modal on double-click
    showToast(`Double-clicked item index: ${index}`); // Show the index in a toast
  };

  // Function to handle saving the modal configuration
  const handleSaveModal = (updatedElement: FormElement) => {
    onUpdate(index, updatedElement); // Update the element in the parent state
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="form-element" onDoubleClick={handleDoubleClick}>
      <div className="item-icon">{element.icon}</div>
      <div className="item-content">
        <h3>{element.name}</h3> {/* Render the updated label */}
        <p>{element.description}</p>
        {element.type === 'textbox' && (
          <input
            type="text"
            placeholder="Enter text"
            value={value}
            onChange={handleInputChange}
          />
        )}
        {element.type === 'single-select' && (
          <select value={value} onChange={handleInputChange}>
            <option value="">Select an option</option>
            {element.options?.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        {element.type === 'multi-select' && (
          <select multiple value={value.split(',')} onChange={handleInputChange}>
            {element.options?.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        {element.type === 'radio' && (
          <div>
            {element.options?.map((option, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name={`radio-${index}`}
                  value={option}
                  checked={value === option}
                  onChange={handleInputChange}
                />{' '}
                {option}
              </label>
            ))}
          </div>
        )}
        {element.type === 'checkbox' && (
          <div>
            {element.options?.map((option, i) => (
              <label key={i}>
                <input
                  type="checkbox"
                  value={option}
                  checked={value.includes(option)}
                  onChange={handleInputChange}
                />{' '}
                {option}
              </label>
            ))}
          </div>
        )}
      </div>
      <button className="delete-button" onClick={() => onDelete(index)}>
        🗑️
      </button>

      {/* Modal for configuring the form element */}
      {isModalOpen && (
        <FormElementModal
          element={element} // Pass the current element
          onSave={handleSaveModal} // Pass the save handler
          onClose={() => setIsModalOpen(false)} // Pass the close handler
        />
      )}
    </div>
  );
};

export default FormBuilderElement;