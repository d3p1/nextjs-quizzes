/**
 * @description Data
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export type Quiz = {
  title: string
  question: string
  answers: {
    text: string
    is_correct: boolean
  }[]
}

const quizzes: Quiz[] = [
  {
    title: 'Quiz 1',
    question: '[1] What is the meaning of life?',
    answers: [
      {
        text: '[1] Have fun',
        is_correct: true,
      },
      {
        text: '[1] Study',
        is_correct: false,
      },
      {
        text: '[1] Play video games',
        is_correct: false,
      },
    ],
  },
  {
    title: 'Quiz 2',
    question: '[2] What is the meaning of life?',
    answers: [
      {
        text: '[2] Have fun',
        is_correct: true,
      },
      {
        text: '[2] Study',
        is_correct: false,
      },
      {
        text: '[2] Play video games',
        is_correct: false,
      },
    ],
  },
  {
    title: 'Quiz 3',
    question: '[3] What is the meaning of life?',
    answers: [
      {
        text: '[3] Have fun',
        is_correct: true,
      },
      {
        text: '[3] Study',
        is_correct: false,
      },
      {
        text: '[3] Play video games',
        is_correct: false,
      },
    ],
  },
]

export default quizzes
