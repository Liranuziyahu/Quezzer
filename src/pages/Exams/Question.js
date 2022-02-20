import React from 'react'

const Question = ({question}) => {
  return (
   <>
           <h1>
           {question.question}
           </h1>
            <div>
                <input type="checkbox" />
                <label> {question[1]}</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>{question[2]}</label>
            </div>

            <div>
            <input type="checkbox" />
            <label>{question[3]}</label>
            </div>
            <div>
            <input type="checkbox" />
            <label>{question[4]}</label>
            </div>
        
          

   </>
    
  )
}

export default Question