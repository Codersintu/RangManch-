import React from 'react'
import { Image } from '@imagekit/react';
function Imag({src, alt, w, h}) {
  return (
    <Image urlEndpoint="https://ik.imagekit.io/j3whydwtk"
     src={src}
     transformation={[{
       height: h,
       width: w
     }]}
     alt={alt}
     loading="lazy"
     className='rounded-lg object-cover w-full h-full'
     lqip={{active: true, quality: 20}}
     />
  )
}

export default Imag