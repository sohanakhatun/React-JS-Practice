import { useCallback } from 'react';
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, onDeleteTodo }) => {
    console.log(todos)
    function deleteTodo(id) {
        console.log(id)
        onDeleteTodo?.(id);
    }

    const memoDeleteTodoCallback = useCallback(deleteTodo , [onDeleteTodo])
    return (
        <>
            <ul>
                {
                    todos?.map((todo) => {
                        return <TodoListItem key={todo.id} todo={todo} onDelete={memoDeleteTodoCallback} />
                    })
                }
            </ul></>
    )
}

export default TodoList