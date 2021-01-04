import React from 'react'
import CreateSquare from './common/createSquare'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10 flex justify-items-center">
        <div className="bg-blue-500 w-2/3 text-white font-bold rounded-lg border shadow-lg p-10">
          <CreateSquare />
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
