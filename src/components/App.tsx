//********************************************************************/
// This is the main component that loads the todo list or the loading
// spinner if is fetching data
//********************************************************************/

/* IMPORT STYLES AND IMAGES */
import '../scss/App.scss';

/* IMPORT NODE MODULES AND THIRD PARTY COMPONENTS */
import { useEffect } from 'react';
import { connect } from 'react-redux';

/* IMPORT INTERFACES */
import IFetchResponse from '../Interfaces/IFetchResponse';
import ITodo from '../Interfaces/ITodo';
import ITodoState from '../Interfaces/ITodoState';

/* IMPORT CUSTOM COMPONENTS */
import TodoList from './TodoList';
import { getTodos } from '../Helpers/FetchApi';
import { store, setTodos, setError, setIsLoading } from '../stores/TodoStore';
import Spinner  from './Spinner';

const App = (props:any) => {

    // Set the app state from the store
    const appState = store.getState() as ITodoState;

    useEffect(()=>{

        // Call getTodos
        // To use the await inside the useEffect Hook
        // you need to nest the call into an async function 
        (async()=>{ 

            // Start the loading indicator
            setIsLoading(true);

            // Do the call
            let res:IFetchResponse = await getTodos();
            if(res.success)
            {
                // Set the todo list
                let todos:Array<ITodo> = res.results;
                // call the reducer by the action *setTodos*
                setTodos(todos);
            }
            else
            {
                // if the call res.success is false, show the error message
                setError(res.message);
            }

            // Stop the loading indicator
            setIsLoading(false);

        })();

    },[]);

    return  <div className="main-container">
            {
                appState.isLoading || appState.todos===undefined ? 
                <Spinner className="spinner" />
                :
                <TodoList className="todo-list" />
            }
            </div>
}

export default connect((state)=>{return state;})(App);
//export default connect(mapStateToProps)(App); //alternative way to map properties