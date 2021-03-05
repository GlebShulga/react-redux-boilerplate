import React from 'react'

const Rules = () => {
  return (
    <div>
      <div className="py-10 px-5 mt-10">
        <ol className="list-decimal text-lg leading-loose text-black text-opacity-75">
          <p className="text-3xl text-center pr-10 underline pb-2">Game rules</p>
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
