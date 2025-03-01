// src/components/DragAndDropForm/SideBarForDragAndDrop/DraggableFormElement.tsx
import React from 'react';
import { useDrag } from 'react-dnd';
import { FormElement, ItemTypes } from '../types';
import './DragAndDropSideBar.css';

interface DraggableFormElementProps {
  element: FormElement;
}

const DraggableFormElement: React.FC<DraggableFormElementProps> = ({ element }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.FORM_ELEMENT,
    item: { element },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="item-card"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="item-icon">{element.icon}</div>
      <div className="item-content">
        <h3>{element.name}</h3>
        <p>{element.description}</p>
      </div>
    </div>
  );
};

export default DraggableFormElement;