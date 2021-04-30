//********************************************************************/
// This is the component that shows the checked/unchecked icon and
// calls the *setDone* action to activate the reducer and update the store
//********************************************************************/

/* IMPORT NODE MODULES AND THIRD PARTY COMPONENTS */
import { Circle, CheckCircleFill } from 'react-bootstrap-icons';

/* IMPORT CUSTOM COMPONENTS */
import { setDone } from '../stores/TodoStore';

export default (props:any) => {
    return props.todo.done ?
    <div className="btn done-true text-primary" onClick={()=>setDone({...props.todo, done: !props.todo.done}) }><CheckCircleFill /></div>
    :
    <div className="btn done-false" onClick={()=>setDone({...props.todo, done: !props.todo.done}) }><Circle /></div>
}