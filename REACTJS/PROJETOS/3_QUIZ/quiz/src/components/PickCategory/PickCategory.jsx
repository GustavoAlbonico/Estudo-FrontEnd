import { useContext } from "react";
import Category from "../../img/category.svg";

import "./PickCategory.css";
import { QuizContext } from "../../context/quiz";

const PickCategory = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const chooseCategoryAndReorderQuestions = (category) => {

        dispatch({ type: "START_GAME" , payload: category });

        dispatch({ type: "REORDER_QUESTIONS"});
    }

  return <div id="category">
    <h2>Escolha uma categoria</h2>
    <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
    <div>
       {quizState.questions.map((question) => (
         <button 
            onClick={() => chooseCategoryAndReorderQuestions(question.category)} 
            key={question.category} 
         >
            {question.category}
         </button>
       ))}
    </div>
    <img src={Category} alt="Categoria do Quiz" />
    </div>
}

export default PickCategory