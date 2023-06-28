"use client"

import { CarCard } from './CarCard'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import cars from '../../../public/api/cars.json'

interface iCar {
    id: string
    modelName: string
    bodyType: string
    modelType: string
    imageUrl: string
}

export const Container = () => {

    const scroll = () => {
        console.log('cheguei')
    }

    return (
        <div className="container max-w-[1300px] mx-auto mt-40 overflow-auto lg:overflow-hidden">
            <div className='flex gap-5 w-full px-4'>
                {
                    cars.map((car: iCar) => (
                        <CarCard
                            key={car.id}
                            bodyType={car.bodyType}
                            imageUrl={car.imageUrl}
                            modelName={car.modelName}
                            modelType={car.modelType}
                        />
                    ))
                }
            </div>

            <div className='hidden xl:flex justify-end pr-5 gap-3 mt-10'>
                <div className='flex items-center justify-center rounded-full border border-gray-800 w-[35px] h-[35px] cursor-pointer rotate-180'>
                    <MdOutlineArrowForwardIos />
                </div>
                <div
                    className='flex items-center justify-center rounded-full border border-gray-800 w-[35px] h-[35px] cursor-pointer'
                    onClick={() => scroll()}
                >
                    <MdOutlineArrowForwardIos />
                </div>
            </div>
        </div>
    )
}
