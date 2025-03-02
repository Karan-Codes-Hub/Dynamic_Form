import React, { useState } from 'react';
import { FormElement } from '../types';
import './FormElementModal.css';

interface FormElementModalProps {
  element: FormElement;
  onSave: (updatedElement: FormElement) => void;
  onClose: () => void;
  isOpen: boolean;
}

const FormElementModal: React.FC<FormElementModalProps> = ({ element, onSave, onClose, isOpen }) => {
  const [label, setLabel] = useState(element.name || '');
  const [options, setOptions] = useState<string[]>(element.options || []);
  const [newOption, setNewOption] = useState('');

  // 🎨 State for styling
  const [style, setStyle] = useState({
    backgroundColor: element.style?.backgroundColor || '#ffffff',
    borderColor: element.style?.borderColor || '#ced4da',
    borderRadius: element.style?.borderRadius || '8px',
    padding: element.style?.padding || '12px',
    fontSize: element.style?.fontSize || '14px',
    color: element.style?.color || '#000000',
    boxShadow: element.style?.boxShadow || '0px 4px 10px rgba(0, 0, 0, 0.1)',
  });

  const handleAddOption = () => {
    if (newOption.trim()) {
      setOptions([...options, newOption.trim()]);
      setNewOption('');
    }
  };

  const handleRemoveOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  // 🎨 Handle Style Changes
  const handleStyleChange = (property: string, value: string) => {
    setStyle((prevStyle) => ({ ...prevStyle, [property]: value }));
  };

  const handleSave = () => {
    const updatedElement = { ...element, name: label, options, style };
    onSave(updatedElement);
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div
        className={`modal ${isOpen ? 'active' : ''}`}
        onClick={(e) => e.stopPropagation()}
        
      >
        <div className='modal-header'>
          <button className="close-button" onClick={onClose}>&times;</button>
          <h3 >Configure {element.type}</h3>
        </div>
    

        {/* Label Configuration */}
        <div className="form-group">
          <label>Label</label>
          <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Enter label"  />
        </div>

        {/* Options Configuration */}
        {(element.type === 'single-select' || element.type === 'multi-select' || element.type === 'radio' || element.type === 'checkbox') && (
          <div className="form-group">
            <label>Options</label>
            <div className="options-list">
              {options.map((option, index) => (
                <div key={index} className="option-item">
                  <span>{option}</span>
                  <button className="remove-option-button" onClick={() => handleRemoveOption(index)}>&times;</button>
                </div>
              ))}
            </div>
            <div className="add-option">
              <input type="text" value={newOption} onChange={(e) => setNewOption(e.target.value)} placeholder="Add option" />
              <button onClick={handleAddOption}>Add</button>
            </div>
          </div>
        )}

        {/* 🎨 Style Configuration */}
        <div className="style-section">
          <h4>Customize Appearance</h4>

          <div className="style-row">
            <label>Font Size</label>
            <input type="number" value={style.fontSize.replace('px', '')} onChange={(e) => handleStyleChange('fontSize', `${e.target.value}px`)} />
          </div>

          <div className="style-row">
            <label>Text Color</label>
            <input type="color" value={style.color} onChange={(e) => handleStyleChange('color', e.target.value)} />
          </div>

          <div className="style-row">
            <label>Background Color</label>
            <input type="color" value={style.backgroundColor} onChange={(e) => handleStyleChange('backgroundColor', e.target.value)} />
          </div>

          <div className="style-row">
            <label>Border Color</label>
            <input type="color" value={style.borderColor} onChange={(e) => handleStyleChange('borderColor', e.target.value)} />
          </div>

          <div className="style-row">
            <label>Border Radius</label>
            <input type="number" value={style.borderRadius.replace('px', '')} onChange={(e) => handleStyleChange('borderRadius', `${e.target.value}px`)} />
          </div>

          <div className="style-row">
            <label>Box Shadow</label>
            <input type="text" value={style.boxShadow} onChange={(e) => handleStyleChange('boxShadow', e.target.value)} placeholder="e.g. 0px 4px 10px rgba(0, 0, 0, 0.2)" />
          </div>
        </div>

        {/* Save Button */}
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default FormElementModal;
