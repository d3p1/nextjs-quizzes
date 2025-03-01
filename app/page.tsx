/**
 * @description Home page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import data, {Quiz} from '@/data'
import {Suspense} from 'react'
import Link from 'next/link'
import {revalidatePath} from 'next/cache'

async function addQuiz(formData: FormData) {
  'use server'

  data.push({
    title: formData.get('title') as string,
    question: formData.get('question') as string,
    answers: [
      {
        text: formData.get('answer1-text') as string,
        is_correct: formData.get('answer1-correct') === 'on',
      },
      {
        text: formData.get('answer2-text') as string,
        is_correct: formData.get('answer2-correct') === 'on',
      },
      {
        text: formData.get('answer3-text') as string,
        is_correct: formData.get('answer3-correct') === 'on',
      },
    ],
  })

  revalidatePath('/')
}

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

      <form
        className="mt-4 flex flex-col justify-center items-center w-1/6"
        action={addQuiz}
      >
        <input
          className="bg-gray-200 p-4 mt-2"
          type="text"
          name="title"
          placeholder="Title"
        />

        <input
          className="bg-gray-200 p-4 mt-2 mb-8"
          type="text"
          name="question"
          placeholder="Question"
        />

        <div className="flex flex-row justify-between items-center w-full">
          <input
            className="bg-gray-200 p-4 mt-2"
            type="text"
            name="answer1-text"
            placeholder="Answer 1"
          />
          <input className="mt-2 p-4" type="checkbox" name="answer1-correct" />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <input
            className="bg-gray-200 p-4 mt-2"
            type="text"
            name="answer2-text"
            placeholder="Answer 1"
          />
          <input className="mt-2 p-4" type="checkbox" name="answer2-correct" />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <input
            className="bg-gray-200 p-4 mt-2"
            type="text"
            name="answer3-text"
            placeholder="Answer 1"
          />
          <input className="mt-2 p-4" type="checkbox" name="answer3-correct" />
        </div>

        <button
          className="mt-4 bg-gray-300 hover:bg-gray-400 transition-colors p-4 rounded-md"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  )
}
