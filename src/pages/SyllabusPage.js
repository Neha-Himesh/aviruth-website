import React from "react";
import AccordionItem from "../components/AccordionItem";
import { syllabusData } from '../Data/SyllabusData'
import { useParams } from "react-router-dom";

function SyllabusPage() {
  const { courseId } = useParams(); // get course name from URL
  const syllabus = syllabusData[courseId];

  if (!syllabus) {
    return <h2>Course not found</h2>;
  }

  return (
    <div className="accordion" id={`${courseId}-accordion`}>
      {syllabus.map((item, index) => (
        <AccordionItem
          key={index}
          id={`${courseId}-item-${index}`}
          title={item.title}>
          {item.body}
        </AccordionItem>
      ))}
    </div>
  );
}

export default SyllabusPage;
