"use client"
import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import React from 'react'


interface UploadImage {
  event:"Succes";
  info: {public_id:string}

}
const Upload = () => {
  const router = useRouter()
  return (
                           
                            // SVG_Button
    <Button asChild className='cursor-pointer'>
    <div>
    <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-4 h-4 mr-3"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  />
</svg>


                           {/* Upload_Button_Next_Cloudinary */}
    
    <CldUploadButton uploadPreset="m7txhv19"
       onUpload={(result) => { 
        let res = result as UploadImage;
        setTimeout(()=>{
          router.refresh();

        },1000)
        }}/>
       
   
    </div>
    
    
    </Button>
   
    
   
  )
}

export default Upload


