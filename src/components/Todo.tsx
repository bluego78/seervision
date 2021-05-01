//********************************************************************/
// This is the component that shows the todo and its action buttons
// calls the *setDeleted* if the field is empty on blur
// calls the *updateTodo* if the field is not empty on blur
//********************************************************************/

/* IMPORT STYLES AND IMAGES */
import '../scss/Todo.scss';

/* IMPORT NODE MODULES AND THIRD PARTY COMPONENTS */
import { useState } from 'react';
import { Trash } from 'react-bootstrap-icons';

/* IMPORT INTERFACES */
import ITodo from '../Interfaces/ITodo';

/* IMPORT CUSTOM COMPONENTS */
import Done from './Done';
import { setDeleted, updateTodo } from '../stores/TodoStore';

export default (props:any) => {

    // create a local todo var to easily get access to a typed variable
    let todo:ITodo = props.todo as ITodo;

    //manage a local text var to update the field onChange but update the database only on blur
    const [text, setText] = useState(todo.text);

    return <div className="todo-row">
                <Done className="done-element" todo={todo} />
                <input className="todo-input" type="text" value={text as string} onChange={(e)=>setText( e.target.value)} onBlur={(e)=>(e.target.value as string==="") ? setDeleted({...todo, deleted: new Date()}) : updateTodo({...todo, text})} />
                <div className="btn btn-delete" onClick={()=>setDeleted({...todo, deleted: new Date()})}><Trash /></div>
            </div>
}