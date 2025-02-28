/**
 * @description Home page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import data from '@/data'

function QuizList() {
  return (
    <ul className="flex flex-col justify-center items-center m-3">
      {data.map((quiz, i) => (
        <li key={i} className="mt-1">
          {quiz.title}
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  return (
    <div className="m-2">
      <h1 className="text-2xl font-bold">Quizzes</h1>
      <QuizList />
    </div>
  )
}
