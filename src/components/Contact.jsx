import React, { useContext } from 'react'
import noteContext from './context/noteContext'

const contact = () => {
  const b =useContext(noteContext)
  return (
    <div>
      <h1>contact calling {b.note.name}</h1>
    </div>
  )
}

export default contact
