import css from "./CreateTodo.module.css"
import { useState } from "react"
const CreateTodo = (props) => {

    const [inpValue, setValue] = useState("")
    const submit = (event) => {
       event.preventDefault();

       props.AddTodo(inpValue);
       setValue("")
    }
    const handleInput = (event) =>{
          setValue(event.target.value)
    }

    return(
        <div >
            <form onSubmit={submit} className={css.CreateTodo}>
            <input type="text" value={inpValue} onChange={handleInput} placeholder="Enter todo here"/>
            <button className={css.submit}>+Submit</button>
            </form>
        </div>
    )
}

export default CreateTodo