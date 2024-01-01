import React from 'react'
import Image, { StaticImageData } from 'next/image'
import img1 from '@/images/img1.jpg'

type Props = {
  imageSrc?: StaticImageData, 
  desc?: string  
}

const UserAvatar = ({imageSrc,desc}: Props) => {
  return (
    <div className=" w-[40px] h-[40px] ">
        <Image className="w-full h-full bg-cover rounded-full"src={img1 ?? imageSrc} alt={desc ?? "Profile Pic Avatar Image"}/>
    </div>
  )
}

export default UserAvatar