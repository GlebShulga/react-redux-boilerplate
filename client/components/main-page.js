import React from 'react'
import CreateSquare from './common/createSquare'
import Rules from './common/rules'
import Head from './head'

const MainPage = () => {
  return (
    <div>
      <Head title="Square Game" />
      <div className="absolute left-0 top-0">
        <Rules />
      </div>
      <div className="max-w-2xl py-10 px-5 m-auto w-full mt-10 flex justify-items justify-center">
        <div className="bg-purple-300 w-2/3 text-white font-bold rounded-lg border shadow-lg p-10">
          <CreateSquare />
        </div>
      </div>
    </div>
  )
}

MainPage.propTypes = {}

export default React.memo(MainPage)
