import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

interface iProps {
    id: string
    modelName: string
    bodyType: string
    modelType: string
    imageUrl: string
}

export const CarCard = ({ bodyType, modelName, modelType, imageUrl, id }: iProps) => {
    return (
        <div>
            <div>
                <span className='text-sm font-bold text-gray-400 uppercase'>{bodyType}</span>
                <div className='flex items-center gap-2 pb-3'>
                    <h3 className='font-bold text-lg'>{modelName}</h3>
                    <span className='text-sm font-normal text-gray-400'>{modelType}</span>
                </div>
            </div>
            <div className='relative w-[352px] lg:w-[302px] h-[250px]'>
                <Image className='object-cover' fill src={imageUrl} alt='Volvo car' priority />
            </div>
            <div className='flex justify-center gap-6 mt-5'>
                <Link href={`/cars/${id}`}>
                    <button className='flex items-center gap-3 uppercase font-bold text-sm text-blue-700'>
                        Learn <MdOutlineArrowForwardIos className='text-xs' />
                    </button>
                </Link>
                <Link href={`/shop/${id}`}>
                    <button className='flex items-center gap-3 uppercase font-bold text-sm text-blue-700'>
                        Shop <MdOutlineArrowForwardIos className='text-xs' />
                    </button>
                </Link>
            </div>
        </div>
    )
}
