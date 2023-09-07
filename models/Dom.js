

export class Dom1{
    constructor(){}

    render(algo){
      const preguntaR = document.getElementById("pregunta")
      preguntaR.innerHTML = algo
    }

    /**
     * 
     * @param {string[]} options the choices of the question
     */

    showOptions(options, cualquierCosaCallback){
       const buttonContainer = document.getElementById("button")

       buttonContainer.innerHTML = ""
       for (let i = 0; i < options.length; i++) {
         
       const botones =  document.createElement("button")
       botones.innerText = options[i]

       botones.addEventListener("click", ()=>{cualquierCosaCallback(options[i])})

       buttonContainer.append(botones)
       
       }
    }

    showScore(puntajeT){
      const quizContainer =  document.getElementById("quiz")

      quizContainer.innerHTML = `
        <h2>Tu puntaje total es:</h2>
        <p>${puntajeT}</p>
      `
    }

    showQuestionIndex(indexPregunta, totalPreguntas){
      const nPregunta =  document.getElementById("nPregunta")
      nPregunta.innerHTML = `Question ${indexPregunta} of ${totalPreguntas} `
    }


}