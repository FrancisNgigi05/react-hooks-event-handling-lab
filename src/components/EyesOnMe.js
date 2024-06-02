// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {

  const handlingFocus = () => {
    console.log('Good!')
  }

  const handlingBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  return (
    <div>
      <button onFocus={handlingFocus} onBlur={handlingBlur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe
