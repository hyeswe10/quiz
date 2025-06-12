import { useState } from "react";

const QuizPage = ({quiz}) => {
    const [currentIdx,setCurrentIdx] = useState(0);
    const currentQuiz = quiz[currentIdx];
    const handleClick = ()=>{
        setCurrentIdx(currentIdx+1)
    }
    return (
        <div className="quiz-page">
            <h2>퀴즈</h2>
            <p>{currentQuiz.question}</p>
            <div className="choices">
                {
                    currentQuiz.choices.map((value,idx)=>{
                        return <button key={idx}>{value}</button>
                    })
                }
            </div>
        </div>
    );
};

export default QuizPage;