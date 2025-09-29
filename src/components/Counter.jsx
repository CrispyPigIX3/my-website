import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div className="p-4 text-center">
            <h1 className="text-2x1 mb-4 text-stone-950" >Count : {count}</h1>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                เพิ่ม
            </button>
        </div>
    )
}