import React from 'react'
import { useSelector } from 'react-redux'

import Head from '../head'

const Square = () => {
  const generatedSquare = useSelector((s) => s.create.list)
  const rowsNumber = useSelector((s) => s.create.rows)
  const colsNumber = useSelector((s) => s.create.cols)
  return (
    <div>
      <Head title="Game" />
      <div
        className={`grid grid-rows-${rowsNumber} grid-cols-${colsNumber} gap-10 flex justify-items-center`}
        id="square"
      >
        {generatedSquare.map((it, index) => {
          return <div className="w-20 h-20 bg-gray-500 my-5" key={index} />
        })}
      </div>
    </div>
  )
}

Square.propTypes = {}

export default React.memo(Square)
