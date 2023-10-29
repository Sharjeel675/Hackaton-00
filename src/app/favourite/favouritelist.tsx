"use client"

import React, { useEffect, useState } from 'react'
import View from './View'
import { MyImage } from './page'

const Favouritelist = ({resources}:{resources:MyImage[]}) => {
  useEffect(()=>{
    setinitialState(resources);
  })
  const[initialState,setinitialState] = useState(resources)
  return (
   

    <div className='columns-4 gap-4 space-y-4 mx-auto p-5'>
      {initialState.map((items, i) => {
        return <div key={i} className='break-inside-avoid'>
          {/* <View src={items.public_id}  /> */}
          <View  src = {items.public_id} tag={items.tags} fun={(publicId:string)=>{
            setinitialState((current)=>current.filter((val)=>val.public_id !==publicId))
          }}/>
        </div>

      })}

    </div>
  )
}

export default Favouritelist
