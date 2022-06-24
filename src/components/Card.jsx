
export function Card({ name, time }) {
    return (
        <div className="bg-sky-800 w-1/2 mb-5 flex items-center justify-between rounded px-5 py-6 text-white">
            <strong className="text-xl">
                {name}
            </strong>
            <small className="text-base">
                {time}
            </small>
        </div>
    )
}