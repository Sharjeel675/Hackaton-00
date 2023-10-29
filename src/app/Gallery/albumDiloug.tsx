"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { AiFillFolderAdd } from "react-icons/ai"
import { FolderCeate } from "./action"

const AlbumDiloug = ({imageData}:{imageData:string}) => {
  const [album ,setAlbum] = useState("")
  const[open , setOpen] = useState(false)
  return (
    <div>

<Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="m-0 p-0"><AiFillFolderAdd className="w-8 h-8 cursor-pointer text-white hover:text-red-600 duration-300"/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
           Enter the Album name of the picture you add in the album want.Click to Save Album when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="label-name" className="text-right">
              Name
            </Label>
            <Input
              id="label-name"
              defaultValue={album}
              onChange={(e:any)=>{setAlbum(e.target.value)}}
              className="col-span-3"
              placeholder="Album-Name here ..."
            />
          </div>
         
        </div>
        <DialogFooter>
          <Button type="submit" onClick={async()=>{setOpen(false);
         await FolderCeate(album,imageData);
          }}>Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      
    </div>
  )
}

export default AlbumDiloug
