"use client"

import { CarCard } from './CarCard'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import cars from '../../../public/api/cars.json'
import { useEffect, useRef, useState } from 'react'
import { CarouselDot } from './CarouselDot'
import { motion } from 'framer-motion'

interface iCar {
    id: string
    modelName: string
    bodyType: string
    modelType: string
    imageUrl: string
}

export const Container = () => {

    const [slide, setSlide] = useState(0)
    const [width, setWidth] = useState(0)
    const [dotControl, setDotControl] = useState(0)
    const refContainer = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const scrollWidth: any = refContainer.current?.scrollWidth
        const offsetWidth: any = refContainer.current?.offsetWidth
        setWidth(scrollWidth - offsetWidth)
    }, [setWidth])

    //Click on next button - Desktop
    const nextCard = () => {
        setSlide(slide + 322)
        if (slide >= width) {
            setSlide(slide)
        }
    }

    //Click on prev button - Desktop
    const prevCard = () => {
        setSlide(slide - 322)
        if (slide <= 0) {
            setSlide(0)
        }
    }

    //Mobile Slide Controls
    const handleSlide = (id: number) => {
        id == 0 ? setSlide(0) : null
        id != 0 ? setSlide(id * 373) : null
        id > width ? setSlide(width) : null
        setDotControl(id)
    }

    return (
        <div>

            <div className="container max-w-[1300px] mx-auto mt-40 overflow-auto lg:overflow-hidden">
                <div
                    ref={refContainer}
                    className="flex gap-5 w-full px-5"
                    style={{ transform: `translateX(-${slide}px)`, transition: 'ease 1s' }}
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
            <div className='flex justify-center items-center gap-3 mt-10 xl:hidden'>
                {
                    cars.map((car, index) => (
                        <div key={index}>
                            <CarouselDot id={index} onSlide={handleSlide} isActive={index == dotControl ? true : false} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
