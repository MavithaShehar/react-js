import React from 'react'
import './ManuLinke.css'
function ManuLinke(props){
    return(
        <>
          <a href={props.url}
          className='link'>{props.linkname}</a>  
        </>

    )
}

export default ManuLinke