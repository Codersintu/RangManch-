import React from 'react'

function GalleryItem({item}) {
  return (
    <div className='flex' style={{gridRowEnd: `span ${Math.ceil(item.height/150)}`}}>
        <img src={item.media} alt="" className='w-full object-cover rounded'/>
    </div>
  )
}

export default GalleryItem