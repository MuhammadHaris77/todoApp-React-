import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [input, setInput] = useState();
  const [todo, setTodo] = useState([])

  const onSubmit = () => {
    todo.push(input)
    setTodo([...todo])
    setInput('')
  }

  const deleteTodo = (index) => {
    todo.splice(index, 1)
    setTodo([...todo])
  }


  const editTodo = (index) => {
    const todotemp = [...todo]
    setInput(todotemp[index], input)
  }


  return (
    <div >
      <div className='container mt-5'>

        <div class="input-group ">
          <input type="text" class="form-control" placeholder='Enter Your Title' onChange={(e) => setInput(e.target.value)} value={input} />
          <span id="basic-addon2">  <button onClick={onSubmit} class="input-group-text btn btn-primary" >submit</button></span>
        </div>


        <ul className="container p-5">
          {
            todo.length > 0 ?
              todo.map((item, index) => <li className=' text-center m-2 rounded p-2 bg-light'  style={{ width: "100%",fontWeight:"bold" }} key={index}> <span style={{paddingRight:"300px",paddingLeft:"400px"}}>{item}</span> <button className='btn btn-danger m-1' onClick={(e) => deleteTodo(index)}>Delete</button><button className='btn btn-success m-1' onClick={(e) => editTodo(index)}>Edit</button></li>) : <h1 className='text-center text-danger'>No Todo In List</h1>
          }

        </ul>



      </div>
    </div>

  )
}

export default App
