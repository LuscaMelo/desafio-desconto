interface iDot {
    id: number
    onSlide: Function
    isActive: boolean
}

export const CarouselDot = ({ id, onSlide, isActive }: iDot) => {

    return (
        <div
            className={`w-[10px] h-[10px] bg-gray-300 rounded-full cursor-pointer ${isActive ? 'bg-gray-700 duration-500' : ''}`}
            onClick={() => onSlide(id)}></div>
    )
}
