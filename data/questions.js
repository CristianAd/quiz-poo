
import { Question } from "../models/Question.js";
import { preguntas } from "./data.js";

export const questionsN = preguntas.map(questionss => new Question(questionss.preguntaIndependiente, questionss.opcionesRespuesta, questionss.respuesta))

