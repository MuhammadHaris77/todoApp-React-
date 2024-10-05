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
     const updateValue= prompt("enter value?")
    todo.splice(index,1,updateValue)
    setTodo([...todo])

    // const todotemp = [...todo]
    // setInput(todotemp[index], input)
  }


  return (
    <div >
      <div className='container mt-5'>

        <div class="input-group ">
          <input type="text" class="form-control" placeholder='Enter Your Title' onChange={(e) => setInput(e.target.value)} value={input} />
          <span id="basic-addon2">  <button onClick={onSubmit} class="input-group-text btn btn-dark text-danger" >ADD TODO</button></span>
        </div>


        <ul className="container p-5  my-5 hadow-lg p-3 mb-5 bg-dark rounded">
          {
            todo.length > 0 ?
              todo.map((item, index) => <li className=' text-center m-2 rounded p-1 bg-light'  style={{ width: "100%",fontWeight:"bold" }} key={index}> <span style={{paddingRight:"25%",paddingLeft:"25%"}}>{item}</span> <button className='btn btn-danger m-1' onClick={(e) => deleteTodo(index)}>Delete</button><button className='btn btn-success m-1 ' onClick={(e) => editTodo(index)}> E d i t</button></li>) : <h1 className='text-center text-danger'>No Todo In List</h1>
          }

        </ul>



      </div>
    </div>

  )
}

export default App
