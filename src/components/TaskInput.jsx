import  { useState } from "react"

const TaskInput = ({onAddTask}) => {
  const[input, setInput] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if(input.trim()){
      onAddTask(input);
      setInput("");
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder='Adiciona uma nova tarefa'
      value={input}
      onChange={ (e)=> setInput(e.target.value)}

      ></input>
      <button type='submit'>Adicionar</button>
    </form>
  )
}

export default TaskInput