 export class Question {
    /**
     * 
     * @param {string} pregunt la pregunta
     * @param {string[]} opcione las opciones a responder
     * @param {string} respuest una respuesta
     */
    constructor(pregunt, opcione, respuest){
        this.text = pregunt
        this.opcione = opcione
        this.respp = respuest
    }

    /**
     * 
     * @param {string} answer la respuesta elegida
     * @returns {boolean} true si es correcta 
     */

    correctAnswer(answer){
        return this.respp === answer
    }
}




 


