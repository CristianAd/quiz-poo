//@ts-check
import { questionsN } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";


function main() {
   const algo = new Quiz(questionsN)
   algo.guess("holsa")
   console.log(algo)

   console.log(algo.getQuestionIndex())
}

main()



