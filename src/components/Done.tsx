//********************************************************************/
// This is the component that shows the checked/unchecked icon and
// calls the *setDone* action to activate the reducer and update the store
//********************************************************************/

/* IMPORT NODE MODULES AND THIRD PARTY COMPONENTS */
import { IconButton } from '@fluentui/react/lib/Button';

/* IMPORT CUSTOM COMPONENTS */
import { setDone } from '../stores/TodoStore';

export default (props:any) => {
    return props.todo.done ?
    <IconButton iconProps={{ iconName: 'SkypeCircleCheck' }} onClick={()=>setDone({...props.todo, done: !props.todo.done}) } />
    :
    <IconButton iconProps={{ iconName: 'CircleRing' }} onClick={()=>setDone({...props.todo, done: !props.todo.done}) } />
}