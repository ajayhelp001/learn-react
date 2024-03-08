import React, { useState } from 'react'

function ProjectBgcolor() {
    const [color, setColor] = useState("black")
    return (
        <>
        <div className="w-screen h-screen duration=200 overflow-hidden" style={{backgroundColor: color}}>
            <div className="fixed inset-x-0 bottom-12  p-4 flex-wrap w-auto">
                <button onClick={() => setColor('red')} className='outline-none px-4 py-2 text-white mx-2' style={{backgroundColor: "red"}}>Red</button>
                <button onClick={() => setColor('blue')} className='outline-none px-4 py-2 text-white mx-2' style={{backgroundColor: "blue"}}>blue</button>
                <button onClick={() => setColor('green')} className='outline-none px-4 py-2 text-white mx-2' style={{backgroundColor: "green"}}>green</button>
            </div>
        </div>
        </>
    )
}

export default ProjectBgcolor