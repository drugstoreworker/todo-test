import { useState } from "react"
import css from "./TodoItem.module.css"


const TodoItem = (props) => {
    const[isEdit, setEdit] = useState(false);
    const[inp, setInp] = useState(props.text);
    
    const handleDelete = () => {
        props.onDelete(props.id)
    }
    const handleStatus = () => {
        props.onStatus(props.id)
    }
    const handleEdit = () => {
        setEdit(!isEdit)
    }
    const submit = (e) => {
        e.preventDefault();
        props.onEdit(props.id, inp);
        setEdit(false)
    }


    return(
         <div className={css.item}>
            {
                isEdit 
                ? <form onSubmit={submit} className={css.form_wrapper}>
                    <input value={inp} type="text" onChange={(e) => setInp(e.target.value)} />
                    <button>Save</button>
                </form>
                :<label className={css.text}>
                  <input type="checkbox" onChange={handleStatus} checked={props.status}/>
                  <span className={props.status ? css.todoDone : ''}>{props.text}</span>
                </label> 
            }
           
           <div className={css.button}>
            <button onClick={handleEdit} className={css.edit}>Edit</button>
            <button onClick={handleDelete} className={css.del}>Del</button>
         </div>
        </div>
    )
}

export default TodoItem