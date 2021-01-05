import React from 'react'

const Rules = () => {
  return (
    <div>
      <div className="max-w-2xl py-10 px-5 m-auto w-full mt-10 flex justify-items justify-center">
        <ol className="list-decimal text-lg">
          <p className="text-2xl">Game rules:</p>
          <li>Choose number of vertical and horizontal lines</li>
          <li>
            Press <span className="font-semibold">Start</span>
          </li>
          <li>Click on the square when it turnes yellow</li>
          <li>If you managed to click on the square during 1 sec, it turnes green</li>
          <li>Click untill half of the squares on the field turnes green</li>
          <li>You win!</li>
        </ol>
      </div>
    </div>
  )
}

Rules.propTypes = {}

export default React.memo(Rules)
