import React from 'react'
import "./Mentorslist.css" 

const Mentorslist = () => {
    const mentorsData=[
        {
          Avatar:"https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fpritesh.3b7c44ee9f2c717c5301037740bb6eb6.jpeg&w=1920&q=75",
          Name:"Pritesh Kumar",
          College:" IIT Delhi",
          Profession:"CTO @ FunctionUp",
          Experience:"9 Yrs Exp."
        },
        {
          Avatar:"https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanubhav.6a3b4e1b4097967be9b5418ab786f1ce.jpeg&w=1920&q=75",
          Name:"Anubhav Singh",
          College:" IIT Kanpur",
          Profession:"Co-founder @ Dubdub.ai",
          Experience:"7 Yrs Exp.",
        },
        {
          Avatar:"https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906235709x512347696206974850%2FMentor-4.jpeg&w=1920&q=75",
          Name:"Aviral Sharma",
          College:" IIT Delhi",
          Profession:"Data Scientist Manager @ Optum",
          Experience:"7 Yrs Exp.",
        },
        {
          Avatar:"https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906303309x809592985984049700%2F1517597437249.jpeg&w=1920&q=75",
          Name:"Rahul Garg",
          College:"  IIT Kanpur",
          Profession:"Co-founder @ Dubdub.ai",
          Experience:"7 Yrs Exp.",
        },
        {
          Avatar:"https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906339831x204777177063368830%2F1669699961094.jpeg&w=1920&q=75",
          Name:"Uddhav Bamba",
          College:"IIT Dhanbad",
          Profession:"Applied Scientist @ Amazon",
          Experience:"3 Yrs Exp.",
        },
        {
          Avatar:"https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanchal.b2ab3290c2c9167be3c3ca3a0487eff9.jpeg&w=1920&q=75",
          Name:"Anchal Jaiswal",
          College:"IIT Kanpur",
          Profession:"Senior Data Scientist @ Tredence",
          Experience:"7 Yrs Exp.",
        },
        {
          Avatar:"https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Frahul.05ecf431785ed6ed909ee4f781bf14fc.jpeg&w=1920&q=75",
          Name:"Rahul Sankhwar",
          College:"IIT Kanpur",
          Profession:"Senior Data Scientist @ Sharechat",
          Experience:"6 Yrs Exp.",
        },
        {
          Avatar:"https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fgaurav.72b71c73fd8e8ddd0a5e0ec77acdec55.jpeg&w=1920&q=75",
          Name:"Gaurav Agarwal",
          College:"IIT Delhi",
          Profession:"Senior Engineer @ Uber California",
          Experience:"9 Yrs Exp.",
        },
        {
          Avatar:"https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fmohak.ce40166641bc8640b263d6cbfdac27af.jpeg&w=1920&q=75",
          Name:"Mohak Sahu",
          College:"IIT Bombay",
          Profession:"CTO @ Languify",
          Experience:"3 Yrs Exp.",
        }
      ]
      return (
        <div className="container">
          {
            mentorsData.map((data)=>
            (
              <div className="mentorlist">
    
              <img src={data.Avatar} id="imgData"/>
              <h4>{data.Name}</h4>
              <h5>{data.College}</h5>
              <h6>{data.Profession}</h6>
              <h6 id="h6">{data.Experience}</h6>
              
    
    
    
              </div>
            ))
          }
        </div>
      );
  
}

export default Mentorslist
