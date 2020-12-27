import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { randomSquare, changeGreen, changeRed } from '../../redux/reducers/createSquare'

import Head from '../head'

const Square = () => {
  const dispatch = useDispatch()
  const generatedSquare = useSelector((s) => s.create.list)
  const rowsNumber = useSelector((s) => s.create.rows)
  const colsNumber = useSelector((s) => s.create.cols)

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(randomSquare())
    }, 1000)
    return () => clearTimeout(timer)
  }, [randomSquare()])

  return (
    <div>
      <Head title="Game" />
      <div className="mx-auto flex flex-wrap justify-center">
        <div className={`grid grid-rows-${rowsNumber} grid-cols-${colsNumber} gap-10`} id="square">
          {generatedSquare.map((it, index) => {
            let color = 'bg-gray-500'
            if (it === 1) {
              color = 'bg-yellow-500'
            }
            if (it === 2) {
              color = 'bg-green-500'
            }
            if (it === -1) {
              color = 'bg-red-500'
            }
            return (
              <div className={`w-20 h-20 ${color} my-5`} key={index}>
                {it}
              </div>
            )
          })}
          <button
            type="button"
            className="border rounded bg-teal-300 py-1 px-2"
            onClick={() => dispatch(changeGreen())}
          >
            Green
          </button>
          <button
            type="button"
            className="border rounded bg-teal-300 py-1 px-2"
            onClick={() => dispatch(changeRed())}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  )
}

Square.propTypes = {}

export default React.memo(Square)
