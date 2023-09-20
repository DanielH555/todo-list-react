import React, { useState } from 'react'
import "./FormComponent.css"

const FormComponent = ({ handleSubmit }) => {
  ///onChange events in form, react.js
  ///form submit
  const [taskInput, setTaskInput] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault(); ///prevents auto browser refresh
    if (taskInput) {//nullish type
      handleSubmit(taskInput)
      setTaskInput("");
    }

  }


  return (
    <form onSubmit={onHandleSubmit} className="form-container">
      <input className="form-input" type="text" placeholder="Enter task..." value={taskInput} onChange={(event) => setTaskInput(event.target.value)} />
      <input className="form-submit" type="submit" value="Add" />
    </form>
  )
}

export default FormComponent
