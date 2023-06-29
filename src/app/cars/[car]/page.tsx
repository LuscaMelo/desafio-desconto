"use client"

import Image from 'next/image'
import cars from '../../../../public/api/cars.json'
import Link from 'next/link'

export default function Page({ params }: { params: { car: string } }) {

    const carSelected = cars.filter((car) => car.id == params.car)

    return (
        <>
            {
                carSelected.map(car => (
                    <div className='max-w-[750px] mt-[4.5rem] mx-auto' key={car.id}>
                        <div className='px-5 md:px-0'>
                            <span className='text-sm font-bold text-gray-400 uppercase'>{car.bodyType}</span>
                            <div className='flex items-center gap-2 pb-3'>
                                <h2 className='font-bold text-2xl'>{car.modelName}</h2>
                                <span className='text-sm font-normal text-gray-400'>{car.modelType}</span>
                            </div>
                        </div>
                        <div className='relative w-full h-[315px]'>
                            <Image fill className='object-cover' src={car.imageUrl} alt={car.modelName} />
                        </div>
                        <div className='px-5 md:px-0 mt-5'>
                            <h3 className='text-xl font-bold'>Description</h3>
                            <p className='text-sm text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo dolores quae voluptatem. Tempore ex laboriosam ipsum esse corporis similique dignissimos nostrum temporibus consequuntur doloribus hic voluptates voluptas, culpa atque.</p>
                        </div>
                        <div className='px-5 md:px-0 mt-10 flex gap-3 mb-24'>
                            <Link href={`/shop/${params.car}`}>
                                <button className='py-2 px-8 border border-blue-700 shadow-md rounded-full font-semibold hover:bg-blue-800 duration-300 bg-blue-700 text-white'>Buy</button>
                            </Link>
                            <Link href={'/'}>
                                <button className='py-2 px-8 border border-gray-700 shadow-md rounded-full font-semibold hover:bg-gray-100 duration-300'>All cars</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
