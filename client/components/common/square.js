import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { randomSquare, changeGreen } from '../../redux/reducers/createSquare'
import Result from './result'

import Head from '../head'

const Square = () => {
  const dispatch = useDispatch()

  const {
    list: generatedSquare,
    rows: rowsNumber,
    cols: colsNumber,
    activeTimer,
    activeIndex,
    gameResult
  } = useSelector((s) => s.create)

  useEffect(() => {
    dispatch(randomSquare())
    return () => clearTimeout(activeTimer)
  }, [])

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
              <button
                type="button"
                className={`w-20 h-20 ${color} my-5`}
                key={index}
                onClick={() => dispatch(changeGreen())}
                disabled={activeIndex !== index}
              />
            )
          })}
          {gameResult && <div className="absolute w-screen h-screen bg-gray-500 opacity-25"><Result /></div>}
        </div>
      </div>
    </div>
  )
}

Square.propTypes = {}

export default React.memo(Square)
