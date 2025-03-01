// src/components/DragAndDropForm/FormBuilderArea/FormBuilderArea.tsx
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../types';
import FormBuilderElement from './FormBuilderElement';
import { FormElement } from '../types';
import './FormBuilderArea.css';
import FormElementModal from './FormElementModal';

interface FormBuilderAreaProps {
    formElements: FormElement[];
    onDrop: (element: FormElement) => void;
    onDelete: (id: number) => void; // id is now a number (index)
    onUpdate: (index: number, updatedElement: FormElement) => void; // Function to update element
  }
  
const FormBuilderArea: React.FC<FormBuilderAreaProps> = ({ formElements, onDrop, onDelete, onUpdate }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Track the index of the selected element
  const [formValues, setFormValues] = useState<{ [key: number]: string }>({}); // State to manage form values
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.FORM_ELEMENT,
    drop: (item: { element: FormElement }) => {
      const newIndex = formElements.length; // Index of the newly dropped element
      onDrop(item.element); // Add the element to the form builder area

    //   setSelectedIndex(newIndex);
    },
  }));
 

  // Function to handle value changes
  const handleOnChangeValue = (index: number, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [index]: value, // Update the value for the specific index
    }));
  };

    // Function to handle saving the modal configuration
    const handleSaveModal = (updatedElement: FormElement) => {
        if (selectedIndex !== null) {
          onUpdate(selectedIndex, updatedElement); // Update the element in the parent state
        }
        setSelectedIndex(null); // Close the modal
      };
    

  // Function to generate and download JSON
  const downloadJson = () => {
    // Map form elements to a detailed JSON structure
    const jsonData = formElements.map((element, index) => ({
      type: element.type, // Type of the form element (e.g., textbox, radio, etc.)
      id: index, // Use index as the ID
      label: element.name, // Label for the form element
      description: element.description, // Description of the form element
      value: formValues[index] || '', // Use the value from formValues state
      style: {
        // Styling options for the form element
        backgroundColor: '#ffffff', // Default background color
        borderColor: '#ced4da', // Default border color
        borderRadius: '8px', // Rounded corners
        padding: '12px', // Padding
        fontSize: '14px', // Font size
      },
      prefill: {
        // Prefill options (e.g., default values)
        enabled: false, // Whether prefill is enabled
        value: '', // Prefill value
      },
      refresh: {
        // Refresh options (e.g., resetting the form)
        enabled: false, // Whether refresh is enabled
        onReset: '', // Function to call on reset
      },
      validation: {
        // Validation options
        required: false, // Whether the field is required
        minLength: 0, // Minimum length for text fields
        maxLength: 100, // Maximum length for text fields
      },
    }));

    // Convert the JSON data to a string
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Create a Blob and trigger the download
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form-config.json'; // File name
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div ref={drop} className="form-builder-area">
      <div className="form-builder-area-header">
        <h2>Form Builder</h2>
        <button className="download-button" onClick={downloadJson}>
          Download JSON
        </button>
      </div>
      {formElements.map((element, index) => (
        <FormBuilderElement
          key={index} // Use index as the key
          index={index} // Pass index as a prop
          element={element}
          value={formValues[index] || ''} // Pass the current value
          onChangeValue={handleOnChangeValue} // Pass the change handler
          onDelete={onDelete}
          onUpdate={onUpdate} // Pass the save handler
        />
      ))}
      {selectedIndex !== null && (
        <FormElementModal
          element={formElements[selectedIndex]} // Pass the selected element
          onSave={handleSaveModal} // Pass the save handler
          onClose={() => setSelectedIndex(null)} // Pass the close handler
        />
      )}
    </div>
  );
};
export default FormBuilderArea;