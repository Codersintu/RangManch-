import { Link } from 'react-router-dom'
import Imag from './image/Imag'


function GalleryItem({item}) {
  const optimizedHeight = (372 * item.height) / item.width;
  return (
    <div className='flex relative cursor-pointer group' style={{gridRowEnd: `span ${Math.ceil(item.height/150)}`}}>
      <Imag src={item.media} alt="" w={372} h={optimizedHeight}/>
        <Link to={`/pins/${item.id}`} className='hidden group-hover:flex flex-col group-hover:bg-black/30  justify-between items-end p-2 absolute top-0 right-0 rounded-lg w-full  h-full '>
        <button className='p-2 bg-red-600 rounded-lg text-white font-serif'>Save</button>
        <div className="flex gap-2">
          <button className='bg-white rounded-lg w-7 h-7'><Imag className=' ' src="../general/download.png" alt="" /></button>
          <button className=' bg-white rounded-lg w-7 h-7'><Imag className='' src="../general/dot.png" alt=""/></button>
        </div>
        </Link>
    </div>
  )
}

export default GalleryItem