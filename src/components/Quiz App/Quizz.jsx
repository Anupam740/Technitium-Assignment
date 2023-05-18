// import React,{useState} from 'react'
// // import questions from './QuizzData'

// const Quizz = () => {
//     // const [currentQuestion,setCurrentQuestions]=useState(0)
//     const questions =[
//         {
//             questionText:"How many days are there in a week?",
//             answerOptions :[
//                 { answerText:"2", isCorrect:false},
//                 { answerText:"9",isCorrect:false},
//                 { answerText:"7",isCorrect:true},
//                 { answerText:"9",isCorrect:false},
                
//             ],
//         },
//         {
//             questionText:"Which of the following is used in React.js to increase performance?",
//             answerOptions :[
//                 { answerText:"Virtual Dom", isCorrect:true},
//                 { answerText:"Real Dom",isCorrect:false},
//                 { answerText:"Both of the above",isCorrect:false},
//                 { answerText:"None of the above",isCorrect:false},
                
//             ],  
//         },
//         {
//             questionText:"Identify the one which is used to pass data to components from outside.",
//             answerOptions :[
//                 { answerText:"Render and Arguments", isCorrect:false},
//                 { answerText:"setState",isCorrect:false},
//                 { answerText:"propTypes",isCorrect:false},
//                 { answerText:"props",isCorrect:true},
                
//             ],
//         },
//         {
//             questionText:"Who is the CEO of Tesla?",
//             answerOptions :[
//                 { answerText:"Zeff Bezos", isCorrect:false},
//                 { answerText:"Elon Musk",isCorrect:true},
//                 { answerText:"Mark Zuckerberg",isCorrect:false},
//                 { answerText:"Bill Gates",isCorrect:false},
                
//             ],
//         },
//         {
//             questionText:"Name the largest planet of Solar System.",
//             answerOptions :[
//                 { answerText:"Jupiter", isCorrect:true},
//                 { answerText:"Pluto",isCorrect:false},
//                 { answerText:"Mercury",isCorrect:false},
//                 { answerText:"Earth",isCorrect:false},
                
//             ],
//         },
//         {
//             questionText:"HTML stands for ?",
//             answerOptions :[
//                 { answerText:"Structuring Language", isCorrect:false},
//                 { answerText:"Object Oriented Language",isCorrect:false},
//                 { answerText:"Programming Language",isCorrect:false},
//                 { answerText:"Hyper Text Markup Language",isCorrect:true},
                
//             ],
//         },
        
        
        
        
//     ]
//   return (
//     <>
//     <div className='quizzApp'>
//         <div className="question-section">
//         <h5>Score:5</h5>
//         <div className="question-count">
//             <span>Question 1 to 4</span>
//         </div>
//         <div className="question-text">
//            <h3>{questions[currentQuestion].questionText}</h3> 
//         </div>

//         </div>
//         <div className="answer-section">
//             {questions[currentQuestion].map((ans,i)=>{
//                 return <button key={i}>{ans.answerText}</button>;

//             })}
//             <button>Answers</button>

//     </div>
//     <div className="actions">
//         <button>Quit</button>
//         <button>Next</button>
//     </div>
    

//     </div>
//     </>
//   )
// }

// export default Quizz
