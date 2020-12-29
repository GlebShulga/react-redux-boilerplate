import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Head from '../head'

const Result = () => {
  const { gameResult } = useSelector((s) => s.create)
  return (
    <div>
      <Head title="Result" />
      <div className="bg-blue-900 text-white font-bold rounded-lg border shadow-lg p-10 grid grid-rows-2 opacity-100">
        <div className="flex justify-center text-2xl">{gameResult}</div>
        <Link to="/" className="border rounded bg-teal-300 p-2 hover:text-pink-500">
          Play again
        </Link>
      </div>
    </div>
  )
}

Result.propTypes = {}

export default React.memo(Result)
