import React from 'react'
import pin1 from '../assets/pin/pin1.jpeg'
import pin2 from '../assets/pin/pin2.jpeg'
import pin3 from '../assets/pin/pin3.jpeg'
import pin4 from '../assets/pin/pin4.jpeg'
import pin5 from '../assets/pin/pin5.jpeg'
import pin6 from '../assets/pin/pin6.jpeg'
import pin7 from '../assets/pin/pin7.jpeg'
import pin8 from '../assets/pin/pin8.jpeg'
import pin9 from '../assets/pin/pin9.jpeg'
import pin10 from '../assets/pin/pin10.jpeg'
import pin11 from '../assets/pin/pin11.jpeg'
import pin12 from '../assets/pin/pin12.jpeg'
import pin13 from '../assets/pin/pin13.jpeg'
import pin14 from '../assets/pin/pin14.jpeg'
import pin15 from '../assets/pin/pin15.jpeg'
import pin16 from '../assets/pin/pin16.jpeg'
import pin17 from '../assets/pin/pin17.jpeg'
import pin18 from '../assets/pin/pin18.jpeg'
import pin19 from '../assets/pin/pin19.jpeg'
import pin20 from '../assets/pin/pin20.jpeg'
import pin21 from '../assets/pin/pin21.jpeg'
import pin22 from '../assets/pin/pin22.jpeg'
import pin23 from '../assets/pin/pin23.jpeg'
import pin24 from '../assets/pin/pin24.jpeg'
import pin25 from '../assets/pin/pin25.jpeg'
import GalleryItem from './GalleryItem'


const items = [
  {
    id: 1,
    media: pin1,
    width: 1260,
    height: 1000,
  },
  {
    id: 2,
    media: pin2,
    width: 1260,
    height: 1400,
  },
  {
    id: 3,
    media: pin3,
    width: 1260,
    height: 1400,
  },
  {
    id: 4,
    media: pin4,
    width: 1260,
    height: 1000,
  },
  {
    id: 5,
    media:  pin5,
    width: 1260,
    height: 1243,
  },
  {
    id: 6,
    media:  pin6,
    width: 1260,
    height: 1568,
  },
  {
    id: 7,
    media: pin7,
    width: 1260,
    height: 1234,
  },
  {
    id: 8,
    media: pin8,
    width: 1260,
    height: 1400,
  },
  {
    id: 9,
    media: pin9,
    width: 1260,
    height: 1000,
  },
  {
    id: 10,
    media: pin10,
    width: 1260,
    height: 1000,
  },
  {
    id: 11,
    media: pin11,
    width: 1260,
    height: 1000,
  },
  {
    id: 12,
    media: pin12,
    width: 1260,
    height: 1400,
  },
  {
    id: 13,
    media: pin13,
    width: 1260,
    height: 1400,
  },
  {
    id: 14,
    media:  pin14,
    width: 1260,
    height: 1600,
  },
  {
    id: 15,
    media: pin15,
    width: 1260,
    height: 1000,
  },
  {
    id: 16,
    media: pin16,
    width: 1260,
    height: 1260,
  },
  {
    id: 17,
    media: pin17,
    width: 1260,
    height: 1000,
  },
  {
    id: 18,
    media: pin18,
    width: 1260,
    height: 1260,
  },
  {
    id: 19,
    media:  pin19,
    width: 1260,
    height: 1400,
  },
  {
    id: 20,
    media: pin20,
    width: 1260,
    height: 1260,
  },
  {
    id: 21,
    media: pin21,
    width: 1260,
    height: 1400,
  },
  {
    id: 22,
    media: pin22,
    width: 1260,
    height: 1890,
  },
  {
    id: 23,
    media: pin23,
    width: 1260,
    height: 1260,
  },
  {
    id: 24,
    media: pin24,
    width: 1260,
    height: 1260,
  },
  {
    id: 25,
    media: pin25,
    width: 1260,
    height: 1260,
  },
];

function Content() {
  return (
      <div className="grid grid-cols-7 gap-3 mt-5 grid-auto-rows-[10px]">
        {items.map(item=>(
        <GalleryItem key={item.id} item={item} />
        ))}
      </div>
  )
}

export default Content