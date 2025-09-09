import { useReducer, useState } from "react";
import { useTheme } from "../hooks/Context"

const initialState={count:0}

function redicer(state,action){
    switch (action.type) {
        case 'increment':
            return {count:state.count+1};
    
        case 'decrement':
            return {count:state.count-1}
    }
}
function ThemePage() {
    const [state, dispatch] = useReducer(redicer,initialState)
    const { theme, setTheme } = useTheme()
    const [isOpen,setIsOpen] = useState(false)
    
    return (
        <div className='min-h-screen flex justify-center items-center bg-amber-200 dark:bg-gray-900 transition-colors duration-200'>
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    Current Theme: {theme}
                </h1>
                <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    state:{state?.count}
                </h1>
                <div className="grid gap-7 justify-center items-center">
                <button
                    onClick={()=>setTheme(prev=>prev==='light'?'dark':'light')}
                    className={`
                        px-6 py-3 rounded-lg font-medium transition-all duration-200
                        bg-amber-700 hover:bg-amber-800 dark:bg-blue-600 dark:hover:bg-blue-700
                        text-white shadow-lg hover:shadow-xl
                        transform hover:scale-105
                    `}
                >
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
                <div className="flex justify-center gap-3">
                    <button className="px-6 py-3 rounded-lg font-medium transition-all duration-200
                            bg-amber-700 hover:bg-amber-800 dark:bg-blue-600 dark:hover:bg-blue-700
                            text-white shadow-lg hover:shadow-xl
                            transform hover:scale-105" onClick={()=>dispatch({type:'increment'})}>
                        +
                    </button>
                    <button className="px-6 py-3 rounded-lg font-medium transition-all duration-200
                            bg-amber-700 hover:bg-amber-800 dark:bg-blue-600 dark:hover:bg-blue-700
                            text-white shadow-lg hover:shadow-xl
                            transform hover:scale-105" onClick={()=>dispatch({type:'decrement'})}>
                        -
                    </button>
                </div>
                </div>
            </div>



            <button onClick={()=>setIsOpen(true)} className="py-2 px-4 bg-amber-600 dark:bg-blue-700">
                modal
            </button>
            
            {isOpen&&
                <div onClick={()=>setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div onClick={(e)=>e.stopPropagation()} className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div>
                            <h1>Hello User</h1>
                        </div>
                        <button onClick={()=>setIsOpen(false)}>close</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ThemePage