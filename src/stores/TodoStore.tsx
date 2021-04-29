//********************************************************************/
// This is the redux store we will use to manage the app state
// You will find here:
//  - The Reducer *storeReducer*
//  - The initial store value *initState*
//  - The store created
//  - All the actions to dispatch to the reducer
//********************************************************************/

/* IMPORT NODE MODULES AND THIRD PARTY COMPONENTS */
import { createStore, applyMiddleware } from 'redux';

// The middleware is imported to be applied to the dispatch method 
// of the Redux store. This is handy for a variety of tasks, such as expressing asynchronous actions in a concise manner, or logging every action payload.
import thunk from 'redux-thunk';

/* IMPORT INTERFACES */
import ITodoState from '../Interfaces/ITodoState';
import ITodo from '../Interfaces/ITodo';

import { postTodo, putTodo } from '../Helpers/FetchApi';
import IFetchResponse from '../Interfaces/IFetchResponse';


//********************************************************************/
// 1 - THE STORE REDUCER
//********************************************************************/
export const storeReducer = (state:any, action:any) => {
    
    // copy the todo list from the state
    let todos:Array<ITodo> = [...state.todos];
    let todoIndex:number;

    switch(action.type)
    {
        case 'SET_ERROR':
            // updates the error message
            return {...state, error: action.error};

        case 'SET_ISLOADING':
            // updates the loading indicator status
            return {...state, isLoading: action.isLoading};

        case'SET_TODOS':
            // updates the state populating the todos list
            return {...state, todos: action.todos};

        case 'ADD_TODO':
            //pushes the new todo to the array in the state
            todos.push(action.todo as ITodo);
            return {...state, todos: todos};

        case 'SET_DONE':
            // find the index of the todo to update
            todoIndex = todos.findIndex((todo:ITodo)=>todo._id===action.todo._id);
            // update the todo
            todos[todoIndex] = action.todo;
            //set the state
            return {...state, todos: todos};
        
        case 'UPDATE_TODO':
            // find the index of the todo to update
            todoIndex = todos.findIndex((todo:ITodo)=>todo._id===action.todo._id);
            // update the todo
            todos[todoIndex] = action.todo;
            //set the state
            return {...state, todos: todos};

        case 'SET_DELETED':
            // returns the array filtered out of the todo
            return {...state, todos: [...state.todos].filter((todo:ITodo)=>todo._id!==action.todo._id)};

        default:
            return {...state};
    }
}


//********************************************************************/
// 2 - THE STORE
//********************************************************************/
//The initial state
export const initState:ITodoState = {
    isLoading:false, 
    error:"",
    message:"",
    todos:[]
    }

// The store holds the application state
export const store = createStore(storeReducer, initState, applyMiddleware(thunk));


//********************************************************************/
// 3 - ACTIONS FOR THE STORE REDUCER
//********************************************************************/
export const setError = (error:string) => {
    store.dispatch({ type:'SET_ERROR', error });
}

export const setIsLoading = (status:boolean) => {
    store.dispatch({ type:'SET_ISLOADING', isLoading: status });
}

export const setTodos = (todos:Array<ITodo>) => {
    store.dispatch({ type:'SET_TODOS', todos });
}

export const addTodo = async (text:string) => {
    let res:IFetchResponse = await postTodo();
    if(res.success && res.results.length===1)
    {
        let todo:ITodo = res.results[0];
        store.dispatch({ type:'ADD_TODO', todo });
    }
}

export const updateTodo = async (todo:ITodo) => {
    //call the service
    let res:IFetchResponse = await putTodo(todo);
    if(res.success && res.results.length===1)
    {
        store.dispatch({ type:'UPDATE_TODO', todo });
    }
}

export const setDone = async (todo:ITodo) => {
    //set the new text on the todo
    let res:IFetchResponse = await putTodo(todo);
    if(res.success && res.results.length===1)
    {
        store.dispatch({ type:'SET_DONE', todo});
    }
}

export const setDeleted = async (todo:ITodo) => {
    let res:IFetchResponse = await putTodo(todo);
    if(res.success && res.results.length===1)
    {
        store.dispatch({ type:'SET_DELETED', todo });
    }
}

//********************************************************************/
// 4 - IF YOU WANT YOU CAN MAP THE STORE PROPS TO THE STATE PROPS
// I din't use it because the names are the same and the store is
// equal to the state
// in that case use: export default connect(mapStateToProps)(App);
//********************************************************************/
/*
export const mapStateToProps = (state:ITodoState) => {
    return { 
        isLoading: state.isLoading,
        todos: state.todos 
    }
  }
*/