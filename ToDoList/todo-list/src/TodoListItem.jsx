import { memo } from "react"

const TodoListItem = ({ key, todo, onDelete }) => {
    return (
        <li key={key}>
            <div>
                <p> {todo.value}</p>
                <br />
                <button onClick={() => onDelete(todo.id)}>Remove</button>
            </div>
        </li>
    )
}

export default memo(TodoListItem)