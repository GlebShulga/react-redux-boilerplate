import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Head from '../head'
import { createSquare, generate } from '../../redux/reducers/createSquare'

const CreateSquare = () => {
  const dispatch = useDispatch()
  const hardMode = useSelector((s) => s.create.hardMode)
  const inputClassName = 'border-solid border-gray-400 border-2 p-3 md:text-xl w-full text-black'
  const classNameToggle = 'block w-10 h-6 bg-gray-400 rounded-full shadow-inner'
  const classNameToggleUnchecked =
    'absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out'
  const classNameToggleChecked =
    'absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-red-500 transform translate-x-full'
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
            className="border rounded bg-teal-300 py-1 px-2 hover:text-red-200"
            onClick={() => dispatch(generate())}
          >
            Start
          </button>
        </Link>
      </div>
      <div className="flex flex-col">
        <label htmlFor="toggleHardMode" className="mt-3 inline-flex items-center cursor-pointer">
          <span className="relative">
            <span className={classNameToggle} />
            <span className={hardMode ? classNameToggleChecked : classNameToggleUnchecked}>
              <input
                id="toggleHardMode"
                type="checkbox"
                className="absolute opacity-0 w-0 h-0"
                onChange={() => dispatch(createSquare(!hardMode, 'hardMode'))}
                value={hardMode}
              />
            </span>
          </span>
          <span className="ml-3 text-sm">Hard mode</span>
        </label>
      </div>
    </div>
  )
}

CreateSquare.propTypes = {}

export default React.memo(CreateSquare)
