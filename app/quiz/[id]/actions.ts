/**
 * @description Quiz actions
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use server'

import data, {Quiz} from '@/data'
import {redirect} from 'next/navigation'

export async function showAnswer(quizId: number) {
  redirect(`/quiz/${quizId}?isShownAnswer=true`)
}

export async function getQuizById(id: number): Promise<Quiz> {
  const index = id - 1
  return await new Promise((resolve) =>
    setTimeout(() => resolve(data[index]), 2000),
  )
}
