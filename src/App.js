import Categories from "./Components/Categories";
import QuizPage from "./Components/QuizPage";
import quizData from './Data/quizData';
import { useState } from "react";

const App = () => {
  const [category,setCategory] = useState("");
  const [filterQuiz,setFilterQuiz] = useState([]);
  const onSelectCategory = (select)=>{
    setCategory(select);
    const quizArr = quizData.quizzes.filter((data)=>{
      return data.category === select; 
    })
    setFilterQuiz(quizArr);
  }

  return (
    <div className="app">
      {/* category가 값이 없으면(즉, 초기값) <Categories/> 실행 */}
      { !category &&
        <Categories categories={quizData.categories} onSelect={onSelectCategory}/>
      }
      {/* 카테고리 버튼이 눌려서 category의 값이 생기면 <Categories/>가 아닌 <QuizPage/> 실행 */}
      {
        category && (<QuizPage quiz={filterQuiz}/>)
      }
    </div>
  );
};

export default App;
