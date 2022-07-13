import { useState } from "react";
import { GrClose } from "react-icons/gr"
import "./style.scss"

function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const inputHandle = (e) => {
    setInput(e.target.value)
  }

  const clickHandle = () => {

    if (input === "") {
      alert("ne yapacağına karar ver")
    } else if (todos.find((todo) => todo.name === input)) {
      alert("bu zaten yapacakların arasında ?")
    }

    else {
      const newTodo = {
        name: input,
        done: false
      }
      setTodos([newTodo, ...todos])
      setInput("")
    }
  }

  const removeTodo = (todoKey) => {
    setTodos(todos.filter((todo, key) => key !== todoKey))
  }

  const toogleTodo = (todoKey) => {
    setTodos(todos.map((todo, key) => {
      if (key === todoKey) {
        todo.done = !todo.done
      }
      return todo
    }))
  }



  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" onChange={inputHandle} value={input} placeholder="todo oluştur. 🤔" />
        <button onClick={clickHandle} >ekle</button>
      </form>
      <div className="todo-list">
        <ul>
          {todos.map((todo, key) => (
            <li key={key}>
              <span className={todo.done ? "done" : ""} onClick={() => toogleTodo(key)}>
                {todo.name}
              </span>
              <button onClick={() => removeTodo(key)}><GrClose /></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
