import React from 'react'
import { TabsDemo } from './tabs'
// import  { TabsDemo } from './tabs'

const Page = ({ 
   searchParams: { publicId },
}:{
   searchParams: { publicId : string};

} ) => {
  // console.log(params);
  
  return (
    <>
    <div className=' py-5 px-4 '>

    <h2 className=" text-3xl font-semibold tracking-tight">
   Edit Picture
      
    </h2> </div>
    <TabsDemo src={publicId}/>
    </>
   
  )
} 

export default Page
