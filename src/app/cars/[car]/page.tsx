export default function Page({ params }: { params: { car: string } }) {
    return (
        <div>page {params.car}</div>
    )
}
