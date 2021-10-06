import React from 'react'

export default function SideBar(props) {
  return (
    <aside>
      <h1 className="text-container" id="text-container">
      {props.text}
      </h1>
      <h1 className="text-container-mobile">
      {props.text}
      </h1>
    </aside>
  )
}


