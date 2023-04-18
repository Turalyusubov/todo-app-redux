import React from 'react'

export default function ToDoForm({ value, updateText, handleAction }) {
    console.log(updateText)
    console.log(value)
    console.log(handleAction)

    return (
        <label
            htmlFor=""
            className='flex m-4'
        >
            <input
                type="text"
                value={value}
                onChange={(e) => updateText(e.target.value)}
                className='border-gray-700 border-2 p-2 w-3/4'
                placeholder='New Task'
            />
            <button
                className='w-1/4 bg-gray-700 text-white'
                onClick={handleAction}>Add Task</button>
        </label>
    )
}
