"use client"


import Image from 'next/image'
import { CldUploadButton , CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface UploadImage {
  event:"Succes";
  info: {public_id:string}

}

export default function Home() {
  //use state to change this image
  const[imageId , setImageId] = useState("cld-sample-4")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
{/* 
      Upload Button */}

    <CldUploadButton uploadPreset="m7txhv19" onUpload={(result) => { 
       let res = result as UploadImage;
       setImageId(res.info.public_id);
    }}/>
   
{/* 
    View_Image */}

    <CldImage
  width="500"
  height="500"
  src={imageId}
  sizes="100vw"
  alt="Description of my image"
/>
    </main>
  )
}
