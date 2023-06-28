import Image from 'next/image'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

import volvo from '../../public/images/xc60_recharge.jpg'

export const CarCard = () => {
    return (
        <div>
            <div>
                <span className='text-sm font-bold text-gray-400'>SUV</span>
                <div className='flex items-center gap-2 pb-3'>
                    <h3 className='font-bold'>XC90 Recharge</h3>
                    <span className='text-sm font-normal text-gray-400'>plug-in hybrid</span>
                </div>
            </div>
            <div className='w-[302px]'>
                <Image src={volvo} alt='Volvo car' />
            </div>
            <div className='flex justify-center gap-6 mt-5'>
                <button className='flex items-center gap-3 uppercase font-bold text-sm text-blue-700'>Learn <MdOutlineArrowForwardIos className='text-xs' /></button>
                <button className='flex items-center gap-3 uppercase font-bold text-sm text-blue-700'>Shop <MdOutlineArrowForwardIos className='text-xs' /></button>
            </div>
        </div>
    )
}
