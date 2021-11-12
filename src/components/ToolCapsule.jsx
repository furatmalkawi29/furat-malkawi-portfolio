import React from 'react'

export default function ToolCapsule(props) {
  return (
    <div className="tool-capsule">
      <img src={props.toolImgSrc} />
      <h4>{props.toolName}</h4>
    </div>
  )
}
