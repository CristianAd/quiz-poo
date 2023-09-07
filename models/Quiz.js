//@ts-check
import {Question} from './Question.js'

export class Quiz{

    questionIndex = 0
    score = 0

    /**
     * 
     * @param {Question[]} questionsU recibe una clase y la asigna a questionU
     */

    //Le paso las questionU
    constructor(questionsU){
        this.questionsU = questionsU
    }

      /**
     * 
     * @returns {Question} the question found
     */
  
    // Este método me permite saber en qué número de pregunta el usuario está
    // Este método me retorna un objeto Question
    getQuestionIndex(){
        return this.questionsU[this.questionIndex]
        
         
    }


    isEnded(){
        return this.questionsU.length === this.questionIndex
    }

    /**
     * 
     * @param {string} answer some text
     */

    // Permite avanzar a la siguiente pregunta, cuando el usuario intente adivinar
    guess(answer){
            console.log(answer)
        // Primero necesito verificar si la respuesta es válida o no para aumentar un puntaje

        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++
        }

        this.questionIndex++

    }

}

