import { useState } from "react"

export default function TodoDropDown() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  return(
    <div>
      <div className= {open ? "sidebar-item open" : "sidebar-item"}>
        <div className="this-week">
          <div className="sidebar-title">
            <span>This Week</span>
            <i class="bi bi-chevron-compact-down toggle-btn" onClick={() => setOpen(!open)}></i>
          </div>
          <div className="sidebar-content">
            <p>SOTU Meeting </p> <span>Monday</span>	 <br />
            <time>09:00am</time> <span>(WAT+1)</span>	
          </div>
        </div>
      </div>


        <div className= {open2 ? "sidebar-item2 open2" : "sidebar-item2"}>
          <div className="this-month">
            <div className="sidebar-title2">
              <span>This Month</span>
              <i class="bi bi-chevron-compact-down toggle-btn2" onClick={() => setOpen2(!open2)}></i>
            </div>
            <div className="sidebar-content2">
              <p>SOTU Meeting  <span>Every Monday</span>	</p> <br />
              <p>Scrum Meeting</p> <span>21st -23rd</span>
            </div>
          </div>
        </div>
    </div>
    
  )
}