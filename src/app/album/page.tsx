import React from 'react'
import  cloudinary from 'cloudinary'
import Folderlist from './folderlist'
 export interface FolderType{
    name:string
    path:string
}

const Page = async() => {
    const {folders} = (await cloudinary.v2.api.root_folders()) as {
        folders : FolderType[]
    }
  return (
    <div>
    <div className=' py-5 px-4 flex items-center justify-between'>
    <h2 className=" text-3xl font-semibold tracking-tight">
      Picture Albums
    </h2>
  </div>


  {/* Data_folder */}
  <div className="px-5 py-4 grid grid-col-3 gap-4">

   {folders.map((item,i)=>(
    <div key={i}> <Folderlist folder={item}/> </div>
   ))}


  </div>

  </div>

    
  );
};

export default Page
