interface iButtonProps {
    id: string
    children: string
    isActive: boolean
    setActive: Function
}

export const FilterButton = ({ children, isActive, setActive, id }: iButtonProps) => {
    return (
        <button className={`border font-semibold text-sm md:text-md py-1 px-4 rounded-full shadow-md scale-95 duration-300 hover:scale-100
         ${isActive ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-600'}`}
            onClick={() => setActive(id)}
        >
            {children}
        </button>
    )
}
