import React from 'react'

const ButtonBox = ({ handleClick }) => (
  <div>
    <button data-test="button-box" onClick={handleClick}>
      Click Me!
    </button>
  </div>
)

export default ButtonBox
