/**
 * @description Home page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import data, {Quiz} from '@/data'
import {Suspense} from 'react'
import Link from 'next/link'

async function getQuizzes(): Promise<Quiz[]> {
  'use server'

  return await new Promise((resolve) => setTimeout(() => resolve(data), 2000))
}

async function QuizList() {
  const quizzes = await getQuizzes()

  return (
    <ul className="flex flex-col justify-center items-center m-3">
      {quizzes.map((quiz, i) => (
        <li key={i} className="mt-1">
          <Link href={`/quiz/${i + 1}`}>{quiz.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-3">Quizzes</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <QuizList />
      </Suspense>
    </>
  )
}
