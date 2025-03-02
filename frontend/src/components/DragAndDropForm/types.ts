// src/components/DragAndDropForm/types.ts
export interface FormElement {
    id: string;
    icon: string;
    name: string;
    description: string;
    type: 'textbox' | 'single-select' | 'multi-select' | 'radio' | 'checkbox';
    options?: string[];
    required?: boolean;
    style?:  any;
  }
  
  
  export const ItemTypes = {
    FORM_ELEMENT: 'formElement',
  };