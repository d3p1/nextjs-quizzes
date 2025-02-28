/**
 * @description Quiz page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import data, {Quiz} from '@/data'
import {redirect} from 'next/navigation'

async function showAnswer(quizId: number) {
  'use server'
  redirect(`/quiz/${quizId}?isShownAnswer=true`)
}

async function getQuizById(id: number): Promise<Quiz> {
  'use server'

  const index = id - 1
  return await new Promise((resolve) =>
    setTimeout(() => resolve(data[index]), 2000),
  )
}

export default async function QuizPage({
  params,
  searchParams,
}: {
  params: Promise<{id: number}>
  searchParams: Promise<{isShownAnswer: string}>
}) {
  const {id} = await params
  const {isShownAnswer} = await searchParams
  const quiz = await getQuizById(id)
  const showAnswerAction = showAnswer.bind(null, id)

  return (
    <>
      <h1 className="text-2xl font-bold mb-3">{quiz.title}</h1>
      <ul>
        {quiz.answers.map((answer, i) => (
          <li key={i}>
            {answer.text}
            {isShownAnswer === 'true' && answer.is_correct && (
              <span className="ml-2 text-3xl">!!!</span>
            )}
          </li>
        ))}
      </ul>
      <form className="mt-4" action={showAnswerAction}>
        {isShownAnswer !== 'true' && (
          <button
            type="submit"
            className="bg-gray-300 hover:bg-gray-400 transition-colors p-4 rounded-md"
          >
            Show Answer
          </button>
        )}
      </form>
    </>
  )
}
