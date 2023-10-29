
"use client"
import { Button } from "@/components/ui/button"
import { CldImage } from 'next-cloudinary';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo({src}:{src:string}) {
  return (
    <Tabs defaultValue="original3" className="w-full py-4 px-5">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="grayscale">Gray_Scale</TabsTrigger>
        <TabsTrigger value="oil">Oil-Paint</TabsTrigger>
      </TabsList>

                                 {/* Original */}

      <TabsContent value="original">
        <div className="flex gap-5 justify-center items-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />

          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
        </div>
      </TabsContent>
              
                                  {/*  Blur */}
      <TabsContent value="blur">
        <div className="flex gap-5 justify-center items-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />

          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            blur={800}
          />
        </div>
      </TabsContent>

                                 {/* Gray_Scale */}
        <TabsContent value="grayscale">
        <div className="flex gap-5 justify-center items-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />

          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            grayscale={true}
          />
        </div>
      </TabsContent>

                     {/* Oil Painting*/}

       <TabsContent value="oil">
        <div className="flex gap-5 justify-center items-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />

          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            oilPaint={true}
          />
        </div>
      </TabsContent>
    </Tabs>
  )
}


