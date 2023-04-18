import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTask, toDoTask } from '../store/toDoSlice'

export default function ToDoItem({ id, text, isDone }) {
    const dispatch = useDispatch()

    return (
        <div className={`border-2 p-2 m-4 flex items-center gap-4 ${!isDone ? ' border-blue-400' : ' border-green-400'}`}>
            <input
                onChange={() => dispatch(toDoTask({ id }))}
                className='cursor-pointer'
                type="checkbox"
                checked={isDone}
            />
            <p className={isDone ? 'line-through' : ''}>{text}</p>
            <span onClick={() => dispatch(removeTask({ id }))} className='cursor-pointer text-red-400 font-bold text-2xl'>&times;</span>
        </div>
    )
}
