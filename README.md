# Dynamic Form Builder

## 📌 Overview

This project is a **Drag-and-Drop Dynamic Form Builder** that allows users to create custom forms effortlessly. The builder provides a downloadable JSON file, which can be used to render the form on any website.

## ✨ Features

- 🚀 **Drag-and-Drop Interface** - Easily add, remove, and rearrange form elements.
- 📝 **Customizable Fields** - Supports text fields, checkboxes, dropdowns, radio buttons, and more.
- 🎨 **Live Preview** - See changes instantly while building the form.
- 📥 **Downloadable JSON** - Export the form structure as JSON for easy integration.
- 🔄 **Load & Edit Forms** - Upload a JSON file to modify existing forms.
- ⚡ **Responsive Design** - Works across all screen sizes.

## 📂 Installation & Setup

Clone the repository:

```sh
git clone https://github.com/your-username/dynamic-form-builder.git
cd dynamic-form-builder
```

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm start
```

## 🔧 Usage

1. **Drag and drop elements** to create a form.
2. **Customize field properties** such as labels, placeholders, and validation rules.
3. **Preview the form** in real-time.
4. **Download the JSON file** to use in other applications.
5. **Load existing JSON** to edit previously created forms.

## 📤 JSON Structure Example

```json
{
  "fields": [
    {
      "type": "text",
      "label": "Full Name",
      "placeholder": "Enter your name",
      "required": true
    },
    {
      "type": "email",
      "label": "Email Address",
      "placeholder": "Enter your email",
      "required": true
    },
    {
      "type": "checkbox",
      "label": "Accept Terms",
      "required": true
    }
  ]
}
```

## 🛠️ Built With

- ⚛ **React** - Frontend framework
- 📦 **React DnD** - Drag and drop functionality
- 💅 **Styled Components** - UI styling
- 🗂 **JSON** - Data format for saving forms

## 📜 License

This project is open-source and available under the **MIT License**.

---

🚀 **Start building dynamic forms now!**  
Give a ⭐ if you like the project!
