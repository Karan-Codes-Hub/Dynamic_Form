// src/components/DragAndDropForm/FormBuilderArea/FormBuilderElement.tsx
import React from 'react';
import { FormElement } from '../types';
import './FormBuilderArea.css';
import { showToast } from '../../../services/toastService';

interface FormBuilderElementProps {
  index: number; // Index of the form element
  element: FormElement;
  value: string; // Current value of the form element
  onChangeValue: (index: number, value: string) => void; // Handler for value changes
  onDelete: (id: number) => void; // Handler for deletion
}

const FormBuilderElement: React.FC<FormBuilderElementProps> = ({
  index,
  element,
  value,
  onChangeValue,
  onDelete,
}) => {
  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    onChangeValue(index, e.target.value); // Update the value in the parent component
  };

  // Function to handle double-click
  const handleDoubleClick = () => {
    showToast(`Double-clicked item index: ${index}`); // Show the index in an alert
  };

  return (
    <div className="form-element" onDoubleClick={handleDoubleClick}>
      <div className="item-icon">{element.icon}</div>
      <div className="item-content">
        <h3>{element.name}</h3>
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
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        )}
        {element.type === 'multi-select' && (
          <select multiple value={value.split(',')} onChange={handleInputChange}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        )}
        {element.type === 'radio' && (
          <div>
            <label>
              <input
                type="radio"
                name={`radio-${index}`}
                value="option1"
                checked={value === 'option1'}
                onChange={handleInputChange}
              />{' '}
              Option 1
            </label>
            <label>
              <input
                type="radio"
                name={`radio-${index}`}
                value="option2"
                checked={value === 'option2'}
                onChange={handleInputChange}
              />{' '}
              Option 2
            </label>
          </div>
        )}
        {element.type === 'checkbox' && (
          <div>
            <label>
              <input
                type="checkbox"
                value="option1"
                checked={value.includes('option1')}
                onChange={handleInputChange}
              />{' '}
              Option 1
            </label>
            <label>
              <input
                type="checkbox"
                value="option2"
                checked={value.includes('option2')}
                onChange={handleInputChange}
              />{' '}
              Option 2
            </label>
          </div>
        )}
      </div>
      <button className="delete-button" onClick={() => onDelete(index)}>
        🗑️
      </button>
    </div>
  );
};

export default FormBuilderElement;