// src/components/DragAndDropForm/SideBarForDragAndDrop/DragAndDropSideBar.tsx
import React from 'react';
import DraggableFormElement from './DraggableFormElement';
import { FormElement } from '../types';
import './DragAndDropSideBar.css';

const formElements: FormElement[] = [
  { id: '1', icon: '📝', name: 'Textbox', description: 'Add a text input field', type: 'textbox' },
  { id: '2', icon: '🔘', name: 'Single Select', description: 'Add a single select dropdown', type: 'single-select' },
  { id: '3', icon: '☑️', name: 'Multi-Select', description: 'Add a multi-select dropdown', type: 'multi-select' },
  { id: '4', icon: '⭕', name: 'Radio Button', description: 'Add a radio button group', type: 'radio' },
  { id: '5', icon: '✅', name: 'Checkbox', description: 'Add a checkbox', type: 'checkbox' },
];

const DragAndDropSideBar: React.FC = () => {
  return (
    <div className="sidebarForDragAndDrop">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="items-list">
        {formElements.map((element) => (
          <DraggableFormElement key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
};

export default DragAndDropSideBar;