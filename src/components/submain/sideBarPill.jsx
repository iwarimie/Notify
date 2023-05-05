import React from 'react'


function SideBarPill({text}) {
  return (
    <div>
      <button style={{background:"purple", 
                      marginTop: "40px", 
                      padding:"15px 22px",
                      borderRadius: "5px"
                      }}>{text}</button>
    </div>
  )
}

export default SideBarPill
