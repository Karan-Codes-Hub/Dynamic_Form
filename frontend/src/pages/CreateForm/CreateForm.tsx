// src/pages/CreateForm/CreateForm.tsx
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragAndDropSideBar from '../../components/DragAndDropForm/SideBarForDragAndDrop/DragAndDropSideBar';
import FormBuilderArea from '../../components/DragAndDropForm/FormBuilderArea/FormBuilderArea';
import { FormElement } from '../../components/DragAndDropForm/types';
import './CreateForm.css';

const CreateForm: React.FC = () => {
  const [formElements, setFormElements] = useState<FormElement[]>([]);

  const handleDrop = (element: FormElement) => {
    // Generate a unique ID for the new element
    const uniqueId = `${element.type}-${Date.now()}`;
    const newElement = { ...element, id: uniqueId };
    setFormElements((prev) => [...prev, newElement]);
  };

  const handleDelete = (id: string) => {
    setFormElements((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="dashboard-container">
        <div className="sidebarForForm">
          <DragAndDropSideBar />
        </div>
        <div className="main-content-form">
          <FormBuilderArea
            formElements={formElements}
            onDrop={handleDrop}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default CreateForm;