/**
 * @description Quiz form
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import {showAnswer} from '@/app/quiz/[id]/actions'
import {useActionState} from 'react'

export default function QuizForm({
  id,
  isShownAnswer,
}: {
  id: number
  isShownAnswer: string
}) {
  const showAnswerAction = showAnswer.bind(null, id)

  const [, action, isPending] = useActionState(showAnswerAction, null)

  return (
    <form className="mt-4" action={action}>
      {isShownAnswer !== 'true' && !isPending && (
        <button
          type="submit"
          className="bg-gray-300 hover:bg-gray-400 transition-colors p-4 rounded-md"
        >
          Show
        </button>
      )}

      {isPending && <div className="mt-4">Loading...</div>}
    </form>
  )
}
