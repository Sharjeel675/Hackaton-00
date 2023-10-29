// 'use client';
// import { CldImage } from "next-cloudinary";
// import { AiOutlineHeart } from "react-icons/ai";
// import { AddTags } from "./action";
// import { useState } from 'react';

// export const View = ({ src: tag }: { src: string; tag: string[]; }) => {
//   const [fav, setfav] = useState(tag.includes("favourate"));
//   return (
//     <div className="relative">
//       <CldImage
//         width="500"
//         height="500"
//         src={src}
//         sizes="100vw"
//         alt="Description of my image" />
//       <div className="absolute top-1 right-1"
//         onClick={() => {
//           AddTags(src);
//         }}>
//         <AiOutlineHeart className=" w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
//         {/* <AiFillHeart className="w-8 h-8 cursor-pointer text-red-500"/> */}
//       </div>
//     </div>
//   );
// };




"use client";
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart, AiTwotoneFolderAdd, AiFillEdit ,AiFillFolderAdd} from "react-icons/ai";
import { AddTags } from "./action";
import { useState } from "react"
import React from "react";
import Link from "next/link";


const View = ({ src, tag }: { src: string; tag: string[] }) => {
  const [fav, setfav] = useState(tag.includes("favourite"))

  return (
    // <div>klas</div>
    <div className="relative">
      <CldImage
        className="rounded-sm"
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />


      <div
        className="absolute top-1 right-1"
        onClick={() => {
          setfav(!fav)
          AddTags(src, fav);
        }}
      >

        {
          fav ? (<AiFillHeart className="w-8 h-8 cursor-pointer text-red-600" />) : (<AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-600 duration-300" />)
        }


      </div>

                      {/* Edit_to_Album */}
                  
      <div className="absolute bottom-1 left-1 top-1 right-1">
      <Link href={`/edit?publicId=${src}`}>   
      <AiFillEdit className="w-8 h-8 cursor-pointer text-white hover:text-red-600 duration-300"/>
      </Link>
      </div>

                           {/*  Add to Album */}

       <div className=" absolute bottom-1 left-1 right-1">
       

       </div>


    </div>
  );
};

export default View;

