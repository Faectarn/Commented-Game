import { atom } from "recoil"
import { questions } from '../../data/questions'

export const selectedIndexState = atom({
    key: "selectedIndexState",
    default: Math.floor(Math.random() * questions.length),
  })

export const questionsState = atom({
  key: "questionsState",
  default: questions,
})