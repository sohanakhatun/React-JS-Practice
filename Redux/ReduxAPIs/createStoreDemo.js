import { bindActionCreators, combineReducers, createStore } from "redux";

const ADD_TODO = "add_todo";
const DELTE_TODO = "delete_todo";
const EDIT_TODO = "edit_todo";
const ADD_USER = "add_user";
const DELETE_USER = "delete_user";
const EDIT_USER = "edit_user";
function todoReducer(state = [], action) {
  if (action.type == ADD_TODO) {
    const todoText = action.payload.todoText;
    return [
      ...state,
      {
        text: todoText,
        isFinished: false,
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  } else if (action.type == DELTE_TODO) {
    const todoId = action.payload.todoId;
    return state.filter((t) => t.id !== todoId);
  } else if (action.type == EDIT_TODO) {
    const todo = action.payload.todo;
    const todoText = action.payload.todoText;
    return state.map((t) => {
      if (t.id == todo.id) {
        t.text = todoText;
      }
      return t;
    });
  }

  return state;
}

function userReducer(state = [], action) {
  if (action.type == ADD_USER) {
    const username = action.payload.userName;
    return [
      ...state,
      {
        name: username,
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  } else if (action.type == DELETE_USER) {
    const userId = action.payload.userId;
    return state.filter((u) => u.id !== userId);
  } else if (action.type == EDIT_USER) {
    const user = action.payload.user;
    const username = action.payload.username;
    return state.map((t) => {
      if (u.id == user.id) {
        u.name = username;
      }
      return u;
    });
  }

  return state;
}

const combinedReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});
// const response = createStore(combinedReducer);
// console.log(response);

// console.log(response.getState());

const { dispatch, subscribe, getState, replaceReducer } =
  createStore(combinedReducer);

// dispatch takes in an action object and dispatches the reducer given in createStore().
// dispatch({ type: ADD_TODO, payload: { todoText: "todo 1" } });
// console.log(getState());

// dispatch({ type: ADD_TODO, payload: { todoText: "todo 2" } });
// console.log(getState());

// dispatch({ type: ADD_TODO, payload: { todoText: "todo 3" } });
// console.log(getState());

// dispatch({ type: DELTE_TODO, payload: { todoId: 1} });
// console.log(getState());

// instead of writting console.log everytime a state change event occurs we can write this in a subscribe method , that runs whenever state changes.

subscribe(() => console.log(getState()));
// dispatch({ type: ADD_TODO, payload: { todoText: "todo 1" } });

// dispatch({ type: ADD_TODO, payload: { todoText: "todo 2" } });

// dispatch({ type: ADD_TODO, payload: { todoText: "todo 3" } });

// dispatch({ type: DELTE_TODO, payload: { todoId: 1 } });

// instead of writting objects again and again in the dispatch function we can write them in a function and pass that function in dispatch,this will help us rectify the code mistakes if any in one place only.

// action objects -> action methods which is also called as action creator.
const addTodo = (todoText) => ({ type: ADD_TODO, payload: { todoText } });
const deleteTodo = (todoId) => ({
  type: DELTE_TODO,
  payload: { todoId: todoId },
});

const addUser = (userName) => ({ type: ADD_USER, payload: { userName } });
const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: { userId: userId },
});

// dispatch(addTodo('todo 1'));
// dispatch(addTodo('todo 2'));
// dispatch(addTodo('todo 3'));
// dispatch(deleteTodo(1));

// bindActionCreators()
// binds the action creators(1st argument) to the function in 2nd argument.

const actions = bindActionCreators({ addTodo, deleteTodo, addUser }, dispatch);

actions.addTodo("todo 1");
actions.addTodo("todo 2");
actions.addTodo("todo 3");
actions.deleteTodo(1);

actions.addUser("USER 1");
