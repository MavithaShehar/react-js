import React from "react"

import './BodyContend.css'


function BodyContend(props){
 return(
    <>
    <div className="content">
         <h3>Main Content</h3>
         {props.children}
    </div>
    </>
 )
}

export default BodyContend