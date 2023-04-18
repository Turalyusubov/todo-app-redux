import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from './store/toDoSlice'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTask({ text }));
      setText('');
    }
  }


  return (
    <div className="App px-80">
      <ToDoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <ToDoList />
    </div>
  )
}

export default App
