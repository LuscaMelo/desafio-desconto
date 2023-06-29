"use client"

import { CarCard } from './CarCard'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import cars from '../../public/api/cars.json'
import { useEffect, useRef, useState } from 'react'
import { CarouselDot } from './CarouselDot'
import { FilterButton } from './FilterButton'

interface iCar {
    id: string
    modelName: string
    bodyType: string
    modelType: string
    imageUrl: string
}

const filters = [
    { filterName: 'All Cars', id: 'all', active: true },
    { filterName: 'SUV', id: 'suv', active: false },
    { filterName: 'Sedan', id: 'sedan', active: false },
    { filterName: 'Estate', id: 'estate', active: false }
]

export const Container = () => {

    const slideCounter = 373

    const [slide, setSlide] = useState(0)
    const [width, setWidth] = useState(0)
    const [dotControl, setDotControl] = useState(0)
    const [isBtnActive, setIsBtnActive] = useState(false)
    const [carList, setCarList] = useState(cars)

    const refContainer = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const scrollWidth: any = refContainer.current?.scrollWidth
        const offsetWidth: any = refContainer.current?.offsetWidth
        setWidth(scrollWidth - offsetWidth)
    }, [setWidth])

    useEffect(() => { setIsBtnActive(false) }, [isBtnActive])

    //Click on next button - Desktop
    const nextCard = () => {
        setSlide(slide + 322)
        if (slide >= width) {
            setSlide(width)
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

        setDotControl(id)

        id == 0 ? setSlide(0) : null
        id != 0 ? setSlide(id * slideCounter) : null
        id > width ? setSlide(width) : null
    }

    //On filter Button Click
    const handleActive = (id: string) => {
        // Set button active
        filters.map(filter => filter.id == id ? filter.active = true : filter.active = false)
        setIsBtnActive(true)

        //Filter cars
        const filteredCars = cars.filter((car) => car.bodyType == id)
        id == 'all' ? setCarList(cars) : setCarList(filteredCars)
        setDotControl(0)
        setSlide(0)
    }

    return (
        <div>
            <div className="container max-w-[1300px] mx-auto mt-[4.5rem] overflow-hidden">

                <div className='flex flex-col md:flex-row md:items-center px-5 gap-3 mb-10'>
                    <span className='font-bold text-sm text-gray-800'>Sort by:</span>
                    <div className='flex gap-1'>
                        {
                            filters.map(filter => (
                                <div key={filter.id}>
                                    <FilterButton id={filter.id} isActive={filter.active ? true : false} setActive={handleActive}>
                                        {filter.filterName}
                                    </FilterButton>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div
                    ref={refContainer}
                    className="flex gap-5 w-full px-5"
                    style={{ transform: `translateX(-${slide}px)`, transition: 'ease 1s' }}
                >
                    {
                        carList.map((car: iCar) => (
                            <CarCard
                                key={car.id}
                                bodyType={car.bodyType}
                                imageUrl={car.imageUrl}
                                modelName={car.modelName}
                                modelType={car.modelType}
                                id={car.id}
                            />
                        ))
                    }
                </div>

                <div className='hidden xl:flex justify-end pr-5 gap-3 mt-10'>
                    <div
                        className={`flex items-center justify-center rounded-full border ${slide != 0 ? 'border-gray-800' : 'border-gray-400'} w-[35px] h-[35px] cursor-pointer rotate-180`}
                        onClick={() => prevCard()}
                    >
                        <MdOutlineArrowForwardIos className={`${slide != 0 ? 'text-gray-800' : 'text-gray-400'}`} />
                    </div>
                    <div
                        className={`flex items-center justify-center rounded-full border ${slide != width ? 'border-gray-800' : 'border-gray-400'} w-[35px] h-[35px] cursor-pointer`}
                        onClick={() => nextCard()}
                    >
                        <MdOutlineArrowForwardIos className={`${slide != width ? 'text-gray-800' : 'text-gray-400'}`} />
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center gap-3 mt-10 xl:hidden'>
                {
                    carList.map((car, index) => (
                        <div key={index}>
                            <CarouselDot id={index} onSlide={handleSlide} isActive={index == dotControl ? true : false} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
