import React, { useState } from 'react'
import useTattooGallery from '../hooks/useTattooGallery'
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { useParams } from 'react-router-dom';

export default function CategorizedGallery() {
  const [open, setOpen] = useState(false);
  const [selectedTattooValue, setSelectedTattoovalue] = useState()

  const { tattooGallery } = useTattooGallery();

  const handleOpen = (id) => {
    setOpen(!open)
    const selectedTattoo = tattooGallery.find(tattoo => tattoo.id === id)
    setSelectedTattoovalue(selectedTattoo)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const { label } = useParams();

  const selectedCategory = tattooGallery.filter( tattoo => tattoo.category === label)

  return (
    <div className='flex flex-col justify-center gap-28 lg:px-60 px-8 bg-black text-white h-auto py-48'>
      <h1 className={`${!open ? '' : 'brightness-50'} mx-auto lg:text-7xl text-5xl font-[Engraver] first-letter:uppercase`}>{label} Tattoo</h1>
      <div className={`${!open ? '' : 'brightness-50'} grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 duration-300`}>
        {selectedCategory.map((tattoo) => (
          <div key={tattoo.id} onClick={() => handleOpen(tattoo.id)} className='flex justify-center lg:justify-start items-center mx-auto lg:mx-0 border-[#3d3c3d] border-[10px] xl:h-[400px] xl:w-[350px] lg:h-auto lg:w-auto h-80 w-80 relative group overflow-hidden'>
            {tattoo.image 
            ? 
            <img src={tattoo.image} alt={tattoo.id} className='xl:h-full xl:w-full object-cover lg:h-80 h-auto w-auto group-hover:brightness-75 cursor-pointer duration-300 group-hover:scale-105' /> 
            :
            <Lottie animationData={loader}/>
            }
            {tattoo.image
            ?
            <HiOutlineMagnifyingGlassPlus className='absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block duration-300 size-16 opacity-75'/>
            :
            ''
            }
          </div>
        ))}
      </div>
      <div className='relative'>
        <Dialog open={open} handler={handleOpen} className='fixed inset-0 flex flex-col items-center py-14 px-14 h-[900px] max-w-max mx-auto justify-center my-auto outline-none bg-[#3d3c3d]'>
          <IoClose onClick={handleClose} className='absolute top-3 right-4 text-white size-8 z-50 cursor-pointer hover:text-red-500'/>
          <DialogBody className='h-full w-auto'>
            <img src={selectedTattooValue?.image} className='h-full'/>
          </DialogBody>
        </Dialog>
      </div>
    </div>
  )
}
