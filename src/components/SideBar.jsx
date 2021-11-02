import React from 'react'

export default function SideBar(props) {
  return (
    <aside className="vertical-aside">
      <h1 className="text-container" id="text-container">
      {props.text}
      </h1>
    </aside>
  )
}


