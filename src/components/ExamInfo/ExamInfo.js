import React from "react";
import Article from "./Article";
import ExamInfoData from "./examinfo.json";

//Component for fetching data from the db regarding each exam
export default function ExamInfo({ exam }) {
  //Fetch data regarding the exam from the DB
  const data = ExamInfoData[exam];
  // console.log(data)

  return (
    <ul>
      {data.map((datum) => {
        {/* console.log(datum.id); */}
        const examData = Object.entries(datum)[0];
        return <Article question={examData[0]} answer={examData[1]} id={datum.id} />;
      })}
    </ul>
  );
}

// JSON Structure
// {
// 	"JEEMain": [{
// 			"Brief": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Eligibility Criteria": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Pattern": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Important Dates": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Application Process": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Syllabus": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Cut-off Scores": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Study Resources": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Popular Courses": "Lorem ipsum dolor smet..."
// 		}
// 	],
// 	"NEET": [{
// 			"Brief": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Eligibility Criteria": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Pattern": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Important Dates": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Application Process": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Syllabus": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Cut-off Scores": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Study Resources": "Lorem ipsum dolor smet..."
// 		},
// 		{
// 			"Popular Courses": "Lorem ipsum dolor smet..."
// 		}
// 	]
// }
