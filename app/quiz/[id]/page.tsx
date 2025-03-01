/**
 * @description Quiz page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {getQuizById} from '@/app/quiz/[id]/actions'
import QuizForm from '@/app/quiz/[id]/form'

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

      <QuizForm id={id} isShownAnswer={isShownAnswer} />
    </>
  )
}
