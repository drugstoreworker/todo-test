import css from "./CreateTodo.module.css"

const CreateTodo = () => {
    return(
        <div >
            <input type="text" />
            <button className={css.submit}>+Submit</button>
        </div>
    )
}

export default CreateTodo