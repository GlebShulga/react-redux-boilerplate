import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Head from '../head'
import { gameResultToNull } from '../../redux/reducers/createSquare'

const Result = () => {
  const { gameResult, countObj } = useSelector((s) => s.create)
  const dispatch = useDispatch()
  return (
    <div>
      <Head title="Result" />
      <div className="bg-blue-900 text-white font-bold rounded-lg border shadow-lg p-10 grid grid-rows-2 opacity-100">
        <div className="flex justify-center text-2xl">{gameResult}</div>
        <div>
          {gameResult === 'Win'
            ? `Red: ${countObj.red} Green: ${countObj.green + 1}`
            : `Red: ${countObj.red + 1} Green: ${countObj.green}`}
        </div>
        <Link
          to="/"
          onClick={() => {
            dispatch(gameResultToNull())
          }}
          className="border rounded bg-teal-300 p-2 hover:text-pink-500"
        >
          Play again
        </Link>
      </div>
    </div>
  )
}

Result.propTypes = {}

export default React.memo(Result)
