import css from "./TodoItem.module.css"


const TodoItem = () => {
    return(
         <div className={css.item}>
           <div className={css.text}>
            <input type="checkbox"  />
            <label htmlFor="TodoItem" className={css.todo}>TodoItem</label>
           </div> 
           <div className={css.button}>
            <button className={css.edit}>Edit</button>
            <button className={css.del}>Del</button>
         </div>
        </div>
    )
}

export default TodoItem