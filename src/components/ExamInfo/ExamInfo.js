import React from 'react'
import Article from './Article'

//Component for fetching data from the db regarding each exam
export default function ExamInfo({exam}) {
    //Fetch data regarding the exam from the DB

    return (
      <div>
        <Article />
      </div>
    );
}

// JSON Structure
// {
//     "JEE Main" : {
//         "Brief" : "Lorem ipsum dolor smet...",
//         "Eligibility_Criteria" : "Lorem ipsum dolor smet...",
//         "Pattern" : "Lorem ipsum dolor smet...",
//         "Important_Dates" : "Lorem ipsum dolor smet...",
//         "Application_Process" : "Lorem ipsum dolor smet...",
//         "Syllabus" : "Lorem ipsum dolor smet...",
//         "Cut-off Scores" : "Lorem ipsum dolor smet...",
//         "Study_Resources" : "Lorem ipsum dolor smet...",
//         "Popular_Courses" : "Lorem ipsum dolor smet..."
//     },
//     "NEET" : {
//         "Brief" : "Lorem ipsum dolor smet...",
//         "Eligibility_Criteria" : "Lorem ipsum dolor smet...",
//         "Pattern" : "Lorem ipsum dolor smet...",
//         "Important_Dates" : "Lorem ipsum dolor smet...",
//         "Application_Process" : "Lorem ipsum dolor smet...",
//         "Syllabus" : "Lorem ipsum dolor smet...",
//         "Cut-off Scores" : "Lorem ipsum dolor smet...",
//         "Study_Resources" : "Lorem ipsum dolor smet...",
//         "Popular_Courses" : "Lorem ipsum dolor smet..."
//     }
// }