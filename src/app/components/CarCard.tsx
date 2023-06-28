import Image from 'next/image'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

interface iProps {
    modelName: string
    bodyType: string
    modelType: string
    imageUrl: string
}

export const CarCard = ({ bodyType, modelName, modelType, imageUrl }: iProps) => {
    return (
        <div>
            <div>
                <span className='text-sm font-bold text-gray-400 uppercase'>{bodyType}</span>
                <div className='flex items-center gap-2 pb-3'>
                    <h3 className='font-bold'>{modelName}</h3>
                    <span className='text-sm font-normal text-gray-400'>{modelType}</span>
                </div>
            </div>
            <div className='relative w-[352px] lg:w-[302px] h-[240px]'>
                <Image className='object-cover' fill src={imageUrl} alt='Volvo car' priority />
            </div>
            <div className='flex justify-center gap-6 mt-5'>
                <button className='flex items-center gap-3 uppercase font-bold text-sm text-blue-700'>Learn <MdOutlineArrowForwardIos className='text-xs' /></button>
                <button className='flex items-center gap-3 uppercase font-bold text-sm text-blue-700'>Shop <MdOutlineArrowForwardIos className='text-xs' /></button>
            </div>
        </div>
    )
}
