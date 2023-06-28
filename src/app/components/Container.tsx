"use client"

import { CarCard } from './CarCard'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import cars from '../../../public/api/cars.json'
import { useState } from 'react'

interface iCar {
    id: string
    modelName: string
    bodyType: string
    modelType: string
    imageUrl: string
}

export const Container = () => {

    const nextCard = () => {
        setSlide(slide + 322)
        if (slide >= 1200) {
            setSlide(slide)
        }
    }

    const prevCard = () => {
        setSlide(slide - 322)
        if (slide <= 0) {
            setSlide(0)
        }
    }

    const [slide, setSlide] = useState(0)

    return (
        <div className="container max-w-[1300px] mx-auto mt-40 overflow-auto lg:overflow-hidden">
            <div
                className="flex gap-5 w-full px-4"
                style={{ transform: `translateX(-${slide}px)`, transition: '1s' }}
            >
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
                <div
                    className='flex items-center justify-center rounded-full border border-gray-800 w-[35px] h-[35px] cursor-pointer rotate-180'
                    onClick={() => prevCard()}
                >
                    <MdOutlineArrowForwardIos />
                </div>
                <div
                    className='flex items-center justify-center rounded-full border border-gray-800 w-[35px] h-[35px] cursor-pointer'
                    onClick={() => nextCard()}
                >
                    <MdOutlineArrowForwardIos />
                </div>
            </div>
        </div>
    )
}
