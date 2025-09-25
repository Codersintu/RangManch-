import { Link } from 'react-router-dom'
import download from  "../assets/download.png"
import more from "../assets/dot.png"
function GalleryItem({item}) {
  return (
    <div className='flex relative cursor-pointer group' style={{gridRowEnd: `span ${Math.ceil(item.height/150)}`}}>
        <img src={item.media} alt="" className='w-full  object-cover rounded'/>
        <Link to={`/pin/${item.id}`} className='hidden group-hover:flex flex-col group-hover:bg-black/30  justify-between items-end p-2 absolute top-0 right-0 rounded-lg w-full  h-full '>
        <button className='p-2 bg-red-600 rounded-lg text-white font-serif'>Save</button>
        <div className="flex gap-2">
          <button className='bg-white rounded-lg'><img className='p-1' src={download} alt="" /></button>
          <button className=' bg-white rounded-lg'><img className='w-8 p-1' src={more} alt=""/></button>
        </div>
        </Link>
    </div>
  )
}

export default GalleryItem