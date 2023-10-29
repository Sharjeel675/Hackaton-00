import React from 'react'
import { Button } from '@/components/ui/button'
import cloudinary from 'cloudinary';
import View from '../Gallery/View';
import Favouritelist from './favouritelist';



export interface MyImage {
  public_id: string;
  tags: string[]
}

const Page = async () => {

  let res = await cloudinary.v2.search
    .expression('resource_type:image AND tags=favourite  ')
    .sort_by('public_id', 'desc')
    .max_results(5)
    .with_field("tags")
    .execute() as { resources: MyImage[] };

  return (
    <>
      <div className=' py-5 px-4 flex items-center justify-between'>
        <h2 className=" text-3xl font-semibold tracking-tight">
          Favourite
        </h2>
      </div>
      <Favouritelist resources={res.resources}/>


    </>
  )
}

export default Page;



// <div className='columns-4 gap-4 space-y-4 mx-auto p-5'>
// {res.resources.map((items, i) => {
//   return <div key={i} className='break-inside-avoid'>
//     {/* <View src={items.public_id}  /> */}
//     <View  src = {items.public_id} tag={items.tags}/>
//   </div>

// })}

// </div>

