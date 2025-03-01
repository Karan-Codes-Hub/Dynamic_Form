// src/components/DragAndDropForm/FormBuilderArea/FormBuilderArea.tsx
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../types';
import FormBuilderElement from './FormBuilderElement';
import { FormElement } from '../types';
import './FormBuilderArea.css';

interface FormBuilderAreaProps {
  formElements: FormElement[];
  onDrop: (element: FormElement) => void;
  onDelete: (id: number) => void; // id is now a number (index)
}

const FormBuilderArea: React.FC<FormBuilderAreaProps> = ({ formElements, onDrop, onDelete }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.FORM_ELEMENT,
    drop: (item: { element: FormElement }) => onDrop(item.element),
  }));

  // State to manage form values
  const [formValues, setFormValues] = useState<{ [key: number]: string }>({});

  // Function to handle value changes
  const handleOnChangeValue = (index: number, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [index]: value, // Update the value for the specific index
    }));
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
      <h2>Form Builder</h2>
      {formElements.map((element, index) => (
        <FormBuilderElement
          key={index} // Use index as the key
          index={index} // Pass index as a prop
          element={element}
          value={formValues[index] || ''} // Pass the current value
          onChangeValue={handleOnChangeValue} // Pass the change handler
          onDelete={onDelete}
        />
      ))}
      <button className="download-button" onClick={downloadJson}>
        Download JSON
      </button>
    </div>
  );
};

export default FormBuilderArea;