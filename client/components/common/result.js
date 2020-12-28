import React from 'react'
import { useSelector } from 'react-redux'
import Head from '../head'

const Result = () => {
  const { gameResult } = useSelector((s) => s.create)
  return (
    <div>
      <Head title="Result" />
      <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10 flex justify-items-center">
        <div className="bg-blue-500 w-2/3 hover:text-red-200 text-white font-bold rounded-lg border shadow-lg p-10">
          {gameResult}
        </div>
      </div>
    </div>
  )
}

Result.propTypes = {}

export default React.memo(Result)
