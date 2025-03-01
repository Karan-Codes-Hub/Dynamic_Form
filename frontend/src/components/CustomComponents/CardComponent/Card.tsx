import React from "react";
import "./Card.css"; // Assuming you have a CSS file for styling

// Define Course Interface
interface Course {
  title: string;
  startDate?: string;
}

// Courses Data
const courses: Course[] = [
  { title: "UI/Web & Graph design for teenagers 11-17 years old", startDate: "04.11.2022" },
  { title: "UX/UI Web-Design + Mobile Design", startDate: "04.11.2022" },
  { title: "Annual package 'Product+UX/UI+Graph designer 2022'", startDate: "04.11.2022" },
  { title: "Graphic Design", startDate: "04.11.2022" },
  { title: "Motion Design", startDate: "30.11.2022" },
  { title: "Front-end development + jQuery + CMS" },
  { title: "Digital Marketing" },
  { title: "Interior Design", startDate: "31.10.2022" },
];

const Card: React.FC = () => {
  return (
    <div className="ag-format-container">
      <div className="ag-courses_box">
        {courses.map((course, index) => (
          <div key={index} className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">{course.title}</div>
              {course.startDate && (
                <div className="ag-courses-item_date-box">
                  Start: <span className="ag-courses-item_date">{course.startDate}</span>
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
