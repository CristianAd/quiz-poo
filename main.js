//@ts-check
import { questionsN } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { Dom1 } from "./models/Dom.js";

/**
 * 
 * @param {Quiz} quiz la pregunta en cuestion
 * @param {Dom1} DomN some render
 */


function renderPage(quiz, DomN) {
   if (quiz.isEnded()) {
      console.log(quiz.score)
      DomN.showScore(quiz.score)
   }else{
      DomN.render(quiz.getQuestionIndex().text)
      DomN.showOptions(quiz.getQuestionIndex().opcione, (currentChoice)=> {
         quiz.guess(currentChoice)
         renderPage(quiz, DomN)
      })

      DomN.showQuestionIndex(quiz.questionIndex + 1, quiz.questionsU.length)
   }
}



function main() {
   const quiz = new Quiz(questionsN)
   const DomN = new Dom1()


   renderPage(quiz, DomN)

}

main()



