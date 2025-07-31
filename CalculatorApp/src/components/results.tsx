
export default function Results({ display, expression }:{display:string;expression:string}):React.JSX.Element{
    return(
        <div className="bg-gray-900 text-white p-4 rounded-t-lg">
            <div className="text-right text-sm text-gray-400 h-6">
                {expression}
            </div>
            <div className="text-right text-3xl font-mono font-bold">
                {display}
            </div>
        </div>
    )
}