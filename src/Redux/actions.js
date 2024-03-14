let todoId = 0;

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: todoId++,
    text,
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const completeTodo = (id) => ({
  type: COMPLETED_TODO,
  payload: id,
});
