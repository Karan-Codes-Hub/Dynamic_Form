// src/components/DragAndDropForm/types.ts
export interface FormElement {
    icon: string;
    name: string;
    description: string;
    type: 'textbox' | 'single-select' | 'multi-select' | 'radio' | 'checkbox';
  }
  
  export const ItemTypes = {
    FORM_ELEMENT: 'formElement',
  };