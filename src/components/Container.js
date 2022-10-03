import React from 'react'

export default function Container(props) {

    return (
      <div className="Container" style={{display:'flex', flexDirection:'column', backgroundColor:'white', height: '100%'}}>
        <div className="Heading">
          <p className="Title" style={{backgroundColor:'#F8F9FC', margin:'0', fontSize:'1.1em', fontWeight:'bold', color:'#4E73DF',textAlign:'left', paddingTop:'0.75em', paddingBottom:'0.75em', paddingLeft:'1em', borderBottom: '1px solid #e3e6f0'}}>{props.ContainerTitle}</p>
        </div>
        <div className="DisplayContents" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop:'1.5em'}}>
            {props.children}
        </div>
      </div>
  )
}
