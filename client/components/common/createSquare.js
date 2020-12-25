import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Head from '../head'
import { createSquare, generate } from '../../redux/reducers/createSquare'

const CreateSquare = () => {
  const dispatch = useDispatch()
  const inputClassName = 'border-solid border-gray-400 border-2 p-3 md:text-xl w-full text-black'
  return (
    <div>
      <Head title="Hello" />
      <div className="grid gap-4">
        <div className="col-span-2 lg:col-span-1">
          <input
            className={inputClassName}
            type="number"
            min="0"
            max="8"
            placeholder="Write number of horizontal lines"
            onChange={(e) => dispatch(createSquare(e.target.value, 'rows'))}
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <input
            className={inputClassName}
            type="number"
            min="0"
            max="8"
            placeholder="Write number of vertical lines"
            onChange={(e) => dispatch(createSquare(e.target.value, 'cols'))}
          />
        </div>
      </div>
      <div className="mt-4 grid justify-items-center">
        <Link to="/square">
          <button
            type="button"
            className="border rounded bg-teal-300 py-1 px-2"
            onClick={() => dispatch(generate())}
          >
            Start
          </button>
        </Link>
      </div>
    </div>
  )
}

CreateSquare.propTypes = {}

export default React.memo(CreateSquare)
