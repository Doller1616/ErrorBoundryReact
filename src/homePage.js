import React, { useState } from 'react'

export default function HomePage(props) {

  return (<>
    <div style={{ height: '150px', width:'150px', borderRadius:'10px', display:'grid', placeContent:'center',
                     backgroundColor:'yellowgreen' }}>
        <b><h2>{props?.index + 1 }</h2></b>
        { props?.data.map(()=>{}) }
        </div>
 </> )
}
