//********************************************************************/
// This is the component that shows the main box "todo list" and
// shows errors if occurs
// the button "+"" calls *addTodo* to add a new todo
//********************************************************************/

/* IMPORT STYLES AND IMAGES */
import '../scss/TodoList.scss';

/* IMPORT NODE MODULES AND THIRD PARTY COMPONENTS */
import { connect } from 'react-redux';
import { PatchPlus } from 'react-bootstrap-icons';

/* IMPORT INTERFACES */
import ITodo from '../Interfaces/ITodo';

/* IMPORT CUSTOM COMPONENTS */
import Todo from './Todo';
import { addTodo } from '../stores/TodoStore';

const TodoList =  (props:any) => {

    return <div className="todo-list-container">

    <div className="todo-list-header">
        <h4 className="todo-list-header-title">Todo List</h4>
        {props.error!=="" ? <div>{props.error}</div> : null}
        <div className="btn btn-add" onClick={()=>addTodo(' ')}><PatchPlus /></div>
    </div>
    
    {(props.todos instanceof Array) && props.todos.map((todo:ITodo, index:number)=>{
        //Shows the list of todos
        return <Todo key={index} todo={todo} />
    })}
    </div>
}
export default connect((state)=>{return state;})(TodoList);