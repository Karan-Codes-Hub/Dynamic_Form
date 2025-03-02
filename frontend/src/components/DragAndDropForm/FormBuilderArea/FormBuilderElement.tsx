// src/components/DragAndDropForm/FormBuilderArea/FormBuilderElement.tsx
import React, { useState } from 'react';
import { FormElement } from '../types';
import './FormBuilderArea.css';
import { showToast } from '../../../services/toastService';
import FormElementModal from './FormElementModal'; // Import the modal component
import TextField from '@mui/material/TextField'; // MUI TextField
import Select from '@mui/material/Select'; // MUI Select
import MenuItem from '@mui/material/MenuItem'; // MUI MenuItem
import Checkbox from '@mui/material/Checkbox'; // MUI Checkbox
import FormControlLabel from '@mui/material/FormControlLabel'; // MUI FormControlLabel
import Radio from '@mui/material/Radio'; // MUI Radio
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

interface FormBuilderElementProps {
  index: number; // Index of the form element
  element: FormElement;
  value: string; // Current value of the form element
  onChangeValue: (index: number, value: string) => void; // Handler for value changes
  onDelete: (id: string) => void; // Handler for deletion
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
      <div className="item-content">
        <h3 style={element.style}>{element.name}</h3>
        {element.type === 'textbox' && (
          <TextField
            fullWidth
            label={element.name} // Use the element name as the label
            variant="outlined"
            value={value}
            onChange={handleInputChange}
            placeholder="Enter text"
          />
        )}
        {element.type === 'single-select' && (
          <FormControl fullWidth variant="outlined">
            <InputLabel>{element.name}</InputLabel> {/* Label */}
            <Select
              value={value}
              onChange={handleInputChange}
              label={element.name} // Associate the label with Select
            >
              <MenuItem value="">Select an option</MenuItem>
              {element.options?.map((option, i) => (
                <MenuItem key={i} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {element.type === 'multi-select' && (
          <FormControl fullWidth variant="outlined">
            <InputLabel>{element.name}</InputLabel> {/* Label */}
            <Select
              multiple
              value={value.split(',')}
              onChange={handleInputChange}
              label={element.name} // Associate the label with Select
            >
              {element.options?.map((option, i) => (
                <MenuItem key={i} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {element.type === 'radio' && (
          <div>
            {element.options?.map((option, i) => (
              <FormControlLabel
                key={i}
                value={option}
                control={<Radio />}
                label={option}
                checked={value === option}
                onChange={handleInputChange}
              />
            ))}
          </div>
        )}
        {element.type === 'checkbox' && (
          <div>
            {element.options?.map((option, i) => (
              <FormControlLabel
                key={i}
                value={option}
                control={<Checkbox />}
                label={option}
                checked={value.includes(option)}
                onChange={handleInputChange}
              />
            ))}
          </div>
        )}
      </div>
      <button className="delete-button" onClick={() => onDelete(element?.id)}>
        🗑️
      </button>

      {/* Modal for configuring the form element */}
      {isModalOpen && (
        <FormElementModal
          element={element}
          isOpen={isModalOpen}
          onSave={handleSaveModal}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default FormBuilderElement;